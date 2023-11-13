import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header test", () => {
  test("Header should have heading with text 'GranGården'", async () => {
    render(
      <MemoryRouter>
        <Header cart={[]} />
      </MemoryRouter>
    );
    await waitFor(() => {
      const headerElement = screen.queryByRole("heading", {
        name: /GranGården/,
      });

      expect(headerElement).toBeTruthy();
    });
  });
});
