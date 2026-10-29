/* ============================================================
   PROJECT: Early Fiber Toolpath Software
   ------------------------------------------------------------
   HOW TO EDIT:
   - Change any text between the quotes below.
   - "cover", "hero" and figure "src" are image file names that live
     in THIS folder. Drop an image in the folder and put its file
     name here to use it. While "cover" is empty the card shows a
     clean placeholder, so nothing looks broken.

   PICTURES TO ADD when you have them:
     presentation.jpg   a slide from the presentation, or you presenting
     interface.jpg      a screenshot of the tool
     toolpath.jpg       a generated fiber path, or the merged program
   A figure whose file is missing hides itself.

   NOTE: this project is deliberately written without results or data.
   It describes what the software did and nothing about what the
   research found.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["early-fiber-toolpath-software"] = {

  title:   "Early Fiber Toolpath Software",
  kicker:  "Undergraduate Research and Software Prototyping",
  featured: false,

  blurb:   "A first-attempt program that produced fiber toolpath G-code for composite 3D printing, merged by hand into the G-code a normal printing workflow already generated.",

  tagline: "The first working version, built before the tooling had a name or a plan.",

  cover:   "IMG_8786.jpeg",
  hero:    "IMG_8786.jpeg",

  tags:    ["Undergraduate Research", "Software Prototype", "G-code", "Additive Manufacturing"],

  spec: [
    ["Role",    "Undergraduate Researcher"],
    ["Type",    "Software prototype"],
    ["Output",  "Fiber toolpath G-code"],
    ["Shared",  "Presented to the research group"],
    ["Status",  "Early prototype, not continued in this form"]
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "Printing a composite part with fiber in it means telling the machine two different things at once: how to lay down plastic, and where the fiber goes. Standard printing software only knows how to do the first one, so the second had to come from somewhere else.",
        "I wrote a program to produce that second half. It generated the fiber toolpath instructions as G-code, which I then merged by hand into the G-code that the normal printing workflow had already produced. It was the first version of this tooling, written before it had a name, and it is not the approach the work uses now."
      ]
    },

    {
      id: "problem",
      heading: "Why It Was Needed",
      body: [
        "Before this existed, placing fiber deliberately meant editing machine code by hand, line by line. That is slow, it is easy to get wrong, and it puts a hard ceiling on how complicated a fiber layout anyone is willing to attempt.",
        "The goal was not a polished tool. It was to get from an intended fiber layout to a program the printer would actually run, without hand-writing every move."
      ]
    },

    {
      id: "what-it-did",
      heading: "What the Software Did",
      body: [
        "The program handled the fiber side of the job and left the plastic alone."
      ],
      list: [
        "Generated fiber toolpath G-code from an intended fiber layout.",
        "Produced output in a form that could be combined with an existing print program.",
        "Replaced hand-writing fiber moves with a repeatable step."
      ]
      // Add a screenshot here once you have one:
      // figures: [ { src: "interface.jpg", caption: "..." } ]
    },

    {
      id: "manual-merge",
      heading: "The Manual Merge",
      body: [
        "The two halves did not combine themselves. The fiber G-code and the existing print G-code had to be meshed together by hand so the moves interleaved correctly and the machine ran them in the right order.",
        "That manual step was the honest limitation of this version. It worked, and it was a large improvement on writing the fiber moves from scratch, but every job still ended at a text editor."
      ]
      // figures: [ { src: "toolpath.jpg", caption: "..." } ]
    },

    {
      id: "presentation",
      heading: "Presentation",
      body: [
        "I presented this work, walking through what the software did and how the fiber and plastic programs were brought together. No results or test data are shown here."
      ]
      // figures: [ { src: "presentation.jpg", caption: "..." } ]
    },

    {
      id: "takeaway",
      heading: "What I Took From It",
      body: [
        "This was the first time I built a tool because the work in front of me could not proceed without one. It is also where the limits of a prototype became obvious: the program did the hard part correctly and still left a manual step in the middle, which is what decided the shape of everything I built afterward.",
        "Writing software that emits machine code taught me to think about a part as a sequence of real motions rather than as geometry alone."
      ]
    }
  ]
};
