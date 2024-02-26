import { faker } from "@faker-js/faker"
import commum_page from "../support/pages/commum_page"
import login_page from "../support/pages/login_page"

describe('Login', () => {
    
    beforeEach(() => {
        commum_page.acessarPaginaLogin()
    })


    it('Campo e-mail vazio', () => {
        login_page.clicarBotaoLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Campo senha vazio', () => {
        login_page.preencherCampoEmail(faker.internet.email())
        login_page.clicarBotaoLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('E-mail inválido', () => {
        login_page.preencherCampoEmail(faker.person.firstName()) // e-mail inválido
        login_page.preencherCampoSenha(faker.internet.password())
        login_page.clicarBotaoLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Senha inválida', () => {
        login_page.preencherCampoEmail(faker.internet.email())
        login_page.preencherCampoSenha('1') // senha inválida
        login_page.clicarBotaoLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Login com sucesso', async () => {
        // comandos de teste
        const emailCadastro = await 'teste@teste.com'

        login_page.preencherCampoEmail(emailCadastro)
        login_page.preencherCampoSenha(faker.internet.password())
        login_page.clicarBotaoLogin()
        login_page.validarMensagemSucesso(emailCadastro)
    })
})