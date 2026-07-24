/* ============================================================
   PROJECT: Custom Slitting Saw Arbor
   ------------------------------------------------------------
   PHOTO: drop your arbor photo into this folder, then set
   "cover" (and "hero") to the file name, e.g. cover: "arbor.jpg".
   Suggested photo: the machined stainless arbor with the slitting saw blade.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["custom-slitting-saw-arbor"] = {

  title:   "Custom Slitting Saw Arbor",
  kicker:  "Precision Design and Tooling",
  featured: false,

  blurb:   "A purpose-built arbor engineered for stiffness and concentricity, so slitting operations on precision parts run stable and repeatable.",
  tagline: "A machining-first tooling design driven by real tolerances, deflection, and runout.",

  cover:   "",
  hero:    "",

  tags:    ["Precision Design", "GD&T", "Tooling", "Manufacturing"],

  spec: [
    ["Type",     "Slitting saw arbor"],
    ["Timeline", "2025"],
    ["Tools",    "Turning, milling, metrology"],
    ["Status",   "In use"]
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "Slitting precision parts is only as good as the tool holding the blade. Deflection and runout in the arbor show up directly in the cut, so I designed and made an arbor built for stiffness and concentricity."
      ]
    },
    {
      id: "requirements",
      heading: "Requirements",
      body: [
        "The arbor had to hold the blade rigidly, run true, and remain practical to manufacture to tight tolerance."
      ],
      list: [
        "Increase rigidity to reduce deflection under cutting load.",
        "Hold concentricity to keep the blade running true.",
        "Stay compatible with the spindle interface."
      ]
    },
    {
      id: "design",
      heading: "Design and Manufacture",
      body: [
        "The geometry was chosen for stiffness, tool access, and machinability at the same time, with tolerances set to be genuinely producible on the available machines."
      ]
    },
    {
      id: "result",
      heading: "Result",
      body: [
        "The finished arbor improved stability and confidence during cutting, and it holds up in regular use."
      ]
    }
  ]
};
