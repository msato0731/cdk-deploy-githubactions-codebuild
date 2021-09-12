#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CodebuildCdkDeployStack } from '../lib/codebuild_cdk_deploy-stack';

const app = new cdk.App();
new CodebuildCdkDeployStack(app, 'CodebuildCdkDeployStack');
