/* ============================================================
   PROJECT: NACA 4-Digit Airfoil Generator
   ------------------------------------------------------------
   PHOTO: drop your airfoil image into this folder, then set
   "cover" (and "hero") to the file name, e.g. cover: "airfoil-cfd.jpg".
   Suggested image: the flow-simulation render of the airfoil.
   REPO: add your GitHub link in the "links" section below.
   ------------------------------------------------------------
   NOTE: I wrote this from how a 4-digit NACA generator works.
   Please correct any detail that does not match your program.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["naca-4-digit-airfoil-generator"] = {

  title:   "NACA 4-Digit Airfoil Generator",
  kicker:  "Aerospace and Numerical Methods",
  featured: false,

  blurb:   "A Python tool that generates any 4-digit NACA airfoil and exports the profile in a format that imports cleanly into SolidWorks.",
  tagline: "From a four-digit designation to a smooth, watertight airfoil curve ready for CAD.",

  cover:   "Airfoil Solidworks Demo.png",
  hero:    "Airfoil Solidworks Demo.png",

  tags:    ["Aerospace", "Numerical Methods", "Python", "CAD"],

  spec: [
    ["Domain",   "Aerodynamics, geometry"],
    ["Language", "Python"],
    ["Output",   "SolidWorks curve file"],
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "A four-digit NACA designation encodes an airfoil: the first digit is maximum camber, the second is the position of that camber, and the last two are the thickness, each as a fraction of chord. This tool takes that designation and produces the airfoil coordinates, formatted so they import directly into SolidWorks as a single clean curve.",
        "It is a small project compared with my hardware work, but it sits in the aerospace domain and applies numerical methods to a practical geometry problem."
      ]
    },
    {
      id: "method",
      heading: "Method",
      body: [
        "The profile is built from the standard NACA 4-digit equations for the mean camber line and the thickness distribution, with attention to the details that decide whether the imported curve is usable in CAD."
      ],
      list: [
        "Evaluates the camber line and thickness distribution from the four-digit input.",
        "Offsets thickness perpendicular to the camber line to place the upper and lower surfaces.",
        "Uses cosine point spacing so the leading edge is well resolved.",
        "Orders the points into a single continuous loop with a closed trailing edge."
      ]
    },
    {
      id: "solidworks",
      heading: "SolidWorks Import",
      body: [
        "SolidWorks can build a curve from a list of points, but the result is only as good as the point order and spacing. The output here is written for that workflow: a continuous, non-self-intersecting loop with enough resolution at the leading edge to avoid kinks, so the imported curve is smooth and watertight and ready to loft or extrude."
      ]
    },
    {
      id: "result",
      heading: "Result",
      body: [
        "The generated profiles import into SolidWorks without cleanup and can be taken straight into a solid model or into flow simulation for evaluation."
      ]
    }
  ]
};
