const DOMSelectors = {
  container: document.querySelector(".container"),
  imgInput: document.querySelector("#img-input"),
  button: document.querySelector(".btn"),
  nameInput: document.querySelector("#name-input"),
  form: document.querySelector("form"),
  removeButton:document.querySelector("#remove"),
  error_container:document.querySelector("form-container"),
};

function createCard(event) {
  event.preventDefault();

  const imgUrl = DOMSelectors.imgInput.value;
  const name = DOMSelectors.nameInput.value;
  if(!imgUrl || !name){
    alert("Please enter all values")
  }
  else{
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card" >
    <h2 class="card-header"> ${name} </h2>
        <img src="${imgUrl}" alt="User Image" class = "card-img">
    </div>
    <button type="submit" class="btn" id = "remove">Remove</button> `

  );}
  clearInput();

  
}
function removeCard(event){
  event.preventDefault();
  document.querySelector(".card").remove();
  
}
function clearInput(){
  DOMSelectors.imgInput.value = "";
  DOMSelectors.nameInput.value = "";
}

DOMSelectors.form.addEventListener("submit", createCard );

DOMSelectors.removeButton.addEventListener("submit", removeCard );

