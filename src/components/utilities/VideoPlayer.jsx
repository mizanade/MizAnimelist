"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const { XCircle, HandDeposit } = require("@phosphor-icons/react");

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-secondary float-right px-3 mb-1 hover:text-color-dark"
        >
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo}
          opts={option}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button
      onClick={handleVideoPlayer}
      className="fixed bottom-5 right-5 w-40 text-xl font-medium bg-color-secondary hover:text-color-accent rounded-sm transition-all shadow-xl"
    >
      Tonton Trailer
    </button>
  );
};

export default VideoPlayer;
