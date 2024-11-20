import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getMateria = async () => {
  try {
    const results = await DB_EXEC.ExecuteQuery('select * from materias');
    return results.rows._array;
  } catch (error) {
    console.error("Erro ao buscar matérias:", error);
    return [];
  }
};

export const insertMateria = async (param) => {
  try {
    const results = await DB_EXEC.ExecuteQuery(
      'insert into materias(materia, submateria, certo, total, meta, tempo) values(?,?,?,?,?,?)',
      [param.materia, param.submateria, param.certo, param.total, param.meta, param.tempo]
    );
    return results.rowsAffected;
  } catch (error) {
    console.error("Erro ao inserir matéria:", error);
    return 0;
  }
};
