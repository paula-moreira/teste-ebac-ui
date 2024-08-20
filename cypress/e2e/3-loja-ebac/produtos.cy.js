/// <reference types="cypress"/>

before(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});

describe('Funcionalidade: Produtos', () => {

    it('Deve selecionar um produto da lista', () => {
       cy.get('.products > .row')
            //.first()
            //.last()
            //.eq(2)
            .contains('Ajax Full-Zip Sweatshirt')
            .click()

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});