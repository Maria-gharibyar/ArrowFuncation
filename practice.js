const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);



 const divideBythree=pokémon.filter(p => p.id%3==0).map(p=> p.id);
 console.log(divideBythree);


const fireType=pokémon.filter(fr=> fr.types.includes('fire'));
console.log(fireType);



const moreThenOnetype=pokémon
.filter( t => t.types.length==2);
console.log(moreThenOnetype);


const NameOfpoke=pokémon.map(t=> t.name);
console.log(NameOfpoke);

 const NameOfpokeman=pokémon
 .filter(m => m.id > 99).map(m => m.name);
 console.log(NameOfpokeman);


const NameofPoision=pokémon.filter(n=> n.types.includes('poison')).map(m=>m.name);
console.log(NameofPoision)


const secoundType=pokémon.filter(t=> t.types.includes("flying")).map(t=>t.types);
console.log(secoundType);
const normalTypeCount = pokémon.filter(n => n.types.includes("normal")).length;

console.log(normalTypeCount);
