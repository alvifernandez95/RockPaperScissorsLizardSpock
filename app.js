//En este codigo de JavaScript vamos a poner en práctica un juego llamado Rock-Paper-Scissors
//Lizard-Spock, que traducido al español sería Piedra-Papel-Tijera-Lagartija-Spock. 

//Este juego no es más que una divertida variante del clásico Piedra Papel o Tijera, propuesto por
//el personaje Sheldon Cooper en el Episodio X de la X Temporada de la sitcom The Big Bang Theory.

//Las reglas del juego son las siguientes:
//*Las tijeras cortan al papel, el papel cubre a la roca, la roca aplasta a la lagartija, la 
//lagartija envenena a Spock, Spock rompe las tijeras, las tijeras decapitan a la lagartija, 
//la lagartija se come el papel, el papel refuta a Spock, Spock vaporiza la piedra y como
//siempre, la piedra aplasta a las tijeras. 

let opciones = ["Piedra","Papel","Tijera","Lagartija","Spock"];

let computerChoice = opciones[Math.floor(Math.random()*5)]

console.log(computerChoice)