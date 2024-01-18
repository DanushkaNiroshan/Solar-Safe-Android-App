import React from 'react';
import { Svg, Rect } from 'react-native-svg';
// import BatterySVG from './BatterySVG';

const BatterySVG = ({ batteryLevel }) => {
  const batteryWidth = 100;
  const batteryHeight = 50;
  const batteryBorderRadius = 5;

  const batteryFill = batteryLevel > 0.2 ? 'green' : 'red';

  const batteryFillWidth = batteryWidth * batteryLevel;

  return (
    <Svg width={batteryWidth} height={batteryHeight }>
      {/* Battery outline */}
      <Rect
        x="0"
        y="0"
        width={batteryWidth}
        height={batteryHeight}
        rx={batteryBorderRadius}
        ry={batteryBorderRadius}
        fill="none"
        stroke="black"
        strokeWidth={2}
      />
      {/* Battery level */}
      <Rect
        x="2"
        y="2"
        width={batteryFillWidth - 5}
        height={batteryHeight - 5}
        rx={batteryBorderRadius - 3}
        ry={batteryBorderRadius - 2}
        fill={batteryFill}
      />
    </Svg>
  );
};

export default BatterySVG;
