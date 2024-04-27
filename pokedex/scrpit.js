const ul = document.createElement("ul")

async function traerPokemon(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander/")
    const data = await response.json()
    
    const habilities = data.abilities
    habilities.forEach(h => {
    const li = document.createElement("li")
    li.innerText = h.abilities.name
    ul.appendChild(li)
})
}
body.append(ul)
console.log("Estoy imprimiendo algo")


/*fetch("https://pokeapi.co/api/v2/pokemon/charmander/")
    .then((response) => {
        return response.json()
    })

    .then((data) => {
        const habilities = data.abilities
        habilities.forEach(h => {
            const li = document.createElement("li")
            li.innerText = h.ability.name
            ul.appenChild(li)
        })
    })

const body = document.querySelector("body")
body.append(ul)
console.log("Estoy imprimiendo algo")*/