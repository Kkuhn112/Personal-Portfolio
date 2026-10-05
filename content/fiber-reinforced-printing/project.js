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

   NEW SCREENSHOTS. Four slots are already wired for the FiberSlic3r
   interface. Drop these files in this folder and they appear:
     fiberslic3r-prepare.jpg    parts on the build plate
     fiberslic3r-fiber.jpg      the fiber design view
     fiberslic3r-preview.jpg    sliced toolpaths with fiber in the channel
     fiberslic3r-3d.jpg         the layup in 3D
   A figure whose file is missing hides itself, so nothing looks
   broken before the images are added.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["fiber-reinforced-printing"] = {

  title:   "Continuous Fiber Reinforced Printing",
  kicker:  "Research and Design Automation",
  featured: false,

  // Home-page card summary (keep this to one or two sentences)
  blurb:   "FiberSlic3r, a complete slicer built for continuous carbon fiber, developed alongside peer-reviewed composites research at CU Denver. It slices the plastic and the fiber together and writes one machine-ready program.",

  // Project-page subtitle (one sentence)
  tagline: "A slicer that treats carbon fiber as part of the part, not as an afterthought bolted onto plastic.",

  cover:   "printing-nozzle.jpg",
  hero:    "printing-nozzle.jpg",

  tags:    ["R&D", "Design Software", "Composites", "Python"],

  // Facts shown in the box at the top of the project page
  spec: [
    ["Role",     "Undergraduate Researcher"],
    ["Advisor",  "Dr. Guoying Dong, CU Denver"],
    ["Timeline", "2025 to Present"],
    ["Software", "FiberSlic3r"],
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
        "This project is FiberSlic3r, a slicer written specifically for that problem. It began as a fiber path planner whose output had to be spliced into another slicer's G-code. It is now a complete slicer in its own right: it slices the plastic as well, prints it around the fiber, and exports a single program."
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
      heading: "FiberSlic3r",
      body: [
        "The earlier version planned fiber paths and left the plastic to someone else's slicer, which meant every job ended in merging two sets of G-code by hand. That is now gone. FiberSlic3r slices the plastic itself, so fiber is a native input rather than something added after the fact.",
        "The two are solved together. Each layer's fiber is designed first, and the plastic is then printed around it: the walls close around the fiber as a channel, the infill and skins stop at those walls, and the layers above and below are printed solid so the strand is laid on plastic and covered by it. The result is one program with the plastic and the fiber interleaved layer by layer."
      ],
      list: [
        "STEP parts imported, placed, oriented and arranged on the build plate.",
        "Fiber drawn by hand, with a pen tool, or generated automatically as continuous strands.",
        "A full plastic slicer underneath: walls, infill, solid skins, bridges, supports and brims.",
        "Fiber channels formed as walled cavities with solid floor and roof layers.",
        "Printer-aware strand preview showing where the cutter fires and which strands are too short to cut.",
        "One exported program per job, with plastic and fiber tool changes interleaved."
      ],
      figures: [
        { src: "fiberslic3r-prepare.jpg", caption: "Prepare: STEP parts placed on the build plate." },
        { src: "fiberslic3r-fiber.jpg",   caption: "Fiber design view, strands drawn at true width on the current layer." }
      ]
    },

    {
      id: "slicing",
      heading: "Slicing and Preview",
      body: [
        "Bringing the plastic in-house meant writing the parts of a slicer that normally get taken for granted, and holding them to the standard of the tools researchers already use. Toolpaths can be inspected before anything is printed, which matters more here than usual: a fiber strand that cannot be cut, or a channel that does not close, is only obvious once you can see it."
      ],
      figures: [
        { src: "fiberslic3r-preview.jpg", caption: "Preview: sliced toolpaths with the fiber laid into the channel the infill leaves free." },
        { src: "fiberslic3r-3d.jpg",      caption: "The full layup previewed in 3D inside the part." }
      ]
    },

    {
      id: "significance",
      heading: "Why the Tooling Matters",
      body: [
        "Continuous fiber research is limited as much by software as by hardware. A lab that wants to test a specific layup usually has to hand-write G-code or splice fiber paths into the output of a slicer that knows nothing about fiber, and that overhead quietly decides which experiments are worth attempting.",
        "A slicer that takes fiber as a first-class input removes that step. A layup becomes something you design and print the same day, which means the question being tested can change as quickly as the hypothesis does. Shared tooling of this kind would save every CCF group the work of rebuilding the same toolchain before they can start their actual research."
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
        "With the slicer complete end to end, the work moves from building the toolchain to using it."
      ],
      list: [
        "FEA-driven optimization of fiber placement.",
        "Direct STL support alongside STEP.",
        "Wider printer support through additional post-processors."
      ]
    }
  ]
};
