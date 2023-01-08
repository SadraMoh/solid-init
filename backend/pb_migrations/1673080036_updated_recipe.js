migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("059s9i4etuylw89")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wj1foyem",
    "name": "ingredients",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "5hbp8636kiylgaf",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("059s9i4etuylw89")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wj1foyem",
    "name": "ingredients",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "xql32ry8tpimtmi",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
