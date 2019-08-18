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

"""
    Build service

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 1.14.4
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class V1CodeReference(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'id': 'str',
        'uuid': 'str',
        'commit': 'str',
        'updated_at': 'str',
        'status': 'str',
        'git_url': 'str',
        'is_dirty': 'bool'
    }

    attribute_map = {
        'id': 'id',
        'uuid': 'uuid',
        'commit': 'commit',
        'updated_at': 'updated_at',
        'status': 'status',
        'git_url': 'git_url',
        'is_dirty': 'is_dirty'
    }

    def __init__(self, id=None, uuid=None, commit=None, updated_at=None, status=None, git_url=None, is_dirty=None):  # noqa: E501
        """V1CodeReference - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._uuid = None
        self._commit = None
        self._updated_at = None
        self._status = None
        self._git_url = None
        self._is_dirty = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if uuid is not None:
            self.uuid = uuid
        if commit is not None:
            self.commit = commit
        if updated_at is not None:
            self.updated_at = updated_at
        if status is not None:
            self.status = status
        if git_url is not None:
            self.git_url = git_url
        if is_dirty is not None:
            self.is_dirty = is_dirty

    @property
    def id(self):
        """Gets the id of this V1CodeReference.  # noqa: E501


        :return: The id of this V1CodeReference.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this V1CodeReference.


        :param id: The id of this V1CodeReference.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def uuid(self):
        """Gets the uuid of this V1CodeReference.  # noqa: E501


        :return: The uuid of this V1CodeReference.  # noqa: E501
        :rtype: str
        """
        return self._uuid

    @uuid.setter
    def uuid(self, uuid):
        """Sets the uuid of this V1CodeReference.


        :param uuid: The uuid of this V1CodeReference.  # noqa: E501
        :type: str
        """

        self._uuid = uuid

    @property
    def commit(self):
        """Gets the commit of this V1CodeReference.  # noqa: E501


        :return: The commit of this V1CodeReference.  # noqa: E501
        :rtype: str
        """
        return self._commit

    @commit.setter
    def commit(self, commit):
        """Sets the commit of this V1CodeReference.


        :param commit: The commit of this V1CodeReference.  # noqa: E501
        :type: str
        """

        self._commit = commit

    @property
    def updated_at(self):
        """Gets the updated_at of this V1CodeReference.  # noqa: E501


        :return: The updated_at of this V1CodeReference.  # noqa: E501
        :rtype: str
        """
        return self._updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        """Sets the updated_at of this V1CodeReference.


        :param updated_at: The updated_at of this V1CodeReference.  # noqa: E501
        :type: str
        """

        self._updated_at = updated_at

    @property
    def status(self):
        """Gets the status of this V1CodeReference.  # noqa: E501


        :return: The status of this V1CodeReference.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this V1CodeReference.


        :param status: The status of this V1CodeReference.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def git_url(self):
        """Gets the git_url of this V1CodeReference.  # noqa: E501


        :return: The git_url of this V1CodeReference.  # noqa: E501
        :rtype: str
        """
        return self._git_url

    @git_url.setter
    def git_url(self, git_url):
        """Sets the git_url of this V1CodeReference.


        :param git_url: The git_url of this V1CodeReference.  # noqa: E501
        :type: str
        """

        self._git_url = git_url

    @property
    def is_dirty(self):
        """Gets the is_dirty of this V1CodeReference.  # noqa: E501


        :return: The is_dirty of this V1CodeReference.  # noqa: E501
        :rtype: bool
        """
        return self._is_dirty

    @is_dirty.setter
    def is_dirty(self, is_dirty):
        """Sets the is_dirty of this V1CodeReference.


        :param is_dirty: The is_dirty of this V1CodeReference.  # noqa: E501
        :type: bool
        """

        self._is_dirty = is_dirty

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(V1CodeReference, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1CodeReference):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
