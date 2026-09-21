/* ============================================================
   PROJECT: PA12-CF Tensile Characterization
   ------------------------------------------------------------
   PHOTOS. Two image slots are already wired up. Drop these files
   into this folder and they appear automatically:

     pa12-cf-samples.jpg    the printed dogbone specimens
                            (used as the card cover and page hero)
     pa12-cf-fracture.jpg   a specimen pulled to failure

   Until those files exist the card shows a clean placeholder and
   the figure hides itself, so nothing looks broken meanwhile.

   No test results are stated anywhere on this page. When the data
   comes back, add the numbers to the Results section.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["pa12-cf-tensile-testing"] = {

  title:   "PA12-CF Tensile Characterization",
  kicker:  "Materials Testing and Research",
  featured: false,

  blurb:   "Standards-compliant ASTM D638 tensile specimens in carbon-fiber nylon, produced to close the gap between filament datasheet values and how printed parts actually behave.",
  tagline: "Engineers design printed parts against numbers that were never measured on printed parts. This project produces the specimens that fix that.",

  cover:   "pa12-cf-samples.jpg",
  hero:    "pa12-cf-samples.jpg",

  tags:    ["Materials Testing", "ASTM D638", "Research", "Additive Manufacturing"],

  spec: [
    ["Standard", "ASTM D638"],
    ["Material", "Sunlu Nylon PA12-CF"],
    ["Context",  "Faculty research support, CU Denver"],
    ["Role",     "Specimen production and process control"],
    ["Purpose",  "Teaching aid and material data"],
    ["Status",   "Samples delivered, testing underway"]
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "Carbon-fiber reinforced nylon is marketed as an engineering material, and it is increasingly used for real load-bearing parts. The strength values engineers design against, though, usually come from the filament datasheet, and those numbers are not measured on a printed part. That leaves a gap between the published property and the part that actually comes off the machine.",
        "I produced ASTM D638 tensile specimens in Sunlu Nylon PA12-CF for a professor so that gap can be measured rather than estimated. The work supports two outcomes at once: a physical teaching aid for mechanical engineering students learning test methods, and a dataset aimed at more trustworthy strength values for this material."
      ]
    },

    {
      id: "why",
      heading: "Why Printed Materials Need Their Own Data",
      body: [
        "A printed part is not the same material as a molded one, even when the polymer is identical. It is a stack of bonded extrusions, and that structure decides how it fails.",
        "This is exactly why a designer cannot safely take a datasheet number at face value. Without specimens made by the same process as the part, there is no honest allowable to design to."
      ],
      list: [
        "Printed parts are anisotropic. Strength along the extrusion path and strength across the layer interfaces are different properties.",
        "Layer bonding depends on polymer diffusion across the interface, which makes the through-layer direction the usual weak axis.",
        "The chopped carbon fiber aligns with the extrusion direction, so the reinforcement itself is directional.",
        "Process variables including orientation, temperature, and moisture content all move the result.",
        "Published values frequently come from idealized or molded specimens that do not carry any of these effects."
      ]
    },

    {
      id: "specimens",
      heading: "Specimen Preparation to ASTM D638",
      body: [
        "ASTM D638 is the standard test method for tensile properties of plastics. It fixes the dogbone specimen geometry, the dimensional requirements, and how the test is run, which is what makes results comparable to anyone else's rather than being an isolated measurement.",
        "The value of a test like this lives in repeatability. A batch of specimens has to be effectively identical, because any variation between them shows up in the data as material scatter and becomes indistinguishable from real material behavior. Producing a consistent set was the core of the job."
      ],
      figures: [
        { src: "pa12-cf-samples.jpg", caption: "Printed ASTM D638 tensile specimens in Sunlu PA12-CF." }
      ]
    },

    {
      id: "process",
      heading: "Controlling the Print Process",
      body: [
        "Every specimen in the batch had to be produced under the same conditions, since the print process is part of what is being characterized. Anything that changed between specimens would become noise in the result.",
        "Nylon makes this harder than most materials. It is hygroscopic, so it absorbs moisture from the air, and wet filament prints with poor layer bonding and degraded mechanical properties. Controlling filament condition is not housekeeping here, it directly affects the number the test produces. The carbon fill adds its own handling requirement, since it is abrasive to standard hardware."
      ],
      list: [
        "Print orientation held constant across the batch so the layer interfaces sit the same way relative to the load.",
        "Filament kept dry, since moisture in nylon degrades interlayer bonding and skews the result.",
        "Process parameters fixed across all specimens so the batch represents one condition rather than several.",
        "Abrasive carbon-filled filament accounted for in the hardware used to print it.",
        "Specimens inspected for defects that would cause a premature failure unrelated to the material."
      ]
    },

    {
      id: "teaching",
      heading: "Teaching Application",
      body: [
        "The specimens are also used to teach mechanical engineering students how tensile testing is actually performed: how a standard defines a test, how a specimen is prepared and measured, how it is loaded to failure, and how the resulting curve is read.",
        "A broken coupon is a useful teaching object in its own right. The fracture surface shows where the part gave way, and for a printed specimen that is immediately informative, since failure at a layer interface looks different from failure through the material. Students get to see the consequence of build direction rather than just being told about it."
      ],
      figures: [
        { src: "pa12-cf-fracture.jpg", caption: "A specimen pulled to failure, showing the fracture surface." }
      ]
    },

    {
      id: "results",
      heading: "Outcome",
      body: [
        "The specimen set has been delivered and testing is underway. Results are not published here yet, and no strength values are claimed until the data is in hand.",
        "What the work contributes is the part that has to come first. Characterizing a printed material properly requires specimens made to a recognized standard, produced under controlled and repeatable conditions, by the same process as the parts the data is meant to inform. That is what makes the resulting numbers worth designing against."
      ]
    }
  ]
};
