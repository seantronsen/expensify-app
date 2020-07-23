import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";

test("should render the not found page component and test against the existing snapshot", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
