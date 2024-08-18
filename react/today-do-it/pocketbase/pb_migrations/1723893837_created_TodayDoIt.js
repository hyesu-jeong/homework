/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jptygkp951ie60f",
    "created": "2024-08-17 11:23:57.883Z",
    "updated": "2024-08-17 11:23:57.883Z",
    "name": "TodayDoIt",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jih0s44d",
        "name": "field",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jptygkp951ie60f");

  return dao.deleteCollection(collection);
})
