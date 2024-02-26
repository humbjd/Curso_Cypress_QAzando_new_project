/// <reference types="cypress" />

export default {
    preencherCampoEmail(email) {
        cy.get('#user')
            .type(email)
    },
    
    preencherCampoSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    clicarBotaoLogin() {
        cy.get('#btnLogin')
            .click()
    },

    validarMensagemErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    validarMensagemSucesso(email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)        
    }
}