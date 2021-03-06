define({ "api": [
  {
    "type": "get",
    "url": "http://inventory.test/api/devices",
    "title": "1.-Consultar Dispositivo",
    "description": "<p>Esta peticion obtiene el listado de los dispositivos</p>",
    "group": "Devices",
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/devices"
      }
    ],
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/DevicesController.php",
    "groupTitle": "Devices",
    "name": "GetHttpInventoryTestApiDevices"
  },
  {
    "type": "post",
    "url": "http://inventory.test/api/devices",
    "title": "2.-Guardar un nuevo dispositivo",
    "description": "<p>Esta peticion guarda un nuevo dispositivo</p>",
    "group": "Devices",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serialnumber",
            "description": "<p>Es el número de serie del dispositivo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "devicekey",
            "description": "<p>clave unica para consultar los dispositivos relacionados</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_status",
            "description": "<p>ID del estatus en el que se encuentra el dispositivo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_devicetype",
            "description": "<p>ID del estatus en el que se encuentra el dispositivo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_device",
            "description": "<p>ID del dispositivo padre (en caso de no tener debe ser 0)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_departament",
            "description": "<p>ID del departamento al que pertenece</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "iduser",
            "description": "<p>ID del usuario al que esta asignado</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/devices"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\": \"success\",\n      \"message\": \"Se guardo correctamente el dispositivo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"status\": \"error\",\n     \"message\": \"Hubo un error al guardar el dispositivo\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/DevicesController.php",
    "groupTitle": "Devices",
    "name": "PostHttpInventoryTestApiDevices"
  },
  {
    "type": "get",
    "url": "http://inventory.test/api/devicestype",
    "title": "1.-Consultar los tipos de equipos",
    "description": "<p>Esta peticion obtiene el listado de los tipos de dispositivos</p>",
    "group": "DevicesType",
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/devicestype"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [\n      {\n         \"iddevice_type\": 1,\n          \"type\": \"Laptop\",\n          \"model\": \"MacBook Air 13''\",\n          \"year\": \"2014\",\n          \"processor\": \"1.3 GHz Intel Core i5\",\n          \"ram\": \"4GB\",\n          \"storage\": \"120GB\",\n          \"created_at\": \"2019-03-06 07:28:22\",\n          \"updated_at\": \"2019-03-06 07:28:22\"\n      }\n  ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/DevicesTypeController.php",
    "groupTitle": "DevicesType",
    "name": "GetHttpInventoryTestApiDevicestype"
  },
  {
    "type": "get",
    "url": "http://inventory.test/api/devicestype/{id}",
    "title": "3.-Obtiene un tipo de equipo por su id",
    "description": "<p>Esta peticion obtiene un tipo de dispositivo por su id</p>",
    "group": "DevicesType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/devicestype/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [\n      {\n         \"iddevice_type\": 1,\n          \"type\": \"Laptop\",\n          \"model\": \"MacBook Air 13''\",\n          \"year\": \"2014\",\n          \"processor\": \"1.3 GHz Intel Core i5\",\n          \"ram\": \"4GB\",\n          \"storage\": \"120GB\",\n          \"created_at\": \"2019-03-06 07:28:22\",\n          \"updated_at\": \"2019-03-06 07:28:22\"\n      }\n  ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/DevicesTypeController.php",
    "groupTitle": "DevicesType",
    "name": "GetHttpInventoryTestApiDevicestypeId"
  },
  {
    "type": "post",
    "url": "http://inventory.test/api/devicestype",
    "title": "2.-Guardar un nuevo tipo de equipo",
    "description": "<p>Esta peticion guarda un nuevo tipo de dispositivo</p>",
    "group": "DevicesType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Es el nombre del tipo de equipo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>Es el modelo del equipo</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "year",
            "description": "<p>Es el año del equipo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "proccesor",
            "description": "<p>Es procesador del equipo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ram",
            "description": "<p>Es la ram del equipo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storage",
            "description": "<p>Es el almacenamiento del equipo</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/devicestype"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\": \"success\",\n      \"message\": \"Se guardo correctamente el tipo de dispositivo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"status\": \"error\",\n     \"message\": \"Hubo un error al guardar el tipo de dispositivo\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/DevicesTypeController.php",
    "groupTitle": "DevicesType",
    "name": "PostHttpInventoryTestApiDevicestype"
  },
  {
    "type": "get",
    "url": "http://inventory.test/api/offices",
    "title": "1.-Consultar las oficinas",
    "description": "<p>Esta peticion obtiene el listado de las oficinas</p>",
    "group": "Offices",
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/offices"
      }
    ],
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/OfficesController.php",
    "groupTitle": "Offices",
    "name": "GetHttpInventoryTestApiOffices"
  },
  {
    "type": "get",
    "url": "http://inventory.test/api/offices/{id}",
    "title": "3.-Obtiene una oficina por su id",
    "description": "<p>Esta peticion obtiene una oficina por su id</p>",
    "group": "Offices",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/offices/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/OfficesController.php",
    "groupTitle": "Offices",
    "name": "GetHttpInventoryTestApiOfficesId"
  },
  {
    "type": "post",
    "url": "http://inventory.test/api/offices",
    "title": "2.-Guardar una nueva oficina",
    "description": "<p>Esta peticion guarda una nueva oficina</p>",
    "group": "Offices",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Es el nombre del tipo de equipo</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/offices"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\": \"success\",\n      \"message\": \"Se guardo correctamente la oficina\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"status\": \"error\",\n     \"message\": \"Hubo un error al guardar la oficina\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/OfficesController.php",
    "groupTitle": "Offices",
    "name": "PostHttpInventoryTestApiOffices"
  },
  {
    "type": "get",
    "url": "http://inventory.test/api/roles",
    "title": "1.-Consultar Roles",
    "description": "<p>Esta peticion obtiene el listado de roles</p>",
    "group": "Roles",
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/roles"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"idrole\": 1,\n         \"name\": \"Developer\",\n         \"visible\": \"1\",\n         \"created_at\": \"2019-03-11 03:07:28\",\n         \"updated_at\": \"2019-03-11 03:07:28\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/RolesController.php",
    "groupTitle": "Roles",
    "name": "GetHttpInventoryTestApiRoles"
  },
  {
    "type": "get",
    "url": "http://inventory.test/api/roles/{id}",
    "title": "3.-Obtiene rol por su id",
    "description": "<p>Esta peticion obtiene rol por su id</p>",
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/roles/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/RolesController.php",
    "groupTitle": "Roles",
    "name": "GetHttpInventoryTestApiRolesId"
  },
  {
    "type": "post",
    "url": "http://inventory.test/api/roles",
    "title": "2.-Guardar un nuevo rol",
    "description": "<p>Esta peticion guarda un nuevo rol</p>",
    "group": "Roles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Es el nombre rol</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "visible",
            "description": "<p>Define si el rol es visible o no</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/roles"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\": \"success\",\n      \"message\": \"Se guardo correctamente el rol\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"status\": \"error\",\n     \"message\": \"Hubo un error al guardar el rol\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/RolesController.php",
    "groupTitle": "Roles",
    "name": "PostHttpInventoryTestApiRoles"
  },
  {
    "type": "get",
    "url": "http://inventory.test/api/users",
    "title": "1.-Consultar Usuarios",
    "description": "<p>Esta peticion obtiene el listado de los tipos usuarios</p>",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/users"
      }
    ],
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/UsersController.php",
    "groupTitle": "Users",
    "name": "GetHttpInventoryTestApiUsers"
  },
  {
    "type": "get",
    "url": "http://inventory.test/api/users/{id}",
    "title": "3.-Obtiene un usuario por su id",
    "description": "<p>Esta peticion obtiene un usuario por su id</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/users/:id"
      }
    ],
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/UsersController.php",
    "groupTitle": "Users",
    "name": "GetHttpInventoryTestApiUsersId"
  },
  {
    "type": "post",
    "url": "http://inventory.test/api/users",
    "title": "2.-Guardar un nuevo usuario",
    "description": "<p>Esta peticion guarda un nuevo usuario</p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Es el nombre del Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Es nombre de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Es el email del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "active",
            "description": "<p>Si se encuentra o no activo el usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idrole",
            "description": "<p>Id del rol al que pertenece este usuario</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://inventory.test/api/users"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\": \"success\",\n      \"message\": \"Se guardo correctamente el usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"status\": \"error\",\n     \"message\": \"Hubo un error al guardar el usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "inventory/app/Http/Controllers/UsersController.php",
    "groupTitle": "Users",
    "name": "PostHttpInventoryTestApiUsers"
  }
] });
