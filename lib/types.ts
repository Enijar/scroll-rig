export type State = {
  maxScroll: {
    x: number;
    y: number;
  };
  wrapperSize: {
    width: number;
    height: number;
  };
  progress: {
    x: number;
    y: number;
  };
  thumbDown: boolean;
  thumbOffsetX: number;
  thumbOffsetY: number;
  thumbStartX: number;
  thumbStartY: number;
  thumbLastX: number;
  thumbLastY: number;
  thumbCurrentX: number;
  thumbCurrentY: number;
};

export type Touch = {
  down: boolean;
  lastX: number;
  lastY: number;
  currentX: number;
  currentY: number;
};

export type Props = {
  children?: any;
  native?: boolean;
  scrollBarSize?: string;
  style?: object;
};