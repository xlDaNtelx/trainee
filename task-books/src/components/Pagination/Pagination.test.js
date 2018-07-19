import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Pagination from './index';

describe('Pagination', () => {
  it('renders with all params', () => {
    const component = renderer.create(
      <Pagination page={1} perPage={0.5} count={8} onChange={() => { }} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without some param', () => {
    const component = renderer.create(
      <Pagination page={1} perPage={0.5} count={8} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('Pagination functions test', () => {
  const pagination = shallow(<Pagination page={1} perPage={0.5} count={8} onChange={() => { }} />);
  pagination.find('.next').simulate('click');
  pagination.find('.prev').simulate('click');
});
