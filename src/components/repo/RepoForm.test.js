import expect from "expect";
import React from "react";
import { mount, shallow } from "enzyme";
import RepoForm from "./RepoForm";

function setup(saving) {
  const props = {
    allAuthors: [],
    repo: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<RepoForm {...props} />);
}

describe("RepoForm via Enzyme", () => {
  it("renders form and h1", () => {
    const wrapper = setup(false);
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find("h1").text()).toEqual("Manage repo");
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find("input").props().value).toBe("Save");
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find("input").props().value).toBe("Saving...");
  });
});
