// Part 1: Event Handling

// 1. Button click event
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Button clicked! 🎉";
});

// 2. Input typing event
document.getElementById("nameInput").addEventListener("keyup", function() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("nameOutput").textContent = "Hello, " + name;
});

// 3. Mouseover and mouseout event
let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function() {
  hoverBox.style.backgroundColor = "orange";
  hoverBox.textContent = "You're hovering!";
});

hoverBox.addEventListener("mouseout", function() {
  hoverBox.style.backgroundColor = "lightblue";
  hoverBox.textContent = "Hover over me";
});

// Part 2: Interactive Features

// 1. Dark/Light Mode Toggle
document.getElementById("toggleMode").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", function() {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  counter = 0;
  document.getElementById("counterValue").textContent = counter;
});

// 3. FAQ Section (Collapsible)
let questions = document.querySelectorAll(".question");

questions.forEach(function(q) {
  q.addEventListener("click", function() {
    let answer = q.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      q.querySelector("span").textContent = "+";
    } else {
      answer.style.display = "block";
      q.querySelector("span").textContent = "-";
    }
  });
});

// Part 3: Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload

  let name = document.getElementById("formName").value.trim();
  let email = document.getElementById("formEmail").value.trim();
  let password = document.getElementById("formPassword").value.trim();
  let message = document.getElementById("formMessage");

  // Reset styles
  message.className = "";

  // Validation
  if (name === "") {
    message.textContent = "Name cannot be empty.";
    message.classList.add("error");
    return;
  }

  // Email regex check
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    message.textContent = "Enter a valid email address.";
    message.classList.add("error");
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.classList.add("error");
    return;
  }

  // If all good
  message.textContent = "Form submitted successfully! 🎉";
  message.classList.add("success");
});
