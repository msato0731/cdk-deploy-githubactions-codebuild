#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SampleAppStack } from '../lib/sample-app-stack';
import { IamUserStack } from '../lib/iam-user-stack';
import { CdkDeployCodeBuildStack } from '../lib/cdk-deploy-codebuildt';

const app = new cdk.App();

new SampleAppStack(app, 'SampleAppStack');
new IamUserStack(app, 'IamUserStack')
new CdkDeployCodeBuildStack(app, 'CdkDeployCodeBuildStack')
