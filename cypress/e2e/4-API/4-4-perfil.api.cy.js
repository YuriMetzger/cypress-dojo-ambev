/// <reference types="Cypress" />

import user from '../../fixtures/usuario.json'
let token

describe('Funcionalidade perfil via API', () => {
    
    beforeEach(() => {
        cy.gerarToken(user.email,user.senha).then((tkn)=>{
            token = tkn
        })
    });
    it('[GET] - Deve consultar perfil do usuário', () => {
        const options = {
            method: 'GET',
            url: '/api/profile/me',
            headers: {
                cookie: token
            }
        }
        cy.request(
            options
        ).then((response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body.githubusername).to.be.equal('yurimetzger')
        })
    });

    it.only('[PUT] - Deve adicionar experiência profissional do usuário', () => {
        const bodyRequest = {
            "title": "QA Specialist",
            "company": "Company",
            "from": "2022-09-30",
            "to": "2022-09-30"
        }
        const options ={
            method: 'PUT',
            url: '/api/profile/experience',
            headers: {
                cookie: token
            },
            body: bodyRequest
        }

        cy.request(options).then((response)=>{
            expect(response.status).to.be.equal(200)
        })
    });
});