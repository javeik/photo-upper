const cdk = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');

class PhotoUpperStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new s3.Bucket(this, 'PhotoUpperBucket', {
      versioned: true
    });
  }
}

module.exports = { PhotoUpperStack }