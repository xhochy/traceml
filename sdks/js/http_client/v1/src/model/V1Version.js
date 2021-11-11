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
 * The version of the OpenAPI document: 1.13.0-rc1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1Version model module.
 * @module model/V1Version
 * @version 1.13.0-rc1
 */
class V1Version {
    /**
     * Constructs a new <code>V1Version</code>.
     * @alias module:model/V1Version
     */
    constructor() { 
        
        V1Version.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Version</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Version} obj Optional instance to populate.
     * @return {module:model/V1Version} The populated <code>V1Version</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Version();

            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'String');
            }
            if (data.hasOwnProperty('latest')) {
                obj['latest'] = ApiClient.convertToType(data['latest'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} min
 */
V1Version.prototype['min'] = undefined;

/**
 * @member {String} latest
 */
V1Version.prototype['latest'] = undefined;






export default V1Version;

