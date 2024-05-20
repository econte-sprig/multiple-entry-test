export interface Module {
  name: string;
}

export const CLICK_LOGGER_NAME = 'click-logger';
export const MOUSE_LOGGER_NAME = 'mouse-logger';

export interface ClickLogger extends Module {
  name: typeof CLICK_LOGGER_NAME;
  attach: (elem: HTMLElement) => void;
}

export interface MouseLogger extends Module {
  name: typeof MOUSE_LOGGER_NAME;
  attach: (elem: HTMLElement) => void;
}
