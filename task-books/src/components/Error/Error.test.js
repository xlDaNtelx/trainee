import React from 'react';
import renderer from 'react-test-renderer';
import Error from './index';

describe('Error', () => {
  it('renders with error in params', () => {
    const component = renderer.create(
      <Error error="Some error" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without error', () => {
    const component = renderer.create(
      <Error />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
