migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xql32ry8tpimtmi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ch1phcn",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xql32ry8tpimtmi")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
