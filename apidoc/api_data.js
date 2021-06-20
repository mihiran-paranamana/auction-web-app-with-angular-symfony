define({ "api": [
  {
    "type": "get",
    "url": "http://localhost:8001/api/accessToken",
    "title": "Access Token - Get",
    "description": "<p>Get Access Token</p>",
    "name": "getAccessToken",
    "group": "AUTHENTICATION",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<ul> <li>Username</li> </ul>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/accessToken"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing access token data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 1,\n  \"username\": \"admin1\",\n  \"token\": \"af874ho9s8dfush6\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/AccessTokenController.php",
    "groupTitle": "AUTHENTICATION"
  },
  {
    "type": "get",
    "url": "http://localhost:8001/api/permissions",
    "title": "Permissions - Get",
    "description": "<p>Get Permissions</p>",
    "name": "getPermissions",
    "group": "AUTHORIZATION",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<ul> <li>Access Token</li> </ul>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/permissions"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing permission data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"item\":{\n    \"canRead\":true,\n    \"canCreate\":true,\n    \"canUpdate\":true,\n    \"canDelete\":true\n  },\n  \"bid\":{\n    \"canRead\":true,\n    \"canCreate\":true,\n    \"canUpdate\":true,\n    \"canDelete\":true\n  },\n  \"bid_history\":{\n    \"canRead\":true,\n    \"canCreate\":true,\n    \"canUpdate\":true,\n    \"canDelete\":true\n  },\n  \"configure_auto_bid\":{\n    \"canRead\":true,\n    \"canCreate\":true,\n    \"canUpdate\":true,\n    \"canDelete\":true\n  },\n  \"admin_dashboard\":{\n    \"canRead\":true,\n    \"canCreate\":true,\n    \"canUpdate\":true,\n    \"canDelete\":true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/UserRoleDataGroupController.php",
    "groupTitle": "AUTHORIZATION"
  },
  {
    "type": "get",
    "url": "http://localhost:8001/api/autoBidConfig",
    "title": "Auto Bid Config - Get",
    "description": "<p>Get Auto Bid Config</p>",
    "name": "getAutoBidConfig",
    "group": "BID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<ul> <li>Access Token</li> </ul>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/autoBidConfig"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing auto bid config data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\":1,\n  \"userId\":1,\n  \"maxBidAmount\":\"2500.00\",\n  \"currentBidAmount\":\"1250.00\",\n  \"notifyPercentage\":90\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/UserBidConfigController.php",
    "groupTitle": "BID"
  },
  {
    "type": "get",
    "url": "http://localhost:8001/api/bids",
    "title": "Bids - Get",
    "description": "<p>Get Bids</p>",
    "name": "getBids",
    "group": "BID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<ul> <li>Access Token</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filter[itemId]",
            "description": "<ul> <li>Item Id</li> </ul>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/bids"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing bids data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"id\":1,\n    \"userId\":1,\n    \"itemId\":1,\n    \"bid\":\"1500.00\",\n    \"isAutoBid\":false,\n    \"dateTime\":\"2021-06-20 22:50\",\n    \"user\":{\n      \"userId\":1,\n      \"username\":\"admin1\"\n    }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/BidController.php",
    "groupTitle": "BID"
  },
  {
    "type": "post",
    "url": "http://localhost:8001/api/bids/:id",
    "title": "Bid - Post",
    "description": "<p>Save Bid</p>",
    "name": "saveBid",
    "group": "BID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing bid data with access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n  \"itemId\":1,\n  \"bid\":\"1800.00\",\n  \"isAutoBid\":true,\n  \"accessToken\":\"df874ho9s8dfush9\"\n}",
          "type": "Json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/bids/1"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing bid data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"id\":1,\n    \"userId\":3,\n    \"itemId\":1,\n    \"bid\":\"1800.00\",\n    \"isAutoBid\":true,\n    \"dateTime\":\"2021-06-20 22:50\",\n    \"user\":{\n      \"userId\":3,\n      \"username\":\"user1\"\n    }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bid is closed / Bid should be higher than the item bid / Already have the highest bid for the item</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/BidController.php",
    "groupTitle": "BID"
  },
  {
    "type": "put",
    "url": "http://localhost:8001/api/autoBidConfig",
    "title": "Auto Bid Config - Put",
    "description": "<p>Update Auto Bid Config</p>",
    "name": "updateAutoBidConfig",
    "group": "BID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing auto bid config data with access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n  \"maxBidAmount\":\"2500.00\",\n  \"notifyPercentage\":\"90\",\n  \"accessToken\":\"af874ho9s8dfush6\"\n}",
          "type": "Json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/autoBidConfig"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing auto bid config data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\":1,\n  \"userId\":1,\n  \"maxBidAmount\":\"2500.00\",\n  \"currentBidAmount\":\"1250.00\",\n  \"notifyPercentage\":90\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/UserBidConfigController.php",
    "groupTitle": "BID"
  },
  {
    "type": "delete",
    "url": "http://localhost:8001/api/items/:id",
    "title": "Item - Delete",
    "description": "<p>Delete Item</p>",
    "name": "deleteItem",
    "group": "ITEM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<ul> <li>Access Token</li> </ul>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/items/1"
      }
    ],
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/ItemController.php",
    "groupTitle": "ITEM"
  },
  {
    "type": "get",
    "url": "http://localhost:8001/api/items/:id",
    "title": "Item - Get",
    "description": "<p>Get Item</p>",
    "name": "getItem",
    "group": "ITEM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<ul> <li>Access Token</li> </ul>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/items/1"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing item data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\":1,\n  \"name\":\"Item 1\",\n  \"description\":\"Description 1\",\n  \"price\":\"1500.00\",\n  \"bid\":\"1800.00\",\n  \"closeDateTime\":\"2021-06-21 12:15\",\n  \"isAutoBidEnabled\":false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/ItemController.php",
    "groupTitle": "ITEM"
  },
  {
    "type": "get",
    "url": "http://localhost:8001/api/items",
    "title": "Items - Get",
    "description": "<p>Get Items</p>",
    "name": "getItems",
    "group": "ITEM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<ul> <li>Access Token</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filter[name]",
            "description": "<ul> <li>Item Name</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filter[description]",
            "description": "<ul> <li>Item Description</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<ul> <li>Limit</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<ul> <li>Offset</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<ul> <li>Sort Field</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortOrder",
            "description": "<ul> <li>Sort Order</li> </ul>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/items"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing items data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n    \"id\":1,\n    \"name\":\"Item 1\",\n    \"description\":\"Description 1\",\n    \"price\":\"1500.00\",\n    \"bid\":\"1800.00\",\n    \"closeDateTime\":\"2021-06-21 12:15\",\n    \"isAutoBidEnabled\":false\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/ItemController.php",
    "groupTitle": "ITEM"
  },
  {
    "type": "post",
    "url": "http://localhost:8001/api/items",
    "title": "Item - Post",
    "description": "<p>Save Item</p>",
    "name": "saveItem",
    "group": "ITEM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing item data with access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n  \"name\":\"Item 1\",\n  \"description\":\"Description 1\",\n  \"price\":\"1500\",\n  \"bid\":\"1800\",\n  \"closeDateTime\":\"2021-06-20 16:20\",\n  \"accessToken\":\"af874ho9s8dfush6\"\n}",
          "type": "Json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/items"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing item data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\":1,\n  \"name\":\"Item 1\",\n  \"description\":\"Description 1\",\n  \"price\":\"1500\",\n  \"bid\":\"1800\",\n  \"closeDateTime\":\"2021-06-20 16:20\",\n  \"isAutoBidEnabled\":false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/ItemController.php",
    "groupTitle": "ITEM"
  },
  {
    "type": "put",
    "url": "http://localhost:8001/api/items/:id",
    "title": "Item - Put",
    "description": "<p>Update Item</p>",
    "name": "updateItem",
    "group": "ITEM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing item data with access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Parameter Object-Example:",
          "content": "{\n  \"name\":\"Item 1\",\n  \"description\":\"Description 1\",\n  \"price\":\"1500\",\n  \"bid\":\"1800\",\n  \"closeDateTime\":\"2021-06-20 16:20\",\n  \"accessToken\":\"af874ho9s8dfush6\"\n}",
          "type": "Json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8001/api/items/1"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Object",
            "description": "<p>Object containing item data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\":1,\n  \"name\":\"Item 1\",\n  \"description\":\"Description 1\",\n  \"price\":\"1500\",\n  \"bid\":\"1800\",\n  \"closeDateTime\":\"2021-06-20 16:20\",\n  \"isAutoBidEnabled\":false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Bad Request</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unauthorized</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/src/Controller/ItemController.php",
    "groupTitle": "ITEM"
  }
] });