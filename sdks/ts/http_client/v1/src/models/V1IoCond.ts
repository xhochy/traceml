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
 * The version of the OpenAPI document: 1.3.4
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
 * @interface V1IoCond
 */
export interface V1IoCond {
    /**
     * 
     * @type {string}
     * @memberof V1IoCond
     */
    kind?: string;
    /**
     * 
     * @type {string}
     * @memberof V1IoCond
     */
    param?: string;
    /**
     * 
     * @type {string}
     * @memberof V1IoCond
     */
    trigger?: string;
}

export function V1IoCondFromJSON(json: any): V1IoCond {
    return V1IoCondFromJSONTyped(json, false);
}

export function V1IoCondFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IoCond {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'param': !exists(json, 'param') ? undefined : json['param'],
        'trigger': !exists(json, 'trigger') ? undefined : json['trigger'],
    };
}

export function V1IoCondToJSON(value?: V1IoCond | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'param': value.param,
        'trigger': value.trigger,
    };
}


