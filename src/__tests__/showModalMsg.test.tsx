import { assert, beforeAll, it } from "vitest";
import { showModalMsg } from "../utils/helper";
import { JSDOM } from "jsdom";

let dom: JSDOM;

beforeAll(() => {
  dom = new JSDOM('<div id="modal"></div>', { runScripts: "dangerously" });
  global.document = dom.window.document;
});

it("should display '*test*' in the DOM", () => {
  showModalMsg("*test*");

  assert.equal(
    dom.window.document.querySelector("#modal")!.textContent,
    "*test*"
  );
});

it("should display '*test-2*'", () => {
  showModalMsg("*test-2*");

  assert.notEqual(
    dom.window.document.querySelector("#modal")!.textContent,
    "*test*"
  );
});
