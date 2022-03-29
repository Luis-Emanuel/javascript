console.log(`\nTrabalhando com condicionais:`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


const idadeComprador = 12;
const estaAcompanhada = true;
let temPassagemComprada = true;
const destino = "Rio de Janeiro"

console.log("Destinos possíveis:");
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false
while(contador < 3){
    if(listaDestinos[contador] == destino){
        destinoExiste = true
        break  
    }  
    contador += 1;
};

console.log(`Destino existe: ${destinoExiste}`)

for(let cont = 0 ; contador < 3 ; cont ++ ){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break;  
    }; 
};
