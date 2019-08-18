// Copyright 2019 Polyaxon, Inc.
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
 * Build service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.14.4
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
import io.swagger.client.model.V1Build;
import java.io.IOException;

/**
 * V1BuildBodyRequest
 */

public class V1BuildBodyRequest {
  @SerializedName("owner")
  private String owner = null;

  @SerializedName("project")
  private String project = null;

  @SerializedName("build")
  private V1Build build = null;

  public V1BuildBodyRequest owner(String owner) {
    this.owner = owner;
    return this;
  }

   /**
   * Get owner
   * @return owner
  **/
  @ApiModelProperty(value = "")
  public String getOwner() {
    return owner;
  }

  public void setOwner(String owner) {
    this.owner = owner;
  }

  public V1BuildBodyRequest project(String project) {
    this.project = project;
    return this;
  }

   /**
   * Get project
   * @return project
  **/
  @ApiModelProperty(value = "")
  public String getProject() {
    return project;
  }

  public void setProject(String project) {
    this.project = project;
  }

  public V1BuildBodyRequest build(V1Build build) {
    this.build = build;
    return this;
  }

   /**
   * Get build
   * @return build
  **/
  @ApiModelProperty(value = "")
  public V1Build getBuild() {
    return build;
  }

  public void setBuild(V1Build build) {
    this.build = build;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1BuildBodyRequest v1BuildBodyRequest = (V1BuildBodyRequest) o;
    return Objects.equals(this.owner, v1BuildBodyRequest.owner) &&
        Objects.equals(this.project, v1BuildBodyRequest.project) &&
        Objects.equals(this.build, v1BuildBodyRequest.build);
  }

  @Override
  public int hashCode() {
    return Objects.hash(owner, project, build);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1BuildBodyRequest {\n");
    
    sb.append("    owner: ").append(toIndentedString(owner)).append("\n");
    sb.append("    project: ").append(toIndentedString(project)).append("\n");
    sb.append("    build: ").append(toIndentedString(build)).append("\n");
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

