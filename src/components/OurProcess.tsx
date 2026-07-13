// "use client";

// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // ─── Step definitions ────────────────────────────────────────────────────────
// const STEPS = [
//   {
//     index: "01",
//     phase: "FEASIBILITY",
//     title: "Site Analysis & Design Brief",
//     body: "Our engineers survey your land, assess load-bearing capacity, local codes, and climate data. Every constraint becomes an opportunity. We deliver a detailed feasibility report before a single bolt is ordered.",
//     detail: ["Topographic survey", "Zoning compliance audit", "Load & seismic analysis", "Budget parametrics"],
//     cameraZ: 9,
//     buildProgress: 0,
//     roofVisible: false,
//     wallOpacity: 0.18,
//     wireframe: true,
//   },
//   {
//     index: "02",
//     phase: "ENGINEERING",
//     title: "Precision Engineering & BIM",
//     body: "Parametric BIM models synchronise structural, MEP, and architectural layers in real time. Clash detection catches errors in the model — not on site. Every component is tolerance-matched before fabrication begins.",
//     detail: ["BIM Level 3 coordination", "Structural FEA simulation", "MEP integration", "Shop drawing release"],
//     cameraZ: 7,
//     buildProgress: 0.4,
//     roofVisible: false,
//     wallOpacity: 0.55,
//     wireframe: false,
//   },
//   {
//     index: "03",
//     phase: "FABRICATION",
//     title: "Factory-Controlled Manufacturing",
//     body: "Panels, frames, and modules are cut, welded, and inspected inside our climate-controlled facility. Parallel production streams compress schedules by up to 40% versus stick-built methods.",
//     detail: ["CNC plasma cutting", "Robotic welding cells", "ISO 9001 QA gates", "Modular sub-assembly"],
//     cameraZ: 5.5,
//     buildProgress: 0.75,
//     roofVisible: false,
//     wallOpacity: 0.8,
//     wireframe: false,
//   },
//   {
//     index: "04",
//     phase: "DELIVERY",
//     title: "Logistics & Site Sequencing",
//     body: "Just-in-time logistics ensure panels arrive in erection sequence. Our project software tracks every shipment and coordinates crane lifts to the hour — no storage waste, no delays.",
//     detail: ["Sequenced flat-pack delivery", "GPS-tracked transport", "Crane lift scheduling", "Site safety inductions"],
//     cameraZ: 4.5,
//     buildProgress: 0.9,
//     roofVisible: true,
//     wallOpacity: 0.92,
//     wireframe: false,
//   },
//   {
//     index: "05",
//     phase: "ASSEMBLY",
//     title: "Rapid On-Site Erection",
//     body: "Trained erection crews bolt, seal, and commission your structure in days, not months. The building envelope is weather-tight before interior fit-out begins, protecting your timeline regardless of conditions.",
//     detail: ["Bolted moment connections", "Insulated panel locking", "Envelope pressure test", "MEP first-fix"],
//     cameraZ: 3.5,
//     buildProgress: 1,
//     roofVisible: true,
//     wallOpacity: 1,
//     wireframe: false,
//   },
// ];

// // ─── Three.js scene builder ───────────────────────────────────────────────────
// function buildScene(canvas: HTMLCanvasElement) {
//   const W = canvas.clientWidth;
//   const H = canvas.clientHeight;

//   const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//   renderer.setSize(W, H);
//   renderer.shadowMap.enabled = true;
//   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//   renderer.toneMapping = THREE.ACESFilmicToneMapping;
//   renderer.toneMappingExposure = 1.1;

//   const scene = new THREE.Scene();
//   scene.fog = new THREE.FogExp2(0x1a1714, 0.045);

//   const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 100);
//   camera.position.set(6, 4, 9);
//   camera.lookAt(0, 1.2, 0);

//   // ── Lights ────────────────────────────────────────────────────────────────
//   const ambient = new THREE.AmbientLight(0xf0ebe3, 0.35);
//   scene.add(ambient);

//   const sun = new THREE.DirectionalLight(0xfff4e0, 2.4);
//   sun.position.set(8, 12, 6);
//   sun.castShadow = true;
//   sun.shadow.mapSize.set(2048, 2048);
//   sun.shadow.camera.near = 0.5;
//   sun.shadow.camera.far = 50;
//   sun.shadow.camera.left = -10;
//   sun.shadow.camera.right = 10;
//   sun.shadow.camera.top = 10;
//   sun.shadow.camera.bottom = -10;
//   sun.shadow.bias = -0.001;
//   scene.add(sun);

//   const fill = new THREE.DirectionalLight(0x886c46, 0.6);
//   fill.position.set(-5, 3, -4);
//   scene.add(fill);

//   const rim = new THREE.PointLight(0xc9a97a, 1.2, 18);
//   rim.position.set(3, 6, -5);
//   scene.add(rim);

//   // ── Ground ────────────────────────────────────────────────────────────────
//   const groundGeo = new THREE.PlaneGeometry(30, 30);
//   const groundMat = new THREE.MeshStandardMaterial({
//     color: 0x1e1b18,
//     roughness: 0.95,
//     metalness: 0.05,
//   });
//   const ground = new THREE.Mesh(groundGeo, groundMat);
//   ground.rotation.x = -Math.PI / 2;
//   ground.receiveShadow = true;
//   scene.add(ground);

//   // Grid lines on ground
//   const gridHelper = new THREE.GridHelper(20, 20, 0x886c46, 0x2d2925);
//   (gridHelper.material as THREE.Material).opacity = 0.35;
//   (gridHelper.material as THREE.Material).transparent = true;
//   scene.add(gridHelper);

//   // ── Prefab building group ─────────────────────────────────────────────────
//   const building = new THREE.Group();
//   scene.add(building);

//   const accentColor = 0x886c46;
//   const steelColor = 0x8a8070;
//   const panelColor = 0xd4c9b8;
//   const darkColor = 0x2d2925;

