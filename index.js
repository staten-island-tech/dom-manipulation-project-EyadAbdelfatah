const Selectors = {
    formImg:document.getElementById("img"),
}



Selectors.formImg.addEventListener("submit",function(event){
    event.preventDefault();
    Selectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class="card"><h2 class="card-header"><img src="${Selectors.formImg}" alt=""></h2></div>`
      );
})

  
