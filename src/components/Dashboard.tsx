"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Briefcase,
  FileText,
  Package,
  ChevronRight,
  ChevronDown,
  Palette,
  Layers,
  Sofa,
  Sun,
  Wind,
  Zap,
  Check,
  RotateCcw,
  Download,
  Share2,
} from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Product {
  name: string;
  image: string;
}

interface CategoryData {
  icon: React.ElementType;
  description: string;
  longDescription: string;
  products: Product[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const productsData: Record<string, CategoryData> = {
  "Wooden Series": {
    icon: Home,
    description: "Luxury modular wooden structures",
    longDescription:
      "Our Wooden Series represents the finest in sustainable modular architecture. Each structure is crafted from responsibly sourced timber, precision-engineered for structural integrity while preserving the warmth and character of natural wood.",
    products: [
      { name: "A-Frame Cabin", image: "/products/woodenseries/aframe/a-frame-hero-img.png" },
      { name: "Arc Pod", image: "/products/woodenseries/arcpod/arc-pod-main.jpg" },
      { name: "Wooden House", image: "/products/woodenseries/wooden/wooden-house-main.jpg" },
      { name: "Smart House", image: "/products/woodenseries/smart/main.png" },
    ],
  },
  "Portable Solutions": {
    icon: Building2,
    description: "Quick-deploy site & temporary facilities",
    longDescription:
      "Designed for speed without sacrifice — operational within hours of delivery, built for demanding site conditions.",
    products: [
      { name: "Porta Cabin", image: "/products/portable/porta-cabin/main.webp" },
      { name: "Farmhouse", image: "/products/portable/farmhouse/farmhouse-night-1.jpg" },
      { name: "Portable Cabin", image: "/products/portable/office/main.webp" },
      { name: "Bunk House Cabin", image: "/products/portable/bunkhouse/main.webp" },
      { name: "Containers House", image: "/products/portable/container/main.webp" },
      { name: "Modular Toilet", image: "/products/portable/modular-toilet/modular-toilet.png" },
      { name: "Mobile Toilet", image: "/products/portable/mobile-toilet/mobile-main.webp" },
      { name: "Portable Toilet Cabin", image: "/products/portable/portable-toilet/pt-2.jpg" },
    ],
  },
  "Prefab Solutions": {
    icon: Factory,
    description: "Precision prefab for residential & commercial",
    longDescription:
      "Factory precision with on-site flexibility — every component manufactured under controlled conditions, ensuring consistent quality.",
    products: [
      { name: "Prefab Site Offices", image: "/products/prefab/site-office/main.webp" },
      { name: "Prefab Structures", image: "/products/prefab/structures/main.webp" },
      { name: "Prefabricated Accommodation", image: "/products/prefab/accomodation/main.webp" },
      { name: "Prefab House", image: "/products/prefab/house/main.webp" },
      { name: "Prefab Schools", image: "/products/prefab/school/main.webp" },
    ],
  },
  "Specialized Structures": {
    icon: Briefcase,
    description: "Custom facilities for commercial applications",
    longDescription:
      "Purpose-engineered for specific commercial environments — from hygienic clinical cabins to controlled smoking enclosures.",
    products: [
      { name: "Clinic Cabin", image: "/products/special/clinic/main.webp" },
      { name: "Restaurant Cabin", image: "/products/special/restaurant/main.webp" },
      { name: "Smoking Room", image: "/products/special/smoking/main.webp" },
      { name: "Electrical Room", image: "/products/special/electric/main-1.webp" },
    ],
  },
  "Security Solutions": {
    icon: FileText,
    description: "Purpose-built security & monitoring structures",
    longDescription:
      "Robust, tamper-resistant structures for round-the-clock operation — guard posts, toll booths, ATM enclosures.",
    products: [
      { name: "Security Cabins", image: "/products/security/security-cabin/security-cabin-ai.png" },
      { name: "Toll Booth", image: "/products/security/toll-booth/toll.png" },
      { name: "ATM Cabin", image: "/products/security/atm/atm.png" },
    ],
  },
  "PUF Insulated Cabin": {
    icon: Package,
    description: "Thermally efficient cabins for extreme conditions",
    longDescription:
      "Polyurethane foam core panels deliver industry-leading thermal resistance — the first choice for control rooms and clean-room environments.",
    products: [
      { name: "Control Room", image: "/products/puf/control/main.webp" },
      { name: "Solar Control Room", image: "/products/puf/solar-room/main.webp" },
      { name: "Clean Room", image: "/products/puf/clean/clean.webp" },
    ],
  },
};

// ─── Config Options ──────────────────────────────────────────────────────────

const exteriorColors = [
  { label: "Charcoal", hex: "#2C2C2C" },
  { label: "Slate Grey", hex: "#6B7280" },
  { label: "Warm Ivory", hex: "#F5F0E8" },
  { label: "Warm White", hex: "#FAFAF8" },
  { label: "Sand", hex: "#C8B89A" },
  { label: "Forest", hex: "#3D5A40" },
  { label: "Deep Navy", hex: "#1A2744" },
  { label: "Terracotta", hex: "#C0674A" },
];

const interiorColors = [
  { label: "Linen White", hex: "#FAFAF7" },
  { label: "Warm Greige", hex: "#D4C9B8" },
  { label: "Stone", hex: "#9E9589" },
  { label: "Ash", hex: "#E8E4DE" },
  { label: "Dusk", hex: "#8B9AAB" },
  { label: "Birch", hex: "#DDD3BF" },
  { label: "Espresso", hex: "#3D2B1F" },
  { label: "Chalk", hex: "#EDEDEA" },
];

const exteriorMaterials = [
  { label: "Treated Pine", tag: "WOOD" },
  { label: "Corten Steel", tag: "METAL" },
  { label: "Fibre Cement", tag: "COMPOSITE" },
  { label: "Aluminium Cladding", tag: "METAL" },
  { label: "PUF Panel", tag: "INSULATED" },
  { label: "UPVC", tag: "POLYMER" },
];

const interiorMaterials = [
  { label: "Birch Plywood", tag: "WOOD" },
  { label: "Gypsum Board", tag: "DRY WALL" },
  { label: "MDF Panel", tag: "ENGINEERED" },
  { label: "GI Sheet Lined", tag: "METAL" },
  { label: "Vinyl Wrap", tag: "POLYMER" },
];

const furniturePackages = [
  { label: "Base Package", desc: "Essential workspace fixtures" },
  { label: "Office Package", desc: "Desk, chairs, shelving" },
  { label: "Residential Package", desc: "Kitchen, bed, storage" },
  { label: "Site Office Package", desc: "Workstation + meeting" },
  { label: "Medical Package", desc: "Clinical-grade fittings" },
  { label: "None", desc: "Unfurnished shell" },
];

const roofTypes = [
  { label: "Flat Roof", tag: "STANDARD" },
  { label: "Sloped / Lean-to", tag: "DRAINAGE" },
  { label: "A-Frame Pitched", tag: "AESTHETIC" },
  { label: "Green Roof", tag: "ECO" },
];

const glazingOptions = [
  { label: "Standard Single", tag: "BASIC" },
  { label: "Double Glazed", tag: "THERMAL" },
  { label: "Tinted Glass", tag: "PRIVACY" },
  { label: "No Windows", tag: "SECURE" },
];

const addOns = [
  { label: "Solar Panels", icon: Sun },
  { label: "HVAC System", icon: Wind },
  { label: "Electrical Package", icon: Zap },
  { label: "Security System", icon: FileText },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ColorSwatch({
  color,
  selected,
  onClick,
}: {
  color: { label: string; hex: string };
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={color.label}
      className="relative w-8 h-8 rounded-sm transition-transform hover:scale-110"
      style={{ backgroundColor: color.hex }}
    >
      {selected && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Check
            size={12}
            style={{
              color: parseInt(color.hex.slice(1), 16) > 0x888888 ? "#000" : "#fff",
            }}
          />
        </motion.span>
      )}
      {selected && (
        <span
          className="absolute -inset-0.5 rounded-sm pointer-events-none"
          style={{ outline: "1.5px solid #886C46" }}
        />
      )}
    </button>
  );
}

function MaterialButton({
  label,
  tag,
  selected,
  onClick,
}: {
  label: string;
  tag: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm border text-left transition-colors ${
        selected
          ? "border-[#886C46] bg-[#886C46]/8 text-white"
          : "border-[#2E2E2E] bg-[#252525] text-[#A0A0A0] hover:border-[#3E3E3E] hover:text-white"
      }`}
    >
      <span className="text-xs font-medium">{label}</span>
      <span
        className={`text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded-sm ${
          selected ? "text-[#886C46]" : "text-[#555]"
        }`}
      >
        {tag}
      </span>
    </button>
  );
}

function AddOnToggle({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ElementType;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-sm border w-full text-left transition-colors ${
        active
          ? "border-[#886C46] bg-[#886C46]/8 text-white"
          : "border-[#2E2E2E] bg-[#252525] text-[#A0A0A0] hover:border-[#3E3E3E] hover:text-white"
      }`}
    >
      <Icon
        size={14}
        className={active ? "text-[#886C46]" : "text-[#555]"}
      />
      <span className="text-xs font-medium">{label}</span>
      <div
        className={`ml-auto w-3.5 h-3.5 rounded-sm border flex items-center justify-center transition-colors ${
          active ? "border-[#886C46] bg-[#886C46]" : "border-[#3E3E3E]"
        }`}
      >
        {active && <Check size={8} className="text-black" />}
      </div>
    </button>
  );
}

function ConfigSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-4 border-b border-[#2E2E2E] last:border-none">
      <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#555] mb-3">
        {title}
      </p>
      {children}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Dashboard() {
  const categories = Object.keys(productsData);

  const [expandedCategory, setExpandedCategory] = useState<string>(categories[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    productsData[categories[0]].products[0]
  );

  // Config state
  const [extColor, setExtColor] = useState(0);
  const [intColor, setIntColor] = useState(0);
  const [extMaterial, setExtMaterial] = useState(0);
  const [intMaterial, setIntMaterial] = useState(0);
  const [furniture, setFurniture] = useState(0);
  const [roof, setRoof] = useState(0);
  const [glazing, setGlazing] = useState(1);
  const [activeAddOns, setActiveAddOns] = useState<Set<string>>(new Set());

  const toggleAddOn = (label: string) => {
    setActiveAddOns((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  const handleCategoryToggle = (cat: string) => {
    setExpandedCategory((prev) => (prev === cat ? "" : cat));
  };

  return (
    <div
      className="flex h-screen w-screen overflow-hidden"
      style={{
        background: "#0F0F0F",
        fontFamily: "'Inter', 'Space Grotesk', sans-serif",
        color: "#FFFFFF",
      }}
    >
      {/* ── LEFT PANEL: Model Browser ─────────────────────────────────── */}
      <aside
        className="flex flex-col border-r border-[#2E2E2E] overflow-hidden"
        style={{ width: "240px", minWidth: "240px" }}
      >
        {/* Header */}
        <div className="px-4 pt-5 pb-4 border-b border-[#2E2E2E]">
          <p className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#555] mb-1">
            Texo Prefab World
          </p>
          <h1 className="text-sm font-semibold text-white leading-tight">
            Model Browser
          </h1>
        </div>

        {/* Category list */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat) => {
            const data = productsData[cat];
            const Icon = data.icon;
            const isExpanded = expandedCategory === cat;
            const isActive =
              isExpanded &&
              data.products.some((p) => p.name === selectedProduct.name);

            return (
              <div key={cat} className="border-b border-[#1A1A1A]">
                {/* Category row */}
                <button
                  onClick={() => handleCategoryToggle(cat)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[#1A1A1A] ${
                    isActive ? "bg-[#1A1A1A]" : ""
                  }`}
                  style={
                    isActive
                      ? { borderLeft: "2px solid #886C46", paddingLeft: "14px" }
                      : { borderLeft: "2px solid transparent", paddingLeft: "14px" }
                  }
                >
                  <Icon
                    size={14}
                    className={isActive ? "text-[#886C46]" : "text-[#555]"}
                  />
                  <span
                    className={`flex-1 text-xs font-medium leading-tight ${
                      isActive ? "text-white" : "text-[#A0A0A0]"
                    }`}
                  >
                    {cat}
                  </span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <ChevronRight size={12} className="text-[#444]" />
                  </motion.span>
                </button>

                {/* Products grid */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-3 pb-3 pt-1 grid grid-cols-2 gap-1.5">
                        {data.products.map((product) => {
                          const isSelected =
                            selectedProduct.name === product.name;
                          return (
                            <button
                              key={product.name}
                              onClick={() => setSelectedProduct(product)}
                              className={`relative rounded-sm overflow-hidden aspect-square border transition-colors ${
                                isSelected
                                  ? "border-[#886C46]"
                                  : "border-[#2A2A2A] hover:border-[#3A3A3A]"
                              }`}
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%23252525'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23444' font-size='9' font-family='monospace'%3ENO IMG%3C/text%3E%3C/svg%3E";
                                }}
                              />
                              {/* Name overlay */}
                              <div className="absolute bottom-0 left-0 right-0 px-1.5 py-1"
                                style={{ background: "rgba(0,0,0,0.72)" }}
                              >
                                <p className="text-[8px] text-white leading-tight truncate">
                                  {product.name}
                                </p>
                              </div>
                              {isSelected && (
                                <div className="absolute top-1 right-1 w-3 h-3 rounded-sm bg-[#886C46] flex items-center justify-center">
                                  <Check size={7} className="text-black" />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </aside>

      {/* ── CENTER: Model Viewer ───────────────────────────────────────── */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-6 py-3 border-b border-[#2E2E2E]"
          style={{ minHeight: "52px" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#555]">
              Viewing
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={selectedProduct.name}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="text-sm font-semibold text-white"
              >
                {selectedProduct.name}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-[#A0A0A0] border border-[#2E2E2E] rounded-sm hover:text-white hover:border-[#3E3E3E] transition-colors"
              title="Reset configuration"
            >
              <RotateCcw size={11} />
              Reset
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-[#A0A0A0] border border-[#2E2E2E] rounded-sm hover:text-white hover:border-[#3E3E3E] transition-colors"
              title="Share configuration"
            >
              <Share2 size={11} />
              Share
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] bg-[#886C46] text-white rounded-sm hover:bg-[#9A7A54] transition-colors font-medium"
              title="Export configuration"
            >
              <Download size={11} />
              Export Config
            </button>
          </div>
        </div>

        {/* 3D Viewer area */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.name}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center px-10 py-8"
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-w-full max-h-full object-contain rounded-sm"
                style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.6)" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='400'%3E%3Crect width='640' height='400' fill='%231A1A1A'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23333' font-size='14' font-family='monospace'%3E3D Model Placeholder%3C/text%3E%3C/svg%3E";
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Corner labels */}
          <div className="absolute bottom-4 left-6 text-[9px] font-mono text-[#333] tracking-widest">
            3D CONFIGURATOR / INTERACTIVE MODEL
          </div>
          <div className="absolute bottom-4 right-6 text-[9px] font-mono text-[#333] tracking-widest">
            TEXO PREFAB WORLD
          </div>
        </div>

        {/* Config summary strip */}
        <div className="px-6 py-3 border-t border-[#2E2E2E] flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-[#444] uppercase tracking-wider">Ext. Color</span>
            <div
              className="w-4 h-4 rounded-sm border border-[#2E2E2E]"
              style={{ backgroundColor: exteriorColors[extColor].hex }}
            />
            <span className="text-[10px] text-[#666]">{exteriorColors[extColor].label}</span>
          </div>
          <div className="w-px h-4 bg-[#2E2E2E]" />
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-[#444] uppercase tracking-wider">Ext. Material</span>
            <span className="text-[10px] text-[#666]">{exteriorMaterials[extMaterial].label}</span>
          </div>
          <div className="w-px h-4 bg-[#2E2E2E]" />
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-[#444] uppercase tracking-wider">Furniture</span>
            <span className="text-[10px] text-[#666]">{furniturePackages[furniture].label}</span>
          </div>
          <div className="w-px h-4 bg-[#2E2E2E]" />
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-[#444] uppercase tracking-wider">Add-ons</span>
            <span className="text-[10px] text-[#666]">
              {activeAddOns.size > 0 ? `${activeAddOns.size} selected` : "None"}
            </span>
          </div>
        </div>
      </main>

      {/* ── RIGHT PANEL: Configurator ──────────────────────────────────── */}
      <aside
        className="flex flex-col border-l border-[#2E2E2E] overflow-hidden"
        style={{ width: "260px", minWidth: "260px" }}
      >
        {/* Header */}
        <div className="px-4 pt-5 pb-4 border-b border-[#2E2E2E]">
          <p className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#555] mb-1">
            Configuration
          </p>
          <h2 className="text-sm font-semibold text-white leading-tight">
            Customize
          </h2>
        </div>

        {/* Scrollable config sections */}
        <div className="flex-1 overflow-y-auto px-4" style={{ scrollbarWidth: "none" }}>

          {/* Exterior Colors */}
          <ConfigSection title="Exterior Color">
            <div className="flex flex-wrap gap-2">
              {exteriorColors.map((c, i) => (
                <ColorSwatch
                  key={c.label}
                  color={c}
                  selected={extColor === i}
                  onClick={() => setExtColor(i)}
                />
              ))}
            </div>
            <p className="text-[10px] text-[#555] mt-2">
              Selected: <span className="text-[#A0A0A0]">{exteriorColors[extColor].label}</span>
            </p>
          </ConfigSection>

          {/* Interior Colors */}
          <ConfigSection title="Interior Color">
            <div className="flex flex-wrap gap-2">
              {interiorColors.map((c, i) => (
                <ColorSwatch
                  key={c.label}
                  color={c}
                  selected={intColor === i}
                  onClick={() => setIntColor(i)}
                />
              ))}
            </div>
            <p className="text-[10px] text-[#555] mt-2">
              Selected: <span className="text-[#A0A0A0]">{interiorColors[intColor].label}</span>
            </p>
          </ConfigSection>

          {/* Exterior Material */}
          <ConfigSection title="Exterior Material">
            <div className="flex flex-col gap-1.5">
              {exteriorMaterials.map((m, i) => (
                <MaterialButton
                  key={m.label}
                  label={m.label}
                  tag={m.tag}
                  selected={extMaterial === i}
                  onClick={() => setExtMaterial(i)}
                />
              ))}
            </div>
          </ConfigSection>

          {/* Interior Material */}
          <ConfigSection title="Interior Material">
            <div className="flex flex-col gap-1.5">
              {interiorMaterials.map((m, i) => (
                <MaterialButton
                  key={m.label}
                  label={m.label}
                  tag={m.tag}
                  selected={intMaterial === i}
                  onClick={() => setIntMaterial(i)}
                />
              ))}
            </div>
          </ConfigSection>

          {/* Furniture Package */}
          <ConfigSection title="Furniture Package">
            <div className="flex flex-col gap-1.5">
              {furniturePackages.map((f, i) => (
                <button
                  key={f.label}
                  onClick={() => setFurniture(i)}
                  className={`w-full flex flex-col px-3 py-2.5 rounded-sm border text-left transition-colors ${
                    furniture === i
                      ? "border-[#886C46] bg-[#886C46]/8"
                      : "border-[#2E2E2E] bg-[#252525] hover:border-[#3E3E3E]"
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      furniture === i ? "text-white" : "text-[#A0A0A0]"
                    }`}
                  >
                    {f.label}
                  </span>
                  <span className="text-[10px] text-[#555] mt-0.5">{f.desc}</span>
                </button>
              ))}
            </div>
          </ConfigSection>

          {/* Roof Type */}
          <ConfigSection title="Roof Type">
            <div className="flex flex-col gap-1.5">
              {roofTypes.map((r, i) => (
                <MaterialButton
                  key={r.label}
                  label={r.label}
                  tag={r.tag}
                  selected={roof === i}
                  onClick={() => setRoof(i)}
                />
              ))}
            </div>
          </ConfigSection>

          {/* Glazing */}
          <ConfigSection title="Glazing">
            <div className="flex flex-col gap-1.5">
              {glazingOptions.map((g, i) => (
                <MaterialButton
                  key={g.label}
                  label={g.label}
                  tag={g.tag}
                  selected={glazing === i}
                  onClick={() => setGlazing(i)}
                />
              ))}
            </div>
          </ConfigSection>

          {/* Add-ons */}
          <ConfigSection title="Add-ons">
            <div className="flex flex-col gap-1.5">
              {addOns.map(({ label, icon }) => (
                <AddOnToggle
                  key={label}
                  label={label}
                  icon={icon}
                  active={activeAddOns.has(label)}
                  onClick={() => toggleAddOn(label)}
                />
              ))}
            </div>
          </ConfigSection>

          {/* Spacer */}
          <div className="h-4" />
        </div>

        {/* CTA */}
        <div className="px-4 py-4 border-t border-[#2E2E2E]">
          <button className="w-full py-2.5 text-xs font-semibold bg-[#886C46] text-white rounded-sm hover:bg-[#9A7A54] transition-colors">
            Request Quote
          </button>
          <button className="w-full py-2 text-xs text-[#555] hover:text-[#A0A0A0] transition-colors mt-1.5">
            Save Configuration
          </button>
        </div>
      </aside>
    </div>
  );
}