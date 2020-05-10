console.log("boottour  loaded....");
// Instance the tour
var tour = new Tour({
  steps: [
    {
      element: "#hplogo",
      title: "Title of my step 1",
      content: "Content of my step 1",
      placement: "auto"
    },
    {
      element: "#footer",
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
