

development (under process)

production (live) customers are using that application

for deployment
netlify  you can deploy unlimited   (it is for f.e)
heroku   it will allow you to deploy 5 application per email (it is mostly for b.e or full stack)

COLD START It will happen only for the first time

<!-- for production
godady
aws ec2 instance
digital ocean -->
<!-- devops -->


CLIENT SERVER MODEL

WE , CLIET MAKE HTTP REQUEST TO SERVER

GET,
POST
PUT
DELETE

SERVER

university.attainu.com



POST REQUEST => SENDING DATA TO SERVER 
for eg
login request

best use case
you want to save you data
register will be the best example

{
    
}
you will send your email and password to server = {email:"deepakshivam1998@gmail.com", password:"deepak"}
if correct then it will send response => {success:true, message:"successfully logged in"}
it not correct then also it will send response => {sucess: false, message:"Invalid crdentials"}


GET REQUEST
client will send data through query params
use case
you want to see your profile

you will send yor roll number to server
server will response you back in json fomat

{
    "name":"vikram"
    "clas":5tj
    "subject":
}

whenever u needs data from server, you will make get request


json, javascript object notation

interaction betwen client and server will be in json format
