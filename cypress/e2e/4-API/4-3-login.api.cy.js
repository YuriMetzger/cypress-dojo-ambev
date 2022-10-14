/// <reference types="Cypress" />

describe('Funcionalidade login via API', () => {
    it('Deve fazer login com sucesso', () => {
        cy.fixture("usuario").then((data)=>{
            cy.request({
                method: 'POST',
                url: '/api/auth',
                body: {
                    "email": data.email,
                    "password": data.senha
                }
            }).then((response)=>{
                expect(response.status).to.be.equal(200)
            })
        })
        
    });
});