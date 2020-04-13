#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
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

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    OpenAPI spec version: 1.0.77
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import polyaxon_sdk
from polyaxon_sdk.api.projects_v1_api import ProjectsV1Api  # noqa: E501
from polyaxon_sdk.rest import ApiException


class TestProjectsV1Api(unittest.TestCase):
    """ProjectsV1Api unit test stubs"""

    def setUp(self):
        self.api = polyaxon_sdk.api.projects_v1_api.ProjectsV1Api()  # noqa: E501

    def tearDown(self):
        pass

    def test_archive_project(self):
        """Test case for archive_project

        Archive project  # noqa: E501
        """
        pass

    def test_bookmark_project(self):
        """Test case for bookmark_project

        Bookmark project  # noqa: E501
        """
        pass

    def test_create_project(self):
        """Test case for create_project

        Create new project  # noqa: E501
        """
        pass

    def test_delete_project(self):
        """Test case for delete_project

        Delete project  # noqa: E501
        """
        pass

    def test_disable_project_ci(self):
        """Test case for disable_project_ci

        Disbale project CI  # noqa: E501
        """
        pass

    def test_enable_project_ci(self):
        """Test case for enable_project_ci

        Enable project CI  # noqa: E501
        """
        pass

    def test_fetch_project_teams(self):
        """Test case for fetch_project_teams

        Get project teams  # noqa: E501
        """
        pass

    def test_get_project(self):
        """Test case for get_project

        Get project  # noqa: E501
        """
        pass

    def test_get_project_settings(self):
        """Test case for get_project_settings

        Get Project settings  # noqa: E501
        """
        pass

    def test_list_archived_projects(self):
        """Test case for list_archived_projects

        List archived projects for user  # noqa: E501
        """
        pass

    def test_list_bookmarked_projects(self):
        """Test case for list_bookmarked_projects

        List bookmarked projects for user  # noqa: E501
        """
        pass

    def test_list_project_names(self):
        """Test case for list_project_names

        List project names  # noqa: E501
        """
        pass

    def test_list_projects(self):
        """Test case for list_projects

        List projects  # noqa: E501
        """
        pass

    def test_patch_project(self):
        """Test case for patch_project

        Patch project  # noqa: E501
        """
        pass

    def test_patch_project_settings(self):
        """Test case for patch_project_settings

        Patch project settings  # noqa: E501
        """
        pass

    def test_patch_project_teams(self):
        """Test case for patch_project_teams

        Patch project teams  # noqa: E501
        """
        pass

    def test_restore_project(self):
        """Test case for restore_project

        Restore project  # noqa: E501
        """
        pass

    def test_unbookmark_project(self):
        """Test case for unbookmark_project

        Unbookmark project  # noqa: E501
        """
        pass

    def test_update_project(self):
        """Test case for update_project

        Update project  # noqa: E501
        """
        pass

    def test_update_project_settings(self):
        """Test case for update_project_settings

        Update project settings  # noqa: E501
        """
        pass

    def test_update_project_teams(self):
        """Test case for update_project_teams

        Update project teams  # noqa: E501
        """
        pass

    def test_upload_project_artifact(self):
        """Test case for upload_project_artifact

        Upload artifact to a store via project access  # noqa: E501
        """
        pass


if __name__ == "__main__":
    unittest.main()
