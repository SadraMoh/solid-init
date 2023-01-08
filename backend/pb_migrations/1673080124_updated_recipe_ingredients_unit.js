migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hbp8636kiylgaf")

  collection.name = "ingredients_unit"

  // remove
  collection.schema.removeField("wqjtfynh")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5hbp8636kiylgaf")

  collection.name = "recipe_ingredients_unit"

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
