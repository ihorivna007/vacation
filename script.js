(function(){
    "use strict";
    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit);
    function handleFormSubmit(event){
        event.preventDefault();

        const destName = event.target.elements["name"].value;
        const destLocation = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDescription = event.target.elements["description"].value;

        for(let i = 0; i < detailsForm.length; i++){
            detailsForm.elements[i].value = "";
        }

        const destCard =  createDestinationCard(destName, destLocation, destPhoto, destDescription);

        function createDestinationCard(name, location, photoURL, description){
            const card = document.createElement('div');
            card.className = 'card';
            
            const img = document.createElement('img');
            img.setAttribute('alt', name);
            const constantPhotoURL = 'images/signpost.jpg';
            if(photoURL.length === 0){
                img.setAttribute('src', constantPhotoURL);
            }else img.setAttribute('src', photoURL);
            
            card.appendChild(img);

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h3');
            cardTitle.innerHTML = name;
            cardBody.appendChild(cardTitle);

            const cardSubtitle = document.createElement('h4');
            cardSubtitle.innerHTML = location;
            cardBody.appendChild(cardSubtitle);

            if(description.length !== 0){
                const cardText = document.createElement('p');
                cardText.innerHTML = description;
                cardText.className = 'card-text';
                cardBody.appendChild(cardText);
            }

            const cardButton = document.createElement('button');
            cardButton.innerHTML = 'Remove';
            cardBody.appendChild(cardButton);
            cardButton.addEventListener('click', removeDestination)

            card.appendChild(cardBody);

            return card;
        }

        function removeDestination(event){
            const card = event.target.parentElement.parentElement;
            card.remove();
        }

        const wishListContainer = document.getElementById('destinations_container');
        if(wishListContainer.children.length === 0){
            document.getElementById('title').innerHTML = "My wish list";
        }

        document.querySelector('#destinations_container').appendChild(destCard);
        
    }
})();
