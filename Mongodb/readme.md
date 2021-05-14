DATABASE => where we store some data 
we should able to perfrom CRUD operation

//create
queries in mongodb
insertOne
insertMany

//Read
find({name:"deepak"})  return array
findOne({name:"deepak"})  => return single object

//Update
findByIdAndUpadate
findOneAndUpdate

//Delete
findByIdAndDelete
findOneAndDelete



SQL 
mysql
postgres
we store data in tables ( means row and column)


NOSQL
mongodb
it store data in form of documents(bson format)

documnets is nothing but object


mongoose
{
    "id":1
    "name":"deepak singh"
    "age":22,
    "schools":["navals',"srm"],
    "address": {
        tower:A,
        pincode: 201305,
        city:noida
    }
}


so we design schema in mongodb

id: type:{
    string
},
name: type => string
age: type => number,
schools: type=> array,
address: type=>object


queries in mongodb
C