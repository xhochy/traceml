#!/usr/bin/python
#
# Copyright 2018-2021 Polyaxon, Inc.
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

    The version of the OpenAPI document: 1.8.1
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from polyaxon_sdk.configuration import Configuration


class V1Tuner(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'hub_ref': 'str',
        'queue': 'str',
        'presets': 'list[str]',
        'params': 'dict(str, V1Param)'
    }

    attribute_map = {
        'hub_ref': 'hubRef',
        'queue': 'queue',
        'presets': 'presets',
        'params': 'params'
    }

    def __init__(self, hub_ref=None, queue=None, presets=None, params=None, local_vars_configuration=None):  # noqa: E501
        """V1Tuner - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._hub_ref = None
        self._queue = None
        self._presets = None
        self._params = None
        self.discriminator = None

        if hub_ref is not None:
            self.hub_ref = hub_ref
        if queue is not None:
            self.queue = queue
        if presets is not None:
            self.presets = presets
        if params is not None:
            self.params = params

    @property
    def hub_ref(self):
        """Gets the hub_ref of this V1Tuner.  # noqa: E501


        :return: The hub_ref of this V1Tuner.  # noqa: E501
        :rtype: str
        """
        return self._hub_ref

    @hub_ref.setter
    def hub_ref(self, hub_ref):
        """Sets the hub_ref of this V1Tuner.


        :param hub_ref: The hub_ref of this V1Tuner.  # noqa: E501
        :type: str
        """

        self._hub_ref = hub_ref

    @property
    def queue(self):
        """Gets the queue of this V1Tuner.  # noqa: E501


        :return: The queue of this V1Tuner.  # noqa: E501
        :rtype: str
        """
        return self._queue

    @queue.setter
    def queue(self, queue):
        """Sets the queue of this V1Tuner.


        :param queue: The queue of this V1Tuner.  # noqa: E501
        :type: str
        """

        self._queue = queue

    @property
    def presets(self):
        """Gets the presets of this V1Tuner.  # noqa: E501


        :return: The presets of this V1Tuner.  # noqa: E501
        :rtype: list[str]
        """
        return self._presets

    @presets.setter
    def presets(self, presets):
        """Sets the presets of this V1Tuner.


        :param presets: The presets of this V1Tuner.  # noqa: E501
        :type: list[str]
        """

        self._presets = presets

    @property
    def params(self):
        """Gets the params of this V1Tuner.  # noqa: E501


        :return: The params of this V1Tuner.  # noqa: E501
        :rtype: dict(str, V1Param)
        """
        return self._params

    @params.setter
    def params(self, params):
        """Sets the params of this V1Tuner.


        :param params: The params of this V1Tuner.  # noqa: E501
        :type: dict(str, V1Param)
        """

        self._params = params

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
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

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1Tuner):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Tuner):
            return True

        return self.to_dict() != other.to_dict()
