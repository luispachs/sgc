require('dotenv').config();
const jwt =require('jsonwebtoken');
class AuthMiddleware {
    static validate(token) {
          let validate = jwt.verify(token,process.env.SECRET);
    }
}