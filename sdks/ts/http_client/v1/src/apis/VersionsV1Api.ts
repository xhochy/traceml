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


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1LogHandler,
    V1LogHandlerFromJSON,
    V1LogHandlerToJSON,
    V1Versions,
    V1VersionsFromJSON,
    V1VersionsToJSON,
} from '../models';

/**
 * 
 */
export class VersionsV1Api extends runtime.BaseAPI {

    /**
     * Get log handler
     */
    async getLogHandlerRaw(): Promise<runtime.ApiResponse<V1LogHandler>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/log_handler`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1LogHandlerFromJSON(jsonValue));
    }

    /**
     * Get log handler
     */
    async getLogHandler(): Promise<V1LogHandler> {
        const response = await this.getLogHandlerRaw();
        return await response.value();
    }

    /**
     * Get versions
     */
    async getVersionsRaw(): Promise<runtime.ApiResponse<V1Versions>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/version`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1VersionsFromJSON(jsonValue));
    }

    /**
     * Get versions
     */
    async getVersions(): Promise<V1Versions> {
        const response = await this.getVersionsRaw();
        return await response.value();
    }

}
