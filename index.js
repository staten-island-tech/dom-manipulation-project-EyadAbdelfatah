const DOMSelectors = {
  container: document.querySelector(".container"),
  imgInput: document.querySelector("#img-input"),
  nameInput: document.querySelector("#name-input"),
  form: document.querySelector("form"),
  description: document.querySelector("#description-input"),
  

};

function createCard() {


  
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    let imgUrl = DOMSelectors.imgInput.value;
    let name = DOMSelectors.nameInput.value;
    let description = DOMSelectors.description.value;
    DOMSelectors.container.insertAdjacentHTML(
      
      "beforeend",
      `
        <div class="card" >
        <h2 class="card-header"> ${name} </h2>
            <img src="${imgUrl}" alt="User Image" class = "card-img">
            <p>${description}</p>
            <button type="button" class="btn" id = "remove">Remove</button>
        </div>
         `
    );
    clearInput();
  })

  
}
function removeCard() {
  DOMSelectors.container.addEventListener("click", function (event) {
    if (event.target.id === "remove") {
      const selectedCard = event.target.parentElement;
      selectedCard.remove();
    }
  });
}

function clearInput() {
  DOMSelectors.imgInput.value = "";
  DOMSelectors.nameInput.value = "";
  DOMSelectors.description.value="";
}

createCard();

removeCard();