console.log("boottour 2 loaded....");
// Instance the tour
var tour = new Tour({
  steps: [
    {
      element:
        "#root > div > div.main > div > div > fieldset:nth-child(4) > a:nth-child(2)",
      title: "Title of my step 1",
      content: "Content of my step 1",
      placement: "auto"
    },
    {
      element:
        "#root > div > div.main > div > div > fieldset:nth-child(4) > a:nth-child(3)",
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