//   // Shared materials
//   const wireframeMat = new THREE.MeshBasicMaterial({
//     color: accentColor,
//     wireframe: true,
//     transparent: true,
//     opacity: 0.6,
//   });

//   const steelMat = new THREE.MeshStandardMaterial({
//     color: steelColor,
//     roughness: 0.4,
//     metalness: 0.75,
//     transparent: true,
//     opacity: 1,
//   });

//   const panelMat = new THREE.MeshStandardMaterial({
//     color: panelColor,
//     roughness: 0.8,
//     metalness: 0.05,
//     transparent: true,
//     opacity: 1,
//   });

//   const darkMat = new THREE.MeshStandardMaterial({
//     color: darkColor,
//     roughness: 0.5,
//     metalness: 0.3,
//     transparent: true,
//     opacity: 1,
//   });

//   // ── Foundation slab ───────────────────────────────────────────────────────
//   const slabGeo = new THREE.BoxGeometry(6, 0.12, 4);
//   const slabMat = new THREE.MeshStandardMaterial({ color: 0x3a342e, roughness: 0.9, metalness: 0 });
//   const slab = new THREE.Mesh(slabGeo, slabMat);
//   slab.position.y = 0.06;
//   slab.receiveShadow = true;
//   slab.castShadow = true;
//   building.add(slab);

//   // ── Columns ───────────────────────────────────────────────────────────────
//   const colGeo = new THREE.BoxGeometry(0.14, 3, 0.14);
//   const colPositions = [
//     [-2.7, 1.5, -1.7], [2.7, 1.5, -1.7],
//     [-2.7, 1.5, 1.7], [2.7, 1.5, 1.7],
//     [0, 1.5, -1.7], [0, 1.5, 1.7],
//   ];
//   const columns: THREE.Mesh[] = [];
//   colPositions.forEach(([x, y, z]) => {
//     const col = new THREE.Mesh(colGeo, steelMat.clone());
//     col.position.set(x, y, z);
//     col.castShadow = true;
//     building.add(col);
//     columns.push(col);
//   });

//   // ── Beams ─────────────────────────────────────────────────────────────────
//   const beamGeo = new THREE.BoxGeometry(5.6, 0.14, 0.14);
//   const beamYPositions = [3, 1.5];
//   const beamZPositions = [-1.7, 1.7];
//   const beams: THREE.Mesh[] = [];
//   beamYPositions.forEach((y) => {
//     beamZPositions.forEach((z) => {
//       const beam = new THREE.Mesh(beamGeo, steelMat.clone());
//       beam.position.set(0, y, z);
//       beam.castShadow = true;
//       building.add(beam);
//       beams.push(beam);
//     });
//   });

//   // Cross beams
//   const crossBeamGeo = new THREE.BoxGeometry(0.14, 0.14, 3.5);
//   [-2.7, 0, 2.7].forEach((x) => {
//     const cb = new THREE.Mesh(crossBeamGeo, steelMat.clone());
//     cb.position.set(x, 3, 0);
//     cb.castShadow = true;
//     building.add(cb);
//     beams.push(cb);
//   });

//   // ── Wall panels ───────────────────────────────────────────────────────────
//   const walls: THREE.Mesh[] = [];

//   // Front wall (z = 1.7) - with window cutout feel via two panel sections
//   const frontPanelL = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.85, 0.1), panelMat.clone());
//   frontPanelL.position.set(-1.9, 1.5, 1.75);
//   building.add(frontPanelL);
//   walls.push(frontPanelL);

//   const frontPanelR = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.85, 0.1), panelMat.clone());
//   frontPanelR.position.set(1.9, 1.5, 1.75);
//   building.add(frontPanelR);
//   walls.push(frontPanelR);

//   // Window frame (center front)
//   const winFrameGeo = new THREE.BoxGeometry(1.6, 2.0, 0.06);
//   const winFrameMat = new THREE.MeshStandardMaterial({ color: darkColor, roughness: 0.3, metalness: 0.6, transparent: true, opacity: 1 });
//   const winFrame = new THREE.Mesh(winFrameGeo, winFrameMat);
//   winFrame.position.set(0, 1.6, 1.72);
//   building.add(winFrame);
//   walls.push(winFrame);

//   // Glazing
//   const glazingGeo = new THREE.BoxGeometry(1.4, 1.8, 0.03);
//   const glazingMat = new THREE.MeshStandardMaterial({
//     color: 0x4a7fa5,
//     roughness: 0.05,
//     metalness: 0.1,
//     transparent: true,
//     opacity: 0.5,
//   });
//   const glazing = new THREE.Mesh(glazingGeo, glazingMat);
//   glazing.position.set(0, 1.6, 1.74);
//   building.add(glazing);
//   walls.push(glazing);

//   // Back wall
//   const backWall = new THREE.Mesh(new THREE.BoxGeometry(5.6, 2.85, 0.1), panelMat.clone());
//   backWall.position.set(0, 1.5, -1.75);
//   building.add(backWall);
//   walls.push(backWall);

//   // Side walls
//   const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.85, 3.5), panelMat.clone());
//   leftWall.position.set(-2.75, 1.5, 0);
//   building.add(leftWall);
//   walls.push(leftWall);

//   const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.85, 3.5), panelMat.clone());
//   rightWall.position.set(2.75, 1.5, 0);
//   building.add(rightWall);
//   walls.push(rightWall);

//   // ── Roof ──────────────────────────────────────────────────────────────────
//   const roofGroup = new THREE.Group();
//   building.add(roofGroup);

//   // Pitched roof panels
//   const roofL = new THREE.Mesh(
//     new THREE.BoxGeometry(3.2, 0.1, 4.2),
//     new THREE.MeshStandardMaterial({ color: 0x3a342e, roughness: 0.7, metalness: 0.3, transparent: true, opacity: 1 })
//   );
//   roofL.rotation.z = -Math.PI / 8;
//   roofL.position.set(-1.3, 3.55, 0);
//   roofGroup.add(roofL);

