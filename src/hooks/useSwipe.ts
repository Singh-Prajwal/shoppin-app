// src/hooks/useSwipe.ts
import { useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useState } from "react";

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rotateZ: 0,
  delay: i * 100,
});

const from = () => ({
  x: 0,
  y: 1000,
  scale: 1.5,
  rotateZ: 0,
});

const useSwipe = (
  cardsCount: number,
  onSwipe?: (dir: "left" | "right" | "up" | null, index: number) => void
) => {
  const [gone] = useState(() => new Set<number>());

  const [springs, api] = useSprings(cardsCount, (i) => ({
    ...to(i),
    from: from(),
  }));

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity,
    }) => {
      const trigger = Math.hypot(mx, my) > 100 && Math.hypot(...velocity) > 0.2;
      let dir: "left" | "right" | "up" | null = null;

      if (!down && trigger) {
        if (Math.abs(yDir) > Math.abs(xDir) && yDir < 0) {
          dir = "up";
        } else {
          dir = xDir < 0 ? "left" : "right";
        }

        gone.add(index);
        onSwipe?.(dir, index);
      }

      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);

        let x = down ? mx : 0;
        let y = down ? my : 0;

        if (isGone) {
          if (dir === "left") x = -window.innerWidth * 1.5;
          if (dir === "right") x = window.innerWidth * 1.5;
          if (dir === "up") y = -window.innerHeight * 1.5;
        }

        return {
          x,
          y,
          scale: down ? 1.1 : 1,
          rotateZ: mx / 100,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === cardsCount) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
      }
    }
  );

  return { springs, bind };
};

export default useSwipe;
