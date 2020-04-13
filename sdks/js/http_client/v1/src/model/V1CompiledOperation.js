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
    define(['ApiClient', 'model/V1Cache', 'model/V1IO', 'model/V1Plugins', 'model/V1Termination', 'model/V1TriggerPolicy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Cache'), require('./V1IO'), require('./V1Plugins'), require('./V1Termination'), require('./V1TriggerPolicy'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1CompiledOperation = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1Cache, root.PolyaxonSdk.V1IO, root.PolyaxonSdk.V1Plugins, root.PolyaxonSdk.V1Termination, root.PolyaxonSdk.V1TriggerPolicy);
  }
}(this, function(ApiClient, V1Cache, V1IO, V1Plugins, V1Termination, V1TriggerPolicy) {
  'use strict';

  /**
   * The V1CompiledOperation model module.
   * @module model/V1CompiledOperation
   * @version 1.0.77
   */

  /**
   * Constructs a new <code>V1CompiledOperation</code>.
   * @alias module:model/V1CompiledOperation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1CompiledOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1CompiledOperation} obj Optional instance to populate.
   * @return {module:model/V1CompiledOperation} The populated <code>V1CompiledOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('profile'))
        obj.profile = ApiClient.convertToType(data['profile'], 'String');
      if (data.hasOwnProperty('queue'))
        obj.queue = ApiClient.convertToType(data['queue'], 'String');
      if (data.hasOwnProperty('cache'))
        obj.cache = V1Cache.constructFromObject(data['cache']);
      if (data.hasOwnProperty('schedule'))
        obj.schedule = ApiClient.convertToType(data['schedule'], Object);
      if (data.hasOwnProperty('parallel'))
        obj.parallel = ApiClient.convertToType(data['parallel'], Object);
      if (data.hasOwnProperty('dependencies'))
        obj.dependencies = ApiClient.convertToType(data['dependencies'], ['String']);
      if (data.hasOwnProperty('trigger'))
        obj.trigger = V1TriggerPolicy.constructFromObject(data['trigger']);
      if (data.hasOwnProperty('conditions'))
        obj.conditions = ApiClient.convertToType(data['conditions'], [Object]);
      if (data.hasOwnProperty('skip_on_upstream_skip'))
        obj.skip_on_upstream_skip = ApiClient.convertToType(data['skip_on_upstream_skip'], 'Boolean');
      if (data.hasOwnProperty('termination'))
        obj.termination = V1Termination.constructFromObject(data['termination']);
      if (data.hasOwnProperty('plugins'))
        obj.plugins = V1Plugins.constructFromObject(data['plugins']);
      if (data.hasOwnProperty('inputs'))
        obj.inputs = ApiClient.convertToType(data['inputs'], [V1IO]);
      if (data.hasOwnProperty('outputs'))
        obj.outputs = ApiClient.convertToType(data['outputs'], [V1IO]);
      if (data.hasOwnProperty('run'))
        obj.run = ApiClient.convertToType(data['run'], Object);
    }
    return obj;
  }

  /**
   * @member {Number} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {String} kind
   */
  exports.prototype.kind = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} tag
   */
  exports.prototype.tag = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * @member {String} profile
   */
  exports.prototype.profile = undefined;

  /**
   * @member {String} queue
   */
  exports.prototype.queue = undefined;

  /**
   * @member {module:model/V1Cache} cache
   */
  exports.prototype.cache = undefined;

  /**
   * @member {Object} schedule
   */
  exports.prototype.schedule = undefined;

  /**
   * @member {Object} parallel
   */
  exports.prototype.parallel = undefined;

  /**
   * @member {Array.<String>} dependencies
   */
  exports.prototype.dependencies = undefined;

  /**
   * @member {module:model/V1TriggerPolicy} trigger
   */
  exports.prototype.trigger = undefined;

  /**
   * @member {Array.<Object>} conditions
   */
  exports.prototype.conditions = undefined;

  /**
   * @member {Boolean} skip_on_upstream_skip
   */
  exports.prototype.skip_on_upstream_skip = undefined;

  /**
   * @member {module:model/V1Termination} termination
   */
  exports.prototype.termination = undefined;

  /**
   * @member {module:model/V1Plugins} plugins
   */
  exports.prototype.plugins = undefined;

  /**
   * @member {Array.<module:model/V1IO>} inputs
   */
  exports.prototype.inputs = undefined;

  /**
   * @member {Array.<module:model/V1IO>} outputs
   */
  exports.prototype.outputs = undefined;

  /**
   * @member {Object} run
   */
  exports.prototype.run = undefined;

  return exports;

}));
