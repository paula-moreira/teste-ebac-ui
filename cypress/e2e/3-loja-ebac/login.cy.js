/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
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
    
    it('Deve fazer login com sucesso utilizando a massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, paula.teste (não é paula.teste? Sair)')
    })

    it('Deve fazer login com sucesso utilizando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha , {log: false}) //Não apresenta a senha no momento do teste
            cy.get('.woocommerce-form > .button').click() 
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, paula.teste (não é paula.teste? Sair)')
        })
    })

    it.only('Deve fazer login com sucesso utilizando comandos customizaveis', () => {
        cy.login('paula.teste@teste.com.br', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, paula.teste (não é paula.teste? Sair)')
    })
})
