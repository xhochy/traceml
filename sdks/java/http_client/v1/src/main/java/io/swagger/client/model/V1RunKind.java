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
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets v1RunKind
 */
@JsonAdapter(V1RunKind.Adapter.class)
public enum V1RunKind {
  
  JOB("job"),
  
  SERVICE("service"),
  
  DAG("dag"),
  
  SPARK("spark"),
  
  DASK("dask"),
  
  FLINK("flink"),
  
  RAY("ray"),
  
  MPIJOB("mpijob"),
  
  TFJOB("tfjob"),
  
  PYTORCHJOB("pytorchjob"),
  
  PARALLEL("parallel"),
  
  SCHEDULER("scheduler"),
  
  TUNER("tuner"),
  
  WATCHDOG("watchdog"),
  
  NOTIFIER("notifier");

  private String value;

  V1RunKind(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1RunKind fromValue(String text) {
    for (V1RunKind b : V1RunKind.values()) {
      if (String.valueOf(b.value).equals(text)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<V1RunKind> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1RunKind enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1RunKind read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1RunKind.fromValue(String.valueOf(value));
    }
  }
}

