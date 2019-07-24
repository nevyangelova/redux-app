import React from "react";
import expect from "expect";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

describe("Header", () => {
  it("contains 3 Links via shallow", () => {
    const numLinks = mount(
      <Router>
        <Header loading={false} />
      </Router>
    ).find(NavLink).length;

    expect(numLinks).toEqual(3);
  });

  it("contains 3 anchors via mount", () => {
    const numAnchors = mount(
      <Router>
        <Header loading={false} />
      </Router>
    ).find("a").length;

    expect(numAnchors).toEqual(3);
  });

  it("contains no links with active class by default", () => {
    const linksWithActiveClass = shallow(
      <Router>
        <Header loading={false} />{" "}
      </Router>
    ).find(".active");
    expect(linksWithActiveClass.length).toEqual(0);
  });
});
