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
 * The version of the OpenAPI document: 1.8.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1Dashboard from '../model/V1Dashboard';
import V1ListDashboardsResponse from '../model/V1ListDashboardsResponse';

/**
* DashboardsV1 service.
* @module api/DashboardsV1Api
* @version 1.8.1
*/
export default class DashboardsV1Api {

    /**
    * Constructs a new DashboardsV1Api. 
    * Polyaxon sdk
    * @alias module:api/DashboardsV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createDashboard operation.
     * @callback module:api/DashboardsV1Api~createDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create dashboard
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1Dashboard} body Dashboard body
     * @param {module:api/DashboardsV1Api~createDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    createDashboard(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createDashboard");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDashboard");
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
      let returnType = V1Dashboard;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDashboard operation.
     * @callback module:api/DashboardsV1Api~deleteDashboardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/DashboardsV1Api~deleteDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDashboard(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteDashboard");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteDashboard");
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
        '/api/v1/orgs/{owner}/dashboards/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDashboard operation.
     * @callback module:api/DashboardsV1Api~getDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/DashboardsV1Api~getDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    getDashboard(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getDashboard");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getDashboard");
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
      let returnType = V1Dashboard;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDashboardNames operation.
     * @callback module:api/DashboardsV1Api~listDashboardNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListDashboardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List dashboard names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search.
     * @param {module:api/DashboardsV1Api~listDashboardNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListDashboardsResponse}
     */
    listDashboardNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listDashboardNames");
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
      let returnType = V1ListDashboardsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listDashboards operation.
     * @callback module:api/DashboardsV1Api~listDashboardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListDashboardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List dashboards
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search.
     * @param {module:api/DashboardsV1Api~listDashboardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListDashboardsResponse}
     */
    listDashboards(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listDashboards");
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
      let returnType = V1ListDashboardsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchDashboard operation.
     * @callback module:api/DashboardsV1Api~patchDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} dashboard_uuid UUID
     * @param {module:model/V1Dashboard} body Dashboard body
     * @param {module:api/DashboardsV1Api~patchDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    patchDashboard(owner, dashboard_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchDashboard");
      }
      // verify the required parameter 'dashboard_uuid' is set
      if (dashboard_uuid === undefined || dashboard_uuid === null) {
        throw new Error("Missing the required parameter 'dashboard_uuid' when calling patchDashboard");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchDashboard");
      }

      let pathParams = {
        'owner': owner,
        'dashboard.uuid': dashboard_uuid
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
      let returnType = V1Dashboard;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards/{dashboard.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDashboard operation.
     * @callback module:api/DashboardsV1Api~updateDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} dashboard_uuid UUID
     * @param {module:model/V1Dashboard} body Dashboard body
     * @param {module:api/DashboardsV1Api~updateDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    updateDashboard(owner, dashboard_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateDashboard");
      }
      // verify the required parameter 'dashboard_uuid' is set
      if (dashboard_uuid === undefined || dashboard_uuid === null) {
        throw new Error("Missing the required parameter 'dashboard_uuid' when calling updateDashboard");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDashboard");
      }

      let pathParams = {
        'owner': owner,
        'dashboard.uuid': dashboard_uuid
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
      let returnType = V1Dashboard;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/dashboards/{dashboard.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
