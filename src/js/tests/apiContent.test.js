import React from 'react';
import ReactDOM from 'react-dom';
import ApiContent from '../api/apiContent';
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

describe('Component: apiContent', () => {

  it('should render a section tag with a list of countries inside', () => {
    const testApiContent = renderer.create(
      <ApiContent />
    ).toJSON();

    expect(testApiContent).toMatchSnapshot();
  });
});
