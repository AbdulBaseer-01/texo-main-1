
// // 'use client'
// // import React, { useRef } from 'react';
// // import { motion, useInView } from 'framer-motion';
// // import { Merriweather, Playfair_Display } from 'next/font/google';
// // import {
// //   Facebook,
// //   Twitter,
// //   Instagram,
// //   Linkedin,
// //   Youtube,
// //   Mail,
// //   Phone,
// //   MapPin
// // } from 'lucide-react';
// // import Image from 'next/image';

// // const merri = Merriweather({
// //   subsets: ['latin'],
// //   weight: ['300', '400', '700', '900'],
// // });

// // const playfair = Playfair_Display({
// //   subsets: ['latin'],
// //   weight: ['400', '500', '600', '700', '800', '900'],
// // });

// // export default function PremiumFooter() {
// //   const footerRef = useRef(null);
// //   const isInView = useInView(footerRef, { once: true, amount: 0.2 });

// //   const quickLinks = [
// //     { name: 'Home', href: '/' },
// //     { name: 'Products', href: '/products' },
// //     { name: 'Features', href: '/features' },
// //     { name: 'Inspiration Gallery', href: '/inspiration-gallery' },
// //     { name: 'About', href: '/about' },
// //     { name: 'Careers', href: '/careers' },
// //     { name: 'Blogs', href: '/blogs' },
// //     { name: 'Contact', href: '/contact' },
// //   ];

// //   const socialLinks = [
// //     { icon: Facebook, href: '#', label: 'Facebook' },
// //     { icon: Twitter, href: '#', label: 'Twitter' },
// //     { icon: Instagram, href: '#', label: 'Instagram' },
// //     { icon: Linkedin, href: '#', label: 'LinkedIn' },
// //     { icon: Youtube, href: '#', label: 'YouTube' },
// //   ];

// //   const locations = [
// //     {
// //       label: 'Headquarters',
// //       addr: 'preab world, hyderabad',
// //       city: 'Telanagana',
// //     },
// //     {
// //       label: 'Branch Office',
// //       addr: 'prefab world, Hyderbad',
// //       city: 'hyderabd, telangana',
// //     },
// //   ];

// //   return (
// //     <>
// //     <footer ref={footerRef} className="relative bg-white text-black overflow-hidden md:max-h-screen z-99999">

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-10 pt-6">

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-6">

// //           <div>
// //             <div className="w-full mb-6">
// //               <Image
// //                 src="/black-logo.png"
// //                 alt="Prefab Construction Company Logo"
// //                 width={200}
// //                 height={150}
// //                 className="w-full h-auto object-contain"
// //                 priority
// //               />
// //             </div>

// //             <p className={`${merri.className} text-black/60 mb-8 leading-relaxed font-light`}>
// //               Elevating experiences through innovation and excellence.
// //               Your trusted partner in success.
// //             </p>

// //             <div className="flex gap-3 flex-wrap mb-10">
// //               {socialLinks.map((social) => (
// //                 <motion.a
// //                   key={social.label}
// //                   href={social.href}
// //                   whileHover={{ scale: 1.1, rotate: 5 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center hover:bg-[#886c46] transition-all duration-300 border border-[#886c46]/30 hover:border-[#886c46] text-black/60 hover:text-white shadow-lg"
// //                 >
// //                   <social.icon size={20} />
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </div>

// //           <div>
// //             <h4 className={`${playfair.className} text-2xl font-semibold mb-8 text-black`}>
// //               Quick Links
// //             </h4>

// //             <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
// //               {quickLinks.map((link) => (
// //                 <li key={link.name}>
// //                   <a
// //                     href={link.href}
// //                     className={`${merri.className} text-black/60 hover:text-[#886c46] transition-all duration-300 inline-flex items-center group font-light text-sm`}
// //                   >
// //                     <span className="w-0 h-px bg-[#886c46] group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-3" />
// //                     {link.name}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div>
// //   <h4 className={`${playfair.className} text-2xl font-semibold mb-4 text-black`}>
// //     Connect With Us
// //   </h4>

