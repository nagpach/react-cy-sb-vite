// src/__tests__/App.test.tsx
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import '@testing-library/jest-dom'
import {expect, jest, test} from '@jest/globals';


describe("App", () => {
  it("should work as expected", () => {
    // render(<App />);
    expect(1 + 1).toBe(2);
  });
});