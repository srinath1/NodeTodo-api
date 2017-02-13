//const MongoClient=require('mongodb').MongoClient;

const { MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
return console.log('umable to connect')
}
console.log('Connected to Mongodb server');


db.collection('Users').insertOne({
	
	name:'srinath',
	age:27,
	location:'philadelphia'
},(err,result)=>{
	if(err){
	return console.log('Error:',err);}
	console.log(result.ops[0]._id.getTimestamp());
})
db.close();
});
