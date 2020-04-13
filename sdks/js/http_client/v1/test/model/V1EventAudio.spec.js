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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V1EventAudio', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1EventAudio();
      });

      it('should create an instance of V1EventAudio', function() {
        // TODO: update the code to test V1EventAudio
        expect(instance).to.be.a(PolyaxonSdk.V1EventAudio);
      });

      it('should have the property sample_rate (base name: "sample_rate")', function() {
        // TODO: update the code to test the property sample_rate
        expect(instance).to.have.property('sample_rate');
        // expect(instance.sample_rate).to.be(expectedValueLiteral);
      });

      it('should have the property num_channels (base name: "num_channels")', function() {
        // TODO: update the code to test the property num_channels
        expect(instance).to.have.property('num_channels');
        // expect(instance.num_channels).to.be(expectedValueLiteral);
      });

      it('should have the property length_frames (base name: "length_frames")', function() {
        // TODO: update the code to test the property length_frames
        expect(instance).to.have.property('length_frames');
        // expect(instance.length_frames).to.be(expectedValueLiteral);
      });

      it('should have the property content_type (base name: "content_type")', function() {
        // TODO: update the code to test the property content_type
        expect(instance).to.have.property('content_type');
        // expect(instance.content_type).to.be(expectedValueLiteral);
      });

      it('should have the property path (base name: "path")', function() {
        // TODO: update the code to test the property path
        expect(instance).to.have.property('path');
        // expect(instance.path).to.be(expectedValueLiteral);
      });

    });
  });

}));
