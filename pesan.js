document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    console.log(name);
    console.log(email);
    console.log(message);
    // Display form data in textarea
    var output = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
    document.getElementById('output').value = output;
    
    // Clear the form
    document.getElementById('contactForm').reset();
});

// Auto slide banner
var slideIndex = 0;
function showSlides() {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
showSlides();

// Greeting user
document.getElementById('greetButton').addEventListener('click', function() {
    var name = prompt("Please enter your name:");
    if (name) {
        var welcomeMessage = document.getElementById('welcomeMessage');
        var welcomeContainer = document.getElementById('welcomeContainer');
        welcomeMessage.innerText = "Hi " + name + ", welcome to my website!";
        welcomeContainer.style.backgroundImage = "url('gambar/bg.jpg')"; // Adjust path to your image
        welcomeContainer.style.backgroundSize = "cover";
        welcomeContainer.style.backgroundPosition = "center";
        welcomeContainer.style.backgroundColor = "transparent"; // Remove initial background color
        welcomeMessage.style.color = "white"; // Change text color to white
        welcomeMessage.style.opacity = "1";

    }
});