# Machine test server
Machine Test NodeJS.
## Getting Started
    git clone https://github.com/sreejithsreeji/machine-test-nodeJS
### Prerequisites
 Nodejs  
 
### Dependencies
create .env file using the format prescribed in the env.json	
		
### Starting environment
 ##### Node JS APIs   
    cd aTeam
    npm install -to install dependencies
    npm start
This will start the server in **localhost:{PORT}**
#### Sample Request
  ###### REGISTER USER
   POST http://localhost:5000/users
   
        BODY {
	"name":"gdfghfghfghf",
    "gender":"male",
    "password":"hhd",
    "email":"hhs",
    "profile_pic":"file"
    }

   ###### RESPONSE
      {
    "code": 201,
    "message": "user registerd successfully"
     } 

######LOG IN     
 **POST** http://localhost:5000/login

      {
	"email":"sggs",
	"password":"gfdhd"
        }

    {
    "code": 201,
    "message": "login successfully"
    }

###### Get all users      
 **GET** http://localhost:5000/users

###### Get friends of a particular user
  **GET** http://localhost:5000/users/:email/friends

###### Get friend requests of a particular user
  **GET** http://localhost:5000/users/:email/requests  

###### send a friend request
  **POST** http://localhost:5000/users/:email/request/send"

###### confirm a friend request
  **POST** http://localhost:5000/users/:email/friends/requests/approve"
          
