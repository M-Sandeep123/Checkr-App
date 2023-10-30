import '../support/index';

export abstract class BaseEyes {
  seesTextWithId(id: string, text: string) {
    cy.get(`#${id}`).should('have.text', text);
    return this;
  }
}

export class BaseHands {

  wait(milliSecs: number) {
    cy.wait(milliSecs);
    return this;
  }
}

export class BaseDependencies {

  accessUrl(url: string) {
    cy.visit(`${url}`);
    return this;
  }
}