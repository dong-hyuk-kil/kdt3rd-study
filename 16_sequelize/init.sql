-- 데이터베이스 목록 보기
SHOW databases;

-- (데이터베이스 생성);
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 데이터베이스 선택 (사용);
USE kdt;

-- 데이터베이스 내 테이블 목록 보기
SHOW tables;

-- ######
-- DDL
-- 테이블 생성
CREATE table visitor (
    id int not null primary key auto increment,
    name varchar(10) not null,
    comment Mediumtext
);

-- 테이블 구조 확인C:\Program Files\MySQL\MySQL Server 8.0
DESC visitor;


-- DCL
-- mysql 사용자 추가 (user계정)
CREATE user 'user'@'%' IDENTIFIED BY '1234';
--user 계정에 db 권한 부여 (모든 db에 접근 가능 설정)
grant all privileges on *.* to 'user'@'%' with grant option;
flush privileges;

INSERT INTO visitor (name, comment) VALUES ('아무개','배가 고파');

SELECT * from visitor;

update visitor set name='누구', comment='아무말', where id=1;
