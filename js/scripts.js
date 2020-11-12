let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else {
      alert("Please enter valid Pokemon");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    // let pokemonList = document.querySelector(".pokemon-list");
    let pokemonList = $('.pokemon-list');
    // let listItem = document.createElement("li");
    let listItem = $('<li class = "list"></li>');
    // listItem.classList.add("list");
    // let button = document.createElement("button");
    // button.innerText = pokemon.name;
    // button.classList.add("button-class");
    let button = $('<button class="button-class">'+ pokemon.name + '</button>');
    // listItem.appendChild(button);
    listItem.append(button);
    // pokemonList.appendChild(listItem);
    pokemonList.append(listItem);
    // button.addEventListener("click", function (event) {
    //   showDetails(pokemon);
    // });
    button.on("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(){
      console.log(pokemon);
      showModal(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = [];
      details.types.forEach(function(itemType){
        item.types.push(itemType.type.name);
      })
    }).catch(function (e) {
      console.error(e);
    });
  }

  // let modalContainer = document.querySelector("#modal-container");
  let modalContainer = $('#modal-container');
  // showModal function defined here... 
  function showModal(item){
    // Clear all existing modal content
    // modalContainer.innerHTML = "";
    modalContainer.empty();

    // Create div element in DOM, add class to div element
    // let modal = document.createElement("div");
    // modal.classList.add("modal");
    let modal = $('<div class="modal"></div>');

    // Create close button in modal 
    // let closeButtonElement = document.createElement("button");
    // closeButtonElement.classList.add("modal-close");
    // closeButtonElement.innerText = "Close";
    let closeButtonElement = $('<button class="modal-close">Close</button>');
    // Add event listener to close modal when button is clicked
    // closeButtonElement.addEventListener("click", hideModal);
    closeButtonElement.on("click", hideModal);

    // Create element for pokemon name in modal content
    // let nameElement = document.createElement("h1");
    // nameElement.innerText = item.name;
    let nameElement = $('<h1> '+ item.name + ' </h1>');
    
    // Create element for pokemon height in modal content
    // let heightElement = document.createElement("p");
    // heightElement.innerText = "height : " + item.height;
    let heightElement = $('<p> ' + "height : " + item.height + ' </p>');

    // Create img for pokemon in modal content
    // let imageElement = document.createElement("img");
    let imageElement = $('<img>');
    // imageElement.src = item.imageUrl;
    imageElement.attr("src", item.imageUrl);

    // Apend modal content
    // modal.appendChild(closeButtonElement);
    // modal.appendChild(nameElement);
    // modal.appendChild(heightElement);
    // modal.appendChild(imageElement);
    // modalContainer.appendChild(modal);
    modal.append(closeButtonElement);
    modal.append(nameElement);
    modal.append(heightElement);
    modal.append(imageElement);
    modalContainer.append(modal);

    // Add class to show modal
    // modalContainer.classList.add("is-visible");
    modalContainer.addClass("is-visible");
  }

   // Hide modal when close button is clicked
   function hideModal() {
    // modalContainer.classList.remove("is-visible");
    modalContainer.removeClass("is-visible");
  }

  // Hide modal when ESC button is pressed on keyboard
  // window.addEventListener("keydown", (e) => {
  //   if (e.key === "Escape"&&
  //   modalContainer.classList.contains("is-visible")) {
  //     hideModal();
  //   }
  // });
  jQuery(window).on("keydown", e => {
    var $modalContainer = $("#modal-container");
    if (e.key === "Escape" && $modalContainer.hasClass("is-visible")) {
      hideModal();
    }
  });

  // Hide modal when user clicks outside of modal
  // modalContainer.addEventListener("click", (e) => {
  //   let target = e.target;
  //   if (target === modalContainer) {
  //     hideModal();
  //   }
  // });
  $(".body").click(function() {
    if ($("#modal-container").is(":is-visible")) {
        $("#modal-container").hideModal();
    }
 });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
})();

pokemonRepository.loadList().then(function() {
  // set up forEach loop on pokemonList
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function search() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.querySelectorAll(".list");
  // console.log(li);
  // console.log(li[0].querySelector("#test").getElementsByTagName("button")[0]);
  // li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("button")[0];
    console.log(a.innerText);
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}