// //   <div className="grid grid-cols-2 gap-2.5">
// //     {[
// //       { icon: Mail,  label: 'Email',     value: 'prefab@mail.com' },
// //       { icon: Mail,  label: 'Support',   value: 'prefab@mail.com' },
// //       { icon: Phone, label: 'Phone',     value: '+91 123456789'   },
// //       { icon: Phone, label: 'Toll Free', value: '+91 123456789'   },
// //     ].map((item, i) => (
// //       <div
// //         key={i}
// //         className="flex items-center gap-3 p-3 rounded-xl border border-black/10 hover:border-[#886c46] bg-white transition-colors duration-300 group"
// //       >
// //         <div className="shrink-0 w-9 h-9 rounded-full bg-[#886c46]/8 flex items-center justify-center">
// //           <item.icon size={16} className="text-[#886c46]" />
// //         </div>
// //         <div>
// //           <p className={`${merri.className} text-[10px] text-black/40 mb-0.5`}>{item.label}</p>
// //           <p className={`${merri.className} text-sm font-medium text-black/80`}>{item.value}</p>
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// // </div>
// //         </div>

// //         <div className="mb-10">
// //           <p className={`${merri.className} text-[#886c46]/70 text-xs uppercase tracking-[0.2em] font-light mb-4`}>
// //             Our Locations
// //           </p>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //             {locations.map((loc, i) => (
// //               <div
// //                 key={i}
// //                 className="relative flex items-center gap-4 p-4 rounded-xl border border-[#886c46]/20 bg-black/2 hover:bg-[#886c46]/5 hover:border-[#886c46]/50 transition-all duration-300 group overflow-hidden"
// //               >
// //                 <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-black/5 border border-[#886c46]/30 group-hover:bg-[#886c46]/10 group-hover:border-[#886c46]/60 transition-all duration-300">
// //                   <MapPin size={18} className="text-[#886c46]" />
// //                 </div>
// //                 <div className="flex flex-col">
// //                   <span className={`${playfair.className} text-[#886c46] text-[10px] font-semibold tracking-[0.18em] uppercase mb-0.5`}>
// //                     {loc.label}
// //                   </span>
// //                   <span className={`${merri.className} text-black/80 text-sm font-light leading-snug`}>
// //                     {loc.addr}
// //                   </span>
// //                   <span className={`${merri.className} text-black/45 text-xs font-light mt-0.5`}>
// //                     {loc.city}
// //                   </span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <motion.div
// //           initial={{ scaleX: 0 }}
// //           animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
// //           transition={{ duration: 1 }}
// //           className="h-px bg-linear-to-r from-white via-[#886c46] to-white mb-12 origin-left"
// //         />

// //         <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm w-full text-center">
// //           <p className={`${merri.className} text-black/50 font-light w-full text-center`}>
// //             © {new Date().getFullYear()} <span className="text-[#886c46]">TEXO PREFAB WORLD</span>. All rights reserved.
// //           </p>
// //         </div>

// //       </div>

// //       <motion.div
// //         initial={{ scaleX: 0 }}
// //         animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
// //         transition={{ duration: 1, delay: 0.6 }}
// //         className="h-1.5 bg-linear-to-r from-white via-[#886c46] to-white origin-left"
// //       />
// //     </footer>
// //     </>
// //   );
// // }


// 'use client'
// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Merriweather, Playfair_Display } from 'next/font/google';
// import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
// import Image from 'next/image';

// const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] });
// const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

// export default function PremiumFooter() {
//   const footerRef = useRef(null);
//   const isInView = useInView(footerRef, { once: true, amount: 0.2 });

//   const quickLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Products', href: '/products' },
//     { name: 'Features', href: '/features' },
//     { name: 'Inspiration Gallery', href: '/inspiration-gallery' },
//     { name: 'About', href: '/about' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Blogs', href: '/blogs' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Instagram, href: '#', label: 'Instagram' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Youtube, href: '#', label: 'YouTube' },
//   ];

//   const contacts = [
//     { icon: Mail,  label: 'Email',     value: 'prefab@mail.com' },
//     { icon: Mail,  label: 'Support',   value: 'prefab@mail.com' },
//     { icon: Phone, label: 'Phone',     value: '+91 123456789'   },
//     { icon: Phone, label: 'Toll Free', value: '+91 123456789'   },
//   ];

