console.log("intro loaded....");
// Instance the tour
// var steps = [
//   {
//     element: "#PolarisTextField1",
//     title: "Title of my step 1",
//     content: "Content of my step 1",
//     placement: "auto"
//   },
//   {
//     element: "html",
//     title: "Title of my step 2",
//     content: "Content of my step 2",
//     placement: "auto"
//   },
//   {
//     element: "#AdjustQuantityPopoverTextFieldActivator",
//     title: "Title of my step 3",
//     content: "Content of my step 3",
//     placement: "auto"
//   }
// ];
// for (let i = 0; i < steps.length; i++) {
//   let elem = document.querySelector(steps[i].element);
//   elem.setAttribute("data-step", i + 1);
//   elem.setAttribute("data-intro", steps[i].title);
// }
introJs()
  .addSteps([
    {
      element: document.querySelector("#PolarisTextField1"),
      intro: "This is step 1"
    },
    {
      element: document
        .querySelector("#product-description_ifr")
        .contentWindow.document.querySelector("#tinymce"),
      intro: "This is step 2"
    },
    {
      element: document.querySelector(
        "#AdjustQuantityPopoverTextFieldActivator"
      ),
      intro: "This is step 3"
    }
  ])
  .start();

// Initialize the tour
// tour.init();

// Start the tour
// tour.start();
