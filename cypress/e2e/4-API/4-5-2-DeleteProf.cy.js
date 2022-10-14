/// <reference types="Cypress" />

import user from '../../fixtures/usuario.json'
let token
let idExperience

describe('Funcionalidade Delete', () => {
    beforeEach(() => {
        cy.gerarToken(user.email,user.senha).then((tkn)=>{
            token = tkn
        })
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
            idExperience = response.body.experience[0]._id
        })
    });

    it('Deve deletar uma experiência profissional', () => {
        const options = {
            method: 'DELETE',
            url: `/api/profile/experience/${idExperience}`,
            headers: {
                cookie: token
            }
        }
        
        cy.request(
            options
        ).then((response)=>{
            expect(response.status).to.be.equal(200)
        })
    });
});