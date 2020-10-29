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

// set up for loop on pokemonList
// add color to different types
for (let i = 0; i < pokemonList.length; i++) {
  let color = "";
  for (let k = 0; k < pokemonList[i].types.length; k++) {
    if (pokemonList[i].types[k] === "grass") {
      color = '<span style="color:green;"> ';
    } else if (pokemonList[i].types[k] === "fire") {
      color = '<span style="color:red;">';
    } else if (pokemonList[i].types[k] === "ground") {
      color = '<span style="color:brown;">';
    } else if (pokemonList[i].types[k] === "fairy") {
      color = '<span style="color:lightblue;">';
    } else if (pokemonList[i].types[k] === "dragon") {
      color = '<span style="color:orange;">';
    }
  }

  let size = "";
  if (pokemonList[i].height > 6) {
    size = "Wow, what a big pokemon!";
  } else if (pokemonList[i].height < 2) {
    size = "Aww, a little pokemon!";
  } else {
    size = "An average size pokemon";
  }


 // set up box for each pokemon & its content 
  document.write(
    '<div class = "box">' +
      pokemonList[i].name +
      " (height: " +
      pokemonList[i].height +
      ")" +
      size +
      color +
      "<br>" +
      pokemonList[i].types +
      "<br>" +
      "</div>"
  );
}

