import { Connection } from "../index";



  export const findOne = async (id: string, token: string) => {
    return new Promise((resolve, reject) => {
      Connection.query(`SELECT * FROM accesstokens where id = ${id} AND token = '${token}' LIMIT 1`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  };

  export const insert = async (userid: number) => {
    return new Promise((resolve, reject) => {
      Connection.query(`insert into accesstokens (userid) VALUES (${userid})`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  };

  export const update = async (id: number, token: string) => {
    return new Promise((resolve, reject) => {
      Connection.query(`UPDATE accesstokens SET token = '${token}' WHERE id = ${id}`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  };


  export default {
   findOne,
   update,
   insert,
  };
  