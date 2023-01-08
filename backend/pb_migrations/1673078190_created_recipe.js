migrate((db) => {
  const collection = new Collection({
    "id": "059s9i4etuylw89",
    "created": "2023-01-07 07:56:30.790Z",
    "updated": "2023-01-07 07:56:30.790Z",
    "name": "recipe",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oye2omwb",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 128,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wve92ayy",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cwavxfgt",
        "name": "minutes",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("059s9i4etuylw89");

  return dao.deleteCollection(collection);
})
