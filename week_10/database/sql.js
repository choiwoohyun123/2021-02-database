import mysql from "mysql2";

//데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'choi36576544!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용
const promisePool = pool.promise();

// selec query
export const selectSql = {
    getusers : async () => {
        const [rows] = await promisePool.query(`select * from user`); //employee테이블

        return rows
    },
    getStudent : async () => {
        const [rows] = await promisePool.query(`select * from student`); //student테이블

        return rows
    },
}


// delete query
export const deleteSql = {
    deleteStudent : async (data) => {
        console.log('deleteSql.deleteStudent:',data.Number);
        const sql = `delete from student where Number = "${data.Number}" `;
        // data.Number값의 행을 삭제
        await promisePool.query(sql);
    }, 
}
