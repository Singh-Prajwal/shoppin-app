// src/components/SwipeableCard.tsx
import React, { ReactNode } from "react";
import { animated, SpringValue } from "@react-spring/web";

type Props = {
  children: ReactNode;
  style: {
    x: SpringValue<number>;
    y: SpringValue<number>;
    rotateZ: SpringValue<number>;
    scale: SpringValue<number>;
  };
  bind: () => any;
  className?: string;
};

const SwipeableCard: React.FC<Props> = ({
  children,
  style,
  bind,
  className,
}) => {
  return (
    <animated.div
      {...bind()}
      className={`absolute w-full max-w-sm p-4 bg-white rounded-2xl shadow-xl cursor-grab touch-none select-none ${
        className || ""
      }`}
      style={{
        transform: style.x.to(
          (x) =>
            `translate3d(${x}px, ${style.y.get()}px, 0) rotateZ(${style.rotateZ.get()}deg) scale(${style.scale.get()})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
};

export default SwipeableCard;
