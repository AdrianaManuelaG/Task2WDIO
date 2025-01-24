const { configs } = require("@eslint/js");

module.exports=[
    configs.recommended,

   {
       rules: {
           "no-unused-vars": "warn",
           "no-undef": "warn"
       }
   }
];