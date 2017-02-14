//const MongoClient=require('mongodb').MongoClient;

const { MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
return console.log('umable to connect')
}
console.log('Connected to Mongodb server');

db.collection('Users').findOneAndUpdate({_id:new ObjectID("58a3537c18913f77dfff502b")},
	{
		$set:{
		name:'ravi'},
		
			$inc:{
				age:1
			}
	},{
		returnOriginal:false
	})




.then((result)=>{
	console.log(result);

//db.close();
});
})