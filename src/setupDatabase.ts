import mongoose, { connect } from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDatabase');

export default () => {
    const connect = () => {
        mongoose.connect(`${config.DATBASE_URL}`)
        .then(() => {
            log.info('Successfully connected to database');
        })
        .catch((error) => {
            log.error('Error connecting to database', error);
            return process.exit(1);
        });

    };
    connect();
    mongoose.connection.on('disconnected', connect);
};


/* MY SQL DB SETUP ************************* */
// import { config } from "./config";
// export default () => {
//     const connect = () => {
//         var mysql = require('mysql2');
//         const conn = mysql.createConnection({
//             host: '22.22.22.100',
//             user: 'root',
//             password: 'Elyes@2007',
//             waitForConnections: true,
//             connectionLimit: 10,
//             maxIdle: 10,
//             idleTimeout: 60000,
//             queueLimit: 0 
//         });
//         conn.connect(function(err: any) {
//             if (err) {
//                 return console.error('error: ' + err.message);
//               }    
//               console.log('Connected to the MySQL server.');
//             });
//     };
//     connect();
// };