//   const locations = [
//     { label: 'Headquarters', addr: 'Prefab World, Hyderabad', city: 'Telangana, India' },
//     { label: 'Branch Office', addr: 'Prefab World, Hyderabad', city: 'Telangana, India' },
//   ];

//   return (
//     <footer ref={footerRef} className="bg-white border-t border-black/10 z-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">

//         {/* Main grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12 border-b border-black/8">

//           {/* Col 1 — Brand */}
//           <div>
//             <div className="w-full mb-6">
//                <Image
//                 src="/black-logo.png"
//                 alt="Prefab Construction Company Logo"
//                 width={200}
//                 height={150}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//              </div>
//             <p className={`${merri.className} text-black text-sm font-light leading-relaxed mb-6`}>
//               Elevating experiences through innovation and excellence. Your trusted partner in success.
//             </p>
//             <div className="flex gap-2">
//               {socialLinks.map((s) => (
//                 <motion.a
//                   key={s.label}
//                   href={s.href}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-9 h-9 rounded-lg border border-black/10 hover:border-[#886c46] flex items-center justify-center text-black hover:text-[#886c46] transition-colors duration-200"
//                 >
//                   <s.icon size={16} />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Col 2 — Quick Links */}
//           <div>
//             <p className={`${merri.className} text-[10px] uppercase tracking-[0.15em] text-black font-light mb-5`}>
//               Quick Links
//             </p>
//             <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className={`${merri.className} text-sm text-black hover:text-[#886c46] font-light transition-colors duration-200`}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Col 3 — Contact */}
//           <div>
//             <p className={`${merri.className} text-[10px] uppercase tracking-[0.15em] text-black font-light mb-5`}>
//               Connect With Us
//             </p>
//             <div className="divide-y divide-black/6">
//               {contacts.map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 py-2.5 group">
//                   <div className="shrink-0 w-7 h-7 rounded-full border border-black/10 group-hover:border-[#886c46]/40 flex items-center justify-center transition-colors duration-200">
//                     <item.icon size={13} className="text-[#886c46]" />
//                   </div>
//                   <div>
//                     <p className={`${merri.className} text-[10px] text-black font-light`}>{item.label}</p>
//                     <p className={`${merri.className} text-sm text-black font-light`}>{item.value}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* Locations */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-6 border-b border-black/8">
//           {locations.map((loc, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-3 px-4 py-3 rounded-xl border border-black/8 hover:border-[#886c46]/40 transition-colors duration-200 group"
//             >
//               <MapPin size={16} className="text-[#886c46] shrink-0" />
//               <div>
//                 <p className={`${merri.className} text-[10px] uppercase tracking-[0.12em] text-[#886c46] font-light mb-0.5`}>
//                   {loc.label}
//                 </p>
//                 <p className={`${merri.className} text-sm text-black font-light`}>{loc.addr}</p>
//                 <p className={`${merri.className} text-xs text-black font-light`}>{loc.city}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Copyright */}
//         <div className="py-5 text-center">
//           <p className={`${merri.className} text-xs text-black font-light`}>
//             © {new Date().getFullYear()} <span className="text-[#886c46]">TEXO PREFAB WORLD</span>. All rights reserved.
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }

'use client'
import React, { useState } from 'react'
import { MapPin } from 'lucide-react'
import { Merriweather, Playfair_Display } from 'next/font/google'
import Image from 'next/image'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600'] })

const quickLinks = {
  Company: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blogs', href: '/blogs' },
  ],
  Explore: [
    { name: 'Products', href: '/products' },
    { name: 'Features', href: '/features' },
    { name: 'Gallery', href: '/inspiration-gallery' },
    { name: 'Contact', href: '/contact' },
  ],
}

const officeLocations = [
  {
    label: 'Main Office',
    address: 'Prefab World, Hyderabad, Telangana',
    href: 'https://www.google.com/maps/search/?api=1&query=Prefab+World+Hyderabad',
  },
  {
    label: 'Sub Office',
    address: 'Prefab World, Secunderabad, Telangana',
    href: 'https://www.google.com/maps/search/?api=1&query=Prefab+World+Secunderabad',
  },
]

