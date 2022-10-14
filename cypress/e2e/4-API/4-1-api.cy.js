/// <reference types="Cypress" />

describe('Teste de API', () => {
    //simulação
    const dojo = {
        aula:"API",
        duracao: 3,
        professor: "Renato"
    }
    it('Validar dojo', () => {
        expect(dojo.aula).to.equal('API')
        expect(dojo.duracao).to.equal(3)
        expect(dojo.professor).to.equal('Renato')
    });

    var numero = [0,2,4,6,8,10]

    it('Validar numeros', () => {
        cy.log(`Posicao 1 do array: ${numero[1]}`)
        
        expect(numero).to.have.lengthOf(6)
    });

    const alunos =[
        {
            usuario: "William",
            cargo: "QA"
        },
        {
            usuario: "Carol",
            cargo: "QA"
        }
    ]
    it('Validar alunos', () => {
        expect(alunos[0].usuario).to.equal('William')
        expect(alunos[1].cargo).to.equal('QA')
    });
});