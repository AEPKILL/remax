import * as React from 'react';
import factory from './factory';

export interface MovableAreaProps {
  readonly dataset?: DOMStringMap;
  style?: React.CSSProperties;
  width: number;
  height: number;
}

const MovableArea = factory<MovableAreaProps>('movable-area');

export default MovableArea;
