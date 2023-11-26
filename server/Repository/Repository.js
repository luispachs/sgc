require('dotenv').config();
const { Sequelize } = require('sequelize');
class Repository {
    _connection;
    _engine;
    manager
    constructor(host, port, user, pw, db, engine) {
        this._engine = engine;
        switch (engine) {
            case 'mysql':
                this._connection = new Sequelize(db, user, pw, { host: host, port: port, dialect: "mysql" });
                break;
            case 'sqlserver':
                this._connection = new Sequelize(db, user, pw, { host: host, port: port, dialect: "mssql" });
                break;
            case 'postgress':
                this._connection = new Sequelize(db, user, pw, { host: host, port: port, dialect: "postgres" });
                break;
            case 'oracle':
                this._connection = new Sequelize(db, user, pw, { host: host, port: port, dialect: "oracle" });
                break;
            case 'sqlite':
                this._connection = new Sequelize(db, user, pw, { host: host, port: port, dialect: "sqlite" });
                break;
            default:
                throw Error("Database engine no valid");
                break;
        }
    }

    getConnection() {
        return this._connection;
    }

    close() {
        this._connection.close();
    }

    find(id,obj){
       return  obj.findByPk(id);
    }
    
}

module.exports= Repository;