console.log("Example loaded....");
// Instance the tour
const steps = [
  {
    element: "body > div > p:nth-child(3)",
    title: "Title of my step 1",
    content: "Content of my step 1",
    placement: "auto"
  },
  {
    element: "body > div > p:nth-child(2)",
    title: "Title of my step 2",
    content: "Content of my step 2",
    placement: "auto"
  }
];
for (let i = 0; i < steps.length; i++) {
  let elem = document.querySelector(steps[i].element);
  elem.setAttribute("data-step", i);
  elem.setAttribute("data-intro", steps[i].title);
}

introJs().start();

// Initialize the tour
// tour.init();

// Start the tour
// tour.start();
