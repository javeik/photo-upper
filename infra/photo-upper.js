#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { PhotoUpperStack } = require('./photo-upper-stack');

const app = new cdk.App();
new PhotoUpperStack(app, 'PhotoUpperStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});
