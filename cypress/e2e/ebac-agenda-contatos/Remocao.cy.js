/// <reference types="cypress" />

describe('Testando as funcionalidades inclusão, alteração e remoção de um contato', () => {
    beforeEach( () => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('Remocao de contatos', () => {
        cy.get('.delete').first().click()
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 2 )
    } )
} )