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

    The version of the OpenAPI document: 1.13.0-rc1
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


try:
    from inspect import getfullargspec
except ImportError:
    from inspect import getargspec as getfullargspec
import pprint
import re  # noqa: F401
import six

from polyaxon_sdk.configuration import Configuration


class V1Log(object):
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
        'timestamp': 'datetime',
        'node': 'str',
        'pod': 'str',
        'container': 'str',
        'value': 'str'
    }

    attribute_map = {
        'timestamp': 'timestamp',
        'node': 'node',
        'pod': 'pod',
        'container': 'container',
        'value': 'value'
    }

    def __init__(self, timestamp=None, node=None, pod=None, container=None, value=None, local_vars_configuration=None):  # noqa: E501
        """V1Log - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._timestamp = None
        self._node = None
        self._pod = None
        self._container = None
        self._value = None
        self.discriminator = None

        if timestamp is not None:
            self.timestamp = timestamp
        if node is not None:
            self.node = node
        if pod is not None:
            self.pod = pod
        if container is not None:
            self.container = container
        if value is not None:
            self.value = value

    @property
    def timestamp(self):
        """Gets the timestamp of this V1Log.  # noqa: E501


        :return: The timestamp of this V1Log.  # noqa: E501
        :rtype: datetime
        """
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        """Sets the timestamp of this V1Log.


        :param timestamp: The timestamp of this V1Log.  # noqa: E501
        :type timestamp: datetime
        """

        self._timestamp = timestamp

    @property
    def node(self):
        """Gets the node of this V1Log.  # noqa: E501


        :return: The node of this V1Log.  # noqa: E501
        :rtype: str
        """
        return self._node

    @node.setter
    def node(self, node):
        """Sets the node of this V1Log.


        :param node: The node of this V1Log.  # noqa: E501
        :type node: str
        """

        self._node = node

    @property
    def pod(self):
        """Gets the pod of this V1Log.  # noqa: E501


        :return: The pod of this V1Log.  # noqa: E501
        :rtype: str
        """
        return self._pod

    @pod.setter
    def pod(self, pod):
        """Sets the pod of this V1Log.


        :param pod: The pod of this V1Log.  # noqa: E501
        :type pod: str
        """

        self._pod = pod

    @property
    def container(self):
        """Gets the container of this V1Log.  # noqa: E501


        :return: The container of this V1Log.  # noqa: E501
        :rtype: str
        """
        return self._container

    @container.setter
    def container(self, container):
        """Sets the container of this V1Log.


        :param container: The container of this V1Log.  # noqa: E501
        :type container: str
        """

        self._container = container

    @property
    def value(self):
        """Gets the value of this V1Log.  # noqa: E501


        :return: The value of this V1Log.  # noqa: E501
        :rtype: str
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this V1Log.


        :param value: The value of this V1Log.  # noqa: E501
        :type value: str
        """

        self._value = value

    def to_dict(self, serialize=False):
        """Returns the model properties as a dict"""
        result = {}

        def convert(x):
            if hasattr(x, "to_dict"):
                args = getfullargspec(x.to_dict).args
                if len(args) == 1:
                    return x.to_dict()
                else:
                    return x.to_dict(serialize)
            else:
                return x

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            attr = self.attribute_map.get(attr, attr) if serialize else attr
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: convert(x),
                    value
                ))
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], convert(item[1])),
                    value.items()
                ))
            else:
                result[attr] = convert(value)

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1Log):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Log):
            return True

        return self.to_dict() != other.to_dict()
