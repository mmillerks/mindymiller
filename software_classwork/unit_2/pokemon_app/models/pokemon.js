const pokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
 ];


//Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
module.exports = pokemon;


//Index
app.get('/pokemon', function(req, res) {
    Pokemon.find({}, (err, "") => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('pokemon/Index', {
                keyvalue: pair
            })
        }
    })
});
//Sooo, I don't know exactly what I'm doing here. But I think I started it correctly???
