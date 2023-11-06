import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
//access page elements
const body = document.querySelector('body');
const select = document.querySelector('.select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
//hide dropdown menu 
select.style.display = 'none';
//add listeners to document and dropdown
document.addEventListener("DOMContentLoaded", onDocumentLoad)
select.addEventListener('change', breedClickHandler);
//function to request cat info
async function breedClickHandler(){
    const selectelem = select.children.selectElement; //access select element
    const selectedOption = selectelem.options[selectelem.selectedIndex].value;//check which option was cklicked
        try {
            catInfo.style.display = 'none';           //hide info on previous cat if it was
            loader.style.display = 'block';           //display loader
            const breed = await fetchCatByBreed(selectedOption);    //wait for results on cat breed
            loader.style.display = 'none';    //hide loader
            renderCatInfo(breed)             //render data on selected breed
     } catch (error) {       // handle error
        body.innerHTML= `Ooops, something went wrong!... Check internet connection and refresh page and/or try again later`;
        iziToast.error({
            message: `Failed to load content`,
            position: 'topRight',
          });  
          console.log(`${error.message}`)
     }
     
}
//function executed on page load
async function onDocumentLoad(){
    try {
        const breeds = await fetchBreeds();    //wait to get all cat breeds
        loader.style.display = 'none';        //hide loader after data received
        renderBreeds(breeds);                // render data to select tag
        select.style.display = 'flex';      //display dropdown with breed options
    } catch (error) {   // handle error
        body.innerHTML= `Ooops, something went wrong!... Check internet connection and refresh page and/or try again later`;
        iziToast.error({
            message: `Failed to load content`,
            position: 'topRight',
          });
          console.log(`${error.message}`)
    }
}
//function to render cat breeds to select elem
function renderBreeds(breeds){
    const markup = breeds.map(({id,name})=>{
        return `<option value="${id}">${name}</option>`;
    }).join("");
select.innerHTML = `<select class="breed-select" id="selectElement">${markup}</select>`

}
//function to render info on a selected cat
function renderCatInfo(breed){
    catInfo.style.display = 'flex';
    const markup = `<img class="cat-img" src="${breed[0].url}" alt="${breed[0].breeds[0].name}"  />
    <div class="breed-info">
      <h1 class="cat-name">${breed[0].breeds[0].name}</h1>
      <p class="description">${breed[0].breeds[0].description}</p>
      <h2 class="temperament">Temperament:</h2>
      <p class="temp-descr">${breed[0].breeds[0].temperament}</p>
    </div>
    `
    return catInfo.innerHTML = markup
}