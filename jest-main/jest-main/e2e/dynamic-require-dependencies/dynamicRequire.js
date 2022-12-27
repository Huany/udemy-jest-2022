/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const dynamicModuleName = 'source';

module.exports.withStandardResolution = () =>
  require(`./${dynamicModuleName}.js`);
module.exports.withCustomResolution = () =>
  require(`$asdf/${dynamicModuleName}.js`);
