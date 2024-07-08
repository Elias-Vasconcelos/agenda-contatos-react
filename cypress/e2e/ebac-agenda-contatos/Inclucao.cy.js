/// <reference types="cypress" />

describe('Testando as funcionalidades inclusão, alteração e remoção de um contato',  () =>{
    beforeEach( () => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('Incluindo contato', () => {
        cy.get('.sc-gLDzan.ckeKmo > input[type="text"]').type('Elias Ferreira')
        cy.get('.sc-gLDzan.ckeKmo > input[type="email"]').type('eliasferreiraoficial14@gmail.com')
        cy.get('.sc-gLDzan.ckeKmo > input[type="tel"]').type('11912345678')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 4 )
    } )
})