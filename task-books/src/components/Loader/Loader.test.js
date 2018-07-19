import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './index';

describe('Loader', () => {
  it('renders with loading param', () => {
    const component = renderer.create(
      <Loader loading={Boolean(true)} opacity={0.5} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with opacity', () => {
    const component = renderer.create(
      <Loader opacity={0.5} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
