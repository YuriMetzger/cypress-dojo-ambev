/// <reference types="Cypress" />

describe('Funcionalidade: Criar perfil', () => {
    beforeEach(() => {
        cy.fixture('usuario').then((data) =>{
            cy.login(data.email,data.senha)
        })
        cy.visit('/criar-perfil')
    });
    it('Deve criar perfil com sucesso', () => {
        cy.get('#mui-component-select-status').click()
        cy.get('.MuiList-root').find('[data-value="Especialista em QA"]').click()

        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Via')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.google.com.br')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Bnu')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('jScript, Powershell e JS')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('yurimetzger')
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('bio')
        cy.get('[data-test="profile-submit"]').click()
        //cy.get('[data-test="profile-dashboard"]')
        cy.get('[data-test="dashboard-deleteProfile"]').should('exist')

    });
});