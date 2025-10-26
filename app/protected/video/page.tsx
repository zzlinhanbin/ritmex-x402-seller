'use client';

import { useEffect, useRef } from 'react';

export default function VideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        // muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
    </div>
  );
}
