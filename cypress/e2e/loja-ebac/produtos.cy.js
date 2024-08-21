/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

before(() => {
    produtosPage.visitarUrl()
});

describe('Funcionalidade: Produtos', () => {

    it('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve adicionar um produto ao carrinho', () => {
        produtosPage.buscarProduto('Aether Gym Pant')
        produtosPage.addProdutoCarrinho('36', 'Blue', 3)
    });


it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {
    cy.fixture('produtos').then(dados  => {
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[0].tamanho,
            dados[0].cor, 
            dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

    })
    
    cy.get('.woocommerce-message').should('exist')

  })

})