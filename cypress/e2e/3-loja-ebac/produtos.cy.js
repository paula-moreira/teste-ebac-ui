/// <reference types="cypress"/>

before(() => {
    cy.visit('produtos')
});

describe('Funcionalidade: Produtos', () => {

    it('Deve selecionar um produto da lista', () => {
       cy.get('.products > .row')
            //.first()
            //.last()
            //.eq(2)
            .contains('Aether Gym Pant')
            .click()

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});