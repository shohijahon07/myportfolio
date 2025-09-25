"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full cursor-pointer hover:scale-[1.015] transition-transform duration-300"
        onClick={openModal}
      >
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        {/* Project Image */}
        <div className="p-4">
          <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
            <Image
              src={project.image || "/placeholder.svg?height=200&width=400"}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Project Title */}
          <h3 className="text-[#ff61ea] text-xl font-semibold mb-2 line-clamp-1">
            {project.name}
          </h3>

          {/* Short Description */}
          <p className="text-gray-300 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Tools Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tools.slice(0, 3).map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-pink-500/20 to-violet-600/20 text-amber-300 text-xs rounded-full border border-pink-500/30"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-2 py-1 bg-gradient-to-r from-pink-500/20 to-violet-600/20 text-gray-400 text-xs rounded-full border border-pink-500/30">
                +{project.tools.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full max-w-6xl max-h-[90vh] overflow-y-auto modal-scrollbar"
          >
            {/* Modal Header */}
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>

            <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
              <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
                <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
                <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-center ml-3 text-[#ff61ea] text-base lg:text-xl">
                {project.name}
              </p>
              <button
                onClick={closeModal}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-hidden border-t-[2px] border-indigo-900">
              <div className="flex flex-col lg:flex-row min-h-[500px]">
                {/* Left Side - Project Image */}
                <div className="lg:w-1/2 p-4 lg:p-8">
                  <div className="relative  w-full h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={
                        project.image || "/placeholder.svg?height=500&width=700"
                      }
                      alt={project.name}
                      fill
                      className="object-scale-down"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>

                {/* Right Side - Project Details */}
                <div className="lg:w-1/2 p-6 lg:p-10 border-l-0 lg:border-l-2 lg:border-indigo-900 flex flex-col">
                  {/* Project Title */}
                  <div className="mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#ff61ea] mb-2">
                      {project.name}
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full"></div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gradient-to-r from-pink-500/10 to-violet-600/10 text-amber-300 text-sm rounded-lg border border-pink-500/20 hover:border-pink-500/40 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  {project.features && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-300 text-sm lg:text-base"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-auto pt-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-[1.04]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.code && (
                        <Link
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                          <span>Source Code</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
