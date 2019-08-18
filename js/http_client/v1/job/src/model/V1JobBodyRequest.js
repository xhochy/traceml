// Copyright 2019 Polyaxon, Inc.
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

/**
 * Job service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.14.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1Job'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Job'));
  } else {
    // Browser globals (root is window)
    if (!root.JobService) {
      root.JobService = {};
    }
    root.JobService.V1JobBodyRequest = factory(root.JobService.ApiClient, root.JobService.V1Job);
  }
}(this, function(ApiClient, V1Job) {
  'use strict';




  /**
   * The V1JobBodyRequest model module.
   * @module model/V1JobBodyRequest
   * @version 1.14.4
   */

  /**
   * Constructs a new <code>V1JobBodyRequest</code>.
   * @alias module:model/V1JobBodyRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V1JobBodyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1JobBodyRequest} obj Optional instance to populate.
   * @return {module:model/V1JobBodyRequest} The populated <code>V1JobBodyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(data['project'], 'String');
      }
      if (data.hasOwnProperty('job')) {
        obj['job'] = V1Job.constructFromObject(data['job']);
      }
    }
    return obj;
  }

  /**
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {String} project
   */
  exports.prototype['project'] = undefined;
  /**
   * @member {module:model/V1Job} job
   */
  exports.prototype['job'] = undefined;



  return exports;
}));


