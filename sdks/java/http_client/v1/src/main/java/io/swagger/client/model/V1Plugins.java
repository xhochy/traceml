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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.77
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.V1Notification;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * V1Plugins
 */

public class V1Plugins {
  @SerializedName("auth")
  private Boolean auth = null;

  @SerializedName("docker")
  private Boolean docker = null;

  @SerializedName("shm")
  private Boolean shm = null;

  @SerializedName("collect_artifacts")
  private Boolean collectArtifacts = null;

  @SerializedName("collect_logs")
  private Boolean collectLogs = null;

  @SerializedName("collect_resources")
  private String collectResources = null;

  @SerializedName("sync_statuses")
  private Boolean syncStatuses = null;

  @SerializedName("log_level")
  private String logLevel = null;

  @SerializedName("notifications")
  private List<V1Notification> notifications = null;

  public V1Plugins auth(Boolean auth) {
    this.auth = auth;
    return this;
  }

   /**
   * Get auth
   * @return auth
  **/
  @ApiModelProperty(value = "")
  public Boolean isAuth() {
    return auth;
  }

  public void setAuth(Boolean auth) {
    this.auth = auth;
  }

  public V1Plugins docker(Boolean docker) {
    this.docker = docker;
    return this;
  }

   /**
   * Get docker
   * @return docker
  **/
  @ApiModelProperty(value = "")
  public Boolean isDocker() {
    return docker;
  }

  public void setDocker(Boolean docker) {
    this.docker = docker;
  }

  public V1Plugins shm(Boolean shm) {
    this.shm = shm;
    return this;
  }

   /**
   * Get shm
   * @return shm
  **/
  @ApiModelProperty(value = "")
  public Boolean isShm() {
    return shm;
  }

  public void setShm(Boolean shm) {
    this.shm = shm;
  }

  public V1Plugins collectArtifacts(Boolean collectArtifacts) {
    this.collectArtifacts = collectArtifacts;
    return this;
  }

   /**
   * Get collectArtifacts
   * @return collectArtifacts
  **/
  @ApiModelProperty(value = "")
  public Boolean isCollectArtifacts() {
    return collectArtifacts;
  }

  public void setCollectArtifacts(Boolean collectArtifacts) {
    this.collectArtifacts = collectArtifacts;
  }

  public V1Plugins collectLogs(Boolean collectLogs) {
    this.collectLogs = collectLogs;
    return this;
  }

   /**
   * Get collectLogs
   * @return collectLogs
  **/
  @ApiModelProperty(value = "")
  public Boolean isCollectLogs() {
    return collectLogs;
  }

  public void setCollectLogs(Boolean collectLogs) {
    this.collectLogs = collectLogs;
  }

  public V1Plugins collectResources(String collectResources) {
    this.collectResources = collectResources;
    return this;
  }

   /**
   * Get collectResources
   * @return collectResources
  **/
  @ApiModelProperty(value = "")
  public String getCollectResources() {
    return collectResources;
  }

  public void setCollectResources(String collectResources) {
    this.collectResources = collectResources;
  }

  public V1Plugins syncStatuses(Boolean syncStatuses) {
    this.syncStatuses = syncStatuses;
    return this;
  }

   /**
   * Get syncStatuses
   * @return syncStatuses
  **/
  @ApiModelProperty(value = "")
  public Boolean isSyncStatuses() {
    return syncStatuses;
  }

  public void setSyncStatuses(Boolean syncStatuses) {
    this.syncStatuses = syncStatuses;
  }

  public V1Plugins logLevel(String logLevel) {
    this.logLevel = logLevel;
    return this;
  }

   /**
   * Get logLevel
   * @return logLevel
  **/
  @ApiModelProperty(value = "")
  public String getLogLevel() {
    return logLevel;
  }

  public void setLogLevel(String logLevel) {
    this.logLevel = logLevel;
  }

  public V1Plugins notifications(List<V1Notification> notifications) {
    this.notifications = notifications;
    return this;
  }

  public V1Plugins addNotificationsItem(V1Notification notificationsItem) {
    if (this.notifications == null) {
      this.notifications = new ArrayList<V1Notification>();
    }
    this.notifications.add(notificationsItem);
    return this;
  }

   /**
   * Get notifications
   * @return notifications
  **/
  @ApiModelProperty(value = "")
  public List<V1Notification> getNotifications() {
    return notifications;
  }

  public void setNotifications(List<V1Notification> notifications) {
    this.notifications = notifications;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Plugins v1Plugins = (V1Plugins) o;
    return Objects.equals(this.auth, v1Plugins.auth) &&
        Objects.equals(this.docker, v1Plugins.docker) &&
        Objects.equals(this.shm, v1Plugins.shm) &&
        Objects.equals(this.collectArtifacts, v1Plugins.collectArtifacts) &&
        Objects.equals(this.collectLogs, v1Plugins.collectLogs) &&
        Objects.equals(this.collectResources, v1Plugins.collectResources) &&
        Objects.equals(this.syncStatuses, v1Plugins.syncStatuses) &&
        Objects.equals(this.logLevel, v1Plugins.logLevel) &&
        Objects.equals(this.notifications, v1Plugins.notifications);
  }

  @Override
  public int hashCode() {
    return Objects.hash(auth, docker, shm, collectArtifacts, collectLogs, collectResources, syncStatuses, logLevel, notifications);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Plugins {\n");
    
    sb.append("    auth: ").append(toIndentedString(auth)).append("\n");
    sb.append("    docker: ").append(toIndentedString(docker)).append("\n");
    sb.append("    shm: ").append(toIndentedString(shm)).append("\n");
    sb.append("    collectArtifacts: ").append(toIndentedString(collectArtifacts)).append("\n");
    sb.append("    collectLogs: ").append(toIndentedString(collectLogs)).append("\n");
    sb.append("    collectResources: ").append(toIndentedString(collectResources)).append("\n");
    sb.append("    syncStatuses: ").append(toIndentedString(syncStatuses)).append("\n");
    sb.append("    logLevel: ").append(toIndentedString(logLevel)).append("\n");
    sb.append("    notifications: ").append(toIndentedString(notifications)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

