import * as cdk from '@aws-cdk/core';
import * as codebuild from '@aws-cdk/aws-codebuild';
import * as iam from '@aws-cdk/aws-iam';

export class CdkDeployCodeBuildStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const buildImage = codebuild.LinuxBuildImage.fromDockerRegistry(
      "public.ecr.aws/bitnami/node:14.17.6-prod"
    )
    const project = new codebuild.Project(this, "Project", {
      projectName: "cdk-deploy-sample",
      environment: {
        buildImage
      },
      buildSpec: codebuild.BuildSpec.fromObject({
        version: "0.2",
        phases: {
          install: {
            commands: [
              "npm ci" 
            ]
          },
          build: {
            commands: [
              'npx cdk deploy --require-approval never "*"'
            ]
          }
        }
      })
    })
    
    project.role?.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess")
    )
  }
}
