/// <reference types="Cypress" />

import usuarios from '../../fixtures/usuarios.json'

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('/login')    
    });
    it('Deve fazer o login com sucesso', () => {
        cy.fixture('usuario').then((user) =>{
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(`${user.email}`)
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(`${user.senha}`)
            cy.get('[data-test="login-submit"]').click()
            
            cy.get('[data-test="dashboard-welcome"]').should('have.text',  ` Bem-vindo ${user.nome}`)    
        })
    });

    it('Deve fazer o login com sucesso usando importação de dados', () => {
        cy.login(usuarios[2].email, usuarios[2].senha)
        

        cy.get('[data-test="dashboard-welcome"]').should('have.text',  ` Bem-vindo ${usuarios[2].nome}`)  
    });
});