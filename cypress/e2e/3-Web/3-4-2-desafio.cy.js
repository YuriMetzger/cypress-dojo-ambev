/// <reference types="Cypress" />

describe('Desafio 2', () => {
    it('Deve realizar login sem sucesso', () => {
        cy.login('yurimetzger@email.com','senhaerrada')

        cy.get('[data-test="alert"]').should('have.text','Credenciais inválidas')
    });
});