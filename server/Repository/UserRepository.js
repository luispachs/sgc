const Repository = require('./Repository');
const User = require('../Models/User');
const { PROTOCOL } = require('sqlite3');
class UserRepository extends Repository{
    constructor(){
        super(process.env.DB_HOST, process.env.PORT, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME, process.env.DATABASE_ENGINE);
        this.manager=this._connection.define('users',User,{timestamps:false});
        
    }

   async create(obj){
      let user=await  this.manager.create(obj)
      return user;
    }

    async findByEmail(email){
        return await this.manager.findOne({'where':{email:email}})
    }

    async updateToken(id,token){
        return await this.manager.update({tokenjwt:token},{where:{_id:id}});
    }

}

module.exports = UserRepository;