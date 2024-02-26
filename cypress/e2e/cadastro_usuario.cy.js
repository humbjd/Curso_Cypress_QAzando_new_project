/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import commom_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {
    
    beforeEach('Acessar cadastro de usuário',() => {
        commom_page.acessarCadastroUsuario()
    })

    
    it('Campo nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo e-mail vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo e-mail inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.person.firstName()) // invalido
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email()) // invalido
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválida', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email()) // invalido
        cadastro_page.preencheSenha('123') // invalido - menor que 6 digitos
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async () => {
        // comandos de teste
        const nome = await faker.person.fullName()

        cadastro_page.preencheNome(nome)
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha('123456') 
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(nome)
    })
})