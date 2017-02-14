//const MongoClient=require('mongodb').MongoClient;

const { MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
return console.log('umable to connect')
}
console.log('Connected to Mongodb server');

db.collection('Users').findOneAndDelete({_id:new ObjectID("58a2026576dfc30a6486f362")}).then((result)=>{
	console.log(result);

//db.close();
});
})