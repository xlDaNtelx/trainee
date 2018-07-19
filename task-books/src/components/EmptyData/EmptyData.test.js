import React from 'react';
import renderer from 'react-test-renderer';
import EmptyData from './index';

test('EmptyData snapshot test', () => {
  const component = renderer.create(
    <EmptyData />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
