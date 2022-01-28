const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksList = document.querySelector(".links-list");

toggleBtn.addEventListener("click", () => {
  const linksHeight = links.clientHeight;
  const linksListHeight = linksList.clientHeight;
  console.log(linksHeight);

  if (linksHeight === 0) {
    links.style.height = `${linksListHeight}px`;
    links.style.margin = "0 0 .5rem 0";
  } else {
    links.style.height = 0;
    links.style.margin = 0;
  }
});

window.addEventListener("scroll", () => {
  links.style.height = 0;
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    //navigate to specific
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = document
      .querySelector(".links")
      .getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// Set date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

//Form validation

const label = document.querySelectorAll(".form-label");
const input = document.querySelectorAll(".form-input");
const form = document.querySelector(".contact-form");
console.log(input);
let showAlert = true;

form.addEventListener("submit", (e) => {
  let index = 0;
  input.forEach((item) => {
    if (item.value === "" || item.value == null) {
      e.preventDefault();
      item.classList.add("red-input");
      if (showAlert == true) {
        alert("please fill the requiered information");
      }
    } else {
      item.classList.remove("red-input");
    }
    showAlert = false;

    if (item.classList.contains("red-input")) {
      label[index].classList.add("red-label");
    } else {
      label[index].classList.remove("red-label");
    }
    index++;
  });
});
