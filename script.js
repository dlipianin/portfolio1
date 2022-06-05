const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  // change theme
  document.getElementById("container").classList.toggle("dark");
  document.getElementById("portfolio").classList.toggle("dark");
  document.getElementsByTagName("sub")[0].classList.toggle("dark");
  //document.getElementById("dark-btn").classList.toggle("dark");
  const dark = document.querySelectorAll(".dark-btn");
  for (let index = 0; index < dark.length; index++) {
    dark[index].classList.toggle("dark");
  }
  document.getElementById("send").classList.toggle("dark");
  document.getElementById("content").classList.toggle("dark");
  document.getElementById("content2").classList.toggle("dark");
  const socials = document.querySelectorAll(".rounded-circle");
  for (let index = 0; index < socials.length; index++) {
    socials[index].classList.toggle("dark");
  }
  /*const paragraphs = document.querySelectorAll("p");
  for (let index = 0; index < paragraphs.length; index++) {
    paragraphs[index].classList.toggle("dark");
  }*/
  document.getElementById("info").classList.toggle("dark");
  document.getElementById("details").classList.toggle("dark");
  const inputs = document.querySelectorAll("input");
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].classList.toggle("dark");
  }
  document.querySelector("textarea").classList.toggle("dark");
  document.getElementById("close").classList.toggle("dark");
  document.getElementById("close2").classList.toggle("dark");
  document.querySelector(".dark").classList.toggle("dark");
  const img = document.querySelectorAll(".project-img");
  for (let index = 0; index < img.length; index++) {
    img[index].classList.toggle("dark");
  }
});
