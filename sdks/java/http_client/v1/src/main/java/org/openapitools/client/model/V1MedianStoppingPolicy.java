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
 * The version of the OpenAPI document: 1.3.4
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
 * Early stopping with median stopping, this policy computes running medians across all runs and stops those whose best performance is worse than the median of the running runs.
 */
@ApiModel(description = "Early stopping with median stopping, this policy computes running medians across all runs and stops those whose best performance is worse than the median of the running runs.")

public class V1MedianStoppingPolicy {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "median";

  public static final String SERIALIZED_NAME_EVALUATION_INTERVAL = "evaluation_interval";
  @SerializedName(SERIALIZED_NAME_EVALUATION_INTERVAL)
  private Integer evaluationInterval;

  public static final String SERIALIZED_NAME_MIN_INTERVAL = "min_interval";
  @SerializedName(SERIALIZED_NAME_MIN_INTERVAL)
  private Integer minInterval;

  public static final String SERIALIZED_NAME_MIN_SAMPLES = "min_samples";
  @SerializedName(SERIALIZED_NAME_MIN_SAMPLES)
  private Integer minSamples;


  public V1MedianStoppingPolicy kind(String kind) {
    
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


  public V1MedianStoppingPolicy evaluationInterval(Integer evaluationInterval) {
    
    this.evaluationInterval = evaluationInterval;
    return this;
  }

   /**
   * Interval/Frequency for applying the policy.
   * @return evaluationInterval
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Interval/Frequency for applying the policy.")

  public Integer getEvaluationInterval() {
    return evaluationInterval;
  }


  public void setEvaluationInterval(Integer evaluationInterval) {
    this.evaluationInterval = evaluationInterval;
  }


  public V1MedianStoppingPolicy minInterval(Integer minInterval) {
    
    this.minInterval = minInterval;
    return this;
  }

   /**
   * Get minInterval
   * @return minInterval
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getMinInterval() {
    return minInterval;
  }


  public void setMinInterval(Integer minInterval) {
    this.minInterval = minInterval;
  }


  public V1MedianStoppingPolicy minSamples(Integer minSamples) {
    
    this.minSamples = minSamples;
    return this;
  }

   /**
   * Get minSamples
   * @return minSamples
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getMinSamples() {
    return minSamples;
  }


  public void setMinSamples(Integer minSamples) {
    this.minSamples = minSamples;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1MedianStoppingPolicy v1MedianStoppingPolicy = (V1MedianStoppingPolicy) o;
    return Objects.equals(this.kind, v1MedianStoppingPolicy.kind) &&
        Objects.equals(this.evaluationInterval, v1MedianStoppingPolicy.evaluationInterval) &&
        Objects.equals(this.minInterval, v1MedianStoppingPolicy.minInterval) &&
        Objects.equals(this.minSamples, v1MedianStoppingPolicy.minSamples);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, evaluationInterval, minInterval, minSamples);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1MedianStoppingPolicy {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    evaluationInterval: ").append(toIndentedString(evaluationInterval)).append("\n");
    sb.append("    minInterval: ").append(toIndentedString(minInterval)).append("\n");
    sb.append("    minSamples: ").append(toIndentedString(minSamples)).append("\n");
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

