"use client";

import { useEffect, useState } from "react";
import type { MediaItem } from "../data/projects";

export function MediaGallery({ items, className = "" }: { items: MediaItem[]; className?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const active = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight" && items.length > 1) setActiveIndex((current) => current === null ? 0 : (current + 1) % items.length);
      if (event.key === "ArrowLeft" && items.length > 1) setActiveIndex((current) => current === null ? 0 : (current - 1 + items.length) % items.length);
    };
    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, items.length]);

  const open = (index: number) => {
    setZoom(1);
    setActiveIndex(index);
  };

  return (
    <>
      <div className={`media-gallery ${className}`} data-reveal>
        {items.map((item, index) => (
          <figure key={`${item.src}-${index}`}>
            <button type="button" onClick={() => open(index)} aria-label={`放大查看：${item.title}`}>
              <img src={item.src} alt={item.alt} loading="lazy" width={item.width} height={item.height} />
              <span className="zoom-hint">Open full image ↗</span>
            </button>
            {(item.title || item.caption) && <figcaption><b>{item.title}</b>{item.caption && <span>{item.caption}</span>}</figcaption>}
          </figure>
        ))}
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActiveIndex(null)}>
          <div className="lightbox-toolbar" onClick={(event) => event.stopPropagation()}>
            <div><b>{active.title}</b><span>{active.caption}</span></div>
            <div className="lightbox-actions">
              <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))} aria-label="缩小">−</button>
              <span>{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.25))} aria-label="放大">＋</button>
              <button type="button" onClick={() => setActiveIndex(null)} aria-label="关闭">×</button>
            </div>
          </div>
          <div className="lightbox-canvas" onClick={(event) => event.stopPropagation()}>
            <img src={active.src} alt={active.alt} style={{ width: `${zoom * 100}%` }} />
          </div>
          {items.length > 1 && <div className="lightbox-pagination" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => { setZoom(1); setActiveIndex((activeIndex! - 1 + items.length) % items.length); }}>← Previous</button>
            <span>{activeIndex! + 1} / {items.length}</span>
            <button type="button" onClick={() => { setZoom(1); setActiveIndex((activeIndex! + 1) % items.length); }}>Next →</button>
          </div>}
        </div>
      )}
    </>
  );
}
