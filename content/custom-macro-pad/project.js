/* ============================================================
   PROJECT: Custom Macro Pad
   Edit any text below. Image files live in this folder.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["custom-macro-pad"] = {

  title:   "Custom Macro Pad",
  kicker:  "Design for Manufacturing",
  featured: false,

  blurb:   "A compact input device designed around real print constraints, then built, wired, and put to daily use.",
  tagline: "A tidy example of taking an electronics enclosure from CAD to a finished, printed product.",

  cover:   "macropad.jpg",
  hero:    "macropad.jpg",

  tags:    ["Design for Manufacturing", "CAD", "Embedded", "FDM Printing"],

  spec: [
    ["Type",     "Custom input device"],
    ["Timeline", "2025"],
    ["Tools",    "CAD, FDM printing, firmware"],
    ["Status",   "Built and in use"]
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "A small, durable device for triggering keyboard shortcuts. I designed the enclosure around the electronics and the realities of printing it, then built and wired the unit and flashed its firmware."
      ]
    },
    {
      id: "design",
      heading: "Design for Print",
      body: [
        "The enclosure was designed to be manufacturable on an FDM printer while still fitting the switches and connector cleanly."
      ],
      list: [
        "Enclosure built around switch spacing and top-plate fit.",
        "Wall thickness, USB access, and assembly clearances tuned for FDM.",
        "Print orientation chosen for strength and surface finish."
      ]
    },
    {
      id: "result",
      heading: "Result",
      body: [
        "The finished macro pad is in everyday use. It is a straightforward demonstration that a model on screen becomes a reliable physical product when it is designed to be made."
      ]
    }
  ]
};
