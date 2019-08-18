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
    Build service

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 1.14.4
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

# import apis into sdk package
from swagger_client.api.build_service_api import BuildServiceApi

# import ApiClient
from swagger_client.api_client import ApiClient
from swagger_client.configuration import Configuration
# import models into sdk package
from swagger_client.models.protobuf_any import ProtobufAny
from swagger_client.models.v1_build import V1Build
from swagger_client.models.v1_build_body_request import V1BuildBodyRequest
from swagger_client.models.v1_build_status import V1BuildStatus
from swagger_client.models.v1_code_reference import V1CodeReference
from swagger_client.models.v1_code_reference_body_request import V1CodeReferenceBodyRequest
from swagger_client.models.v1_dict import V1Dict
from swagger_client.models.v1_kv import V1KV
from swagger_client.models.v1_list_build_statuses_response import V1ListBuildStatusesResponse
from swagger_client.models.v1_list_builds_response import V1ListBuildsResponse
from swagger_client.models.v1_owned_entity_id_request import V1OwnedEntityIdRequest
from swagger_client.models.v1_project_body_request import V1ProjectBodyRequest
from swagger_client.models.v1_status_response import V1StatusResponse
