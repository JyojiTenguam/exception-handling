// project.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

before(() => {
  cy.configureLayoutInspector({
    excludePadding: true,
    threshold: 5,
  });
});

describe('Exception Handling', () => {
  beforeEach(() => {
    cy.visit('./index.html');
  });

  describe('01 - Lance um erro em caso de input vazio', () => {
    it('Retorna erro quando os dois campos estão em branco', () => {
      cy.get('#button').click();
      cy.get('#result').should('contain', 'Preencha os campos para realizar a soma');
    });

    it('Retorna erro quando só um campo está preenchido', () => {
      cy.get('#value1').type('2');
      cy.get('#button').click();
      cy.get('#result').should('contain', 'Preencha os campos para realizar a soma');
    });

    it('Retorna a mensagem de erro "Preencha os campos para realizar a soma"', () => {
      cy.get('#button').click();
      cy.get('#result').should('contain', 'Preencha os campos para realizar a soma');
      
      cy.get('#value1').type('2');
      cy.get('#button').click();
      cy.get('#result').should('contain', 'Preencha os campos para realizar a soma');
    }); 
  });

  describe('02 - Lance um erro em caso de valores não numéricos', () => {
    it('Retorna erro quando os campos são preenchidos com valores não numéricos', () => {
      cy.get('#value1').type('1');
      cy.get('#value2').type('w');
      cy.get('#button').click();
      cy.get('#result').should('contain', 'Informe dois números para realizar a soma');

      cy.get('#value1').type('qewqe');
      cy.get('#value2').type('3');
      cy.get('#button').click();
      cy.get('#result').should('contain', 'Informe dois números para realizar a soma');

      cy.get('#value1').type('qwewqe');
      cy.get('#value2').type('qweqwe');
      cy.get('#button').click();
      cy.get('#result').should('contain', 'Informe dois números para realizar a soma');
    });

    it('Retorna a mensagem de erro "Informe dois números para realizar a soma"', () => {
      cy.get('#value1').type('1');
      cy.get('#value2').type('w');
      cy.get('#button').click();
      cy.get('#result').should('contain', 'Informe dois números para realizar a soma');
    });

    it('Não retorna erro quando os dois campos estão com valores numéricos', () => {
      cy.get('#value1').type('1212');
      cy.get('#value2').type('12123');
      cy.get('#button').click();
      cy.get('#result')
        .should('not.contain', 'Informe dois números para realizar a soma')
        .invoke('text')
        .should('match', /Resultado: [0-9]+/);
    });

  });

  describe('03 - Apague os inputs ao clicar no botão de realizar a soma', () => {
    it('Os valores são apagados após o clique', () => {
      cy.get('#value1').type('1');
      cy.get('#value2').type('2');
      cy.get('#button').click();
      cy.get('#value1').should('not.have.value', '1');
      cy.get('#value2').should('not.have.value', '2');
    });
  });
});