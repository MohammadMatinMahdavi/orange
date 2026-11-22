"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/videos/project-01.mp4";
const PLAYBACK_RATE = 0.72;

export default function HeroBackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      video.playbackRate = PLAYBACK_RATE;

      if (motionPreference.matches) {
        video.pause();
        return;
      }

      const playback = video.play();
      if (playback && typeof playback.catch === "function") {
        playback.catch(() => {});
      }
    };

    video.addEventListener("loadedmetadata", syncPlayback);
    syncPlayback();
    motionPreference.addEventListener?.("change", syncPlayback);

    return () => {
      video.removeEventListener("loadedmetadata", syncPlayback);
      motionPreference.removeEventListener?.("change", syncPlayback);
    };
  }, []);

  return (
    <div className="hero-background-video" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-background-video-media"
        src={VIDEO_SRC}
        muted
        loop
        autoPlay
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        preload="metadata"
        tabIndex={-1}
      />
      <div className="hero-background-video-overlay" />
    </div>
  );
}
