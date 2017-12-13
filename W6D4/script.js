document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const listFormSubmit = (event) => {
    event.preventDefault();

    const placeNameInputEl = document.querySelector(".favorite-input");
    const placeName = placeNameInputEl.value;
    placeNameInputEl.value = "";

    const li = document.createElement("li");
    li.textContent = placeName;
    
    const ul = document.getElementById("sf-places");
    ul.appendChild(li);
  };
  
  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", listFormSubmit);


  // adding new photos

  // --- your code here!



});
