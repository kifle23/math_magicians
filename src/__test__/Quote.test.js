import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

jest.mock('../API/QuoteAPI', () => () => ({
  res: 'Education is not preparation for life; education is life itself.',
  loading: false,
  error: null,
  author: 'John Dewey',
}));

describe('Quote', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
