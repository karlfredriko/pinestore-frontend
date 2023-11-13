import { assert, beforeAll, it } from "vitest";
import { closeTheDealModal, confirmNewCartItemModal } from "../utils/helper";
import { JSDOM } from "jsdom";

let dom: JSDOM;

beforeAll(() => {
  dom = new JSDOM('<div id="modal"></div>', { runScripts: "dangerously" });
  global.document = dom.window.document;
});

it("should display a custom message in the DOM", () => {
  confirmNewCartItemModal("*test*");

  assert.equal(
    dom.window.document.querySelector("#modal")!.textContent,
    "En *test* har lagts i din kundkorg."
  );
});

it("should display 'Tack för ditt köp och välkommen åter' when run", () => {
  closeTheDealModal();

  assert.equal(
    dom.window.document.querySelector("#modal")!.textContent,
    "Tack för ditt köp och välkommen åter"
  );
});
