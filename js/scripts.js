let pokemonRepository = (function(){
  let pokemonList = [
    {
      name: "Charmander",
      height: 4.0,
      types: ["fire", "blaze"],
    },
    {
      name: "Sandshrew",
      height: 1.7,
      types: ["ground", "sand veil"],
    },
    {
      name: "Wigglytuff",
      height: 1.5,
      types: ["fairy", "cute charm", "competitive"],
    },
    {
      name: "Bayleef",
      height: 3.5,
      types: ["grass", "overgrow"],
    },
    {
      name: "Altaria",
      height: 7.0,
      types: ["dragon", "flying", "natural cure"],
    },
  ];
  
  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if(
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ){
      pokemonList.push(pokemon)
    }else {
      alert("Please enter valid Pokemon")
    }
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  }
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Jolteon", height: 2.5, types: ["lightning", "volt absor"]})

console.log(pokemonRepository.getAll());

// set up forEach loop on pokemonList
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});