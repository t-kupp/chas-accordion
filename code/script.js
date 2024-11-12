// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
  const icon = element.querySelector(".icon");
  icon.classList.toggle("icon-active");
}

// nextElementSibling

// Fetch data
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  displayData(data);
}
getData();

// Display data

const accordion = document.querySelector(".accordion");
const numberOfPosts = 10;

function displayData(data) {
  const slicedData = data.slice(0, numberOfPosts);

  slicedData.forEach((post) => {
    const container = document.createElement("div");
    container.classList.add("section-container");
    accordion.appendChild(container);

    const icon = document.createElement("div");
    icon.classList.add("icon");
    icon.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
    container.appendChild(icon);

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = post.title;
    container.appendChild(title);

    const extenderContainer = document.createElement("div");
    extenderContainer.classList.add("extender-container");
    accordion.appendChild(extenderContainer);

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerText = post.body;
    extenderContainer.appendChild(description);

    container.addEventListener("click", toggle);
  });
}
