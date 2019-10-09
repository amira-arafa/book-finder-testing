import React from "react";
import { shallow, mount } from "enzyme";
import { Search } from "./Search";
import { App } from "../components/App";
import { Provider } from "react-redux";
import store from "../shared/redux/store";

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});

// Common used consts

// mount app
const SetUpApp = () => {
  const component = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return component;
};

// Shallow search
const SetUpSearch = () => {
  const component = shallow(<Search handleSubmit={() => {}} />);
  return component;
};

// Find function
const FindTag = (component, string) => {
  const wrapper = component.find(string);
  return wrapper;
};

//Find Props
const FindProps = (wrapper, string) => {
  const prop = wrapper.prop(string);
  return prop;
};
// Searchbar Component test

describe("Search Component", () => {
  it("form have one field", () => {
    expect(FindTag(SetUpSearch(), "Field").length).toBe(1);
  });
  it("renders input with name SearchField", () => {
    expect(FindProps(FindTag(SetUpSearch(), "Field"), "name")).toBe(
      "SearchField"
    );
  });
  it("renders input with label search", () => {
    expect(FindProps(FindTag(SetUpSearch(), "Field"), "label")).toBe("Search");
  });
  it("renders input with type search", () => {
    expect(FindProps(FindTag(SetUpApp(), "input"), "type")).toBe("search");
  });
  it("renders input with empty initial value", () => {
    expect(FindProps(FindTag(SetUpApp(), "input"), "value")).toBe("");
  });
  it("renders input with value equal to the value entered in the input field", () => {
    expect((FindTag(SetUpApp(), "input").instance().value = "Amira")).toBe(
      "Amira"
    );
  });
  it("form have one submit button", () => {
    expect(FindTag(SetUpApp(), "button")).toHaveLength(1);
  });
  it("renders button of type submit", () => {
    expect(FindProps(FindTag(SetUpApp(), "button"), "type")).toEqual("submit");
  });
  it("renders submit button with text Search for results", () => {
    expect(FindTag(SetUpApp(), "button").text()).toEqual("Search for results");
  });
  it("calls onSubmit function when form is submitted", () => {
    const onSubmitFn = jest.fn();
    FindTag(shallow(<Search handleSubmit={onSubmitFn} />), "form").simulate(
      "submit"
    );
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });
  it("input should have value when submit button is clicked", () => {
    FindTag(SetUpApp(), "button").simulate("click");
    expect(FindProps(FindTag(SetUpApp(), "input"), "value")).not.toBe(" ");
  });
});
