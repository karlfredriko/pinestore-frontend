import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header test", () => {
  test("Header should have heading with text 'GranGården'", () => {
    render(
      <MemoryRouter>
        <Header cart={[]} />
      </MemoryRouter>
    );

    const headerElement = screen.queryByRole("heading", { name: /GranGården/ });

    expect(headerElement).toBeTruthy();
  });
});
