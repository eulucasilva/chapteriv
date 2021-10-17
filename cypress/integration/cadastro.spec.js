/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app')


        // ------MAPEANDO ELEMENTOS------
        
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

    
        cy.get('input[value=n]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        cy.get('select#countries').select('Japão', {force: true})
        cy.get('select#years').select('2017', {force: true})
        cy.get('select#months').select('Abril', {force: true})
        cy.get('select#days').select('11', {force: true})

        cy.get('input#firstpassword').type('Alunos@2021')
        cy.get('input#secondpassword').type('Alunos@2021')

        cy.get('button#submitbtn').click()

        cy.url().should('contain', 'listagem')


    });
});