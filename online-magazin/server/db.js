import {Sequelize} from 'sequelize'
export default new Sequelize(
    'online-store2',
    'postgres',
    '13691221Ab',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)