//   const roofR = new THREE.Mesh(
//     new THREE.BoxGeometry(3.2, 0.1, 4.2),
//     new THREE.MeshStandardMaterial({ color: 0x3a342e, roughness: 0.7, metalness: 0.3, transparent: true, opacity: 1 })
//   );
//   roofR.rotation.z = Math.PI / 8;
//   roofR.position.set(1.3, 3.55, 0);
//   roofGroup.add(roofR);

//   // Ridge beam
//   const ridgeBeam = new THREE.Mesh(
//     new THREE.BoxGeometry(0.12, 0.12, 4.2),
//     steelMat.clone()
//   );
//   ridgeBeam.position.set(0, 3.9, 0);
//   roofGroup.add(ridgeBeam);

//   // Fascia
//   const fasciaGeo = new THREE.BoxGeometry(6.1, 0.18, 0.1);
//   [-2.1, 2.1].forEach((z) => {
//     const f = new THREE.Mesh(fasciaGeo, darkMat.clone());
//     f.position.set(0, 3.22, z);
//     roofGroup.add(f);
//   });

//   roofGroup.position.y = 0;
//   roofGroup.visible = false;

//   // ── Wireframe overlay ─────────────────────────────────────────────────────
//   const wireframeGroup = new THREE.Group();
//   scene.add(wireframeGroup);

//   const buildingEdges = new THREE.BoxGeometry(6, 3, 3.5);
//   const edgeGeo = new THREE.EdgesGeometry(buildingEdges);
//   const edgeMesh = new THREE.LineSegments(
//     edgeGeo,
//     new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.7 })
//   );
//   edgeMesh.position.set(0, 1.5, 0);
//   wireframeGroup.add(edgeMesh);

//   // Dimension lines
//   const dimLineMat = new THREE.LineBasicMaterial({ color: 0x886c46, transparent: true, opacity: 0.4 });
//   const createLine = (pts: number[][]) => {
//     const geo = new THREE.BufferGeometry().setFromPoints(pts.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
//     return new THREE.Line(geo, dimLineMat);
//   };
//   wireframeGroup.add(createLine([[-3.5, 0, 0], [-3.5, 3.1, 0]]));
//   wireframeGroup.add(createLine([[-3, 0.06, -2.3], [3, 0.06, -2.3]]));

//   // ── Annotation particles ──────────────────────────────────────────────────
//   const particleCount = 120;
//   const pPositions = new Float32Array(particleCount * 3);
//   for (let i = 0; i < particleCount; i++) {
//     pPositions[i * 3] = (Math.random() - 0.5) * 14;
//     pPositions[i * 3 + 1] = Math.random() * 7;
//     pPositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
//   }
//   const pGeo = new THREE.BufferGeometry();
//   pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
//   const particles = new THREE.Points(
//     pGeo,
//     new THREE.PointsMaterial({ color: 0x886c46, size: 0.04, transparent: true, opacity: 0.45 })
//   );
//   scene.add(particles);

//   // ── Animate loop ──────────────────────────────────────────────────────────
//   let rafId: number;
//   let time = 0;
//   const animate = () => {
//     rafId = requestAnimationFrame(animate);
//     time += 0.008;
//     particles.rotation.y = time * 0.04;
//     rim.position.x = Math.sin(time * 0.3) * 4 + 2;
//     rim.position.z = Math.cos(time * 0.3) * 4 - 4;
//     renderer.render(scene, camera);
//   };
//   animate();

//   const resize = () => {
//     const w = canvas.clientWidth;
//     const h = canvas.clientHeight;
//     camera.aspect = w / h;
//     camera.updateProjectionMatrix();
//     renderer.setSize(w, h);
//   };
//   window.addEventListener("resize", resize);

//   // ── Transition fn ─────────────────────────────────────────────────────────
//   const transitionTo = (stepIdx: number, instant = false) => {
//     const s = STEPS[stepIdx];
//     const dur = instant ? 0 : 1.4;
//     const ease = "power3.inOut";

//     // Camera
//     gsap.to(camera.position, { z: s.cameraZ, x: 6 - stepIdx * 0.4, duration: dur, ease });

//     // Wireframe toggle
//     gsap.to(wireframeGroup.children[0] as THREE.LineSegments, {
//       // @ts-ignore
//       "material.opacity": s.wireframe ? 0.7 : 0,
//       duration: dur * 0.6,
//     });

//     // Wall opacity
//     walls.forEach((w) => {
//       gsap.to((w.material as THREE.MeshStandardMaterial), { opacity: s.wallOpacity, duration: dur, ease });
//     });

//     // Columns & beams
//     const structOpacity = s.buildProgress > 0 ? 1 : 0;
//     [...columns, ...beams].forEach((m) => {
//       gsap.to((m.material as THREE.MeshStandardMaterial), { opacity: structOpacity, duration: dur * 0.8, ease });
//     });

//     // Roof
//     if (s.roofVisible && !roofGroup.visible) {
//       roofGroup.visible = true;
//       roofGroup.position.y = 1.2;
//       gsap.to(roofGroup.position, { y: 0, duration: dur, ease });
//     } else if (!s.roofVisible && roofGroup.visible) {
//       gsap.to(roofGroup.position, { y: 1.2, duration: dur * 0.7, ease, onComplete: () => { roofGroup.visible = false; } });
//     }

//     // Building rise based on progress
//     const targetY = -3 + s.buildProgress * 3;
//     gsap.to(building.position, { y: targetY > 0 ? 0 : targetY, duration: dur, ease });
//   };

//   return {
//     dispose: () => {
//       cancelAnimationFrame(rafId);
//       window.removeEventListener("resize", resize);
//       renderer.dispose();
//     },
//     transitionTo,
//     camera,
//     scene,
//     building,
//   };
// }

// // ─── Component ────────────────────────────────────────────────────────────────
// export default function OurProcess() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sceneRef = useRef<ReturnType<typeof buildScene> | null>(null);
//   const lenisRef = useRef<any>(null);
//   const [activeStep, setActiveStep] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Init Three.js
//   useEffect(() => {
//     if (!mounted || !canvasRef.current) return;

