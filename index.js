 
function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  
  document.getElementById("myBtn").click();
  
  
  
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');  
    const emailInput = form.querySelector('input[name="Email"]');  
    const passwordInput = form.querySelector('input[name="Password"]');  
    const messageContainer = document.createElement('div');  
    form.appendChild(messageContainer);

    form.addEventListener('submit', function (event) {
        messageContainer.innerHTML = '';  
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        
        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            event.preventDefault();
            messageContainer.innerHTML += '<p style="color: red;">enter corect EMAIL "@" და "." .</p>';
            return;
        }

      
        let strengthMessage = '';
        const hasLowercase = /[a-z]/.test(passwordValue);
        const hasUppercase = /[A-Z]/.test(passwordValue);
        const hasNumber = /[0-9]/.test(passwordValue);
        const hasOnlyLetters = /^[a-zA-Z]+$/.test(passwordValue);
        const hasLettersAndNumbers = /^[a-zA-Z0-9]+$/.test(passwordValue);

        if (hasOnlyLetters) {
            strengthMessage = 'weak';
        } else if (hasLettersAndNumbers && !(hasLowercase && hasUppercase)) {
            strengthMessage = 'avarage';
        } else if (hasLowercase && hasUppercase && hasNumber) {
            strengthMessage = 'strong';
        } else {
            strengthMessage = 'weak password, please try agine';
        }

        messageContainer.innerHTML += `<p style="color: ${strengthMessage.startsWith('weak') ? 'red' : 'green'};">${strengthMessage}</p>`;
        if (strengthMessage.startsWith('weak password')) {
            event.preventDefault();  
        }
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}