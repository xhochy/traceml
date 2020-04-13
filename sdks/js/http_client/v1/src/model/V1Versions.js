// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.77
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1Version'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Version'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1Versions = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1Version);
  }
}(this, function(ApiClient, V1Version) {
  'use strict';

  /**
   * The V1Versions model module.
   * @module model/V1Versions
   * @version 1.0.77
   */

  /**
   * Constructs a new <code>V1Versions</code>.
   * @alias module:model/V1Versions
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1Versions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Versions} obj Optional instance to populate.
   * @return {module:model/V1Versions} The populated <code>V1Versions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('platform_version'))
        obj.platform_version = ApiClient.convertToType(data['platform_version'], 'String');
      if (data.hasOwnProperty('cli'))
        obj.cli = V1Version.constructFromObject(data['cli']);
      if (data.hasOwnProperty('platform'))
        obj.platform = V1Version.constructFromObject(data['platform']);
      if (data.hasOwnProperty('agent'))
        obj.agent = V1Version.constructFromObject(data['agent']);
    }
    return obj;
  }

  /**
   * @member {String} platform_version
   */
  exports.prototype.platform_version = undefined;

  /**
   * @member {module:model/V1Version} cli
   */
  exports.prototype.cli = undefined;

  /**
   * @member {module:model/V1Version} platform
   */
  exports.prototype.platform = undefined;

  /**
   * @member {module:model/V1Version} agent
   */
  exports.prototype.agent = undefined;

  return exports;

}));
