import mysql from "mysql2";

//데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
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
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`); //employee테이블
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`); //department테이블

        return rows
    },
}

// insert query
export const insertSql = {
    // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
    setEmployee : async (data) => {
        const sql = `insert into employee values ( 
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;

            await promisePool.query(sql); //sql을 query가 실행
    },

    setDepartment : async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;

            await promisePool.query(sql);
    }, 
}

// update query
export const updateSql = {
    updateEmployee : async (data) => {
        //where 조건을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set salary = "${data.Salary}" where Minit = "F"`;
        await promisePool.query(sql);

    },
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 0`;
        await promisePool.query(sql);

    }, 
}
