console.log("Example 2 loaded....");
// Instance the tour
var tour = new Tour({
  steps: [
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
  ]
});

// Initialize the tour
tour.init();

// Start the tour
tour.start();
