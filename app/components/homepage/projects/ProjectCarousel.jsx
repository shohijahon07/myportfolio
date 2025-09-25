"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./project-card";

export default function ProjectCarousel({ projects }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = current.clientWidth * 0.9;

    direction === "left"
      ? (current.scrollLeft -= scrollAmount)
      : (current.scrollLeft += scrollAmount);
  };

  return (
    <div className="relative pt-20">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white"
      >
        <ChevronRight />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-4 scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {projects.slice(0, 18).map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-sm snap-start shrink-0"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
