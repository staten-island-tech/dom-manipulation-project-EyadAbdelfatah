const DOMSelectors = {
  container: document.querySelector(".container"),
  imgInput: document.querySelector("#img-input"),
  button: document.querySelector(".btn"),
  nameInput: document.querySelector("#name-input"),
  form: document.querySelector("form"),
  removeButton: document.querySelector("#remove"),
  
};

function createCard(event) {
  event.preventDefault();

  const imgUrl = DOMSelectors.imgInput.value;
  const name = DOMSelectors.nameInput.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card" >
    <h2 class="card-header"> ${name} </h2>
        <img src="${imgUrl}" alt="User Image" class = "card-img">
        <button type="submit" class="btn" id = "remove">Remove</button>
    </div>
     `
  );
  clearInput();
}
function removeCard(event) {
  if (event.target.id === "remove") {
    const selectedCard = event.target.parentElement;
    selectedCard.remove();
  }
}
function clearInput() {
  DOMSelectors.imgInput.value = "";
  DOMSelectors.nameInput.value = "";
}

DOMSelectors.form.addEventListener("submit", createCard);

DOMSelectors.container.addEventListener("click", removeCard);