//     const canvas = canvasRef.current;
//     // Wait a frame so layout is complete
//     const raf = requestAnimationFrame(() => {
//       const s = buildScene(canvas);
//       sceneRef.current = s;
//       s.transitionTo(0, true);
//     });
//     return () => {
//       cancelAnimationFrame(raf);
//       sceneRef.current?.dispose();
//     };
//   }, [mounted]);

//   // Lenis + GSAP ScrollTrigger
//   useEffect(() => {
//     if (!mounted) return;

//     let lenis: any;

//     const initLenis = async () => {
//       try {
//         const LenisModule = await import("lenis");
//         const Lenis = LenisModule.default || LenisModule;
//         lenis = new Lenis({ duration: 1.4, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
//         lenisRef.current = lenis;

//         lenis.on("scroll", ScrollTrigger.update);
//         gsap.ticker.add((time: number) => lenis.raf(time * 1000));
//         gsap.ticker.lagSmoothing(0);
//       } catch {
//         // Lenis not available, use native scroll
//       }

//       // ScrollTrigger per step
//       STEPS.forEach((_, i) => {
//         const el = document.getElementById(`step-${i}`);
//         if (!el) return;
//         ScrollTrigger.create({
//           trigger: el,
//           start: "top 55%",
//           end: "bottom 45%",
//           onEnter: () => {
//             setActiveStep(i);
//             sceneRef.current?.transitionTo(i);
//           },
//           onEnterBack: () => {
//             setActiveStep(i);
//             sceneRef.current?.transitionTo(i);
//           },
//         });

//         // Step content fade-in
//         gsap.from(`#step-${i} .step-inner`, {
//           scrollTrigger: { trigger: el, start: "top 70%", toggleActions: "play none none reverse" },
//           y: 40,
//           opacity: 0,
//           duration: 0.9,
//           ease: "power3.out",
//           delay: 0.1,
//         });
//       });

//       ScrollTrigger.refresh();
//     };

//     initLenis();

//     return () => {
//       lenis?.destroy();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       gsap.ticker.remove((time: number) => lenis?.raf(time * 1000));
//     };
//   }, [mounted]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative bg-[#1a1714] min-h-screen font-sans z-99999"
//       style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
//     >
//       {/* ── Header ────────────────────────────────────────────────────────── */}
//       <div className="relative z-10 pt-20 pb-6 px-8 md:px-16 border-b border-[#2d2925]">
//         <p className="text-[#886c46] text-xs tracking-[0.3em] uppercase mb-3 font-medium">
//           How We Build
//         </p>
//         <h2 className="text-[#f0ebe3] text-5xl md:text-6xl font-light leading-[1.05] tracking-tight max-w-xl">
//           From brief
//           <br />
//           <span className="text-[#886c46] font-semibold italic">to building.</span>
//         </h2>
//         <p className="mt-4 text-[#8a7d6e] text-sm max-w-sm leading-relaxed">
//           Five controlled phases. Zero surprises. Every prefab structure we deliver follows this exact sequence.
//         </p>
//       </div>

//       {/* ── Sticky canvas + content layout ───────────────────────────────── */}
//       <div className="flex flex-col lg:flex-row">

//         {/* Sticky 3D viewport */}
//         <div className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2 xl:w-[55%] shrink-0 relative">
//           <canvas
//             ref={canvasRef}
//             className="w-full h-[50vh] lg:h-full block"
//             style={{ background: "transparent" }}
//           />

//           {/* Step indicator overlay */}
//           <div className="absolute bottom-8 left-8 flex gap-2">
//             {STEPS.map((_, i) => (
//               <div
//                 key={i}
//                 className="transition-all duration-500"
//                 style={{
//                   width: i === activeStep ? "2rem" : "0.4rem",
//                   height: "0.4rem",
//                   borderRadius: "9999px",
//                   background: i === activeStep ? "#886c46" : "#3a342e",
//                 }}
//               />
//             ))}
//           </div>

//           {/* Phase label overlay */}
//           <div className="absolute top-8 left-8 pointer-events-none">
//             <span
//               className="text-[#886c46] text-[0.65rem] tracking-[0.4em] uppercase font-semibold transition-all duration-700"
//               key={activeStep}
//               style={{ animation: "fadeUp 0.5s ease forwards" }}
//             >
//               {STEPS[activeStep].phase}
//             </span>
//           </div>

