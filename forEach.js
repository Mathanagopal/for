//for the given JSON iterate over all for loops
//for Each-loop
const resumeDetails = [
    {
      name: "Mathanagopal",
      age: 38,
      experience: [
        {
          title: "Software Engineer",
          company: "APPMECHS",
          years: 1,
        },
        {
          title: "IT MANAGER",
          company: "OGIVE",
          years: 13,
        },
      ],
    },
    {
      name: "Vinod",
      age: 30,
      experience: [
        {
          title: "SQL, PLSQL DEVELOPER",
          company: "SIFY",
          years: 3,
        },
        {
          title: "DATA SCIENCE ENG",
          company: "WIPRO",
          years: 2,
        },
      ],
    },
  ];
  
  // Get all the resume details
  resumeDetails.forEach((resume) => {
        console.log("Name:", resume.name);
        console.log("Age:", resume.age);
        console.log("Experience:");
        resume.experience.forEach((experience) => {
        console.log("  Title:", experience.title);
        console.log("  Company:", experience.company);
        console.log("  Years:", experience.years);
    });
  });