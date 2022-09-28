/// <reference types="Cypress" />

import usuarios from '../../fixtures/usuarios.json'

describe('Desafio 3', () => {

    it.only('Deve validar mensagem de erro ao cadastrar com site errado', () => {
        cy.login(usuarios[2].email,usuarios[2].senha)
        cy.cadastrarPerfil('Especialista em QA','Empresa','site.com.br','bnu','skills','github','bio')
        cy.get('.MuiFormHelperText-root').should('have.text','Digite uma url válida')
    });
    
    it('Deve criar perfil com sucesso - Usando Commands', () => {
        cy.login(usuarios[2].email,usuarios[2].senha)
        cy.cadastrarPerfil('Especialista em QA','Empresa','https://site.com.br','bnu','skills','github','bio')
        cy.get('[data-test="dashboard-deleteProfile"]').should('exist')
    });
});