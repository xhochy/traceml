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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.8.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * FailureEarlyStoppingSchema specification Early stopping based on failure config. this policy stops based on a percentage of failed runs at every evaluation.
 */
@ApiModel(description = "FailureEarlyStoppingSchema specification Early stopping based on failure config. this policy stops based on a percentage of failed runs at every evaluation.")

public class V1FailureEarlyStopping {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "failure_early_stopping";

  public static final String SERIALIZED_NAME_PERCENT = "percent";
  @SerializedName(SERIALIZED_NAME_PERCENT)
  private Integer percent;


  public V1FailureEarlyStopping kind(String kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1FailureEarlyStopping percent(Integer percent) {
    
    this.percent = percent;
    return this;
  }

   /**
   * The percentage of failed runs, at each evaluation interval. e.g. 1 - 99.
   * @return percent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The percentage of failed runs, at each evaluation interval. e.g. 1 - 99.")

  public Integer getPercent() {
    return percent;
  }


  public void setPercent(Integer percent) {
    this.percent = percent;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1FailureEarlyStopping v1FailureEarlyStopping = (V1FailureEarlyStopping) o;
    return Objects.equals(this.kind, v1FailureEarlyStopping.kind) &&
        Objects.equals(this.percent, v1FailureEarlyStopping.percent);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, percent);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1FailureEarlyStopping {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    percent: ").append(toIndentedString(percent)).append("\n");
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

