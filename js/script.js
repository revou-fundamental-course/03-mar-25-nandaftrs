// ini file javascript

// Slideshow Functionality
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
showSlides();

// Form Submission
document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p><strong>Nama:</strong> ${name}</p>
                           <p><strong>No Telepon:</strong> ${phone}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Pesan:</strong> ${pesan}</p>`;

    document.getElementById("messageForm").reset();
  });
