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
 * @interface V1Organization
 */
export interface V1Organization {
    /**
     * 
     * @type {string}
     * @memberof V1Organization
     */
    user?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Organization
     */
    user_email?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Organization
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1Organization
     */
    is_public?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof V1Organization
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Organization
     */
    updated_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof V1Organization
     */
    role?: string;
    /**
     * 
     * @type {object}
     * @memberof V1Organization
     */
    settings?: object;
}

export function V1OrganizationFromJSON(json: any): V1Organization {
    return V1OrganizationFromJSONTyped(json, false);
}

export function V1OrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Organization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': !exists(json, 'user') ? undefined : json['user'],
        'user_email': !exists(json, 'user_email') ? undefined : json['user_email'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'is_public': !exists(json, 'is_public') ? undefined : json['is_public'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'role': !exists(json, 'role') ? undefined : json['role'],
        'settings': !exists(json, 'settings') ? undefined : json['settings'],
    };
}

export function V1OrganizationToJSON(value?: V1Organization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': value.user,
        'user_email': value.user_email,
        'name': value.name,
        'is_public': value.is_public,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'role': value.role,
        'settings': value.settings,
    };
}


