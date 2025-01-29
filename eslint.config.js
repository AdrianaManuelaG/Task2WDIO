const { configs } = require("@eslint/js");

module.exports=[
    configs.recommended,

   {   
        parserOptions: {
            "sourceType": "script"
       },
       env: {
        "browser": true,
        "jquery": true,
        "node": false
       },
       rules: {
           "no-unused-vars": "warn",
           "no-undef": "warn"
       }
   }
];