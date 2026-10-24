import AboutSection from "../components/about-us/AboutSection";
import ImpactSection from "../components/impact/ImpactSection";
import Initiatives from "../components/initiatives/Initiatives";
import Testimonials from "../components/testimonials/Testimonials";
import Purpose from "../components/purpose/PurposeSection";
import { useEffect, useRef, useState } from "react";
import "../pages/home.css";

const heroSymbolPatches = [
  { centerX: 840, centerY: 477, radius: 32 },
  { centerX: 950, centerY: 477, radius: 49 },
  { centerX: 1060, centerY: 477, radius: 32 },
];

function Home() {
  const heroVideoRef = useRef(null);
  const heroPatchCanvasRef = useRef(null);
  const [heroVideoVisible, setHeroVideoVisible] = useState(false);

  useEffect(() => {
    const video = heroVideoRef.current;
    const canvas = heroPatchCanvasRef.current;
    const context = canvas?.getContext("2d");
    if (!video || !canvas || !context) return undefined;

    const patchBuffers = heroSymbolPatches.map(() => {
      const patchCanvas = document.createElement("canvas");
      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = 64;
      sampleCanvas.height = 64;
      return {
        canvas: patchCanvas,
        context: patchCanvas.getContext("2d"),
        sampleCanvas,
        sampleContext: sampleCanvas.getContext("2d", { willReadFrequently: true }),
      };
    });
    let videoFrame = null;
    let animationFrame = null;
    let playbackTimer = null;
    let playbackStartupScheduled = false;
    let isPlaybackStarted = false;
    let isDisposed = false;

    const scheduleDraw = () => {
      if (isDisposed || videoFrame !== null || animationFrame !== null) return;

      if (typeof video.requestVideoFrameCallback === "function") {
        videoFrame = video.requestVideoFrameCallback(drawPatches);
      } else {
        animationFrame = requestAnimationFrame(drawPatches);
      }
    };

    const drawPatches = () => {
      if (isDisposed) return;
      videoFrame = null;
      animationFrame = null;

      const bounds = video.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      const canvasWidth = Math.round(bounds.width * pixelRatio);
      const canvasHeight = Math.round(bounds.height * pixelRatio);

      if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, bounds.width, bounds.height);

      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA &&
          video.currentTime < 3.45 &&
          bounds.width > 0 &&
          bounds.height > 0) {
        const scale = Math.max(
          bounds.width / video.videoWidth,
          bounds.height / video.videoHeight
        );
        const sourceWidth = bounds.width / scale;
        const sourceHeight = bounds.height / scale;
        const sourceX = (video.videoWidth - sourceWidth) / 2;
        const sourceY = (video.videoHeight - sourceHeight) / 2;

        for (const [index, { centerX, centerY, radius }] of heroSymbolPatches.entries()) {
          const patchX = ((centerX - sourceX) / sourceWidth) * bounds.width;
          const patchY = ((centerY - sourceY) / sourceHeight) * bounds.height;
          const patchRadius = radius * scale;
          const {
          canvas: patchCanvas,
          context: patchContext,
          sampleCanvas,
          sampleContext,
          } = patchBuffers[index];
          if (!patchContext || !sampleContext) continue;

          const patchSize = Math.ceil(patchRadius * 2 * pixelRatio);
          if (patchCanvas.width !== patchSize || patchCanvas.height !== patchSize) {
          patchCanvas.width = patchSize;
          patchCanvas.height = patchSize;
          }

          const sampleRadius = radius * 1.7;
          sampleContext.drawImage(
          video,
          centerX - sampleRadius,
          centerY - sampleRadius,
          sampleRadius * 2,
          sampleRadius * 2,
          0,
          0,
          sampleCanvas.width,
          sampleCanvas.height
          );
          const sample = sampleContext.getImageData(
          0,
          0,
          sampleCanvas.width,
          sampleCanvas.height
          ).data;
          const quadrantColors = Array.from({ length: 4 }, () => ({
          red: 0,
          green: 0,
          blue: 0,
          samples: 0,
          }));
          const sampleCenter = sampleCanvas.width / 2;
          const innerRadius = sampleCenter * (radius / sampleRadius) * 1.05;
          const outerRadius = sampleCenter * (radius / sampleRadius) * 1.5;

          for (let y = 0; y < sampleCanvas.height; y += 1) {
          for (let x = 0; x < sampleCanvas.width; x += 1) {
            const distance = Math.hypot(x - sampleCenter, y - sampleCenter);
            if (distance < innerRadius || distance > outerRadius) continue;

            const pixel = (y * sampleCanvas.width + x) * 4;
            const quadrant = (y < sampleCenter ? 0 : 2) + (x < sampleCenter ? 0 : 1);
            const color = quadrantColors[quadrant];
            color.red += sample[pixel];
            color.green += sample[pixel + 1];
            color.blue += sample[pixel + 2];
            color.samples += 1;
          }
          }

          if (quadrantColors.some(({ samples }) => samples === 0)) continue;
          const averageColor = ({ red, green, blue, samples }) =>
          `rgb(${Math.round(red / samples)} ${Math.round(green / samples)} ${Math.round(blue / samples)})`;
          patchContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
          patchContext.clearRect(0, 0, patchRadius * 2, patchRadius * 2);
          patchContext.beginPath();
          patchContext.arc(patchRadius, patchRadius, patchRadius, 0, Math.PI * 2);
          const topGradient = patchContext.createLinearGradient(0, 0, 0, patchRadius * 2);
          topGradient.addColorStop(
          0,
          averageColor({
            red: quadrantColors[0].red + quadrantColors[1].red,
            green: quadrantColors[0].green + quadrantColors[1].green,
            blue: quadrantColors[0].blue + quadrantColors[1].blue,
            samples: quadrantColors[0].samples + quadrantColors[1].samples,
          })
          );
          topGradient.addColorStop(
          1,
          averageColor({
            red: quadrantColors[2].red + quadrantColors[3].red,
            green: quadrantColors[2].green + quadrantColors[3].green,
            blue: quadrantColors[2].blue + quadrantColors[3].blue,
            samples: quadrantColors[2].samples + quadrantColors[3].samples,
          })
          );
          patchContext.fillStyle = topGradient;
          patchContext.fill();
          const sideGradient = patchContext.createLinearGradient(0, 0, patchRadius * 2, 0);
          sideGradient.addColorStop(
          0,
          averageColor({
            red: quadrantColors[0].red + quadrantColors[2].red,
            green: quadrantColors[0].green + quadrantColors[2].green,
            blue: quadrantColors[0].blue + quadrantColors[2].blue,
            samples: quadrantColors[0].samples + quadrantColors[2].samples,
          })
          );
          sideGradient.addColorStop(
          1,
          averageColor({
            red: quadrantColors[1].red + quadrantColors[3].red,
            green: quadrantColors[1].green + quadrantColors[3].green,
            blue: quadrantColors[1].blue + quadrantColors[3].blue,
            samples: quadrantColors[1].samples + quadrantColors[3].samples,
          })
          );
          patchContext.globalAlpha = 0.5;
          patchContext.fillStyle = sideGradient;
          patchContext.fill();
          patchContext.globalAlpha = 1;
          patchContext.globalCompositeOperation = "destination-in";
          const feather = patchContext.createRadialGradient(
          patchRadius,
          patchRadius,
          patchRadius * 0.65,
            patchRadius,
            patchRadius,
            patchRadius
          );
          feather.addColorStop(0, "rgba(255, 255, 255, 1)");
          feather.addColorStop(0.82, "rgba(255, 255, 255, .72)");
          feather.addColorStop(0.94, "rgba(255, 255, 255, .28)");
          feather.addColorStop(1, "rgba(255, 255, 255, 0)");
          patchContext.fillStyle = feather;
          patchContext.fillRect(0, 0, patchRadius * 2, patchRadius * 2);
          patchContext.globalCompositeOperation = "source-over";
          context.drawImage(
            patchCanvas,
            patchX - patchRadius,
            patchY - patchRadius,
            patchRadius * 2,
            patchRadius * 2
          );
        }
      }

      if (isPlaybackStarted && video.currentTime < 3.45) scheduleDraw();
    };

    const resumePatchesWhenSymbolsReturn = () => {
      if (isPlaybackStarted && video.currentTime < 3.45) scheduleDraw();
    };

    const startPlaybackAfterPatchesLoad = () => {
      if (playbackStartupScheduled || isDisposed) return;
      playbackStartupScheduled = true;
      drawPatches();
      playbackTimer = window.setTimeout(() => {
        video.play().then(() => {
          isPlaybackStarted = true;
          setHeroVideoVisible(true);
          scheduleDraw();
        }).catch((error) => {
          console.error("Homepage video playback failed:", error);
        });
      }, 1000);
    };

    video.addEventListener("timeupdate", resumePatchesWhenSymbolsReturn);
    video.addEventListener("seeked", resumePatchesWhenSymbolsReturn);
    video.addEventListener("loadeddata", startPlaybackAfterPatchesLoad, { once: true });
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      startPlaybackAfterPatchesLoad();
    }
    return () => {
      isDisposed = true;
      if (playbackTimer !== null) window.clearTimeout(playbackTimer);
      video.removeEventListener("timeupdate", resumePatchesWhenSymbolsReturn);
      video.removeEventListener("seeked", resumePatchesWhenSymbolsReturn);
      video.removeEventListener("loadeddata", startPlaybackAfterPatchesLoad);
      video.pause();
      if (videoFrame !== null && typeof video.cancelVideoFrameCallback === "function") {
        video.cancelVideoFrameCallback(videoFrame);
      }
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div>
      
      {/* HERO SECTION */}
      <section className={`hero${heroVideoVisible ? " is-playing" : ""}`}>

        <video
          ref={heroVideoRef}
          src="/videos/homepage.mp4"
          title="Aikya Vidya homepage video"
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        />

        <canvas
          ref={heroPatchCanvasRef}
          className="hero-symbol-patches"
          aria-hidden="true"
        />

</section>
    <AboutSection />
    <ImpactSection />
    <Initiatives />
    <Purpose />
    <Testimonials />
    </div>
  );
}

export default Home;