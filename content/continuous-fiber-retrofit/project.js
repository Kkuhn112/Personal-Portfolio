/* ============================================================
   PROJECT: Continuous Fiber Retrofit System
   ------------------------------------------------------------
   PHOTOS: drop images (CAD renders, prints, test rigs, hardware)
   into this folder, then set "cover" and "hero" to a file name,
   e.g. cover: "cad-render.jpg". Add more images to any section's
   "figures" list. While "cover" is empty, the card shows a clean
   placeholder, so nothing looks broken.

   This is an active project. Update the copy and add figures as
   the design matures. Keep ongoing work in the present tense.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["continuous-fiber-retrofit"] = {

  title:   "Continuous Fiber Retrofit System",
  kicker:  "Mechanical Design and Research",
  featured: true,

  blurb:   "A system I am designing that converts a standard 3D printer into a continuous carbon-fiber printer. I own the full mechanical design, from flow behavior through tolerance stack-up and material selection.",
  tagline: "Turning any standard 3D printer into a continuous carbon-fiber machine, designed from the ground up.",

  cover:   "Fiber Printing Single Nozzle Prototype.jpeg",
  hero:    "Fiber Printing Single Nozzle Prototype.jpeg",

  tags:    ["Mechanical Design", "Fluid Dynamics", "Tolerance Analysis", "Research"],

  spec: [
    ["Role",     "Lead Mechanical Designer"],
    ["Context",  "Undergraduate research, CU Denver"],
    ["Focus",    "Flow, tolerances, materials"],
    ["Status",   "In development"]
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "Machines that print continuous carbon fiber are expensive and uncommon, which keeps the strength of continuous-fiber composites out of reach for most printers. I am designing a component that retrofits a standard FDM 3D printer so it can place continuous carbon fiber, making the capability far more accessible.",
        "I am responsible for the entire mechanical design of the system, and for the decisions that determine whether it works reliably on real hardware."
      ]
    },
    {
      id: "scope",
      heading: "Design Ownership",
      body: [
        "This is a ground-up mechanical design. I own it end to end rather than integrating an existing part."
      ],
      list: [
        "Full mechanical design of the component and its integration with the printer.",
        "Fluid dynamics of the material flow path.",
        "Tolerance stack-up across the assembly.",
        "Material selection for temperature, wear, and chemical exposure."
      ]
    },
    {
      id: "fluid-dynamics",
      heading: "Fluid Dynamics",
      body: [
        "The flow path has to deliver material predictably for deposition to stay consistent. I am working through the flow behavior inside the component so the output is repeatable across the printer's range of motion."
      ]
      // Add a diagram or flow visualization here:
      // figures: [ { src: "flow.jpg", caption: "..." } ]
    },
    {
      id: "tolerances",
      heading: "Tolerance Stack-Up",
      body: [
        "Fiber placement depends on tight alignment between the fiber path, the nozzle, and the surrounding hardware. I am running the tolerance stack-up so the parts locate correctly once assembled, and so the design tolerates the variation found across different printers."
      ]
    },
    {
      id: "materials",
      heading: "Material Selection",
      body: [
        "The component sees high temperature, abrasive fiber, and process chemistry at the same time. I am selecting materials that hold up to all three without giving up the precision the design depends on."
      ]
    },
    {
      id: "status",
      heading: "Status",
      body: [
        "The design is in active development and moving toward integration and testing on a standard printer. I will add CAD renders, build photos, and test results here as it progresses."
      ]
    }
  ]
};
