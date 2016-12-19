'use strict';

let _ = require('lodash');

console.log('Loading function');

exports.handler = (event, context) => {
	let responseCode = 200;
	let quote = _.sample([
		"No gnews, is good gnews, unless it's Gary's Gnews!",
		"This is Gary Gnu... and the no gnews is good gnews show. The ONLY tv gnews show guar-an-TEED to contain NO gnews what-so-ever.",
		"No gnews is good gnews with Gary Gnu"]);

    let responseBody = {
    	response_type: "in_channel",
        text: quote,
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