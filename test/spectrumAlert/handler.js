var assert = require('assert'),
  lambda = require('../../lib/resources/spectrumAlert');

describe('spectrumAlert', function() {
  describe('handler', function() {
    it('should require requestType', function(done) {
      var context = {
        done: function(err,obj) {
          assert(err);
          done();
        }
      };

      lambda.handler({}, context);
    });

    it('should verify requestType', function(done) {
      var context = {
        done: function(err,obj) {
          assert(err);
          done();
        }
      };

      lambda.handler({requestType: 'badType'}, context);
    });

  });
});
