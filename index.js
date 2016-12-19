'use strict';

console.log('Loading function');

exports.handler = (event, context) => {
	let responseCode = 200;
    let responseBody = {
    	response_type: "in_channel",
        text: "No Gnus is good gnus with Gary Gnu",
        attachments: [],
        //input: event
    };

    let response = {
        statusCode: responseCode,
        headers: {},
        body: JSON.stringify(responseBody)
    };
    
    console.log("response : " + JSON.stringify(response));
    context.succeed(response);
};	