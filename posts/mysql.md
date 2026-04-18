# mysql


## 一、SQL语句

### 1.数据库表操作（DDL）

查询所有数据库`SHOW DATABASES;`查询当前数据库`SELECTDATABASE();` 

创建 `CREATE DATABASE [IF NOT EXISTS] 数据库命 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];`

删除`DROP DATABASE[IF EXISTS] 数据库名;`

使用`USE 数据库名;`

查询数据库中的表`show tables;'`


查询表结构`DESC 表名;`











```bash
create table emp(
	id int comment '编号',
  workno varchar(10) comment '工号',
  name varchar(10) comment '姓名',
  gender char(1) comment '性别',
  age tinyint unsigned comment '年龄',
  idcard char(18) comment '身份证号',
  entrydate date comment '入职时间'
) comment '员工表';
```

#### **表结构修改**

添加字段 `ALTER TABLE 表名 ADD 字段名 类型(长度) [COMMENT 注释] [约束];`

修改字段`ALTER TABLE 表名 MODIFY 字段名 新数据类型(长度);`

修改字段名和字段类型 `ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型(长度) [COMMENT 注释] [约束];`

删除字段`ALTER TABLE 表名 DROP 字段名;`

修改表名`ALTER TABLE 表名 RENAME TO 新表名;`

删除表`DROP TABLE [IF EXISTS] 表名;` 删除指定表，并重新创建该表 `TRUNCATE TABLE 表名;`  这种方式删除，是删除掉整张表的数据，再重新创建该表，等于清空表的数据，留下空表。


### 2.DML增删改

DML英文全称是Data Manipulation Language(数据操作语言)，用来对数据库中表的数据记录进行增删改操作。

#### 1.**添加数据INSERT**












****

#### 2.**修改数据UPDATE**






------

#### **3.删除数据DELETE**




------

### 3.DQL-介绍


