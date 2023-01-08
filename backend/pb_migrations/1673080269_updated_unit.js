migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nafnfd0yb34uwz3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "taehdvcx",
    "name": "short",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqmiiclk",
    "name": "name",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("nafnfd0yb34uwz3")

  // remove
  collection.schema.removeField("taehdvcx")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
