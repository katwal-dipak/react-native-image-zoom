import type { ImageProps, ImageSourcePropType } from 'react-native';

export type ImageZoomProps = Omit<ImageProps, 'source'> & {
  /**
   * The image's URI, which can be overridden by the `source` prop.
   * @default ''
   */
  uri?: string;
  /**
   * The minimum scale allowed for zooming.
   * @default 1
   */
  minScale?: number;
  /**
   * The maximum scale allowed for zooming.
   * @default 5
   */
  maxScale?: number;
  /* The value of the image scale when a double-tap gesture is detected.
   * @default 3
   */
  doubleTapScale?: number;
  /**
   * The minimum number of pointers required to enable panning.
   * @default 2
   */
  minPanPointers?: number;
  /**
   * The maximum number of pointers required to enable panning.
   * @default 2
   */
  maxPanPointers?: number;
  /**
   * Determines whether panning is enabled within the range of the minimum and maximum pan pointers.
   * @default true
   */
  isPanEnabled?: boolean;
  /**
   * Determines whether pinching is enabled.
   * @default true
   */
  isPinchEnabled?: boolean;
  /**
   * Determines whether to reset the zoom level and pan position when the image interaction ends.
   */
  isDoubleTapEnabled?: boolean;
  /**
   * A callback triggered when the image interaction starts.
   */
  onInteractionStart?: Function;
  /**
   * A callback triggered when the image interaction ends.
   */
  onInteractionEnd?: Function;
  /**
   * A callback triggered when the image pinching starts.
   */
  onPinchStart?: Function;
  /**
   * A callback triggered when the image pinching ends.
   */
  onPinchEnd?: Function;
  /**
   * A callback triggered when the image panning starts.
   */
  onPanStart?: Function;
  /**
   * A callback triggered when the image panning ends.
   */
  onPanEnd?: Function;
  /**
   * @see https://facebook.github.io/react-native/docs/image.html#source
   * @default undefined
   */
  source?: ImageSourcePropType;

  onSingleTap?: (scale: number | null | undefined) => void
  enableZoomInMode?:boolean
};

export type ImageZoomRef = {
  /**
   * Resets the image zoom level to its original scale.
   */
  reset(): void;
};

export type ImageZoomUseLayoutProps = Pick<ImageZoomProps, 'onLayout'>;

export type ImageZoomLayoutState = {
  /**
   * The x-coordinate of the top-left corner of the image relative to the top-left corner of the container.
   */
  x: number;
  /**
   * The y-coordinate of the top-left corner of the image relative to the top-left corner of the container.
   */
  y: number;
  /**
   * The width of the image.
   */
  width: number;
  /**
   * The height of the image.
   */
  height: number;
  /**
   * An object containing the x and y coordinates of the center point of the image, relative to the top-left corner of the container.
   */
  center: {
    /**
     * The x-coordinate of the center point of the image.
     */
    x: number;
    /**
     * The y-coordinate of the center point of the image.
     */
    y: number;
  };
};

export type ImageZoomUseGesturesProps = Pick<
  ImageZoomLayoutState,
  'width' | 'height' | 'center'
> &
  Pick<
    ImageZoomProps,
    | 'minScale'
    | 'maxScale'
    | 'doubleTapScale'
    | 'minPanPointers'
    | 'maxPanPointers'
    | 'isPanEnabled'
    | 'isPinchEnabled'
    | 'isDoubleTapEnabled'
    | 'onInteractionStart'
    | 'onInteractionEnd'
    | 'onPinchStart'
    | 'onPinchEnd'
    | 'onPanStart'
    | 'onPanEnd'
    |'onSingleTap'
    |'enableZoomInMode'
  >;
