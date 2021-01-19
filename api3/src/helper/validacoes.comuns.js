const { InvalidArgumentError } = require('../helper/erros')

module.exports = {

    campoStringNaoNulo: (valor, nome) => {
        if(typeof valor !== 'string' || valor === 0){
            throw new InvalidArgumentError(`É necessário preencher o campo ${nome}!`);
        }
    },

    campoTamanhoMinimo: (valor, nome, minimo) => {

        if(valor.length < minimo){
            throw new InvalidArgumentError(
                ` o campo ${nome} precisa ser maior que ${minimo} caracteres`
            );
        }
    },

    campoTamanhoMaximo: (valor, nome, maximo) => {

        if(valor.length > maximo){
            throw new InvalidArgumentError(
                ` o campo ${nome} deve ser menor que ${maximo} caracteres`
            );
        }
    }

};