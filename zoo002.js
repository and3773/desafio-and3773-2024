class ZooRecintos {

constructor() {

this.recintos = [
    { numero: 1, bioma: "Savana", tamanho: 10 },
    { numero: 2, bioma: "Floresta", tamanho: 5 },
    { numero: 3, bioma: "Savana e rio", tamanho: 7 },
    { numero: 4, bioma: "Rio", tamanho: 8 },
    { numero: 5, bioma: "Savana", tamanho: 9 }];

this.animais = {
    "MACACO": 1,
    "GAZELA": 2,
    "LEAO": 3,
    "LEOPARDO": 2,
    "CROCODILO": 3,
    "HIPOPOTAMO": 4};

}

analisaRecintos(animal, quantidade) {

const resultado = { recintosViaveis: [], erro: null };
        
if (!this.animais.hasOwnProperty(animal)) {
    resultado.erro = "Animal inválido";
    return resultado;}

if (quantidade <= 0) {
    resultado.erro = "Quantidade inválida";
    return resultado;}

    const tamanhoAnimal = this.animais[animal];
    let encontrouRecintoViavel = false;

this.recintos.forEach((recinto) => {

    const espacoOcupado = recinto.tamanho - (recinto.tamanho % tamanhoAnimal);
    const espacoNecessario = quantidade * tamanhoAnimal + (quantidade > 1 ? 1 : 0);
    const espacoLivre = recinto.tamanho - espacoOcupado;

if (espacoLivre >= espacoNecessario) {
    encontrouRecintoViavel = true;
    resultado.recintosViaveis.push(
    `Recinto ${recinto.numero} (espaço livre: ${espacoLivre - espacoNecessario} total: ${recinto.tamanho})`);}

});

if (!encontrouRecintoViavel) {
    resultado.erro = "Não há recinto viável";}

return resultado;

}
}


export { ZooRecintos as RecintosZoo };