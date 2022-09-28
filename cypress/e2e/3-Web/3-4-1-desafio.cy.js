/// <reference types="Cypress" />

describe('Desafio', () => {
    beforeEach(() => {
        cy.visit('/cadastrar')
    });

    it('Deve validar mensagem de aerta quando cadastrar usuário com email repetido', () => {
        cy.get('[data-test="register-name"]').type('Yuri Santiago')
        cy.get('[data-test="register-email"]').type('yurimetzger@email.com')
        cy.get('[data-test="register-password"]').type('senha@123')
        cy.get('[data-test="register-password2"]').type('senha@123')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="alert"]').should('have.text', 'Usuário já registrado')
    });
});