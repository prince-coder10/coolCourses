function displayCourses(courses) {
  const courseListContainer = document.getElementById("courseList");
  courseListContainer.innerHTML = ""; //clear previous content

  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    const thumbnailImg = document.createElement("img");
    thumbnailImg.classList.add("course-thumbnail");
    thumbnailImg.src = course.thumbnail;
    thumbnailImg.alt = course.title;

    const titleElem = document.createElement("div");
    titleElem.classList.add("courtse-title");
    titleElem.textContent = course.title;

    const instructorElem = document.createElement("div");
    instructorElem.classList.add("course-instructor");
    instructorElem.textContent = "Instructor: " + course.instructor;

    courseCard.appendChild(thumbnailImg);
    courseCard.appendChild(titleElem);
    courseCard.appendChild(instructorElem);

    courseListContainer.appendChild(courseCard);
  });
}

// function to fetch courses
async function fetchCourses() {
  const CLIENTID = "sPvELj9EieMzpgwYZxEVncW8sWFTF8aTKub5J2gJ";
  const CLIENTSECRET =
    "4xpwMapojihPVoQdDwjET9StERujuqppTvDeQGTuQLF5qHJFzDXDex69kweUe9RdxJVDnWUdHuE8CQQx5TWPHsW5617sfTbpbRT8IDOkI7Y6V0UhtmnW5l6401DTn0DY";
  const apiUrl = "https://www.udemy.com/api-2.0/courses/";

  const basicAuth = btoa(`${CLIENTID}:${CLIENTSECRET}`);

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Basic ${basicAuth}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    const courses = data.results.map((course) => ({
      id: course.id,
      title: course.title,
      thumbnail: course.image_240x135,
      instructor: course.visible_instructors[0].display_name,
    }));

    displayCourses(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
}

// Call the function to fetch and display courses from the API
fetchCourses();
