// Usando fetch para obtener datos de la PokeAPI
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(response => response.json())
  .then(data => {
    // Iterar sobre los resultados de Pokémon
    data.results.forEach(pokemon => {
      // Convertir la primera letra del nombre del Pokémon a mayúscula
      const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      
      // Imprimir el nombre con la primera letra en mayúscula y el link
      console.log(`Nombre: ${pokemonName}, Link: ${pokemon.url}`);
    });
  })
  .catch(error => console.error('Error:', error));
// Función para obtener información detallada de un Pokémon específico
function getPokemonData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        // Imprimir el nombre con la primera letra en mayúscula
        const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        
        // Obtener los tipos del Pokémon
        const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
  
        // Obtener las habilidades del Pokémon
        const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
  
        // Obtener las estadísticas del Pokémon
        const stats = data.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(', ');
  
        // Imprimir toda la información
        console.log(`Nombre: ${name}`);
        console.log(`Tipo: ${types}`);
        console.log(`Habilidades: ${abilities}`);
        console.log(`Stats: ${stats}`);
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Llamar la función con el nombre de un Pokémon específico
  getPokemonData('pikachu');  // Puedes cambiar 'pikachu' por otro Pokémon

  