import { Connection } from "../index";

export const findOneByEmail = async (email: string) => {
    return new Promise((resolve, reject) => {
      Connection.query(`SELECT * FROM users where email = '${email}' LIMIT 1`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  };

  export const findOneById = async (id: number) => {
    return new Promise((resolve, reject) => {
      Connection.query(`SELECT * FROM users where id = '${id}' LIMIT 1`,
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
   findOneByEmail,
   findOneById,
  };
  