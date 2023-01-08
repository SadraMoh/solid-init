migrate((db) => {
  const collection = new Collection({
    "id": "5hbp8636kiylgaf",
    "created": "2023-01-07 08:26:26.669Z",
    "updated": "2023-01-07 08:26:26.669Z",
    "name": "recipe_ingredients_unit",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wqjtfynh",
        "name": "recipe",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "059s9i4etuylw89",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "kbtj1opv",
        "name": "ingredient",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "xql32ry8tpimtmi",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "j5yxsdmt",
        "name": "unit",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "nafnfd0yb34uwz3",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "d77bfthd",
        "name": "amount",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
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
  const collection = dao.findCollectionByNameOrId("5hbp8636kiylgaf");

  return dao.deleteCollection(collection);
})
