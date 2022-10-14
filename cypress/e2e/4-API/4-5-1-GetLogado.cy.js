/// <reference types="Cypress" />

import user from '../../fixtures/usuario.json'
let token

describe('Funcionalidade GET', () => {

    beforeEach(() => {
        cy.gerarToken(user.email,user.senha).then((tkn)=>{
            token = tkn
        })
    });

    it('Deve retornar o usuário logado', () => {
        const options = {
            method: 'GET',
            url: '/api/auth',
            headers: {
                cookie: token
            }
        }
        cy.request(
            options
        ).then((response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body.name).to.be.equal('Diogenes Xavier')
            expect(response.body.email).to.be.equal('DiogenesXavier56@gmail.com')
        })
    });
});