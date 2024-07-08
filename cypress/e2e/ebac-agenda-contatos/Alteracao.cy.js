/// <reference types="cypress" />

describe('Testando as funcionalidades inclusão, alteração e remoção de um contato', () => {
    beforeEach( () => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('Alteração de contato', () => {
        cy.get('.edit').first().click()
        cy.get('.sc-gLDzan.ckeKmo > input[type="text"]').clear().type('Teste de Alteracao')
        cy.get('.sc-gLDzan.ckeKmo > input[type="email"]').clear().type('TestedeAlteracao@gmail.com')
        cy.get('.sc-gLDzan.ckeKmo > input[type="tel"]').clear().type('11999999999')
        cy.get('.alterar').click()
    } )
})