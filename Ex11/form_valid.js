function updateTime() {
  const time = new Date();
  let hours = time.getHours();
  const min = time.getMinutes().toString().padStart(2, "0");
  const sec = time.getSeconds().toString().padStart(2, "0");
  const timeBox = document.querySelector(`#time`);
  const ampm = hours >= 12 ? "pm" : "am";
  hours = (hours % 12 || 12).toString().padStart(2, "0");
  timeBox.innerHTML = `${hours} : ${min} : ${sec} ${ampm}`;
}

// Call updateTime immediately, then set interval
updateTime();
setInterval(updateTime, 1000);

// Name validation - max 15 characters
let nameptr = document.querySelector(`#name`);
nameptr.addEventListener("input", () => {
  if (nameptr.value.length >= 15) {
    nameptr.classList.add("error");
  } else {
    nameptr.classList.remove("error");
  }
});

// Zipcode validation - must be 6 digits
let zip = document.querySelector(`#zipcode`);
zip.addEventListener("input", () => {
  if (zip.value.length !== 6) {
    zip.classList.add("error");
  } else {
    zip.classList.remove("error");
  }
});

// Phone validation - must be 10 digits
const phone = document.querySelector(`#phone`);
phone.addEventListener("input", () => {
  if (phone.value.length !== 10) {
    phone.classList.add("error");
  } else {
    phone.classList.remove("error");
  }
});

// Email validation using regex
const email = document.querySelector(`#email`);
email.addEventListener("input", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }
});

// PAN validation - must be in format ABCDE1234F
const pan = document.querySelector(`#pan`);
pan.addEventListener("input", () => {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  if (!panRegex.test(pan.value)) {
    pan.classList.add("error");
  } else {
    pan.classList.remove("error");
  }
});

// Password validation - 6 to 8 characters
const passwd = document.querySelector(`#password`);
passwd.addEventListener("input", () => {
  if (passwd.value.length < 6 || passwd.value.length > 8) {
    passwd.classList.add("error");
  } else {
    passwd.classList.remove("error");
  }
});

// Verify password matches
const verifyPass = document.querySelector(`#verify-pass`);
verifyPass.addEventListener("input", () => {
  if (verifyPass.value !== passwd.value) {
    verifyPass.classList.add("error");
  } else {
    verifyPass.classList.remove("error");
  }
});

// Form submission validation
document.querySelector("form").addEventListener("submit", function(event) {
  // Check name
  if (nameptr.value.length >= 15 || nameptr.value.length === 0) {
    nameptr.classList.add("error");
    event.preventDefault();
  }
  
  // Check zipcode
  if (zip.value.length !== 6) {
    zip.classList.add("error");
    event.preventDefault();
  }
  
  // Check country is selected
  const country = document.querySelector("input[list='countries']");
  if (!country.value) {
    country.classList.add("error");
    event.preventDefault();
  }
  
  // Check gender is selected
  const genderSelected = document.querySelector("input[name='gender']:checked");
  if (!genderSelected) {
    document.querySelectorAll("input[name='gender']").forEach(radio => {
      radio.parentElement.classList.add("error");
    });
    event.preventDefault();
  }
  
  // Check at least one preference is selected
  const prefsSelected = document.querySelectorAll("input[type='checkbox']:checked").length;
  if (prefsSelected === 0) {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
      checkbox.parentElement.classList.add("error");
    });
    event.preventDefault();
  }
  
  // Check phone
  if (phone.value.length !== 10) {
    phone.classList.add("error");
    event.preventDefault();
  }
  
  // Check email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    event.preventDefault();
  }
  
  // Check PAN
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  if (!panRegex.test(pan.value)) {
    pan.classList.add("error");
    event.preventDefault();
  }
  
  // Check password
  if (passwd.value.length < 6 || passwd.value.length > 8) {
    passwd.classList.add("error");
    event.preventDefault();
  }
  
  // Check passwords match
  if (verifyPass.value !== passwd.value) {
    verifyPass.classList.add("error");
    event.preventDefault();
  }
});

// Clear errors on reset
document.querySelector("button[type='reset']").addEventListener("click", function() {
  document.querySelectorAll(".error").forEach(el => {
    el.classList.remove("error");
  });
});
