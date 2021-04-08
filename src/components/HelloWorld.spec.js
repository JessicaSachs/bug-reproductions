/* eslint-disable */
import { mount } from "@cypress/vue";
import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders a message", () => {
    mount(HelloWorld);

    cy.get("h1").should("have.text", "Hello");
  });
});
