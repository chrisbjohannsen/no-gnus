# no-gnus

### Motivation:

A recent change in our companies IT policy is forcing a switch of our messaging platform to [slack](http://slack.com). 
As I paged through the help files to get myself spun up on the tool I found that I could define my own custom "slash commands" 
to trigger an http api call on a remote service. I have been looking for a reason to play around with Amazon AWS Lambda so I jumped into the AWS console, created a lambda function to echo back some text. After fiddling around to get the AWS Api Gateway to expose the lambda, I created the custom "slash command" and voila, an online, multi-service, api integration project was born!


### Tools:
* [Amazon AWS Lambda] (https://aws.amazon.com/lambda/)
* [Amazon AWS Api Gateway] (https://aws.amazon.com/api-gateway/)
* [Amazon AWS CloudWatch] (https://aws.amazon.com/cloudwatch)
* [Slack Messenger] (http://slack.com/)
* [nodejs 4.3] (https://nodejs.org/en/) -> latest revision supported by AWS
* [node package manager] (https://www.npmjs.com)
* [grunt task runner] (http://gruntjs.com)
* [grunt-aws-lambda](https://github.com/Tim-B/grunt-aws-lambda)

### Process

* Create a new project directory and execute npm init to generate a package.json
* Use npm install to install the following packages:
	* aws-sdk
	* grunt
	* grunt-cli
	* grunt-aws-lambda
	* grunt-pack
* Add index.js and code:
```javascript
'use strict';

console.log('Loading function');

exports.handler = (event, context) => {
    let responseCode = 200;
    let responseBody = {
        message: "No Gnus is good gnus with Gary Gnu",
        input: event
    };

    let response = {
        statusCode: responseCode,
        headers: {
        	Content-Type: "text/plain"
        	},
        body: JSON.stringify(responseBody)
    };
    
    console.log("response : " + JSON.stringify(response));
    context.succeed(response);
};
```
* Save and test using `grunt lambda_invoke`
* Login to the AWS Console and setup a Lambda function. Make note of the arn of the function you create as you will need to add it to your grunt lambda_deploy task.
* Setup AWS credentials 
	* https://github.com/Tim-B/grunt-aws-lambda#aws-credentials
	* http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html
* Add configuration to the grunt lambda_deploy task:
```javascript
	default: {
		arn: "{your arn from step 5}",
		options: {
			region: "{your region}",
			memory: 128,
			enableVersioning: true
		}
    }
```
