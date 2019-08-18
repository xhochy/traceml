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

/**
 * Job service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.14.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JobService);
  }
}(this, function(expect, JobService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JobService.JobServiceApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JobServiceApi', function() {
    describe('archiveJob', function() {
      it('should call archiveJob successfully', function(done) {
        //uncomment below and update the code to test archiveJob
        //instance.archiveJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bookmarkJob', function() {
      it('should call bookmarkJob successfully', function(done) {
        //uncomment below and update the code to test bookmarkJob
        //instance.bookmarkJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createJob', function() {
      it('should call createJob successfully', function(done) {
        //uncomment below and update the code to test createJob
        //instance.createJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createJobStatus', function() {
      it('should call createJobStatus successfully', function(done) {
        //uncomment below and update the code to test createJobStatus
        //instance.createJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJob', function() {
      it('should call deleteJob successfully', function(done) {
        //uncomment below and update the code to test deleteJob
        //instance.deleteJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJobs', function() {
      it('should call deleteJobs successfully', function(done) {
        //uncomment below and update the code to test deleteJobs
        //instance.deleteJobs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJob', function() {
      it('should call getJob successfully', function(done) {
        //uncomment below and update the code to test getJob
        //instance.getJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJobCodeRef', function() {
      it('should call getJobCodeRef successfully', function(done) {
        //uncomment below and update the code to test getJobCodeRef
        //instance.getJobCodeRef(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('greateJobCodeRef', function() {
      it('should call greateJobCodeRef successfully', function(done) {
        //uncomment below and update the code to test greateJobCodeRef
        //instance.greateJobCodeRef(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listArchivedJobs', function() {
      it('should call listArchivedJobs successfully', function(done) {
        //uncomment below and update the code to test listArchivedJobs
        //instance.listArchivedJobs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBookmarkedJobs', function() {
      it('should call listBookmarkedJobs successfully', function(done) {
        //uncomment below and update the code to test listBookmarkedJobs
        //instance.listBookmarkedJobs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listJobStatuses', function() {
      it('should call listJobStatuses successfully', function(done) {
        //uncomment below and update the code to test listJobStatuses
        //instance.listJobStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listJobs', function() {
      it('should call listJobs successfully', function(done) {
        //uncomment below and update the code to test listJobs
        //instance.listJobs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restartJob', function() {
      it('should call restartJob successfully', function(done) {
        //uncomment below and update the code to test restartJob
        //instance.restartJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreJob', function() {
      it('should call restoreJob successfully', function(done) {
        //uncomment below and update the code to test restoreJob
        //instance.restoreJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resumeJob', function() {
      it('should call resumeJob successfully', function(done) {
        //uncomment below and update the code to test resumeJob
        //instance.resumeJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopJob', function() {
      it('should call stopJob successfully', function(done) {
        //uncomment below and update the code to test stopJob
        //instance.stopJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopJobs', function() {
      it('should call stopJobs successfully', function(done) {
        //uncomment below and update the code to test stopJobs
        //instance.stopJobs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unBookmarkJob', function() {
      it('should call unBookmarkJob successfully', function(done) {
        //uncomment below and update the code to test unBookmarkJob
        //instance.unBookmarkJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateJob2', function() {
      it('should call updateJob2 successfully', function(done) {
        //uncomment below and update the code to test updateJob2
        //instance.updateJob2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
