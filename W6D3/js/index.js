console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  method: 'GET',
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=e319da8f855b4ec13b0b650e99e6eac4",
  success(data) {
    console.log("We have your weather!");
    console.log(data);
  },
  error() {
    console.error("An error occurred.");
  }
});

// Add another console log here, outside your AJAX request
console.log("Logged after the AJAX request");