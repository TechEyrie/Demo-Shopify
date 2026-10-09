/**
 * Repeated content collections from main.html.
 * One-off prose stays inline in its component; only things that are mapped over live here.
 */

export const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAxP9bd6ZxSz57SVV1ggHGgyVWz052jY-urV5x8vkeGdEJllwmUbN3AUJmLPdhYDVbHGTGnNJgkIsqONDpA41xt6HbRkcUq3ADyD9GQS8v3fTyqiNWF09ogAsV10vpjGKZTCDd7foykhJEWqiOwznI3aK1TmWzMkcS0-zaCMPmS0J2UfABz8Ch6bNGS92T-ODN9iqqCYvBHqdJlNix3e3ncQWBVWbKSbbuRJ4meCiB6";

export const HERO_IMAGE_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCdHrKb7hDKNhFena8ZCfeuQNAxxYrkD0Gt_gy8OZsxfgsKtLVEjsJTF0y4XPAw9nVqITomH7VhaaorADYhkH-NT6hL52mhJ284ZaCoT_qqfwDjfxetCVFjuiMgX-m1RJfBvJmCur3wRiESbQHqsgVGs0g0M902_Imc0y-TTikK8-BTcnSGiMQDmAxB4zZBla9Jx6lBt84s0jyACJ1zbNiF62E5Pk8X3Qi8kDKQVGac";

export const HERO_IMAGE_ALT =
  "Articulated 3D printed toys including rainbow crystal dragon, retro robot, kinetic hex cube, and flexi fish displayed on modern workspace";

export const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Shop", href: "#", active: false },
  { label: "About", href: "#", active: false },
  { label: "Contact", href: "#", active: false },
];

export const categories = [
  { id: "all", label: "All Toys (24)" },
  { id: "dragons", label: "Articulated Dragons (8)" },
  { id: "robots", label: "Mini Mech Robots (6)" },
  { id: "fidgets", label: "Kinetic Fidgets (5)" },
  { id: "flexi", label: "Flexi Animals (5)" },
];

export const benefits = [
  {
    icon: "eco",
    iconClass: "text-tertiary",
    title: "Safe & Non-Toxic Materials",
    body: "Food-grade, biodegradable PLA filaments derived from renewable cornstarch. Rigorously tested for toy safety compliance with zero harsh chemicals.",
    footnote: "EN-71 / ASTM Compliant",
    footnoteClass: "text-tertiary",
  },
  {
    icon: "all_inclusive",
    iconClass: "text-badge-sale",
    title: "Print-in-Place Designs",
    body: "Completely articulated limbs, wings, and spines straight off the build plate. Zero weak glued joints, screws, or tiny parts that easily snap off.",
    footnote: "Seamless Internal Hinges",
    footnoteClass: "text-badge-sale",
  },
  {
    icon: "local_shipping",
    iconClass: "text-text-primary",
    title: "Lightning Fast Shipping",
    body: "Orders printed and dispatched within 48 hours from our US & EU micro-print hubs. Fully tracked delivery straight to your doorstep.",
    footnote: "Avg. 2.4 Day Transit",
    footnoteClass: "text-text-primary",
  },
  {
    icon: "card_giftcard",
    iconClass: "text-amber-600",
    title: "Gifting & Desk Ready",
    body: "Loved equally by children aged 5+ for active storytelling play, and adults as tactile desk fidgets, focus aids, and display art.",
    footnote: "Recycled Gift Box Included",
    footnoteClass: "text-amber-600",
  },
];

export const stats = [
  { icon: "toys", iconClass: "text-badge-sale", value: "250K+", label: "Kinetic Toys Printed & Shipped" },
  { icon: "print", iconClass: "text-tertiary", value: "40+", label: "Custom High-Speed CoreXY Units" },
  { icon: "straighten", iconClass: "text-text-primary", value: "0.12mm", label: "Micro Precision Layer Height" },
  { icon: "recycling", iconClass: "text-emerald-600", value: "100%", label: "Recycled Scrap Loop Program" },
];

export const reviews = [
  {
    when: "2 days ago",
    body: "“The articulated crystal dragon survived my 7-year-old’s daily outdoor quests without a single crack. The silky rainbow colors catch the morning sun in her room and it feels remarkably sturdy compared to cheap plastic store toys.”",
    initials: "SM",
    avatarClass: "bg-rose-100 text-rose-600",
    name: "Sarah M.",
    role: "Mom of 2, Verified Buyer",
  },
  {
    when: "1 week ago",
    body: "“The tolerances on the GearBot and kinetic cube are astonishing. Absolutely Bambu Lab-level layer consistency with zero stringing or layer shifts. My favorite desk toy to keep my hands moving during zoom engineering reviews.”",
    initials: "DK",
    avatarClass: "bg-blue-100 text-blue-600",
    name: "David K.",
    role: "Mechanical Engineer & Collector",
  },
  {
    when: "2 weeks ago",
    body: "“Bought 3 pocket gyros as gifts and a rainbow koi fish for myself. Arrived in just 3 days in beautifully designed compostable cardboard packaging. Both the adults and kids at our party were fighting over them!”",
    initials: "ER",
    avatarClass: "bg-emerald-100 text-emerald-600",
    name: "Elena R.",
    role: "Gift Shopper, Verified Buyer",
  },
];

export const footerShopLinks = [
  "Articulated Dragons",
  "Mechanical Robots",
  "Fidget & Kinetic Toys",
  "Desk Companions",
  "Mystery Filament Bundles",
];

export const footerCareLinks = [
  "Order Tracking",
  "Shipping & Global Rates",
  "Returns & 30-Day Guarantee",
  "Material Safety & Care",
  "Contact Print Engineers",
];

export const socials = [
  { title: "Instagram", icon: "photo_camera" },
  { title: "TikTok", icon: "videocam" },
  { title: "YouTube", icon: "smart_display" },
  { title: "Discord Community", icon: "forum" },
];

export const paymentMethods = [
  { label: "Visa", highlight: false },
  { label: "Mastercard", highlight: false },
  { label: "Amex", highlight: false },
  { label: "Apple Pay", highlight: false },
  { label: "Google Pay", highlight: false },
  { label: "PayPal", highlight: false },
  { label: "Shop Pay", highlight: true },
];

export const legalLinks = ["Privacy Policy", "Terms of Service", "Accessibility"];
