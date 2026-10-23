/* ============================================================
   PROJECT: Crack Propagation in Printed Composites
   ------------------------------------------------------------
   HOW TO EDIT:
   - Change any text between the quotes or backticks below.
   - "cover" and "hero" and figure "src" are image file names that
     live in THIS folder. Drop a new image in the folder and put its
     file name here to use it.
   - "featured: true" makes this the large card on the home page.
   - To hide a link button, leave its "href" empty ("").

   A figure whose file is missing hides itself, so nothing looks
   broken before new images are added.

   This is an active project. Keep ongoing work in the present tense.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["fiber-reinforced-printing"] = {

  title:   "Crack Propagation in Printed Composites",
  kicker:  "Research and Mechanical Testing",
  featured: false,

  // Home-page card summary (keep this to one or two sentences)
  blurb:   "Peer-reviewed composites research at CU Denver on how cracks travel through continuous carbon fiber printed parts, and how steering fiber across the crack path changes the way they fail.",

  // Project-page subtitle (one sentence)
  tagline: "Where a printed composite part breaks, and what placing fiber across that path does about it.",

  cover:   "printing-nozzle.jpg",
  hero:    "printing-nozzle.jpg",

  tags:    ["R&D", "Composites", "Mechanical Testing", "Fracture"],

  // Facts shown in the box at the top of the project page
  spec: [
    ["Role",     "Undergraduate Researcher"],
    ["Advisor",  "Dr. Guoying Dong, CU Denver"],
    ["Timeline", "2025 to Present"],
    ["Focus",    "Fracture behavior of printed composites"],
    ["Methods",  "Fiber-steered design, tensile testing"],
    ["Status",   "Ongoing"]
  ],

  // Buttons at the top of the project page (empty href hides the button)
  links: [
    { label: "Journal paper (DOI)", href: "https://doi.org/10.1080/15376494.2026.2702552" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "Continuous carbon fiber additive manufacturing deposits carbon fiber strands into a polymer as a part is printed. Unlike ordinary thermoplastic, the result is anisotropic: it is strong along the fiber and weak across it, so the direction the fiber runs decides how the part behaves under load.",
        "My research looks at what that means for failure. A printed composite part does not simply get stronger when fiber is added to it, it fails differently, and where a crack starts and which way it travels depends on where the fiber sits relative to the stress. I design specimens that put fiber across an expected crack path, print them, and test them to failure to see what changes."
      ]
    },

    {
      id: "problem",
      heading: "Why Fracture Is the Interesting Part",
      body: [
        "Stiffness and ultimate strength are the numbers most often quoted for a printed composite, and they are the easiest to measure. They also say very little about whether a part is safe to use, because they describe the moment before failure rather than the failure itself.",
        "A part that carries a high load and then comes apart without warning is a worse engineering outcome than one that carries slightly less and holds together as it yields. That distinction is a fracture question, and it is one a designer can actually act on through fiber placement."
      ],
      list: [
        "Crack initiation depends on where the weakest interface sits, not on average strength.",
        "Fiber laid across a crack path has to be pulled apart or pulled out before the crack can open.",
        "The same geometry can fail in very different ways depending on fiber orientation.",
        "Failure mode, not peak load alone, is what determines whether a part is usable."
      ]
    },

    {
      id: "specimens",
      heading: "Specimen Design",
      body: [
        "Each specimen is designed around a question. Geometry sets up a region where a crack is expected to form, and the fiber is then routed deliberately with respect to that region: across it, along it, or absent entirely as a baseline.",
        "Printing a specimen that actually tests the intended variable takes more care than it sounds. A strand that drifts, a layer that does not bond, or a fiber path that ends in the wrong place puts the failure somewhere other than where the experiment was aimed, so the design work and the print process have to be controlled together."
      ],
      figures: [
        { src: "printing-specimen.jpg", caption: "Printing a test specimen with continuous fiber." }
      ]
    },

    {
      id: "testing",
      heading: "Testing and Test Hardware",
      body: [
        "Specimens are loaded to failure in tension while force and crosshead displacement are recorded, which gives both the load carried and the shape of the failure. Reinforced designs are compared directly against unreinforced ones printed from the same geometry.",
        "Part of this work was mechanical design rather than testing. I designed custom fixturing to hold and load these specimens, because printed composite coupons do not grip or align the way the standard hardware assumes, and a specimen that slips or loads off-axis produces a result that describes the fixture instead of the material."
      ],
      figures: [
        { src: "tensile-test.jpg", caption: "Tensile testing a printed specimen to failure." }
      ]
    },

    {
      id: "results",
      heading: "What the Testing Shows",
      body: [
        "Placing fiber across the crack path raised the load the specimen could carry and changed how it failed. The fracture surface tells the clearer story: instead of separating cleanly, the crack has to work against fiber bridging it, and that shows up in the force-displacement trace as well as in the broken part."
      ],
      list: [
        "Reinforcement aligned with the load direction carries more before failure.",
        "Fiber crossing the crack path changes the failure mode, not only the peak load.",
        "Which regions get reinforced is a design decision with a measurable fracture consequence."
      ],
      figures: [
        { src: "fractured-specimen.jpg", caption: "A tested specimen. Continuous fiber bridges the fracture surface." },
        { src: "force-displacement.png", caption: "Force versus crosshead displacement, comparing a specimen with fiber against one without." }
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
      id: "takeaway",
      heading: "What I Take From It",
      body: [
        "This work is the reason I treat failure mode as a design input rather than a result to be reported. Choosing where material goes in order to control how a part comes apart is the same judgment a structure needs, whether the fiber is printed into a coupon or the load path runs through a machined bracket.",
        "It is also where I learned to design the hardware around an experiment, not just the specimen in it."
      ]
    },

    {
      id: "future",
      heading: "Ongoing Work",
      body: [
        "The work continues toward predicting fracture behavior rather than observing it after the fact."
      ],
      list: [
        "Correlating observed crack paths with predicted stress directions.",
        "Using analysis to place reinforcement before a specimen is printed.",
        "Extending the comparison across more geometries and fiber routings."
      ]
    }
  ]
};
