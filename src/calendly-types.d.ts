declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement?: HTMLElement;
        prefill?: Record<string, string>;
      }) => void;
      initPopupWidget: (options: { url: string; prefill?: Record<string, string> }) => void;
    };
  }
}

export {};
