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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1GitType = factory(root.PolyaxonSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V1GitType model module.
   * @module model/V1GitType
   * @version 1.0.77
   */

  /**
   * Constructs a new <code>V1GitType</code>.
   * @alias module:model/V1GitType
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1GitType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1GitType} obj Optional instance to populate.
   * @return {module:model/V1GitType} The populated <code>V1GitType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('revision'))
        obj.revision = ApiClient.convertToType(data['revision'], 'Boolean');
      if (data.hasOwnProperty('connection'))
        obj.connection = ApiClient.convertToType(data['connection'], 'String');
      if (data.hasOwnProperty('init'))
        obj.init = ApiClient.convertToType(data['init'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {Boolean} revision
   */
  exports.prototype.revision = undefined;

  /**
   * @member {String} connection
   */
  exports.prototype.connection = undefined;

  /**
   * @member {Boolean} init
   */
  exports.prototype.init = undefined;

  return exports;

}));
