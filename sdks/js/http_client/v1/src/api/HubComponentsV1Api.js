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


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1HubComponent from '../model/V1HubComponent';
import V1ListHubComponentsResponse from '../model/V1ListHubComponentsResponse';

/**
* HubComponentsV1 service.
* @module api/HubComponentsV1Api
* @version 1.1.0
*/
export default class HubComponentsV1Api {

    /**
    * Constructs a new HubComponentsV1Api. 
    * Polyaxon sdk
    * @alias module:api/HubComponentsV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createHubComponent operation.
     * @callback module:api/HubComponentsV1Api~createHubComponentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1HubComponent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create hub component
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1HubComponent} body Component body
     * @param {module:api/HubComponentsV1Api~createHubComponentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1HubComponent}
     */
    createHubComponent(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createHubComponent");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createHubComponent");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1HubComponent;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/components', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteHubComponent operation.
     * @callback module:api/HubComponentsV1Api~deleteHubComponentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete hub component
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/HubComponentsV1Api~deleteHubComponentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteHubComponent(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteHubComponent");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteHubComponent");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/components/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getHubComponent operation.
     * @callback module:api/HubComponentsV1Api~getHubComponentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1HubComponent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get hub component
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/HubComponentsV1Api~getHubComponentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1HubComponent}
     */
    getHubComponent(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getHubComponent");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getHubComponent");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1HubComponent;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/components/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listHubComponebtNames operation.
     * @callback module:api/HubComponentsV1Api~listHubComponebtNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListHubComponentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List hub component names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/HubComponentsV1Api~listHubComponebtNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListHubComponentsResponse}
     */
    listHubComponebtNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listHubComponebtNames");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListHubComponentsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/components/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listHubComponents operation.
     * @callback module:api/HubComponentsV1Api~listHubComponentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListHubComponentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List hub components
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/HubComponentsV1Api~listHubComponentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListHubComponentsResponse}
     */
    listHubComponents(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listHubComponents");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListHubComponentsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/components', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchHubComponent operation.
     * @callback module:api/HubComponentsV1Api~patchHubComponentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1HubComponent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch hub component
     * @param {String} owner Owner of the namespace
     * @param {String} component_uuid UUID
     * @param {module:model/V1HubComponent} body Component body
     * @param {module:api/HubComponentsV1Api~patchHubComponentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1HubComponent}
     */
    patchHubComponent(owner, component_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchHubComponent");
      }
      // verify the required parameter 'component_uuid' is set
      if (component_uuid === undefined || component_uuid === null) {
        throw new Error("Missing the required parameter 'component_uuid' when calling patchHubComponent");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchHubComponent");
      }

      let pathParams = {
        'owner': owner,
        'component.uuid': component_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1HubComponent;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/components/{component.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateHubComponent operation.
     * @callback module:api/HubComponentsV1Api~updateHubComponentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1HubComponent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update hub component
     * @param {String} owner Owner of the namespace
     * @param {String} component_uuid UUID
     * @param {module:model/V1HubComponent} body Component body
     * @param {module:api/HubComponentsV1Api~updateHubComponentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1HubComponent}
     */
    updateHubComponent(owner, component_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateHubComponent");
      }
      // verify the required parameter 'component_uuid' is set
      if (component_uuid === undefined || component_uuid === null) {
        throw new Error("Missing the required parameter 'component_uuid' when calling updateHubComponent");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateHubComponent");
      }

      let pathParams = {
        'owner': owner,
        'component.uuid': component_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1HubComponent;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/components/{component.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
