/// <reference types="Cypress" />

describe('Funcionalidade cadastro via APIA', () => {
    let email = `yuri${Math.floor(Math.random() * 1000000)}@email.com`

    it('Deve fazer cadastro com sucesso', () => {   
        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                "name": "Yuri2",
                "email": email,
                "password": "senha@123"
            }
        }).then((response) =>{
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property("jwt")
        })
    });
});