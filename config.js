"use strict";
module.exports = {
  "type": "service",
  "prerequisites": {
    "cpu": " ",
    "memory": " "
  },
  "swagger": true,
  "dbs": [
    {
      "prefix": "",
      "name": "poc",
      "mongo": true,
      "multitenant": false
    }
  ],
  "models": {
    "path": __dirname + "/lib/models/",
    "name": "mongo"
  },
  "serviceName": "simpleappecho",
  "serviceGroup": "POC",
  "serviceVersion": 1,
  "servicePort": 9100,
  "requestTimeout": 1,
  "requestTimeoutRenewal": 1,
  "extKeyRequired": true,
  "injection": true,
  "oauth": false,
  "session": false,
  "errors": {},
  "schema": {
    "post": {
      "/echo": {
        "_apiInfo": {
          "l": "Echo back a given message.",
          "group": ""
        },
        "mw": __dirname + "/lib/mw/echo_post.js",
        "imfv": {
          "custom": {
            "message": {
              "required": true,
              "source": [
                "body.message"
              ],
              "validation": {
                "properties": {
                  "message": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "get": {
      "/auth/info/googlejwt": {
        "_apiInfo": {
          "l": "Returns the requests' authentication information.",
          "group": ""
        },
        "mw": __dirname + "/lib/mw/auth_info_googlejwt_get.js",
        "imfv": {
          "custom": {},
          "commonFields": []
        }
      },
      "/auth/info/googleidtoken": {
        "_apiInfo": {
          "l": "Returns the requests' authentication information.",
          "group": ""
        },
        "mw": __dirname + "/lib/mw/auth_info_googleidtoken_get.js",
        "imfv": {
          "custom": {},
          "commonFields": []
        }
      }
    }
  }
};