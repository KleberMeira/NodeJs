//dao

const { InvalidArgumentError } = require ('../helper/erros');
const validacoesComuns = require('../helper/validacoes.comuns');
const bcrypt = require('bcrypt');

class Usuario{
    constructor(usuario){
        this.id = usuario.id;
        this.nome = usuario.nome;
        this.senhaHash = usuario.senhaHash;

        this.valida();
    }


    async adiciona(){
        validacoesComuns.campoStringNaoNulo(senha, 'senha'),
        validacoesComuns.campoTamanhoMinimo(senha, 'senha,', 8)
        validacoesComuns.campoTamanhoMaximo(senha, 'senha,', 64)

        this.senhaHash = await u
    }

    async adicionaSenha(senha){
        
    }

    valida(){

    }

    async deleta(){
        return usuarioDao.deleta(this)
    }

    static async buscaPorId(id){
        const usuario = await usuarioDao.buscaPorId(id);
        if(!usuario){
            return null;
        }
    }

    static gerarSenhaHash(senha){

        const custoHash = 12;
        return bcrypt.hash(senha, custoHash);
    }

}
