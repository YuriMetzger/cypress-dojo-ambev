/// <reference types="Cypress" />

const faker = require('faker-br');

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('/cadastrar')    
    });
    it('Cadastrar usuário com sucesso', () => {
        let nome = `${faker.name.firstName()} ${faker.name.lastName()}`
        let email = faker.internet.email(nome)

        cy.get('[data-test="register-name"]').type(nome)
        cy.get('[data-test="register-email"]').type(email)
        cy.get('[data-test="register-password"]').type('senha@1234')
        cy.get('[data-test="register-password2"]').type('senha@1234')
        cy.get('[data-test="register-submit"]').click()

        cy.get('[data-test="dashboard-welcome"]').should('have.text',` Bem-vindo ${nome}`)
    });
});

/*
Funcionalidade: Cadastro
cenário:Cadastrar usuário com uscesso
    Dado que eusteja na tela de cadastro
    Quando eu preencher os campos obrigatórios
    Então deve direcionar para o dashboard
*/