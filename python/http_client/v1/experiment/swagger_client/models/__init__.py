#!/usr/bin/python
#
# Copyright 2019 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import sys


def main(argv):
    pass


if __name__ == '__main__':
    main(sys.argv)
# coding: utf-8

# flake8: noqa
"""
    Experiment service

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 1.14.4
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

# import models into model package
from swagger_client.models.protobuf_any import ProtobufAny
from swagger_client.models.v1_code_reference import V1CodeReference
from swagger_client.models.v1_code_reference_body_request import V1CodeReferenceBodyRequest
from swagger_client.models.v1_dict import V1Dict
from swagger_client.models.v1_experiment import V1Experiment
from swagger_client.models.v1_experiment_body_request import V1ExperimentBodyRequest
from swagger_client.models.v1_experiment_status import V1ExperimentStatus
from swagger_client.models.v1_kv import V1KV
from swagger_client.models.v1_list_experiment_statuses_response import V1ListExperimentStatusesResponse
from swagger_client.models.v1_list_experiments_response import V1ListExperimentsResponse
from swagger_client.models.v1_owned_entity_id_request import V1OwnedEntityIdRequest
from swagger_client.models.v1_project_body_request import V1ProjectBodyRequest
from swagger_client.models.v1_status_response import V1StatusResponse