const contacts = [
  { label: 'Email',     value: 'prefab@mail.com' },
  { label: 'Phone',     value: '+91 123 456 789' },
  { label: 'Support',   value: 'support@mail.com' },
  { label: 'Toll Free', value: '1800 000 0000' },
]

const socialLinks = [
  {
    label: 'Facebook', href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    label: 'Instagram', href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  },
  {
    label: 'LinkedIn', href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'YouTube', href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>,
  },
  {
    label: 'X', href: '#',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.744l7.736-8.835L1.254 2.25H8.08l4.264 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-white z-99999">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16 border-b border-[#e8e2da]">

          {/* Brand col */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Image
              src="/black-logo.png"
              alt="Texo Prefab World"
              width={160}
              height={52}
              className="h-auto w-full object-contain"
            />
            <p className={`${merri.className} text-[13px] font-light leading-[1.9] text-[#5a5248]`}>
              Indias trusted name in modular and prefabricated construction — built for quality, designed for life.
            </p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-sm border border-[#e2dcd4] text-[#886c46] hover:bg-[#886c46] hover:text-white hover:border-[#886c46] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10">
              {Object.entries(quickLinks).map(([group, links]) => (
                <div key={group} className="min-w-35">
                  <p className={`${merri.className} text-[9px] uppercase tracking-[0.2em] text-[#886c46] mb-3`}>
                    {group}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {links.map(link => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className={`${merri.className} text-[13px] font-light text-[#4a4540] hover:text-[#886c46] transition-colors duration-200`}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <p className={`${merri.className} text-[9px] uppercase tracking-[0.2em] text-[#886c46] mb-5`}>
              Contact
            </p>
            <div className="grid grid-cols-2 gap-5">
              {contacts.map(c => (
                <div key={c.label} className="rounded-xl border border-[#e2dcd4] bg-[#fcfbf8] p-5">
                  <p className={`${merri.className} text-[9px] uppercase tracking-[0.14em] text-[#aaa398] mb-1`}>{c.label}</p>
                  <p className={`${merri.className} text-[13px] font-light text-[#4a4540]`}>{c.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Office addresses ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-[#e8e2da]">
          {officeLocations.map((office) => (
            <a
              key={office.label}
              href={office.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-[#e2dcd4] bg-[#fcfbf8] p-5 transition-all duration-200 hover:border-[#886c46] hover:bg-[#fff8ed]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#886c46]/10 text-[#886c46]">
                <MapPin size={18} />
              </div>
              <p className={`${merri.className} text-[10px] uppercase tracking-[0.16em] text-[#886c46] mb-2`}>{office.label}</p>
              <p className={`${merri.className} text-[13px] font-light text-[#4a4540]`}>{office.address}</p>
            </a>
          ))}
        </div>

        {/* ── Newsletter strip ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-[#e8e2da]">
          <div>
            <p className={`${playfair.className} text-[15px] font-medium text-[#1c1814]`}>Stay in the loop</p>
            <p className={`${merri.className} text-[11px] font-light text-[#aaa398] mt-0.5`}>Get updates on new products and projects.</p>
          </div>
          <div className="flex border border-[#e2dcd4] rounded-sm overflow-hidden focus-within:border-[#886c46] transition-colors duration-200 w-full sm:w-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className={`${merri.className} flex-1 sm:w-64 bg-transparent px-4 py-2.5 text-[12px] font-light text-[#1c1814] placeholder:text-[#ccc5bb] outline-none`}
            />
            <button className={`${merri.className} shrink-0 bg-[#886c46] px-5 py-2.5 text-[10px] font-light tracking-[0.12em] uppercase text-white hover:bg-[#6f5838] transition-colors duration-200`}>
              Subscribe
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-5">
          <p className={`${merri.className} text-[11px] font-light text-[#aaa398]`}>
            © {new Date().getFullYear()} <span className="text-[#886c46]">Texo Prefab World</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['privacy-policy', 'terms-of-use'].map(item => (
              <a
                key={item}
                href={item}
                className={`${merri.className} text-[11px] font-light text-[#aaa398] hover:text-[#4a4540] transition-colors duration-200`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}