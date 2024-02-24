//for the given JSON iterate over all for loops
//for Of loop

const myResume = {
    "name": "Mathanagopal R",
    "skills": ["HTML", "CSS", "PHP"],
    "experience": [
      {
        "company": "APPMECHS",
        "title": "Software Engineer",
        "start_date": "2024-02-25",
        "end_date": "2023-01-01"
      },
      {
        "company": "OGIVE",
        "title": "IT Manager",
        "start_date": "2023-12-31",
        "end_date": "2009-12-17"
      }
    ]
  };
  
  // Get the keywords to search for
  const keywords = ["HTML", "PHP"];
  
  // Loop through the resume and find all instances of the keywords
  for (const keyword of keywords) {
    // Check if the keyword is in the resume's skills
    if (myResume.skills.includes(keyword)) {
      console.log(`Found keyword "${keyword}" in resume skills`);
    }
  
    // Check if the keyword is in the resume's experience
    for (const experience of myResume.experience) {
      if (experience.title.includes(keyword)) {
        console.log(`Found keyword "${keyword}" in resume experience`);
      }
    }
  }