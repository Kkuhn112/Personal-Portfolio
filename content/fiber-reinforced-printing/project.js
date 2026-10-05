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

   interface. Drop these files in this folder and they appear:
   A figure whose file is missing hides itself, so nothing looks
   broken before the images are added.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["fiber-reinforced-printing"] = {

  title:   "Continuous Fiber Reinforced Printing",
  kicker:  "Research and Design Automation",
  featured: false,

  // Home-page card summary (keep this to one or two sentences)

  // Project-page subtitle (one sentence)

  cover:   "printing-nozzle.jpg",
  hero:    "printing-nozzle.jpg",

  tags:    ["R&D", "Design Software", "Composites", "Python"],

  // Facts shown in the box at the top of the project page
  spec: [
    ["Role",     "Undergraduate Researcher"],
    ["Advisor",  "Dr. Guoying Dong, CU Denver"],
    ["Timeline", "2025 to Present"],
    ["Built in", "Python, OpenCASCADE, Clipper"],
    ["Status",   "Ongoing"]
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
      ]
    },

    {
      id: "problem",
      heading: "The Problem",
      body: [
      ],
      list: [
        "Fiber is deposited using uniform infill patterns rather than along load paths.",
        "Reinforcement is applied across the whole part instead of where it is needed.",
        "Material use is inefficient, which raises cost and print time.",
      ]
    },

    {
      id: "software",
      body: [
        "The two are solved together. Each layer's fiber is designed first, and the plastic is then printed around it: the walls close around the fiber as a channel, the infill and skins stop at those walls, and the layers above and below are printed solid so the strand is laid on plastic and covered by it. The result is one program with the plastic and the fiber interleaved layer by layer."
      ],
      list: [
        "STEP parts imported, placed, oriented and arranged on the build plate.",
        "Fiber drawn by hand, with a pen tool, or generated automatically as continuous strands.",
        "Fiber channels formed as walled cavities with solid floor and roof layers.",
        "Printer-aware strand preview showing where the cutter fires and which strands are too short to cut.",
        "One exported program per job, with plastic and fiber tool changes interleaved."
      ],
      figures: [
      ]
    },

    {
      body: [
      ],
      figures: [
      ]
    },

    {
      id: "significance",
      heading: "Why the Tooling Matters",
      body: [
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
      ],
      list: [
        "FEA-driven optimization of fiber placement.",
        "Direct STL support alongside STEP.",
        "Wider printer support through additional post-processors."
      ]
    }
  ]
};
