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
import V1TeamMember from './V1TeamMember';

/**
 * The V1ListTeamMembersResponse model module.
 * @module model/V1ListTeamMembersResponse
 * @version 1.1.0
 */
class V1ListTeamMembersResponse {
    /**
     * Constructs a new <code>V1ListTeamMembersResponse</code>.
     * @alias module:model/V1ListTeamMembersResponse
     */
    constructor() { 
        
        V1ListTeamMembersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ListTeamMembersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ListTeamMembersResponse} obj Optional instance to populate.
     * @return {module:model/V1ListTeamMembersResponse} The populated <code>V1ListTeamMembersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ListTeamMembersResponse();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [V1TeamMember]);
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
V1ListTeamMembersResponse.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/V1TeamMember>} results
 */
V1ListTeamMembersResponse.prototype['results'] = undefined;

/**
 * @member {String} previous
 */
V1ListTeamMembersResponse.prototype['previous'] = undefined;

/**
 * @member {String} next
 */
V1ListTeamMembersResponse.prototype['next'] = undefined;






export default V1ListTeamMembersResponse;

