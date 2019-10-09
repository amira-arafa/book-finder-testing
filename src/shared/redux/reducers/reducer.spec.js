import React from "react";
import { shallow, mount } from "enzyme";
import { BookReducer } from "../reducers/BookReducer";

describe("My Test Suite from reducer", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});

describe("Reducer", () => {
  it("should return empty object if there is no action passed", () => {
    const action = {};
    const state = {};
    const ResultFromReducer = BookReducer(state, action);
    expect(ResultFromReducer).toEqual({});
  });
  it("should return a new list when action is passed", () => {
    const action = {
      type: "SEARCH_RESULT",
      payload: {
        book1: "Amira",
        book2: "Amira brdo :D"
      }
    };
    const state = {};
    const ResultFromReducer = BookReducer(state, action);
    expect(ResultFromReducer).toEqual({
      ...state,
      books: {
        book1: "Amira",
        book2: "Amira brdo :D"
      }
    });
  });
});
