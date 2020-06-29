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
 * @interface V1Queue
 */
export interface V1Queue {
    /**
     * 
     * @type {string}
     * @memberof V1Queue
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Queue
     */
    agent?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Queue
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof V1Queue
     */
    priority?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Queue
     */
    concurrency?: number;
    /**
     * 
     * @type {Date}
     * @memberof V1Queue
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Queue
     */
    updated_at?: Date;
}

export function V1QueueFromJSON(json: any): V1Queue {
    return V1QueueFromJSONTyped(json, false);
}

export function V1QueueFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Queue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'agent': !exists(json, 'agent') ? undefined : json['agent'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function V1QueueToJSON(value?: V1Queue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'agent': value.agent,
        'name': value.name,
        'priority': value.priority,
        'concurrency': value.concurrency,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}


