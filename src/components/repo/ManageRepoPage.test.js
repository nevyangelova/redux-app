import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { ManageRepoPage } from "./ManageRepoPage";

describe("Manage repo Page", () => {
  it("sets error message upon blur of empty title field", () => {
    const props = {
      authors: [],
      actions: {
        saverepo: () => {
          return Promise.resolve();
        }
      },
      repo: {
        id: "",
        url: "",
        title: "",
        authorId: "",
        year: "",
        category: ""
      }
    };
    const wrapper = mount(<ManageRepoPage {...props} />);
    const saveButton = wrapper.find("input").last();
    expect(saveButton.prop("type")).toBe("submit"); //assure we found the submit.
    saveButton.simulate("click");
    expect(wrapper.state().errors.title).toBe(
      "Title must be at least 5 characters."
    );
  });
});
