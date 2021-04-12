// Copyright 2018-2021 Polyaxon, Inc.
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
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.8.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.V1Operation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Operation', function() {
    it('should create an instance of V1Operation', function() {
      // uncomment below and update the code to test V1Operation
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be.a(PolyaxonSdk.V1Operation);
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property presets (base name: "presets")', function() {
      // uncomment below and update the code to test the property presets
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property cache (base name: "cache")', function() {
      // uncomment below and update the code to test the property cache
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property termination (base name: "termination")', function() {
      // uncomment below and update the code to test the property termination
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property plugins (base name: "plugins")', function() {
      // uncomment below and update the code to test the property plugins
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property hooks (base name: "hooks")', function() {
      // uncomment below and update the code to test the property hooks
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property dependencies (base name: "dependencies")', function() {
      // uncomment below and update the code to test the property dependencies
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property trigger (base name: "trigger")', function() {
      // uncomment below and update the code to test the property trigger
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property skipOnUpstreamSkip (base name: "skipOnUpstreamSkip")', function() {
      // uncomment below and update the code to test the property skipOnUpstreamSkip
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property matrix (base name: "matrix")', function() {
      // uncomment below and update the code to test the property matrix
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property joins (base name: "joins")', function() {
      // uncomment below and update the code to test the property joins
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property params (base name: "params")', function() {
      // uncomment below and update the code to test the property params
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property runPatch (base name: "runPatch")', function() {
      // uncomment below and update the code to test the property runPatch
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property patchStrategy (base name: "patchStrategy")', function() {
      // uncomment below and update the code to test the property patchStrategy
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property isPreset (base name: "isPreset")', function() {
      // uncomment below and update the code to test the property isPreset
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property isApproved (base name: "isApproved")', function() {
      // uncomment below and update the code to test the property isApproved
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property urlRef (base name: "urlRef")', function() {
      // uncomment below and update the code to test the property urlRef
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property pathRef (base name: "pathRef")', function() {
      // uncomment below and update the code to test the property pathRef
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property hubRef (base name: "hubRef")', function() {
      // uncomment below and update the code to test the property hubRef
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property dagRef (base name: "dagRef")', function() {
      // uncomment below and update the code to test the property dagRef
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

    it('should have the property component (base name: "component")', function() {
      // uncomment below and update the code to test the property component
      //var instane = new PolyaxonSdk.V1Operation();
      //expect(instance).to.be();
    });

  });

}));
