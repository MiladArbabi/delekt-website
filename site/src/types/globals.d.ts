export {};

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: {
        callback?: () => void;
        props?: Record<string, string | number | boolean | null>;
      }
    ) => void;
  }
}