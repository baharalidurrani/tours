console.log("boottour  loaded....");
// Instance the tour
var tour = new Tour({
  steps: [
    {
      element: "#block-block-3 > div > div > div:nth-child(1) > div",
      title: "Title of my step 1",
      content: "Content of my step 1",
      placement: "auto"
    },
    {
      element: "#block-block-3 > div > div > div:nth-child(2) > div",
      title: "Title of my step 2",
      content: "Content of my step 2",
      placement: "auto"
    }
    // {
    //   element: "#myDiv > h3",
    //   title: "Title of my step 3",
    //   content: "Content of my step 3",
    //   placement: "auto"
    // }
  ]
});

// Initialize the tour
tour.init();

// Start the tour
tour.start();
