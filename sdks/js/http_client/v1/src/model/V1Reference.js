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
 * The version of the OpenAPI document: 1.3.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1DagRef from './V1DagRef';
import V1HubRef from './V1HubRef';
import V1PathRef from './V1PathRef';
import V1UrlRef from './V1UrlRef';

/**
 * The V1Reference model module.
 * @module model/V1Reference
 * @version 1.3.4
 */
class V1Reference {
    /**
     * Constructs a new <code>V1Reference</code>.
     * @alias module:model/V1Reference
     */
    constructor() { 
        
        V1Reference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Reference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Reference} obj Optional instance to populate.
     * @return {module:model/V1Reference} The populated <code>V1Reference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Reference();

            if (data.hasOwnProperty('hub_reference')) {
                obj['hub_reference'] = V1HubRef.constructFromObject(data['hub_reference']);
            }
            if (data.hasOwnProperty('dag_reference')) {
                obj['dag_reference'] = V1DagRef.constructFromObject(data['dag_reference']);
            }
            if (data.hasOwnProperty('url_reference')) {
                obj['url_reference'] = V1UrlRef.constructFromObject(data['url_reference']);
            }
            if (data.hasOwnProperty('path_reference')) {
                obj['path_reference'] = V1PathRef.constructFromObject(data['path_reference']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1HubRef} hub_reference
 */
V1Reference.prototype['hub_reference'] = undefined;

/**
 * @member {module:model/V1DagRef} dag_reference
 */
V1Reference.prototype['dag_reference'] = undefined;

/**
 * @member {module:model/V1UrlRef} url_reference
 */
V1Reference.prototype['url_reference'] = undefined;

/**
 * @member {module:model/V1PathRef} path_reference
 */
V1Reference.prototype['path_reference'] = undefined;






export default V1Reference;

