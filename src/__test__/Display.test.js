import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

describe('Display', () => {
  test('renders correctly with props', () => {
    const tree = renderer
      .create(<Display total={10} operation="+" next="5" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with default props', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('does not render total when it is 0', () => {
    const tree = renderer.create(<Display total={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