//           {/* Measurement grid overlay */}
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(136,108,70,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(136,108,70,0.04) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         {/* Scrollable step panels */}
//         <div className="lg:w-1/2 xl:w-[45%]">
//           {STEPS.map((step, i) => (
//             <div
//               id={`step-${i}`}
//               key={i}
//               className="min-h-screen flex items-center px-8 md:px-12 xl:px-16 py-24 border-l border-[#2d2925]"
//             >
//               <div className="step-inner w-full max-w-lg">

//                 {/* Step number */}
//                 <div className="flex items-center gap-4 mb-8">
//                   <span
//                     className="text-[#886c46] font-mono text-sm tracking-widest"
//                     style={{ fontVariantNumeric: "tabular-nums" }}
//                   >
//                     {step.index}
//                   </span>
//                   <div className="flex-1 h-px bg-gradient-to-r from-[#886c46] to-transparent opacity-40" />
//                   <span className="text-[#3a342e] text-[0.6rem] tracking-[0.35em] uppercase">
//                     {step.phase}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-[#f0ebe3] text-3xl md:text-4xl font-light leading-tight mb-5 tracking-tight">
//                   {step.title}
//                 </h3>

//                 {/* Body */}
//                 <p className="text-[#8a7d6e] text-sm leading-[1.8] mb-10 max-w-sm">
//                   {step.body}
//                 </p>

//                 {/* Detail checklist */}
//                 <ul className="space-y-3">
//                   {step.detail.map((d, j) => (
//                     <li key={j} className="flex items-center gap-3 group">
//                       <span
//                         className="w-1 h-1 rounded-full shrink-0 transition-all duration-300 group-hover:w-3"
//                         style={{ background: "#886c46" }}
//                       />
//                       <span className="text-[#6b6057] text-xs tracking-wide uppercase font-medium group-hover:text-[#886c46] transition-colors duration-200">
//                         {d}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Progress bar */}
//                 <div className="mt-12 pt-8 border-t border-[#2d2925]">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-[#3a342e] text-[0.6rem] tracking-widest uppercase">Build Progress</span>
//                     <span className="text-[#886c46] font-mono text-xs">
//                       {Math.round(step.buildProgress * 100)}%
//                     </span>
//                   </div>
//                   <div className="h-[2px] bg-[#2d2925] rounded-full overflow-hidden">
//                     <div
//                       className="h-full rounded-full transition-all duration-1000"
//                       style={{
//                         width: activeStep === i ? `${step.buildProgress * 100}%` : "0%",
//                         background: "linear-gradient(90deg, #886c46, #c9a97a)",
//                       }}
//                     />
//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}

//           {/* Footer panel */}
//           <div className="min-h-[50vh] flex items-center px-8 md:px-12 xl:px-16 py-24 border-l border-[#2d2925] border-t border-t-[#2d2925]">
//             <div className="w-full max-w-lg">
//               <p className="text-[#886c46] text-xs tracking-[0.3em] uppercase mb-4">Ready to start?</p>
//               <h4 className="text-[#f0ebe3] text-3xl font-light mb-6 leading-snug">
//                 Your structure.<br />Our precision.
//               </h4>
//               <p className="text-[#6b6057] text-sm leading-relaxed mb-8 max-w-xs">
//                 Most projects reach weather-tight stage within 8 weeks of groundbreak. Let's scope yours.
//               </p>
//               <button
//                 className="group relative overflow-hidden border border-[#886c46] text-[#886c46] text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-400 hover:text-[#1a1714]"
//                 style={{ letterSpacing: "0.2em" }}
//               >
//                 <span
//                   className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400"
//                   style={{ background: "#886c46" }}
//                 />
//                 <span className="relative z-10">Request a feasibility brief</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Keyframe style ────────────────────────────────────────────────── */}
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(8px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Merriweather, Playfair_Display } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// ─── Step definitions ────────────────────────────────────────────────────────
const STEPS = [
  {
    index: "01",
    phase: "FEASIBILITY",
    title: "Site Analysis & Design Brief",
    body: "Our engineers survey your land, assess load-bearing capacity, local codes, and climate data. Every constraint becomes an opportunity. We deliver a detailed feasibility report before a single bolt is ordered.",
    detail: ["Topographic survey", "Zoning compliance audit", "Load & seismic analysis", "Budget parametrics"],
    cameraZ: 9,
    buildProgress: 0,
    roofVisible: false,
    wallOpacity: 0.18,
    wireframe: true,
  },
  {
    index: "02",
    phase: "ENGINEERING",
    title: "Precision Engineering & BIM",
    body: "Parametric BIM models synchronise structural, MEP, and architectural layers in real time. Clash detection catches errors in the model — not on site. Every component is tolerance-matched before fabrication begins.",
    detail: ["BIM Level 3 coordination", "Structural FEA simulation", "MEP integration", "Shop drawing release"],
    cameraZ: 7,
    buildProgress: 0.4,
    roofVisible: false,
    wallOpacity: 0.55,
    wireframe: false,
  },
  {
    index: "03",
    phase: "FABRICATION",
    title: "Factory-Controlled Manufacturing",
    body: "Panels, frames, and modules are cut, welded, and inspected inside our climate-controlled facility. Parallel production streams compress schedules by up to 40% versus stick-built methods.",
    detail: ["CNC plasma cutting", "Robotic welding cells", "ISO 9001 QA gates", "Modular sub-assembly"],
    cameraZ: 5.5,
    buildProgress: 0.75,
    roofVisible: false,
    wallOpacity: 0.8,
    wireframe: false,
  },
  {
    index: "04",
    phase: "DELIVERY",
    title: "Logistics & Site Sequencing",
    body: "Just-in-time logistics ensure panels arrive in erection sequence. Our project software tracks every shipment and coordinates crane lifts to the hour — no storage waste, no delays.",
    detail: ["Sequenced flat-pack delivery", "GPS-tracked transport", "Crane lift scheduling", "Site safety inductions"],
    cameraZ: 4.5,
    buildProgress: 0.9,
    roofVisible: true,
    wallOpacity: 0.92,
    wireframe: false,
  },
  {
    index: "05",
    phase: "ASSEMBLY",
    title: "Rapid On-Site Erection",
    body: "Trained erection crews bolt, seal, and commission your structure in days, not months. The building envelope is weather-tight before interior fit-out begins, protecting your timeline regardless of conditions.",
    detail: ["Bolted moment connections", "Insulated panel locking", "Envelope pressure test", "MEP first-fix"],
    cameraZ: 3.5,
    buildProgress: 1,
    roofVisible: true,
    wallOpacity: 1,
    wireframe: false,
  },
];

// ─── Three.js scene builder ───────────────────────────────────────────────────
function buildScene(canvas: HTMLCanvasElement) {
  const W = canvas.clientWidth;
  const H = canvas.clientHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x1a1714, 0.045);

  const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 100);
  camera.position.set(6, 4, 9);
  camera.lookAt(0, 1.2, 0);

  // ── Lights ────────────────────────────────────────────────────────────────
  const ambient = new THREE.AmbientLight(0xf0ebe3, 0.35);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xfff4e0, 2.4);
  sun.position.set(8, 12, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 50;
  sun.shadow.camera.left = -10;
  sun.shadow.camera.right = 10;
  sun.shadow.camera.top = 10;
  sun.shadow.camera.bottom = -10;
  sun.shadow.bias = -0.001;
  scene.add(sun);

  const fill = new THREE.DirectionalLight(0x886c46, 0.6);
  fill.position.set(-5, 3, -4);
  scene.add(fill);

  const rim = new THREE.PointLight(0xc9a97a, 1.2, 18);
  rim.position.set(3, 6, -5);
  scene.add(rim);

  // ── Ground ────────────────────────────────────────────────────────────────
  const groundGeo = new THREE.PlaneGeometry(30, 30);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x1e1b18,
    roughness: 0.95,
    metalness: 0.05,
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Grid lines on ground
  const gridHelper = new THREE.GridHelper(20, 20, 0x886c46, 0x2d2925);
  (gridHelper.material as THREE.Material).opacity = 0.35;
  (gridHelper.material as THREE.Material).transparent = true;
  scene.add(gridHelper);

  // ── Prefab building group ─────────────────────────────────────────────────
  const building = new THREE.Group();
  scene.add(building);

  const accentColor = 0x886c46;
  const steelColor = 0x8a8070;
  const panelColor = 0xd4c9b8;
  const darkColor = 0x2d2925;

  // Shared materials
  const wireframeMat = new THREE.MeshBasicMaterial({
    color: accentColor,
    wireframe: true,
    transparent: true,
    opacity: 0.6,
  });

  const steelMat = new THREE.MeshStandardMaterial({
    color: steelColor,
    roughness: 0.4,
    metalness: 0.75,
    transparent: true,
    opacity: 1,
  });

  const panelMat = new THREE.MeshStandardMaterial({
    color: panelColor,
    roughness: 0.8,
    metalness: 0.05,
    transparent: true,
    opacity: 1,
  });

  const darkMat = new THREE.MeshStandardMaterial({
    color: darkColor,
    roughness: 0.5,
    metalness: 0.3,
    transparent: true,
    opacity: 1,
  });

  // ── Foundation slab ───────────────────────────────────────────────────────
  const slabGeo = new THREE.BoxGeometry(6, 0.12, 4);
  const slabMat = new THREE.MeshStandardMaterial({ color: 0x3a342e, roughness: 0.9, metalness: 0 });
  const slab = new THREE.Mesh(slabGeo, slabMat);
  slab.position.y = 0.06;
  slab.receiveShadow = true;
  slab.castShadow = true;
  building.add(slab);

  // ── Columns ───────────────────────────────────────────────────────────────
  const colGeo = new THREE.BoxGeometry(0.14, 3, 0.14);
  const colPositions = [
    [-2.7, 1.5, -1.7], [2.7, 1.5, -1.7],
    [-2.7, 1.5, 1.7], [2.7, 1.5, 1.7],
    [0, 1.5, -1.7], [0, 1.5, 1.7],
  ];
  const columns: THREE.Mesh[] = [];
  colPositions.forEach(([x, y, z]) => {
    const col = new THREE.Mesh(colGeo, steelMat.clone());
    col.position.set(x, y, z);
    col.castShadow = true;
    building.add(col);
    columns.push(col);
  });

  // ── Beams ─────────────────────────────────────────────────────────────────
  const beamGeo = new THREE.BoxGeometry(5.6, 0.14, 0.14);
  const beamYPositions = [3, 1.5];
  const beamZPositions = [-1.7, 1.7];
  const beams: THREE.Mesh[] = [];
  beamYPositions.forEach((y) => {
    beamZPositions.forEach((z) => {
      const beam = new THREE.Mesh(beamGeo, steelMat.clone());
      beam.position.set(0, y, z);
      beam.castShadow = true;
      building.add(beam);
      beams.push(beam);
    });
  });

  // Cross beams
  const crossBeamGeo = new THREE.BoxGeometry(0.14, 0.14, 3.5);
  [-2.7, 0, 2.7].forEach((x) => {
    const cb = new THREE.Mesh(crossBeamGeo, steelMat.clone());
    cb.position.set(x, 3, 0);
    cb.castShadow = true;
    building.add(cb);
    beams.push(cb);
  });

  // ── Wall panels ───────────────────────────────────────────────────────────
  const walls: THREE.Mesh[] = [];

  // Front wall (z = 1.7) - with window cutout feel via two panel sections
  const frontPanelL = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.85, 0.1), panelMat.clone());
  frontPanelL.position.set(-1.9, 1.5, 1.75);
  building.add(frontPanelL);
  walls.push(frontPanelL);

  const frontPanelR = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.85, 0.1), panelMat.clone());
  frontPanelR.position.set(1.9, 1.5, 1.75);
  building.add(frontPanelR);
  walls.push(frontPanelR);

  // Window frame (center front)
  const winFrameGeo = new THREE.BoxGeometry(1.6, 2.0, 0.06);
  const winFrameMat = new THREE.MeshStandardMaterial({ color: darkColor, roughness: 0.3, metalness: 0.6, transparent: true, opacity: 1 });
  const winFrame = new THREE.Mesh(winFrameGeo, winFrameMat);
  winFrame.position.set(0, 1.6, 1.72);
  building.add(winFrame);
  walls.push(winFrame);

  // Glazing
  const glazingGeo = new THREE.BoxGeometry(1.4, 1.8, 0.03);
  const glazingMat = new THREE.MeshStandardMaterial({
    color: 0x4a7fa5,
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity: 0.5,
  });
  const glazing = new THREE.Mesh(glazingGeo, glazingMat);
  glazing.position.set(0, 1.6, 1.74);
  building.add(glazing);
  walls.push(glazing);

  // Back wall
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(5.6, 2.85, 0.1), panelMat.clone());
  backWall.position.set(0, 1.5, -1.75);
  building.add(backWall);
  walls.push(backWall);

  // Side walls
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.85, 3.5), panelMat.clone());
  leftWall.position.set(-2.75, 1.5, 0);
  building.add(leftWall);
  walls.push(leftWall);

  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.85, 3.5), panelMat.clone());
  rightWall.position.set(2.75, 1.5, 0);
  building.add(rightWall);
  walls.push(rightWall);

  // ── Roof ──────────────────────────────────────────────────────────────────
  const roofGroup = new THREE.Group();
  building.add(roofGroup);

  // Pitched roof panels
  const roofL = new THREE.Mesh(
    new THREE.BoxGeometry(3.2, 0.1, 4.2),
    new THREE.MeshStandardMaterial({ color: 0x3a342e, roughness: 0.7, metalness: 0.3, transparent: true, opacity: 1 })
  );
  roofL.rotation.z = -Math.PI / 8;
  roofL.position.set(-1.3, 3.55, 0);
  roofGroup.add(roofL);

  const roofR = new THREE.Mesh(
    new THREE.BoxGeometry(3.2, 0.1, 4.2),
    new THREE.MeshStandardMaterial({ color: 0x3a342e, roughness: 0.7, metalness: 0.3, transparent: true, opacity: 1 })
  );
  roofR.rotation.z = Math.PI / 8;
  roofR.position.set(1.3, 3.55, 0);
  roofGroup.add(roofR);

  // Ridge beam
  const ridgeBeam = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.12, 4.2),
    steelMat.clone()
  );
  ridgeBeam.position.set(0, 3.9, 0);
  roofGroup.add(ridgeBeam);

  // Fascia
  const fasciaGeo = new THREE.BoxGeometry(6.1, 0.18, 0.1);
  [-2.1, 2.1].forEach((z) => {
    const f = new THREE.Mesh(fasciaGeo, darkMat.clone());
    f.position.set(0, 3.22, z);
    roofGroup.add(f);
  });

  roofGroup.position.y = 0;
  roofGroup.visible = false;

  // ── Wireframe overlay ─────────────────────────────────────────────────────
  const wireframeGroup = new THREE.Group();
  scene.add(wireframeGroup);

  const buildingEdges = new THREE.BoxGeometry(6, 3, 3.5);
  const edgeGeo = new THREE.EdgesGeometry(buildingEdges);
  const edgeMesh = new THREE.LineSegments(
    edgeGeo,
    new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.7 })
  );
  edgeMesh.position.set(0, 1.5, 0);
  wireframeGroup.add(edgeMesh);

  // Dimension lines
  const dimLineMat = new THREE.LineBasicMaterial({ color: 0x886c46, transparent: true, opacity: 0.4 });
  const createLine = (pts: number[][]) => {
    const geo = new THREE.BufferGeometry().setFromPoints(pts.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
    return new THREE.Line(geo, dimLineMat);
  };
  wireframeGroup.add(createLine([[-3.5, 0, 0], [-3.5, 3.1, 0]]));
  wireframeGroup.add(createLine([[-3, 0.06, -2.3], [3, 0.06, -2.3]]));

  // ── Annotation particles ──────────────────────────────────────────────────
  const particleCount = 120;
  const pPositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    pPositions[i * 3] = (Math.random() - 0.5) * 14;
    pPositions[i * 3 + 1] = Math.random() * 7;
    pPositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ color: 0x886c46, size: 0.04, transparent: true, opacity: 0.45 })
  );
  scene.add(particles);

  // ── Animate loop ──────────────────────────────────────────────────────────
  let rafId: number;
  let time = 0;
  const animate = () => {
    rafId = requestAnimationFrame(animate);
    time += 0.008;
    particles.rotation.y = time * 0.04;
    rim.position.x = Math.sin(time * 0.3) * 4 + 2;
    rim.position.z = Math.cos(time * 0.3) * 4 - 4;
    renderer.render(scene, camera);
  };
  animate();

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener("resize", resize);

  // ── Transition fn ─────────────────────────────────────────────────────────
  const transitionTo = (stepIdx: number, instant = false) => {
    const s = STEPS[stepIdx];
    const dur = instant ? 0 : 1.4;
    const ease = "power3.inOut";

    // Camera
    gsap.to(camera.position, { z: s.cameraZ, x: 6 - stepIdx * 0.4, duration: dur, ease });

    // Wireframe toggle
    gsap.to(wireframeGroup.children[0] as THREE.LineSegments, {
      // @ts-ignore
      "material.opacity": s.wireframe ? 0.7 : 0,
      duration: dur * 0.6,
    });

    // Wall opacity
    walls.forEach((w) => {
      gsap.to((w.material as THREE.MeshStandardMaterial), { opacity: s.wallOpacity, duration: dur, ease });
    });

    // Columns & beams
    const structOpacity = s.buildProgress > 0 ? 1 : 0;
    [...columns, ...beams].forEach((m) => {
      gsap.to((m.material as THREE.MeshStandardMaterial), { opacity: structOpacity, duration: dur * 0.8, ease });
    });

    // Roof
    if (s.roofVisible && !roofGroup.visible) {
      roofGroup.visible = true;
      roofGroup.position.y = 1.2;
      gsap.to(roofGroup.position, { y: 0, duration: dur, ease });
    } else if (!s.roofVisible && roofGroup.visible) {
      gsap.to(roofGroup.position, { y: 1.2, duration: dur * 0.7, ease, onComplete: () => { roofGroup.visible = false; } });
    }

    // Building rise based on progress
    const targetY = -3 + s.buildProgress * 3;
    gsap.to(building.position, { y: targetY > 0 ? 0 : targetY, duration: dur, ease });
  };

  return {
    dispose: () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
    },
    transitionTo,
    camera,
    scene,
    building,
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function OurProcess() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<ReturnType<typeof buildScene> | null>(null);
  const lenisRef = useRef<any>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Init Three.js
  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    // Wait a frame so layout is complete
    const raf = requestAnimationFrame(() => {
      const s = buildScene(canvas);
      sceneRef.current = s;
      s.transitionTo(0, true);
    });
    return () => {
      cancelAnimationFrame(raf);
      sceneRef.current?.dispose();
    };
  }, [mounted]);

  // Lenis + GSAP ScrollTrigger
  useEffect(() => {
    if (!mounted) return;

    let lenis: any;

    const initLenis = async () => {
      try {
        const LenisModule = await import("lenis");
        const Lenis = LenisModule.default || LenisModule;
        lenis = new Lenis({ duration: 1.4, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        lenisRef.current = lenis;

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time: number) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      } catch {
        // Lenis not available, use native scroll
      }

      // ScrollTrigger per step
      STEPS.forEach((_, i) => {
        const el = document.getElementById(`step-${i}`);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => {
            setActiveStep(i);
            sceneRef.current?.transitionTo(i);
          },
          onEnterBack: () => {
            setActiveStep(i);
            sceneRef.current?.transitionTo(i);
          },
        });

        // Step content fade-in
        gsap.from(`#step-${i} .step-inner`, {
          scrollTrigger: { trigger: el, start: "top 70%", toggleActions: "play none none reverse" },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1,
        });
      });

      ScrollTrigger.refresh();
    };

    initLenis();

    return () => {
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove((time: number) => lenis?.raf(time * 1000));
    };
  }, [mounted]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#1a1714] min-h-screen"
    >
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 pt-20 pb-6 px-8 md:px-16 border-b border-[#2d2925]">
        <p className="text-[#886c46] text-xs tracking-[0.3em] uppercase mb-3 font-medium">
          How We Build
        </p>
        <h2 className={`${playfair.className} text-[#f0ebe3] text-5xl md:text-6xl font-light leading-[1.05] tracking-tight max-w-xl`}>
          From brief
          <br />
          <span className="text-[#886c46] font-semibold italic">to building.</span>
        </h2>
        <p className={`${merri.className} mt-4 text-[#8a7d6e] text-sm max-w-sm leading-relaxed`}>
          Five controlled phases. Zero surprises. Every prefab structure we deliver follows this exact sequence.
        </p>
      </div>

      {/* ── Sticky canvas + content layout ───────────────────────────────── */}
      <div className="flex flex-col lg:flex-row">

        {/* Sticky 3D viewport */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2 xl:w-[55%] shrink-0 relative">
          <canvas
            ref={canvasRef}
            className="w-full h-[50vh] lg:h-full block"
            style={{ background: "transparent" }}
          />

          {/* Step indicator overlay */}
          <div className="absolute bottom-8 left-8 flex gap-2">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-500"
                style={{
                  width: i === activeStep ? "2rem" : "0.4rem",
                  height: "0.4rem",
                  borderRadius: "9999px",
                  background: i === activeStep ? "#886c46" : "#3a342e",
                }}
              />
            ))}
          </div>

          {/* Phase label overlay */}
          <div className="absolute top-8 left-8 pointer-events-none">
            <span
              className="text-[#886c46] text-[0.65rem] tracking-[0.4em] uppercase font-semibold transition-all duration-700"
              key={activeStep}
              style={{ animation: "fadeUp 0.5s ease forwards" }}
            >
              {STEPS[activeStep].phase}
            </span>
          </div>

          {/* Measurement grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(136,108,70,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(136,108,70,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Scrollable step panels */}
        <div className="lg:w-1/2 xl:w-[45%]">
          {STEPS.map((step, i) => (
            <div
              id={`step-${i}`}
              key={i}
              className="min-h-screen flex items-center px-8 md:px-12 xl:px-16 py-24 border-l border-[#2d2925]"
            >
              <div className="step-inner w-full max-w-lg">

                {/* Step number */}
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className={`${playfair.className} text-[#886c46] font-semibold text-sm tracking-widest`}
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {step.index}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#886c46] to-transparent opacity-40" />
                  <span className="text-[#3a342e] text-[0.6rem] tracking-[0.35em] uppercase">
                    {step.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`${playfair.className} text-[#f0ebe3] text-3xl md:text-4xl font-light leading-tight mb-5 tracking-tight`}>
                  {step.title}
                </h3>

                {/* Body */}
                <p className={`${merri.className} text-[#8a7d6e] text-sm leading-[1.8] mb-10 max-w-sm`}>
                  {step.body}
                </p>

                {/* Detail checklist */}
                <ul className="space-y-3">
                  {step.detail.map((d, j) => (
                    <li key={j} className="flex items-center gap-3 group">
                      <span
                        className="w-1 h-1 rounded-full shrink-0 transition-all duration-300 group-hover:w-3"
                        style={{ background: "#886c46" }}
                      />
                      <span className={`${merri.className} text-[#6b6057] text-xs tracking-wide uppercase font-medium group-hover:text-[#886c46] transition-colors duration-200`}>
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Progress bar */}
                <div className="mt-12 pt-8 border-t border-[#2d2925]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#3a342e] text-[0.6rem] tracking-widest uppercase">Build Progress</span>
                    <span className="text-[#886c46] font-mono text-xs">
                      {Math.round(step.buildProgress * 100)}%
                    </span>
                  </div>
                  <div className="h-[2px] bg-[#2d2925] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: activeStep === i ? `${step.buildProgress * 100}%` : "0%",
                        background: "linear-gradient(90deg, #886c46, #c9a97a)",
                      }}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* Footer panel */}
          <div className="min-h-[50vh] flex items-center px-8 md:px-12 xl:px-16 py-24 border-l border-[#2d2925] border-t border-t-[#2d2925]">
            <div className="w-full max-w-lg">
              <p className="text-[#886c46] text-xs tracking-[0.3em] uppercase mb-4">Ready to start?</p>
              <h4 className={`${playfair.className} text-[#f0ebe3] text-3xl font-light mb-6 leading-snug`}>
                Your structure.<br />Our precision.
              </h4>
              <p className={`${merri.className} text-[#6b6057] text-sm leading-relaxed mb-8 max-w-xs`}>
                Most projects reach weather-tight stage within 8 weeks of groundbreak. Let's scope yours.
              </p>
              <button
                className={`${merri.className} group relative overflow-hidden border border-[#886c46] text-[#886c46] text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-400 hover:text-[#1a1714]`}
                style={{ letterSpacing: "0.2em" }}
              >
                <span
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400"
                  style={{ background: "#886c46" }}
                />
                <span className="relative z-10">Request a feasibility brief</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Keyframe style ────────────────────────────────────────────────── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}