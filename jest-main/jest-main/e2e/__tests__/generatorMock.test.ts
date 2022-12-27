/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import runJest from '../runJest';

test('mock works with generator', () => {
  const {exitCode} = runJest('generator-mock');

  expect(exitCode).toBe(0);
});
