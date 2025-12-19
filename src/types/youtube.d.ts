interface YTPlayerOptions {
  videoId: string;
  playerVars?: {
    controls?: number;
    modestbranding?: number;
    rel?: number;
    showinfo?: number;
    fs?: number;
    iv_load_policy?: number;
    disablekb?: number;
    playsinline?: number;
    autoplay?: number;
  };
  events?: {
    onReady?: () => void;
    onStateChange?: (event: YT.OnStateChangeEvent) => void;
  };
}

declare namespace YT {
  class Player {
    constructor(elementId: string, options: YTPlayerOptions);
    playVideo(): void;
    pauseVideo(): void;
    stopVideo(): void;
    getPlayerState(): number;
    destroy(): void;
  }

  interface OnStateChangeEvent {
    data: number;
    target: Player;
  }

  const PlayerState: {
    UNSTARTED: -1;
    ENDED: 0;
    PLAYING: 1;
    PAUSED: 2;
    BUFFERING: 3;
    CUED: 5;
  };
}

interface Window {
  YT: typeof YT;
  onYouTubeIframeAPIReady: () => void;
}
