# 2021-02-database
- 데이터베이스 설계

<br><br>
## 3주차 DB 테이블 설명
<br><br>
## <span style="color:red">테이블</span>
StudentNumber|Name|Grade|Major|Admissiondate|Email
---|---|---|---|---|---|
12133456|김철수|4|정보통신공학과|Thu Mar 01 2012 00:00:00 GMT+0900(대한믹국 표준시)|철수@email.com
12211234|홍길동|1|정보통신공학과|Mon Mar 01 2021 00:00:00 GMT+0900(대한믹국 표준시)|길동@email.com


1. StudentNumber는 Integer타입이고 NOT NULL형태이다.
2. Name은 VARCHAR(30)타입이고 NOT NULL형태이다.
3. Grade는 Integer타입이고 NOT NULL형태이다.
4. Major는 CHAR(100)타입이고 NOT NULL형태이다.
5. Admissiondate는 VARCHAR(200)타입이고 NOT NULL형태이다.
6. Email은 VARCHAR(30)타입이고 NOT NULL형태이다.

<br><br>

<br><br>
## 8주차 DB 테이블 설명
<br><br>
## <span style="color:red">직원테이블</span>
Fname|Minit|Lname|Ssn|Bdate|Address|sex|salary|Super_ssn|Dno
---|---|---|---|---|---|---|---|---|---|
우현|A|최|11111111|1997-07-11|안양|남|500|10000000|1
희찬|B|양|11111112|1997-09-04|인천|남|400|10000000|2
강산|C|김|11111113|1996-02-03|서울|남|300|10000000|3
강혁|D|이|11111114|1997-02-04|원주|남|500|10000000|1
진호|E|서|11111115|1995-07-11|화성|남|200|10000000|2
<br><br>
## <span style="color:red">부서테이블</span>
Dname|Dnumber|Mgr_ssn|Mgr_start_date
---|---|---|---|
정보통신공학과|1|11111111|2020-04-05
컴퓨터공학과|2|11111112|2019-09-09
전기전자공학과|3|11111113|2021-01-01

- 직원테이블 
1. Fname은 varchar타입이고 NOT NULL형태이다.
2. Minit은 char(1)타입이다.
3. Lname은 varchar(20)타입이고 NOT NULL형태이다.
4. Ssn는 char(9)타입이고 NOT NULL형태이다.
5. Bdate은 date타입이다.
6. Address은 varchar(30)타입이다.
7. Sex은 char(1)타입이다.
8. Salary은 decimal(5,0)타입이다.
9. Super_ssn은 char(9)타입이다.
10. Dno는 int타입이고 NOT NULL형태이다.

- 부서테이블
1. Dname는 varchar(15)타입이고 NOT NULL형태이다.
2. Dnumber는 int타입이고 NOT NULL형태이다.
3. Mgr_ssn는 char(9)타입이고 NOT NULL형태이다.
4. Mgr_start_date는 date타입이다.
<br><br>

<br><br>
## 10주차 DB 테이블 설명
<br><br>
## <span style="color:red">테이블</span>
|Name|Number
---|---|
배근환|12211234
이종혁|12171567
최연호|12161333
최우현|12171861
황다현|12161236


1. Name은 VARCHAR(15)타입이고 NOT NULL형태이다.
2. Number는 int타입이고 NOT NULL형태이다.





