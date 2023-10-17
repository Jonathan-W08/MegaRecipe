const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const links = getElement(".nav-links");
const navBtnDOM = getElement(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

// Reviews
let rating = 0;

function rate(value) {
  rating = value;
  document.getElementById("display-rating").innerText = value;
}

function tambahKomentar() {
  const komentar = document.getElementById("komentar").value;
  if (komentar === "") {
    alert("Silakan masukkan komentar.");
    return;
  }

  const komentarContainer = document.getElementById("daftar-komentar");
  const komentarElemen = document.createElement("div");
  komentarElemen.className = "komentar";

  // Avatar
  const avatar = document.createElement("img");
  avatar.src = "assets/logo.png";
  avatar.classList.add("daftar-komentar");

  // Rating
  const ratingElemen = document.createElement("p");
  ratingElemen.textContent = "Rating: " + rating;

  // Comment
  const isiKomentar = document.createElement("span");
  isiKomentar.textContent = komentar;

  komentarElemen.appendChild(avatar);
  komentarElemen.appendChild(ratingElemen);
  komentarElemen.appendChild(isiKomentar);

  komentarContainer.appendChild(komentarElemen);

  document.getElementById("komentar").value = "";
  document.getElementById("display-rating").innerText = "0";
  rating = 0;
}
