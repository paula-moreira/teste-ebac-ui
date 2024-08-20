/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    }); 
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('paula.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, paula.teste (não é paula.teste? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        cy.get('#username').type('paula2.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('paula.teste@teste.com.br')
        cy.get('#password').type('teste@dfd123')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('exist')
        
    });

})
