import { test, assert, beforeAll } from "vitest";
import { showConfirmationModal } from "../utils/helper";
import { JSDOM } from "jsdom";

let dom: JSDOM;

beforeAll(() => {
  dom = new JSDOM('<div id="modal"></div>', { runScripts: "dangerously" });
  global.document = dom.window.document;
});

test("showConfirmationModal displays correct message if 'isPine' is true", () => {
  showConfirmationModal(true, "Gran");

  assert.equal(
    dom.window.document.querySelector("#modal")!.textContent,
    "En Gran har lagts i din kundkorg."
  );
});

test("showConfirmationModal displays correct message if 'isPine' is false", () => {
  showConfirmationModal(false);

  assert.equal(
    dom.window.document.querySelector("#modal")!.textContent,
    "Tack för att du handlade av oss!"
  );
});
