# no-gnus

### Motivation:

A recent change in our companies IT policy is forcing a switch of our messaging platform to [slack](http://slack.com). 
As I paged through the help files to get myself spun up on the tool I found that I could define my own custom "slash commands" 
to trigger an http api call on a remote service. I have been looking for a reason to play around with Amazon AWS Lambda so I jumped into the AWS console, created a lambda function to echo back some text. After fiddling around to get the AWS Api Gateway to expose the lambda, I created the custom "slash command" and viola, an online, multi-service, api integration project was born!


### Tools:
* [Amazon AWS Lambda] (https://aws.amazon.com/lambda/)
* [Amazon AWS Api Gateway] (https://aws.amazon.com/api-gateway/)
* [Amazon AWS CloudWatch] (https://aws.amazon.com/cloudwatch)
* [Slack Messenger] (htp://slack.com/)
* [nodejs 4.3] (https://nodejs.org/en/) -> latest revision supported by AWS
* [node package manager] (https://www.npmjs.com)
* [grunt task runner] (http://gruntjs.com)
* [grunt-aws-lambda](https://github.com/Tim-B/grunt-aws-lambda)

