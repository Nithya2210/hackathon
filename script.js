const pokeBtn = document.querySelector('#pokeBtn')

pokeBtn.addEentListener('click', getName)

async function getName(){

    try {
        const getPokemonStats = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.data.results)
            .then(data => {
               data.map(pakeStats =>{
                    getStats(pokeStats)
               })
            return data
        })

    } catch (error) {
        console.error(error)
    }

}
const getMainContainer = document.querySelector('#mainContainer')
const getStats = async (charStats) => {
    try {
            const inStats = await axios.get(charStats.url)
                .then(res => res.data)
                .then(data => {
                    console.log()                    
                    //<div class="card" style="width: 18rem;">
                    const card = document.createElement('div')
                        card.className = 'card'

                    //<img src="..." class="card-img-top" alt="...">
                    const frontShiny = data.sprites.front_shiny
                    const img = document.createElement('img')
                        img.src = frontShiny
                        img.className = 'card-img-top'
                        card.append(img)

                     /*<div class="card-body"> */
                    const cardBody = document.createElement('div')
                        cardBody.className = card-body
                        //<h5 class="card-title">Card title</h5>
                    const h5E1 = document.createElement('h5')
                          h5E1.className = 'card-title'
                          h5E1.textContent = charStats.name
                        cardBody.append(h5E1)
                        // console.log(charStats.name)
                        // p  element .card-text

                        const pE1 = document.createElement('p')
                        pE1.className = 'card-text'
                        // console.log(data.types)
                        pE1.textContent= data.types.map(type =>{
                            console.log(type.type.name)
                            return ' ' + type.type.name
                        })
                        cardBody.append(pE1)
                        
                        card.append(cardBody)
                    getMainContainer.append(card)

                })
    } catch (error) {
        console.error(error)

    }


}

// https://pokeapi.co/api/v2/pokemon/ditto
/*
2divs one img  one h5 p 
 
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/