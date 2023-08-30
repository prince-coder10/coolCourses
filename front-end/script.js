// // Function to display coursescourses
// function displayCourses(courses) {
//   const courseListContainer = document.getElementById("courseList");
//   courseListContainer.innerHTML = ""; // Clear previous content

//   courses.forEach(course => {
//       const courseCard = document.createElement("div");
//       courseCard.classList.add("course-card");

//       const thumbnailImg = document.createElement("img");
//       thumbnailImg.classList.add("course-thumbnail");
//       thumbnailImg.src = course.image_240x135;
//       thumbnailImg.alt = course.title;

//       const titleElem = document.createElement("div");
//       titleElem.classList.add("course-title");
//       titleElem.textContent = course.title;

//       const instructorElem = document.createElement("div");
//       instructorElem.classList.add("course-instructor");
//       instructorElem.textContent = "Instructor: " + course.visible_instructors[0].display_name;

//       courseCard.appendChild(thumbnailImg);
//       courseCard.appendChild(titleElem);
//       courseCard.appendChild(instructorElem);

//       courseListContainer.appendChild(courseCard);
//   });
// }

// async function fetchCourses() {
//   const apiUrl = 'http://localhost:3000/api/courses';

//   try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       displayCourses(data.results);
//   } catch (error) {
//       console.error('Error fetching courses:', error);
//   }
// }

// // Call the function to fetch and display courses from the API
// fetchCourses();


async function displayCourses() {
  const apiUrl = 'http://localhost:3000/api/courses';

  try {
    const response = await axios.get(apiUrl);
    const courses = response.data.results;

    const courseListContainer = document.getElementById("courseList");
    courseListContainer.innerHTML = ""; // Clear previous content

    courses.forEach(course => {
      const courseCard = document.createElement("div");
      courseCard.classList.add("course-card");

      const thumbnailImg = document.createElement("img");
      thumbnailImg.classList.add("course-thumbnail");
      thumbnailImg.src = course.image_240x135;
      thumbnailImg.alt = course.title;

      const titleElem = document.createElement("div");
      titleElem.classList.add("course-title");
      titleElem.textContent = course.title;

      const instructorElem = document.createElement("div");
      instructorElem.classList.add("course-instructor");
      instructorElem.textContent = "Instructor: " + course.visible_instructors[0].display_name;

      courseCard.appendChild(thumbnailImg);
      courseCard.appendChild(titleElem);
      courseCard.appendChild(instructorElem);

      courseListContainer.appendChild(courseCard);
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
}

// Call the function to fetch and display courses from the API
displayCourses();
