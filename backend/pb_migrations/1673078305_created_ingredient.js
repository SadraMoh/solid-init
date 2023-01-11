migrate((db) => {
  const collection = new Collection({
    "id": "xql32ry8tpimtmi",
    "created": "2023-01-07 07:58:25.623Z",
    "updated": "2023-01-07 07:58:25.623Z",
    "name": "ingredient",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8ch1phcn",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("xql32ry8tpimtmi");

  return dao.deleteCollection(collection);
})
