import * as mysql from 'mysql';
import config from '../config';
import Blogs from './queries/blog';
import Users from './queries/users';
import AccessTokens from './queries/accesstokens';

export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if (err) console.log(err);
});

export default {
    Blogs,
    Users,
    AccessTokens,
}