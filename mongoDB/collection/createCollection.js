const mongo = new Mongo()
const db = mongo.getDB('test')
let collections = db.getCollectionNames()
print('最初的集合:')
printjson(collections)
db.createCollection("newCollectionA")
db.createCollection("newCollectionB")
print('创建之后的集合')
collections = db.getCollectionNames()
printjson(collections)