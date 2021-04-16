document.addEventListener("DOMContentLoaded", function(){

// Challenge 1
fetch("https://dog.ceo/api/breeds/image/random/4") .then(function(response) {
    return response.json();
  }) .then(function(json){
    // Use this data inside of `json` to do DOM manipulation
    
    const div = document.querySelector("div#dog-image-container");
    
    for (i = 0; i < json.message.length; i++) {
        let image = document.createElement('img');
        image.src = json.message[i];
        image.width = "300";
        div.appendChild(image);    
    }
  }) 


// Challenge 2
fetch('https://dog.ceo/api/breeds/list/all') .then(function(response) {
        return response.json();
    }) .then(function(json){
        // adds the breeds to the page in the <ul> provided in index.html
        // console.log(json)
        let dogBreeds = Object.keys(json.message);

        const ul = document.querySelector("ul#dog-breeds");

        for (const breed of dogBreeds) {
            let li = document.createElement('li')
            li.innerText = breed;
            li.id = breed;
            ul.appendChild(li);
        }
        
    })

// Challenge 3
// add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.
const list = document.getElementById("dog-breeds");

list.addEventListener('click', function(event){
    let breed = event.target;
    
    if (!breed.classList.contains("click")){
        breed.classList.add("click");
    } else {
        breed.classList.remove("click");
    }
})

// Challenge 4
// add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.


fetch('https://dog.ceo/api/breeds/list/all') .then(function(response) {
        return response.json();
    }) .then(function(json){
               
        let dogBreeds = Object.keys(json.message);
        let dropDown = document.getElementById("breed-dropdown");
        
        
        dropDown.addEventListener("click", function(e){
            const letter = e.target.value;
            let array = dogBreeds.filter(breed => breed.startsWith(letter))
            const ul = document.querySelector("ul#dog-breeds");
        
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            
           for (const breed of array) {
                let li = document.createElement('li')
                li.innerText = breed;
                li.id = breed;
                ul.appendChild(li);
            }
            })    
    })


function addOptions(){
    const letters = ["e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const dropDown = document.getElementById("breed-dropdown");
    
    for (const indLetter of letters) {
        const newOption = document.createElement('option');
        newOption.value = indLetter;
        newOption.innerText = indLetter;
        dropDown.appendChild(newOption);
    }
}
addOptions();
});






