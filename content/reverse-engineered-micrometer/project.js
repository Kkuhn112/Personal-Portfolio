/* ============================================================
   PROJECT: Reverse-Engineered 3D-Printed Micrometer
   ------------------------------------------------------------
   PHOTOS. The file names below are already wired up. Drop these
   three images into this folder and they appear automatically:

     micrometer-assembly.jpg   the black frame with the white barrel
                               (used as the card cover and page hero)
     micrometer-white.jpg      the fully assembled white micrometer
     micrometer-parts.jpg      the disassembled internals, spindle,
                               printed spring, ratchet and screw

   Until those files exist the card falls back to a clean
   placeholder, so nothing looks broken in the meantime.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["reverse-engineered-micrometer"] = {

  title:   "Reverse-Engineered Micrometer",
  kicker:  "Reverse Engineering and Tolerancing",
  featured: false,

  blurb:   "A working micrometer reverse engineered and rebuilt as a fully 3D-printable assembly, including a functional ratchet, repeatable to within 0.005 inches.",
  tagline: "Rebuilding a precision instrument in a process that has none of the precision it was designed around.",

  cover:   "micrometer-assembly.jpg",
  hero:    "micrometer-assembly.jpg",

  tags:    ["Reverse Engineering", "Tolerancing", "DFM", "SolidWorks"],

  spec: [
    ["Context",  "Freshman CAD course"],
    ["Brief",    "Reverse engineer an assembly of more than 15 parts"],
    ["Tools",    "SolidWorks, FDM printing"],
    ["Result",   "Repeatable within 0.005 in"],
    ["Focus",    "DFM, DFA, and tolerancing"],
    ["Status",   "Complete"]
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "The assignment was to reverse engineer an existing product with more than fifteen parts and rebuild it in CAD. I chose a micrometer, which is a harder choice than it looks. Almost everything that makes a micrometer work is a fine feature: a precision thread, a spindle that has to run without play, a ratchet that slips at a repeatable torque, and a sleeve and thimble that have to stay aligned to read anything at all.",
        "The additional constraint I set was that every part had to be printable and the finished assembly had to actually function. That turned a measuring exercise into a design-for-manufacturing problem, because an FDM printer cannot hold the tolerances the original instrument depends on."
      ],
      figures: [
        { src: "micrometer-white.jpg", caption: "The assembled micrometer, printed in full." }
      ]
    },

    {
      id: "reverse-engineering",
      heading: "Reverse Engineering",
      body: [
        "The original instrument was disassembled and measured part by part, and each one was modeled in SolidWorks from those measurements rather than from eyeballed proportions. Mating features were captured first, since those are what decide whether an assembly goes together at all.",
        "Working from a physical object rather than a drawing means the design intent has to be inferred. The useful question at every feature was not what the dimension measures, but what the feature is for. A chamfer that exists to guide a part into a bore has to be kept. A cosmetic radius does not."
      ]
    },

    {
      id: "dfm",
      heading: "Designing for the Printer",
      body: [
        "An FDM printer builds in layers, prefers not to print in mid air, and has a minimum feature size set by the nozzle. Every part was reworked around those facts rather than copied from the original geometry.",
        "The most significant change was the thread. A micrometer thread is fine and precise, which is exactly what a printer is worst at, so the thread was reproportioned to a pitch the process can resolve while keeping enough turns engaged to stay stable in the bore."
      ],
      list: [
        "Print orientation chosen per part so that loaded features run across layers rather than along the layer split.",
        "Thread pitch and depth opened up to what the nozzle can actually form.",
        "Overhangs kept within the angle the printer can bridge, so parts print without support inside functional bores.",
        "Wall sections thickened where the original relied on the strength of metal.",
        "The spring printed as a coil in plastic rather than substituted with hardware, so the assembly stayed entirely printed."
      ],
      figures: [
        { src: "micrometer-parts.jpg", caption: "Disassembled internals: spindle, printed coil spring, ratchet components, and a printed screw." }
      ]
    },

    {
      id: "tolerancing",
      heading: "Tolerancing",
      body: [
        "This was the real problem. A printed part comes off the bed with process variation from shrinkage, elephant foot at the first layers, and the nozzle tracing slightly outside or inside the intended path. Modeling a nominal fit and printing it produces either a seized assembly or a loose one.",
        "So the fits were designed rather than copied. Every mating pair was given a clearance chosen for what that joint has to do: a running fit where the spindle has to turn freely, a closer fit where alignment sets the reading, and an interference fit where two parts should never move relative to each other. The clearances were tuned against test prints instead of assumed, since the correct number depends on the specific printer and material."
      ]
    },

    {
      id: "ratchet",
      heading: "The Ratchet",
      body: [
        "The ratchet is what makes a micrometer repeatable. Without it, the reading depends on how hard the user twists, which defeats the purpose of the instrument. Reproducing it in plastic meant getting a printed spring to hold a consistent preload and getting the ratchet teeth to slip at a repeatable torque without rounding off after a few uses.",
        "Tooth profile, spring stiffness, and the clearance around the clutch all interact here, so this was the part of the design that needed the most iteration before it behaved consistently."
      ]
    },

    {
      id: "assembly",
      heading: "Design for Assembly",
      body: [
        "The assembly had to be buildable by hand, without glue holding the mechanism together and without press tooling. Parts were designed to locate on their own features, and the build sequence was worked out so nothing already installed has to be disturbed to fit the next component.",
        "The frame carries visible lightening pockets. Those were not decorative. Removing material from an area carrying little load shortens print time and reduces the distortion that comes with large solid sections, while leaving the structure between the anvil and the barrel intact, since any flex there would go straight into the measurement."
      ]
    },

    {
      id: "result",
      heading: "Result",
      body: [
        "The finished micrometer assembles, actuates, ratchets, and reads, and it repeats to within 0.005 inches.",
        "That number deserves an honest comparison. A real micrometer resolves to a ten thousandth of an inch, so this is roughly fifty times coarser and is not a substitute for the instrument it was copied from. What it does show is how far a process with no inherent precision can be pushed when the fits, the print orientation, and the feature sizes are all designed around its limitations instead of against them.",
        "As a first-year project, the useful lesson was that tolerancing is a design activity rather than a note added to a drawing at the end. The parts that worked were the ones where the clearance was decided on purpose."
      ]
    }
  ]
};
