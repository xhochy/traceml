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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1SearchSpec model module.
 * @module model/V1SearchSpec
 * @version 1.1.0
 */
class V1SearchSpec {
    /**
     * Constructs a new <code>V1SearchSpec</code>.
     * @alias module:model/V1SearchSpec
     */
    constructor() { 
        
        V1SearchSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1SearchSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1SearchSpec} obj Optional instance to populate.
     * @return {module:model/V1SearchSpec} The populated <code>V1SearchSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SearchSpec();

            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('groupby')) {
                obj['groupby'] = ApiClient.convertToType(data['groupby'], 'String');
            }
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} query
 */
V1SearchSpec.prototype['query'] = undefined;

/**
 * @member {String} sort
 */
V1SearchSpec.prototype['sort'] = undefined;

/**
 * @member {Number} limit
 */
V1SearchSpec.prototype['limit'] = undefined;

/**
 * @member {String} groupby
 */
V1SearchSpec.prototype['groupby'] = undefined;

/**
 * @member {String} columns
 */
V1SearchSpec.prototype['columns'] = undefined;






export default V1SearchSpec;

