console.log('%c HI', 'color: firebrick')

// Challenge 1

// on page load, fetch images using given url

// parse the response as JSON

// add image elements to the DOM **for each** image in the array

// SOLUTION: lines 13-27

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const dogImageContainer = document.getElementById('dog-image-container');

    fetch(imgUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.message.forEach(imgUrl => {
                const img = document.createElement('img');
                img.src = imgUrl;
                dogImageContainer.appendChild(img);
            })
        })

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreeds = document.getElementById('dog-breeds');

    fetch(breedUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (const breed in data.message) {
                const listItem = document.createElement("li");
                listItem.textContent = breed;
                dogBreeds.appendChild(listItem);

                listItem.addEventListener('click', () => {
                    listItem.style.color = 'green';
                })
            }
        })

    const breedDropdown = document.getElementById('breed-dropdown');
    
    function filterBreeds(letter) {
        dogBreeds.querySelectorAll('li').forEach((listItem) => {
            const breedName = listItem.textContent;
            if (breedName.startsWith(letter)) {
                listItem.style.display = 'list-item';
            } else {
                listItem.style.display = 'none';
            }
        })
    }

    breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        filterBreeds(selectedLetter);
    })
})


// Challenge 2

// on page load, fetch all the dog breeds using the url above

// add breeds to page in the <ul> provided in index.html

// SOLUTION: lines 29-40


// Challenge 3

// when the user clicks on any one of the <li>s, the font color of that <li> changes

// SOLUTION: lines 42-44


// Challenge 4

// filter breeds that start with a particular letter using a dropdown