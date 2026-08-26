/**
 * From 21st.dev — interactive rotating globe built on the `cobe` canvas renderer.
 *
 * NOTE: cobe v2 dropped the v1 `onRender` callback API — `createGlobe()` now paints
 * once and hands back `{ update, destroy }`, and the caller must drive its own
 * requestAnimationFrame loop calling `update({ phi })` to animate. This file owns
 * that loop directly instead of relying on an `onRender` option cobe no longer reads.
 */
import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: Omit<COBEOptions, "width" | "height"> = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0 / 255, 183 / 255, 73 / 255],
  glowColor: [0.85, 0.95, 0.88],
  markers: [],
};

const AUTO_ROTATE_SPEED = 0.005;

export function Globe({
  className,
  config,
}: {
  className?: string;
  config?: Omit<COBEOptions, "width" | "height">;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const dragRotationRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      dragRotationRef.current = delta / 200;
    }
  };

  useEffect(() => {
    let globe: ReturnType<typeof createGlobe> | null = null;
    let frameId = 0;
    let currentWidth = 0;
    let destroyed = false;

    const renderLoop = () => {
      if (!globe) return;
      // Auto-rotates continuously; while the pointer is held down and dragging,
      // rotation instead tracks the drag delta (hold-and-drag overrides auto-spin).
      if (pointerInteracting.current === null) phiRef.current += AUTO_ROTATE_SPEED;
      globe.update({
        phi: phiRef.current + dragRotationRef.current,
        width: currentWidth * 2,
        height: currentWidth * 2,
      });
      frameId = requestAnimationFrame(renderLoop);
    };

    const start = (initialWidth: number) => {
      if (destroyed || !canvasRef.current || initialWidth <= 0 || globe) return;
      currentWidth = initialWidth;
      globe = createGlobe(canvasRef.current, {
        ...GLOBE_CONFIG,
        ...config,
        width: initialWidth * 2,
        height: initialWidth * 2,
      });
      requestAnimationFrame(() => {
        if (canvasRef.current) canvasRef.current.style.opacity = "1";
      });
      frameId = requestAnimationFrame(renderLoop);
    };

    // ResizeObserver fires immediately with the real box size, avoiding the
    // classic "canvas measured at 0px on mount" race that a one-shot
    // `offsetWidth` read can hit before layout has settled.
    const observer = new ResizeObserver((entries) => {
      const box = entries[0]?.contentRect.width ?? 0;
      if (box <= 0) return;
      if (!globe) start(box);
      else currentWidth = box;
    });

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      destroyed = true;
      observer.disconnect();
      cancelAnimationFrame(frameId);
      globe?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrapperRef} className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className="size-full cursor-grab opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}