DOL英文全称是Data Query Language(数据查询语言人，数据查询语言，用来查询数据库中表的记录。




#### **1.基本查询**


> 1.查询指定字段 name, workno, age 返回
>
> ```bash
> select name, workno, age from emp;				 
> ```
>
> 2.查询返回所有字段
>
> ```bash
> select * from emp
> ```
>
> **在开发的时候尽量不要写通配符**
>
> 3.查询所有员工的工作地址，起别名
>
> ```bash
> select workaddress from emp;
> select workaddress as '工作地址' from emp;
> ```
>
> 4.查询公司员工的上班地址（不要重复）
>
> ```bash
> select distinct workaddress '工作地址' from emp;
> ```

#### **2.条件查询（WHERE）**


**1.查询年龄等于 88 的员工**

```bash
select * from emp where age = 88;
```

**2.查询年龄小于 20 的员工信息**

```bash
select * from emp where age < 88;
```

**3.查询年龄小于等于 20 的员工信息**

```bash
select * from emp where age <= 88;
```

**4.查询没有身份证号的员工信息**

```bash
select * from emp where idcard is null;
```

**5.查询有身份证号的员工信息**

```bash
select * from emp where idcard is not null;
```

**6.查询年龄不等于 88 的员工信息**

```bash
select * from emp where age != 88;
```

**7.查询年龄在 15 岁（包含）到 20 岁（包含）之间的员工信息**

```bash
select * from emp where age >= 15 and age <= 20;
select * from emp where age between 15 and 20;
# between and 既包含最小值又包含最大值
```

**8.查询性别为 女 且年龄小于 25 岁的员工信息**

```bash
select * from emp where gender = '女' and age < 25;
```

**9.查询年龄等于 18 或 20 或 40 的员工信息**

```bash
select * from emp where age = 10 or age = 20 or age = 40;
select * from emp where age in(18, 20, 40);
```

**10.查询姓名为两个字的员工的信息**

```mysql
select * from emp where name like '__';
# 两个下划线代表来两个个字符
```

**11.查询身份证号最后一位是 X 的员工信息**

```bash
select * from emp where idcard like '%X';
```

#### **3.聚合函数（COUNT, MAX, MIN, AVG, SUM）**

聚合函数是指将一列数据作为一个整体，进行纵向计算。



**1.统计该企业员工数量**

```bash
select count(*) from emp;
select count(id) from emp;
```

**2.统计该企业员工的平均年龄**

```bash
select avg(age) from emp;
```

**3.统计该企业员工的最大年龄**

```bash
select max(age) from emp;
```

**4.统计该企业员工的最小年龄**

```bash
select min(age) from emp;
```

**5.统计西安地区员工的年龄之和**

```bash
select sum(age) from emp where workaddress = '西安';
```

#### **4.分组查询（GROUP BY）**



**1.根据性别分组，统计男性员工 和 女性员工的数量**

```bash
select count(*) from emp group by gender ;
select gender, count(*) from emp group by gender;
```

**2.根据性别分组，统计男性员工和女性员工的平均年龄**

```bash
select gender, avg(age) from emp gruop by gender;
```

**3.查询年龄小于 45 的员工，并根据工作地址分组，获取员工数量大于等于 3 的工作地址**

```bash
select workaddress, count(*) from emp where age < 45 group by workaddress having count(*) >= 3;
```

#### **5.排序查询（ORDER BY）**


**1.根据年龄对公司的员工进行升序排序**

```bash
select * from emp order by age asc;
```

**2.根据入职时间，对员工进行降序排序**

```bash
select * from emp order by entrydate desc;
```

**3.根据年龄对公司员工进行升序排序，年龄相同，再按照入职时间进行降序排序**

```bash
select * from emp order by age asc, entrydate desc;
```

#### **6.分页查询（LIMIT）**


**1.查询第一页员工数据，每页展示 10 条记录**

```bash
select * from emp limit 0, 10;
```

**2.查询第二页员工数据，每页展示 10 条记录 **

```bash
select * from emp limit 10, 10;
```



#### 7.DQL语句执行顺序


### 4.DCL

DCL（Data Control Language，数据控制语言），用来管理数据库用户、控制数据库的访问权限。



#### 1.用户管理


**注意：主机名可以使用 % 通配。**

#### 2.权限控制



## 二、函数

函数是指一段可以直接被另一段程序调用的程序或代码。

### 1.字符串函数


 由于业务需求变更，企业员工的工号，统一为5位数，目前不足5位数的全部在前面补0

```bash
update emp set workno = lpad(workno, 5, '0');
```

### 2.数值函数


通过数据库的函数，生成一个六位数的随机验证码。

```bash
select rand()*1000000;
select round(rand()*1000000, 0);
select lpad(round(rand()*1000000, 0),6, '0');
```

### 3.日期函数


### 4.流程函数


查询 emp 表的员工姓名和工作地址（北京/上海->>> 一线城市， 其它->>>>二线城市）

```bash
select name, （case workaddress when '北京' then '一线城市' when '上海' then '一线城市' else '二线城市' end） as '工作地址' from emp;
```

统计班级各个学员的成绩，展示规则：>=85,展示优秀，>=60展示及格，否则，展示不合格。




## 三、约束

约束是作用于表中字段上的规则，用于限制存储在表中的数据。保证数据库中数据的正确、有效性和完整性。


**注意：约束是作用于表中字段上的，可以在创建表/修改表的时候添加约束**

### 1.约束演示


```bash
create table user (
	id int primary key auto_increment,
  name varchar(10) not null unique,
  age int check (age > 0 && age <= 120),
  status char(1) default '1',
  gender char(1),
) comment '用户表';
```

### 2.外键约束

外键用来让两张表的数据之间建立连接，从而保证数据的一致性和完整性。


**注意：目前上述的两张表，在数据库层面，并未建立外键关联，所以是无法保证数据的一致性和完整性的**





## 四、多表查询

### 1.多表关系








**在任意一方加入外键，关联另外一方的主键，并且设置外键为唯一的(UNIQUE)**


### 2.多表查询概述


```bash
select * from emp, dept where emp.dept_id = dept.id;
```


### 3.内连接




### 4.外连接






### 5.自连接




### 6.联合查询



**会出现重复结果， 可以直接删除 all  **


### 7.子查询


根据子查询位置，分为：WHERE之后、FROM之后、SELECT之后。

#### 标量子查询





#### 列子查询







#### 行子查询


#### 表子查询




## 五、事务

事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。典型案例是银行转账。


**注意⚠️：默认MySQL的事务是自动提交的，也就是说，当执行一条DML语句，MySQL会立即隐式的提交事务。**

### 1.事务操作


```mysql
SELECT @@autocommit;

# @@autocommit = 1 : 自动提交；
# 控制事务，将 @@autocommit 设置为 0 ；当前语句不会直接提交，而是等待 COMMIT 指令


select @@autocommit;
set @@autocommit = 0;

# 1.查询张三账户余额
select * from account where name = '张三';
# 2.将张三账户余额-1000
update account set money = money - 1000 where name = '张三';
# 3.将李四账户余额+1000
update account set money = money + 1000 where name = '张三';

# 提交事务
commit;
```








### 2.事务四大特性


### 3.并发事务问题


### 4.事务隔离级别



**SESSION 仅仅设置当前会话的的级别，GLOBAL 设置为全部的**

  `别担心，有一天我们地球的光会到达遥远的星系，在每个星系我们都会再次年轻，我们将永远在一起。`
