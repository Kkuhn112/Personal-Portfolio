/* ============================================================
   PROJECT: Continuous Fiber Reinforced Printing
   ------------------------------------------------------------
   HOW TO EDIT:
   - Change any text between the quotes or backticks below.
   - "cover" and "hero" and figure "src" are image file names that
     live in THIS folder. Drop a new image in the folder and put its
     file name here to use it.
   - "featured: true" makes this the large card on the home page.
   - To hide a link button, leave its "href" empty ("").
   - A "section" becomes one titled block on the project page.
     "body" is one or more paragraphs. "list" is optional bullets.
     "figures" is optional images (one shows large, two show side by side).
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["fiber-reinforced-printing"] = {

  title:   "Continuous Fiber Reinforced Printing",
  kicker:  "Research and Design Automation",
  featured: true,

  // Home-page card summary (keep this to one or two sentences)
  blurb:   "A software system that plans continuous carbon-fiber toolpaths and generates machine-ready G-code, developed as part of peer-reviewed composites research at CU Denver.",

  // Project-page subtitle (one sentence)
  tagline: "Planning where carbon fiber goes inside a printed part, so reinforcement follows the load rather than a uniform infill pattern.",

  cover:   "printing-nozzle.jpg",
  hero:    "printing-nozzle.jpg",

  tags:    ["R&D", "Design Software", "Composites", "Python"],

  // Facts shown in the box at the top of the project page
  spec: [
    ["Role",        "Undergraduate Researcher"],
    ["Advisor",     "Dr. Guoying Dong, CU Denver"],
    ["Timeline",    "2025 to Present"],
    ["Tools",       "Python, OpenCASCADE, G-code"],
    ["Status",      "Ongoing"]
  ],

  // Buttons at the top of the project page (empty href hides the button)
  links: [
    { label: "Journal paper (DOI)", href: "https://doi.org/10.1080/15376494.2026.2702552" },
    { label: "GitHub",              href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "Continuous carbon fiber (CCF) additive manufacturing deposits carbon fiber strands into a polymer as a part is printed. The strength gained from that fiber depends heavily on how well it is aligned with the principal stress directions in the part, which makes toolpath generation the deciding factor in structural performance.",
        "This project is a software system that plans those fiber paths from the part geometry and outputs machine-ready G-code. The goal is to bridge the gap between fully manual G-code editing and general-purpose slicing software that was never built for fiber."
      ]
    },
    {
      id: "problem",
      heading: "The Problem",
      body: [
        "Commercial slicing software is designed for isotropic thermoplastics, where material behaves the same in every direction. Continuous fiber is anisotropic, so treating it like ordinary plastic wastes its main advantage."
      ],
      list: [
        "Fiber is deposited using uniform infill patterns rather than along load paths.",
        "Reinforcement is applied across the whole part instead of where it is needed.",
        "Material use is inefficient, which raises cost and print time.",
        "Advanced control requires writing G-code by hand."
      ]
    },
    {
      id: "software",
      heading: "Software System",
      body: [
        "The system works like a purpose-built CAM program for fiber. It imports part geometry, slices it into layers, identifies where fiber can be placed, and plans continuous paths that respect the physical limits of the print head."
      ],
      list: [
        "Geometry import from STEP files using OpenCASCADE.",
        "Layer generation through Z-axis slicing.",
        "Region identification to find valid fiber-placement zones.",
        "Adaptive path planning that maximizes path length, enforces a minimum bend radius, and avoids collisions.",
        "Path optimization for continuity and alignment.",
        "G-code generation that coordinates fiber deposition and cutting."
      ],
      figures: [
        { src: "fiber-slicer-software.jpg", caption: "The fiber slicer prototype, defining continuous fiber paths over a sliced layer." }
      ]
    },
    {
      id: "manufacturing",
      heading: "Printing and Testing",
      body: [
        "Specimens are printed on a continuous-fiber capable machine and then tested to compare reinforced and unreinforced designs. Fiber paths are drawn to steer reinforcement across the region where a crack is expected to form."
      ],
      figures: [
        { src: "printing-specimen.jpg", caption: "Printing a test specimen with continuous fiber." },
        { src: "tensile-test.jpg",      caption: "Tensile testing a printed specimen to failure." }
      ]
    },
    {
      id: "results",
      heading: "Results",
      body: [
        "Compared with conventional slicing, controlling fiber placement improved how efficiently material was used and changed how specimens failed. Placing fiber across the crack path raised the load the specimen could carry and changed its fracture behavior."
      ],
      list: [
        "25 to 40 percent reduction in material usage.",
        "Better alignment of reinforcement with load directions.",
        "Direct control over which regions are reinforced."
      ],
      figures: [
        { src: "fractured-specimen.jpg", caption: "A tested specimen. Continuous fiber bridges the fracture surface." },
        { src: "force-displacement.png",  caption: "Force versus crosshead displacement, comparing a specimen with fiber against one without." }
      ]
    },
    {
      id: "publication",
      heading: "Publication",
      body: [
        "This research contributed to a peer-reviewed journal paper, \"Dual-wall continuous fiber reinforced cellular structures made by fused filament fabrication,\" published in Mechanics of Advanced Materials and Structures (2026).",
        "Authors: Halston Sandford, Brian Lim, Nikola Hilderbrand, Kestin Kuhn, and Guoying Dong. DOI: 10.1080/15376494.2026.2702552."
      ]
    },
    {
      id: "future",
      heading: "Future Work",
      body: [
        "Development continues toward a more complete design-to-print workflow."
      ],
      list: [
        "FEA-driven optimization of fiber placement.",
        "Direct STL support alongside STEP.",
        "Real-time simulation of toolpaths before printing."
      ]
    }
  ]
};
