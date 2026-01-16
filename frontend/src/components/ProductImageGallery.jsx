import { useState } from "react";

// Simple carousel/zoom gallery for demo; replace with a library for production
export default function ProductImageGallery({ images = [], alt }) {
  const [current, setCurrent] = useState(0);
  if (!images.length) return null;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full aspect-video bg-base-200 rounded-xl overflow-hidden group">
        <img
          src={images[current]}
          alt={alt}
          className="object-contain w-full h-full transition-transform duration-200 group-hover:scale-105 cursor-zoom-in"
          onClick={() => window.open(images[current], "_blank")}
        />
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-xs opacity-70 hover:opacity-100"
              onClick={e => { e.stopPropagation(); setCurrent((current - 1 + images.length) % images.length); }}
              aria-label="Previous image"
            >
              ❮
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-xs opacity-70 hover:opacity-100"
              onClick={e => { e.stopPropagation(); setCurrent((current + 1) % images.length); }}
              aria-label="Next image"
            >
              ❯
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 mt-2">
          {images.map((img, i) => (
            <button
              key={img}
              className={`w-8 h-8 rounded-lg border-2 ${i === current ? "border-primary" : "border-base-200"}`}
              onClick={() => setCurrent(i)}
            >
              <img src={img} alt="thumb" className="object-cover w-full h-full rounded" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
