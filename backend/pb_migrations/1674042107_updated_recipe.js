migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("059s9i4etuylw89")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zehyhwgo",
    "name": "isLiked",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("059s9i4etuylw89")

  // remove
  collection.schema.removeField("zehyhwgo")

  return dao.saveCollection(collection)
})
