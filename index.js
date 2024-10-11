const DOMSelectors = {
  container: document.querySelector(".container"),
  imgInput: document.querySelector("#img-input"), 
  formImg: document.querySelector("#img") 
};

DOMSelectors.formImg.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const imgUrl = DOMSelectors.imgInput.value; 


  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class="card-header">
        <img src="${imgUrl}" alt="User Image" style="width: 100%; height: auto;">
      </h2>
    </div>`
  );

  DOMSelectors.imgInput.value = "";
});
