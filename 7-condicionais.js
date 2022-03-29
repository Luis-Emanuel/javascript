console.log(`Trabalhando com condicionais:`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 12;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDestinos.splice(1,1); //removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
};

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada == true){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
};

console.log(listaDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);



