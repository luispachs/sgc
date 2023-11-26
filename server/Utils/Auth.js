require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserRepository = require('../Repository/UserRepository');

class Auth {
    static  async authentication(user, password, remember) {
        let userRepository =new  UserRepository();
        let userObj = await userRepository.findByEmail(user)
    
    if(password!= userObj._password){
        throw new Error('The provider data is invalid');
    }
       let expires = "1h";
        if (remember == true) {
            expires = "1 year";
        }
        let token = jwt.sign({ "user": userObj.email, "id": userObj._id }
        , process.env.SECRET,
        {
            algorithm: "HS256",
            expiresIn: expires
        }
        );
        userRepository.updateToken(userObj._id,token);
        
        return token;
    }
}


module.exports = Auth; 