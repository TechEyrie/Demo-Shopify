/**
 * The 8 featured products from main.html, lifted verbatim out of the copy-pasted
 * markup. Presentation (badge colors, swatch gradients) lives in ProductCard.
 */
export const products = [
  {
    id: "chromawing-crystal-dragon",
    name: "ChromaWing Crystal Dragon",
    price: 28,
    compareAt: 35,
    rating: 5.0,
    reviews: 184,
    spec: "38 Flex Joints • Smooth Silk PLA",
    badge: { label: "Bestseller", variant: "sale" },
    discountLabel: "Save 20%",
    colorways: [
      { title: "Rainbow Silk", className: "bg-linear-to-r from-red-500 via-amber-400 to-blue-500" },
      { title: "Metallic Blue", className: "bg-blue-600" },
      { title: "Volcanic Red", className: "bg-rose-700" },
    ],
    alt: "Close-up studio product photography of a vivid rainbow silk PLA articulated 3D printed dragon with crystal spine segments and multi-jointed posable wings sitting on an architectural concrete slab against a clean minimal studio backdrop.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp84OdizooHuMPtOW_3K0yiWHP-_zGSmVdZBvG7g06JTY3_U_KrqHXewiERN5mXsnbu8k3VLoLUEGZQxMxOuu8X7YOqE75o_IljeOKFOE15BAW9bV8eDH_thu_ruGqQfC5TWBHU7t0z3JWR_IVgS8YWjB7qDiycUUw29mOvIXw3bmrTQcjGWYpzXn4XA31bqJ7pZmX0Jh_djgC7vQcgOU0LPpQZt6Wt6FQHVXPFol4",
  },
  {
    id: "gearbot-mk-ii",
    name: "GearBot Mk.II Companion",
    price: 24,
    compareAt: null,
    rating: 4.9,
    reviews: 92,
    spec: "Kinetic Chest Gears • Standing Pose",
    badge: { label: "New Drop", variant: "dark" },
    discountLabel: null,
    colorways: [
      { title: "Mint & Orange", className: "bg-emerald-300" },
      { title: "Matte Gray", className: "bg-slate-500" },
      { title: "Cyber Yellow", className: "bg-amber-400" },
    ],
    alt: "Crisp studio render of a retro mint-green and safety-orange 3D printed companion robot with rotating chest gears and articulated ball-jointed limbs posing neatly on a light wood tabletop.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiUwlr2vBEq5RHMSGLFPqwn2lAnuKh_KUXmGhbvW_9CP7tnrHTNzNSbPnzTBvRvFtmYTbWh1Hku0wWYmTB3BR8FiOyHGPc8qfAM-e7AWa-0IZZe9A8UH1Qp1xicLgJu4zg2vo8VvDG9kjzWeXtfoj3cFWKvNUT301fAkutyitpOmvCeBrruyOOp0MpJzrdECFJzCsfGu0Jw22yx7C_LSi1uFIQ-WTIB3DUJ4fNPYZM",
  },
  {
    id: "infinity-kinetic-hex-cube",
    name: "Infinity Kinetic Hex Cube",
    price: 14,
    compareAt: null,
    rating: 4.9,
    reviews: 310,
    spec: "Silent Folding • Dual-Extruded",
    badge: { label: "Staff Pick", variant: "secondary" },
    discountLabel: null,
    colorways: [
      { title: "Ruby & Navy", className: "bg-linear-to-r from-red-600 to-blue-900" },
      { title: "Emerald & Gold", className: "bg-linear-to-r from-emerald-600 to-amber-400" },
    ],
    alt: "Precision multi-color dual-tone ruby red and navy blue geometric 3D printed infinity fidget cube unfolding smoothly on an ultra-clean white surface with soft ambient lighting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLMFO0_68-dblu5mib99OTVkWOjoSJy7NsZfmQjJkP_bQ2eh8PYfgn91RfXuW4QUmk7U7ECwy3KsgGtAMkdoWRQdoRG6MVfSXDKGOG6-V7oq7rpeBxjPsMqAcKvUlVCgS8sdhpHTnz-asTQdvqLXpbqu5iaGJTiEAPhYInnudeAaxMeKVVpb2VYuP3ph__wf365smumA4tc4sN4qO8882m4hYnidypRerJ7ZTmkf-O",
  },
  {
    id: "flexi-luminescent-caterpillar",
    name: "Flexi Luminescent Caterpillar",
    price: 16,
    compareAt: null,
    rating: 4.8,
    reviews: 77,
    spec: "24 Micro Segments • Phosphor PLA",
    badge: { label: "Glow In Dark", variant: "tertiary" },
    discountLabel: null,
    colorways: [
      { title: "Pastel Glow", className: "bg-emerald-200" },
      { title: "Neon Lime", className: "bg-lime-400" },
    ],
    alt: "Vibrant 3D printed flexible caterpillar with pastel gradient body transitioning into bioluminescent soft glow at tail section lying coiled on modern felt desk mat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUbDrzQ2nM-gU0ZZriFp5ZlrJZYATSHJi5_wG8DE0Y8pu5J_PCJXzB-EFsMcHkht_JzSBRvmDl8UsJwjecLgSw4U4a-cubUdMCWQRtZ-SvYW7Fq5OZtZA17oE6Rd8leHxuWDCRR9tqPPKEyAhztBShZJuLYS9KjzIkhOkExYxzlxBT_RPPj0RJUH8_iMhf-1icp_I7rPyX4ZjIHIAJzSOrC4OOu63itXexd0otz5r1",
  },
  {
    id: "robo-rex-desk-guardian",
    name: "Robo-Rex Desk Guardian",
    price: 32,
    compareAt: 40,
    rating: 5.0,
    reviews: 143,
    spec: "Chomping Action • Heavy Base",
    badge: { label: "Sale -20%", variant: "sale" },
    discountLabel: null,
    colorways: [
      { title: "Obsidian Black", className: "bg-zinc-900" },
      { title: "Forest Camo", className: "bg-emerald-800" },
    ],
    alt: "Matte black and stealth gray 3D printed mechanical tyrannosaurus rex toy with spring-loaded articulated jaw and posable tail standing fiercely in daylight studio lighting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG-X27uIDh3zl_XGfat9OQi3zVafpWiotZq7p0lrSxTF-Yxq0zz0qAOhRgm57xNmXNkfrN7340eyaLXdWywsX1RmezhdWmxBcH7K7ZpNs39vHoO1vVSRm335x1r55tHXihvk-PSgrpH1EwnSQZwtXGXhWxPLCNUz1RhWX4kqhWezNmaCCPHpHQjIioorQ7y2zkZLoUEPP0jf1avrGOpKw2VTzS99PNFHUnDpRaJeZb",
  },
  {
    id: "articulated-rainbow-koi",
    name: "Articulated Rainbow Koi Fish",
    price: 18,
    compareAt: null,
    rating: 4.9,
    reviews: 64,
    spec: "Natural Swimmer Motion • Calming",
    badge: null,
    discountLabel: null,
    colorways: [
      { title: "Silk Sunrise", className: "bg-linear-to-r from-orange-400 to-pink-500" },
      { title: "Ocean Blue", className: "bg-cyan-600" },
    ],
    alt: "Silky smooth multi-color 3D printed articulated skeleton koi fish resting curved on a light gray felt surface showcasing natural fluid undulation and shimmer.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxq0llGq3G9a9QRKmIh5dHf2id5qLp51JCqLj_MouaRYwG-PpD3UF6fLuZPE6hIan6SKSalOUxbWGcI-9RDBRN1BY6zwWFWidk_yPtxcZ2kWwZpRG6oPp-vqpLPpdUxCwmK-mZ-CCtwu0JFUu3BE-yWXlujeVYSlal2RL54vrUm9_dqh8ixxoYRjVpKTTgV1MQMknMfPQMbtXeT9iUtuJYqsUCnVClBHl9IliErCKd",
  },
  {
    id: "micro-pocket-gyro-spinner",
    name: "Micro Pocket Gyro Spinner",
    price: 12,
    compareAt: null,
    rating: 4.8,
    reviews: 215,
    spec: "3-Axis Gimbal • High Precision",
    badge: { label: "Perfect Gift", variant: "muted" },
    discountLabel: null,
    colorways: [
      { title: "Anodized Tri-color", className: "bg-linear-to-tr from-purple-500 via-teal-400 to-amber-300" },
    ],
    alt: "Tri-color multi-axis 3D printed mechanical gyroscopic gimbal ring spinner spinning smoothly between thumb and index finger against bright minimalist background.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHr4zPDRFxNTAUJz91YE3Fxc8r5YSmxNqfKYYq9nozrHa4_q1dtMfquMwvCaEzESr9NbPYQFCpKDR-4dlG2iYa5_PI8S6URltvF1c2j-ug6cPXSxHeqjyRInGGl4WqUtq5ACZwI_om-erLbtZ9bMC2mR9Z0ckEN5EEl3HORS1omKKhya68ckfh3p0SgtCESsfEHeugVSPifRPcqIwn1NiwVtPnIe4RmzMO4Ebauhbr",
  },
  {
    id: "baby-pygmy-wyvern-keychain",
    name: "Baby Pygmy Wyvern Keychain",
    price: 9.5,
    compareAt: null,
    rating: 4.9,
    reviews: 88,
    spec: "Pocket Sized • Stainless Split Ring",
    badge: null,
    discountLabel: null,
    colorways: [
      { title: "Ruby Red", className: "bg-rose-600" },
      { title: "Amethyst Purple", className: "bg-purple-600" },
    ],
    alt: "Delicate miniature ruby red 3D printed baby wyvern keychain figurine resting beside a metal brass ring key clasp on desk mat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKlQX2mXSvM7aF1_G0ikAvtqsaSJlxie2DpPBpdR9aDfnFuKoxZmQZbC9ppa1Xljo0akbDyuKUISGQsjr6gWJOA0ufzxWrswp42dCVdWKQSpoF5IDUfbEuOqcBOfhW-i8AMD4-mvsqpHfik_qflam_K4Php26-4YJ-HiLlTQYloyWqZ7GOrwL-TFoZy3vPmzwT3bhYFQVNGu0DG9_wLQF3JaAYrinePKhDK-tuSJzw",
  },
];
