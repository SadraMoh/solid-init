migrate((db) => {
  const collection = new Collection({
    "id": "nafnfd0yb34uwz3",
    "created": "2023-01-07 07:58:49.973Z",
    "updated": "2023-01-07 07:58:49.973Z",
    "name": "unit",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uqmiiclk",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": true,
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
  const collection = dao.findCollectionByNameOrId("nafnfd0yb34uwz3");

  return dao.deleteCollection(collection);
})
