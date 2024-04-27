document.addEventListener('DOMContentLoaded', function () {
    const pokemonList = document.getElementById('pokemon-list');

    for (let i = 1; i <= 100; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(pokemonData => {
                const pokemonElement = document.createElement('div');
                pokemonElement.classList.add('pokemon');

                pokemonElement.innerHTML = `
          <h2>${pokemonData.name}</h2>
          <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
          <p>Ataque: ${pokemonData.stats[4].base_stat}</p>
          <p>Defensa: ${pokemonData.stats[3].base_stat}</p>
          <p>Velocidad: ${pokemonData.stats[0].base_stat}</p>
        `;

                pokemonList.appendChild(pokemonElement);
            });
    }
});
