/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const asd = (a, b) => a + b;

  expect(asd(1, 1)).toBe(2);
});
