import * as SQLite from 'expo-sqlite';

const Database = {
  getConnection: () => {
    const db = SQLite.openDatabase('dados.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists materias(id integer primary key not null, materia text not null, submateria text not null, tempo real not null, certo int not null, total int not null, meta int not null)',
        [],
        (tx, results) => {
          console.log("Tabela criada com sucesso!");
        },
        (error) => {
          console.error("Erro ao criar tabela:", error);
        }
      );
    });

    const ExecuteQuery = (sql, params = []) => {
      return new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error); 
            }
          );
        });
      });
    };

    return { ExecuteQuery };
  },
};

export default Database;
