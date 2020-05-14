console.log("intro loaded....");
// Instance the tour
var steps = [
  {
    element: "#PolarisTextField1",
    title: "Title of my step 1",
    content: "Content of my step 1",
    placement: "auto"
  },
  {
    element: "html",
    title: "Title of my step 2",
    content: "Content of my step 2",
    placement: "auto"
  },
  {
    element: "#AdjustQuantityPopoverTextFieldActivator",
    title: "Title of my step 3",
    content: "Content of my step 3",
    placement: "auto"
  }
];
for (let i = 0; i < steps.length; i++) {
  let elem = document.querySelector(steps[i].element);
  elem.setAttribute("data-step", i + 1);
  elem.setAttribute("data-intro", steps[i].title);
}

introJs().start();

// Initialize the tour
// tour.init();

// Start the tour
// tour.start();
