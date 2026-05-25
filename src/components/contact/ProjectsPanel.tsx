"use client";

import { useEffect } from "react";
import { X, MapPin, ArrowUpRight } from "lucide-react";
import { Merriweather, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const projects = [
  {
    region: "Maharashtra",
    state: "Mumbai",
    title: "Coastal Prefab Warehousing",
    description:
      "Delivered a modular warehousing solution for a logistics park on the Mumbai coast, reducing on-site construction time by 60%.",
    year: "2023",
    value: "₹115 Cr",
  },
  {
    region: "Karnataka",
    state: "Bengaluru",
    title: "Affordable Modular Housing",
    description:
      "Built a cluster of prefabricated homes using sustainable materials for a rapid urban housing project in Bengaluru.",
    year: "2024",
    value: "₹72 Cr",
  },
  {
    region: "West Bengal",
    state: "Kolkata",
    title: "Healthcare Outreach Unit",
    description:
      "Developed mobile medical units for community healthcare outreach across Kolkata suburbs and remote districts.",
    year: "2023",
    value: "₹28 Cr",
  },
  {
    region: "Tamil Nadu",
    state: "Chennai",
    title: "Solar Control Room Pavilion",
    description:
      "Installed a prefab control room for a solar microgrid facility, enabling fast deployment and reliable operations.",
    year: "2024",
    value: "₹34 Cr",
  },
  {
    region: "Gujarat",
    state: "Ahmedabad",
    title: "Modular Office Campus",
    description:
      "Delivered a modern modular office campus for a technology services provider with flexible workspaces and rapid handover.",
    year: "2022",
    value: "₹95 Cr",
  },
  {
    region: "Telangana",
    state: "Hyderabad",
    title: "Industrial Lab Facility",
    description:
      "Created a prefabricated R&D lab campus for an industrial manufacturing client, with turnkey utilities pre-installed.",
    year: "2023",
    value: "₹48 Cr",
  },
  {
    region: "Rajasthan",
    state: "Jaipur",
    title: "Prefab School Campus",
    description:
      "Delivered a sustainable modular school campus with classrooms, labs, and administrative blocks for a rural education trust.",
    year: "2022",
    value: "₹22 Cr",
  },
  {
    region: "Punjab",
    state: "Ludhiana",
    title: "Portable Security Cabin Network",
    description:
      "Supplied and installed a network of portable security cabins across an industrial park, each with HVAC and security fit-outs.",
    year: "2023",
    value: "₹18 Cr",
  },
];

const regions = Array.from(new Set(projects.map((project) => project.region)));

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ProjectsPanel({ open, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ${
          open ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <div
        className={`${merri.className} fixed top-0 right-0 h-full z-50 w-full max-w-2xl bg-white flex flex-col shadow-2xl transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 py-7 border-b border-black/10">
          <div>
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#886c46] mb-2">
              Across the Nation
            </p>
            <h2 className={`${playfair.className} text-3xl font-bold text-black leading-tight`}>
              Our{" "}
              <span className="italic text-[#886c46]">landmark</span> projects
            </h2>
          </div>
          <button
            onClick={onClose}
            className="mt-1 w-9 h-9 flex items-center justify-center border border-black/15 hover:border-black hover:bg-black hover:text-white transition-all duration-200 shrink-0"
          >
            <X className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {regions.map((region) => {
            const regionProjects = projects.filter((p) => p.region === region);
            return (
              <div key={region} className="mb-10">
                {/* Region label */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 bg-[#886c46] shrink-0" />
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#886c46]">
                    {region} India
                  </p>
                  <div className="flex-1 h-px bg-black/8" />
                </div>

                <div className="flex flex-col gap-4">
                  {regionProjects.map((project) => (
                    <div
                      key={project.title}
                      className="group border border-black/10 hover:border-black transition-colors duration-200 p-5"
                    >
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#886c46] shrink-0" strokeWidth={2} />
                          <span className="text-[11px] font-medium tracking-wide text-[#886c46] uppercase">
                            {project.state}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[11px] text-black/40 font-light">
                            {project.year}
                          </span>
                          <span className={`${playfair.className} text-sm font-bold text-black`}>
                            {project.value}
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4 text-black/20 group-hover:text-[#886c46] transition-colors"
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`${playfair.className} text-lg font-bold text-black mb-2 leading-snug`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm font-light text-black/55 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-black/10 flex items-center justify-between">
          <p className={`${playfair.className} text-sm italic text-[#886c46]`}>
            Rooted in India. Ready for the world.
          </p>
          <span className="text-[11px] font-light text-black/40">
            {projects.length} projects listed
          </span>
        </div>
      </div>
    </>
  );
}