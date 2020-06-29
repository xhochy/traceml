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

/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1ImageType
 */
export interface V1ImageType {
    /**
     * 
     * @type {string}
     * @memberof V1ImageType
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ImageType
     */
    connection?: string;
}

export function V1ImageTypeFromJSON(json: any): V1ImageType {
    return V1ImageTypeFromJSONTyped(json, false);
}

export function V1ImageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ImageType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
    };
}

export function V1ImageTypeToJSON(value?: V1ImageType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'connection': value.connection,
    };
}


