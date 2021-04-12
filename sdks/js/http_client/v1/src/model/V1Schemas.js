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

import ApiClient from '../ApiClient';
import V1ArtifactsMount from './V1ArtifactsMount';
import V1ArtifactsType from './V1ArtifactsType';
import V1AuthType from './V1AuthType';
import V1CompiledOperation from './V1CompiledOperation';
import V1ConnectionSchema from './V1ConnectionSchema';
import V1ConnectionType from './V1ConnectionType';
import V1EarlyStopping from './V1EarlyStopping';
import V1Event from './V1Event';
import V1EventType from './V1EventType';
import V1GcsType from './V1GcsType';
import V1HpParams from './V1HpParams';
import V1K8sResourceType from './V1K8sResourceType';
import V1Matrix from './V1Matrix';
import V1MatrixKind from './V1MatrixKind';
import V1Operation from './V1Operation';
import V1PolyaxonInitContainer from './V1PolyaxonInitContainer';
import V1PolyaxonSidecarContainer from './V1PolyaxonSidecarContainer';
import V1Reference from './V1Reference';
import V1RunSchema from './V1RunSchema';
import V1S3Type from './V1S3Type';
import V1Schedule from './V1Schedule';
import V1ScheduleKind from './V1ScheduleKind';
import V1UriType from './V1UriType';
import V1WasbType from './V1WasbType';

/**
 * The V1Schemas model module.
 * @module model/V1Schemas
 * @version 1.8.1
 */
class V1Schemas {
    /**
     * Constructs a new <code>V1Schemas</code>.
     * @alias module:model/V1Schemas
     */
    constructor() { 
        
        V1Schemas.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Schemas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Schemas} obj Optional instance to populate.
     * @return {module:model/V1Schemas} The populated <code>V1Schemas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Schemas();

