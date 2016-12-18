var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
    lambda_package: {
        default: {
            options: {
                // Task-specific options go here.
            }
        }
    },

    lambda_invoke: {
        default: {}
    },

    lambda_deploy: {
    	default: {
    		arn: "arn:aws:lambda:us-west-2:188671421216:function:noGnusIsGoodGnus",
    		options: {
    			region: "us-west-2",
    			memory: 128,
    			enableVersioning: true,

    		}
    	}
    }
});


grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy:default']);