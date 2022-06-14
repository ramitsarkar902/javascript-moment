const courses = [
  {
    name: "JavaScript",
    duration: "2 weeks",
    fee: 5000,
  },
  {
    name: "Python",
    duration: "1 week",
    fee: 3000,
  },
  {
    name: "C++",
    duration: "1 week",
    fee: 2000,
  },
];

function renderCourses() {
  const ul = document.querySelector(".list");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("list-item-span");

    const price = document.createTextNode(course.fee);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

renderCourses();
function sortData() {
  courses.sort((a, b) => {
    return a.fee - b.fee;
  });
  renderCourses();
}

const button = document.querySelector(".button");
button.addEventListener("click", sortData);

let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