            if (data.hasOwnProperty('earlyStopping')) {
                obj['earlyStopping'] = V1EarlyStopping.constructFromObject(data['earlyStopping']);
            }
            if (data.hasOwnProperty('matrix')) {
                obj['matrix'] = V1Matrix.constructFromObject(data['matrix']);
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = V1RunSchema.constructFromObject(data['run']);
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = V1Operation.constructFromObject(data['operation']);
            }
            if (data.hasOwnProperty('compiledOperation')) {
                obj['compiledOperation'] = V1CompiledOperation.constructFromObject(data['compiledOperation']);
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = V1Schedule.constructFromObject(data['schedule']);
            }
            if (data.hasOwnProperty('connectionSchema')) {
                obj['connectionSchema'] = V1ConnectionSchema.constructFromObject(data['connectionSchema']);
            }
            if (data.hasOwnProperty('hpParams')) {
                obj['hpParams'] = V1HpParams.constructFromObject(data['hpParams']);
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = V1Reference.constructFromObject(data['reference']);
            }
            if (data.hasOwnProperty('artifactsMount')) {
                obj['artifactsMount'] = V1ArtifactsMount.constructFromObject(data['artifactsMount']);
            }
            if (data.hasOwnProperty('polyaxonSidecarContainer')) {
                obj['polyaxonSidecarContainer'] = V1PolyaxonSidecarContainer.constructFromObject(data['polyaxonSidecarContainer']);
            }
            if (data.hasOwnProperty('polyaxonInitContainer')) {
                obj['polyaxonInitContainer'] = V1PolyaxonInitContainer.constructFromObject(data['polyaxonInitContainer']);
            }
            if (data.hasOwnProperty('artifacs')) {
                obj['artifacs'] = V1ArtifactsType.constructFromObject(data['artifacs']);
            }
            if (data.hasOwnProperty('wasb')) {
                obj['wasb'] = V1WasbType.constructFromObject(data['wasb']);
            }
            if (data.hasOwnProperty('gcs')) {
                obj['gcs'] = V1GcsType.constructFromObject(data['gcs']);
            }
            if (data.hasOwnProperty('s3')) {
                obj['s3'] = V1S3Type.constructFromObject(data['s3']);
            }
            if (data.hasOwnProperty('auth')) {
                obj['auth'] = V1AuthType.constructFromObject(data['auth']);
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = V1UriType.constructFromObject(data['uri']);
            }
            if (data.hasOwnProperty('k8sResource')) {
                obj['k8sResource'] = V1K8sResourceType.constructFromObject(data['k8sResource']);
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = V1ConnectionType.constructFromObject(data['connection']);
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = V1EventType.constructFromObject(data['eventType']);
            }
            if (data.hasOwnProperty('matrixKind')) {
                obj['matrixKind'] = V1MatrixKind.constructFromObject(data['matrixKind']);
            }
            if (data.hasOwnProperty('scheduleKind')) {
                obj['scheduleKind'] = V1ScheduleKind.constructFromObject(data['scheduleKind']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = V1Event.constructFromObject(data['event']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1EarlyStopping} earlyStopping
 */
V1Schemas.prototype['earlyStopping'] = undefined;

/**
 * @member {module:model/V1Matrix} matrix
 */
V1Schemas.prototype['matrix'] = undefined;

/**
 * @member {module:model/V1RunSchema} run
 */
V1Schemas.prototype['run'] = undefined;

/**
 * @member {module:model/V1Operation} operation
 */
V1Schemas.prototype['operation'] = undefined;

/**
 * @member {module:model/V1CompiledOperation} compiledOperation
 */
V1Schemas.prototype['compiledOperation'] = undefined;

/**
 * @member {module:model/V1Schedule} schedule
 */
V1Schemas.prototype['schedule'] = undefined;

/**
 * @member {module:model/V1ConnectionSchema} connectionSchema
 */
V1Schemas.prototype['connectionSchema'] = undefined;

/**
 * @member {module:model/V1HpParams} hpParams
 */
V1Schemas.prototype['hpParams'] = undefined;

/**
 * @member {module:model/V1Reference} reference
 */
V1Schemas.prototype['reference'] = undefined;

/**
 * @member {module:model/V1ArtifactsMount} artifactsMount
 */
V1Schemas.prototype['artifactsMount'] = undefined;

/**
 * @member {module:model/V1PolyaxonSidecarContainer} polyaxonSidecarContainer
 */
V1Schemas.prototype['polyaxonSidecarContainer'] = undefined;

/**
 * @member {module:model/V1PolyaxonInitContainer} polyaxonInitContainer
 */
V1Schemas.prototype['polyaxonInitContainer'] = undefined;

/**
 * @member {module:model/V1ArtifactsType} artifacs
 */
V1Schemas.prototype['artifacs'] = undefined;

/**
 * @member {module:model/V1WasbType} wasb
 */
V1Schemas.prototype['wasb'] = undefined;

/**
 * @member {module:model/V1GcsType} gcs
 */
V1Schemas.prototype['gcs'] = undefined;

/**
 * @member {module:model/V1S3Type} s3
 */
V1Schemas.prototype['s3'] = undefined;

/**
 * @member {module:model/V1AuthType} auth
 */
V1Schemas.prototype['auth'] = undefined;

/**
 * @member {module:model/V1UriType} uri
 */
V1Schemas.prototype['uri'] = undefined;

/**
 * @member {module:model/V1K8sResourceType} k8sResource
 */
V1Schemas.prototype['k8sResource'] = undefined;

/**
 * @member {module:model/V1ConnectionType} connection
 */
V1Schemas.prototype['connection'] = undefined;

/**
 * @member {module:model/V1EventType} eventType
 */
V1Schemas.prototype['eventType'] = undefined;

/**
 * @member {module:model/V1MatrixKind} matrixKind
 */
V1Schemas.prototype['matrixKind'] = undefined;

/**
 * @member {module:model/V1ScheduleKind} scheduleKind
 */
V1Schemas.prototype['scheduleKind'] = undefined;

/**
 * @member {module:model/V1Event} event
 */
V1Schemas.prototype['event'] = undefined;






export default V1Schemas;

