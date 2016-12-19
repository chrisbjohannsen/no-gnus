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
        	"Content-Type" : "text/plain"
        },
        body: responseBody.message
    };
    
    console.log("response : " + JSON.stringify(response));
    context.succeed(response);
};	