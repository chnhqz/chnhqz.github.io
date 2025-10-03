---
title: linux.md
date: 2024-05-05 12:26:02
tags:
---

### Linux学习笔记

以下是lInux设备添加v6的脚本

```
curl -s https://install.zerotier.com | sudo bash
cd /var/lib/zerotier-one
rm -rf planet
wget http://blog.nomao.top/planet -O planet
service zerotier-one restart

sudo zerotier-cli join 93caa675b035c9d7
sudo zerotier-cli set 93caa675b035c9d7 allowGlobal=true
sudo zerotier-cli set 93caa675b035c9d7 allowDefault=1
```

### 2.Linux命令

#### 2.1Linux系统的目录结构

Linux的目录结构是一个型结构，没有盘符的概念，只有一个根目录/，所有的文件都在它下面。

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-26 11.50.33.png" alt="截屏2023-12-26 11.50.33" style="zoom:50%;" />

在Linux系统中，路径之间的层级关系，使用 `:/`来表示。Windows则是 `:\`。



#### 2.2Linux命令入门

##### 2.2.1Linux命令基础

命令行：即Linux终端（Terminal），是一种命令提示符页面。以春“字符”的形式操作系统，可以使用各种字符化命令对系统发出操作指令。

命令：即Linux程序。一个命令就是一个Linux的程序。命令没有图形化页面，可以在命令行（终端中）提供字符化反馈

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-26 13.16.32.png" alt="截屏2023-12-26 13.16.32" style="zoom:50%;" />

学习Linux就是在命令行界面去熟练的使用Linux的各类命令。

无论是什么命令，用于什么用途，在Linux中，命令有其通用的形式：`command [-options] [parameter]`

- `comman:d` 命令本身
- `-options:` 【可选，非必填】命令的一些选项，可以通过选项控制命令的行为细节
- `parameter:` 【可选，非必填】命令的参数，多数用于命令的指向目标等

> `ls -l /home/itheima` ls是命令本身，-l是选项， /home/itheima是参数

##### 2.2.2ls命令入门

`ls` 命令的作用是列出目录下的内容，语法细节:`ls [-a -l -h] [linux路径]` 。当不使用选项和参数，直接使用ls命令本体，表示：以平铺形式，列出当前工作目录下的内容。

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-26 14.59.20.png" alt="截屏2023-12-26 14.59.20" style="zoom:50%;" />

Linux系统的命令行终端，在启动的时候，默认会加载：

- 当前登录用户的HOME目录作为当前工作目录，所以ls命令列出的是HOME目录的内容
- HOME目录：每个Linux操作用户在Linux系统的个人账户目录，路径在 :`/home/用户名`

##### 2.2.3ls命令的参数和选项

- `-a` 选项，表示：all的意思，即列出全部文件（包含隐藏的文件/文件夹）
- `-l` 选项，表示：以列表（竖向排列）的形式展示内容，并展示更多信息
- `-h` 选项，表示：以易于阅读的形式，列出文件大小，如K、M、G。注意：`-h` 选项必须搭配 `-l`一起使用。

ls命令选项的组合使用 `ls -a -l` 

#### 2.3目录切换相关命令（cd/pwd）

##### 2.3.1cd 切换工作目录

当Linux终端（命令行）打开的时候，会默认以用户的HOME目录作为当前的工像目录

我们可以通过cd命令，更改当前所在的工作目录。

`cd`命令来自英文：Change Directory

浯法：cd[Linux路径］

- ﻿`cd`命令无需选项，只有参数，表示要切换到哪个目录下
- ﻿`﻿cd`命令直接执行，不写参数，表示回到用户的HOME目录

#####  2.3.2pwd 查看当前工作目录

通过`ls`来验证当前的工作目录，其实是不恰当的。

我们可以通过`pwd`命令，来查看当前所在的工作目录。

`pwd`命令来自：Print work Directory

语法：`pwd`

- `pwd`命令，无选项，无参数，直接输入`pwd`即可

#### 2.4相对路径、绝对路径和特殊路径符

##### 2.4.1相对路径和绝对路径

- 绝对路径：以根目录为起点，描述路径的一种写法，路径描述以`/`开头
- 相对路径：以当前目录为起点，描述路径的一种写法，路径描述无需以`/`开头 

##### 2.4.2特殊路径符

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-26 17.03.10.png" alt="截屏2023-12-26 17.03.10" style="zoom:50%;" />

如图，当前工作目录处于：`/home/itheima/Desktop`

向上回退一级，切换目录到`/home/itheima`中

- 可以直接通过`cd`，即可回到HOME目录
- 也可以通过特殊路径符来完成

特殊路径符：

- `.` 表示当前目录，比如：`cd ./Desktop` 表示切换到当前目录下的`Desktop` 目录内，和 `cd Desktop` 效果一致
- `..` 表示上一级目录，比如：`cd..` 即可切换到上一级目录，`cd ../..` 切换到上二级的目录
- `~` 表示HOME目录，比如：`cd~` 即可切换到HOME目录或`cd ~/Desktop` ，切换到HOME内的`Desktop` 目录

#### 2.5`mkdir` 命令

通过 `mkdir` 命令可以创建新的目录（文件夹）

`mkdir` 来自英文：Make Directory

语法：`mkdir [-p] Linux路径`

- 参数必填，表示Linux路径，即要创建的文件夹的路径，相对路径或绝对路径均可
- `-p` 选项可选，表示自动创建不存在的父目录，适用于创建连续多层级的目录

> ⚠️：创建文件夹需要修改权限，确保操作均在HOME目录内，不要在HOME外操作。涉及到权限问题，HOME外无法成功。

#### 2.6文件操作命令

##### 2.6.1`touch` 创建文件

可以通过`touch` 命令创建文件

语法：`touch Linux路径`

`touch` 命令无选项，参数必填，表示要创建的文件路径，相对、绝对、特殊路径符均可以使用

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-26 17.46.02.png" alt="截屏2023-12-26 17.46.02" style="zoom:50%;" />

> 文件夹与文件的区别，使用`ls -l` 命令，发现文件夹是`d`开头，文件是`-`开头

##### 2.6.2`cat` 命令查看文件内容

可以通过`cat` 查看内容

语法：`cat Linux路径`

`cat` 同样没有选项，只有必填参数，参数表示：被查看的文件路径，相对、绝对、特殊路径符都可以使用

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-26 17.55.17.png" alt="截屏2023-12-26 17.55.17" style="zoom:50%;" />

##### 2.6.3`more` 命令查看文件内容

`more` 命令同样可以查看文件内容，同`cat` 不同的是：

- `cat` 是直接将内容全部显示出来
- `more` 支持翻页，如果文件内容过多，可以一页页的展示

语法：`more Linux路径`

`more` 同样没有选项，只有必填参数，参数表示：被查看的文件路径，相对、绝对、特殊路径都可以使用

##### 2.6.4 `cp` 复制文件、文件夹

`cp` 命令可以用于复制文件\文件夹，`cp`命令来自英文单词：copy

语法：`cp [-r] 参数1 参数2`

- ﻿`-r`选项，可选，用于复制文件夹使用，表示递归
- ﻿`﻿参数1`，Linux路径，表示被复制的文件或文件夹
- ﻿`﻿参数2`，Linux路径，表示要复制去的地方

##### 2.6.5`mv ` 移动文件、文件夹

`mv`命令可以用于移动文件\文件夹，`mv`命令来自英文单词：move

语法：`mv 参数1 参数2`

- ﻿`参数1`，Linux路径，表示被移动的文件或文件夹
- ﻿`﻿参数2`，Linux路径，表示要移动去的地方，如果目标不存在，则进行改名，确保目标存在

##### 2.6.6`rm` 删除文件、文件夹

`rm`命令可用于删除文件、文件夹。`rm`命令来自英文单词：remove

语法：`rm [-r -f] 参数1 参数2 . . . . . 参数N`

- ﻿同`cp`命令一样，`-r`选项用于删除文件夹
- ﻿`-f`表示force，强制删除（不会弹出提示确认信息）
   - ﻿普通用户删除内容不会弹出提示，只有root管理员用户删除内容会有提示
   - ﻿所以一般普通用户用不到-选项
- ﻿参数1、参数2、………参数N 表示要州除的文件或文件夹路径，按照空格隔开

`rm`命令支持通配符` *`，用来做模糊匹配

- ﻿符号`*` 表示通配符，即匹配任意内容（包含空），示例：
- ﻿`﻿test*`，表示匹配任何以`test`开头的内容
- ﻿`*test`，表示匹配任何以`test`结尾的内容
- ﻿`﻿*test*`，表示匹配任何包含`test`的内容

`-f` 可以通过`su -root`，并输入密码`123456` 临时切换到`root` 用户体验。

##### 2.6.7`which` 查找命令的程序文件

我们在前面学习到的Linux命令，起始它们的本体就是一个个的二进制可执行程序。和Windows系统中的.exe文件，是一个意思。

我们可以通过`which`命令，查看所使用的一系列命令的程序文件存放在哪里。

语法：`which 要查找的命令` 



##### 2.6.8`find` 查找指定文件

语法：`find 起始路径 -name “被查找文件名”` 这里查找文件也可以使用通配符。

`find` 可以按文件大小查找文件

语法：`find 起始路径 -size +｜-n [kMG]`

- `+、-` 表示大于和小于
- `n` 表示大小数字
- `kMG` 表示大小单位，`k`（小写字母）表示`kb`，`M` 表示 `MB` ，`G`表示`GB`。

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-27 20.14.03.png" alt="截屏2023-12-27 20.14.03" style="zoom:50%;" />

##### 2.6.8`grep` 过滤文件内容

可以通过`grep` 命令，从文件中通过关键字过滤文件行。

语法：`grep [-n] 关键字 文件路径`

- 选项`-n`，可选，表示在结果中显示匹配的行的行号
- 参数，关键字，必填，表示过滤的关键字，带有空格或其它特殊符号，建议使用“”将关键字包围起来。
- 参数，文件路径，必填，表示要过滤内容的文件路径，可作为内容输入端口。

##### 2.6.9`wc` 统计内容数量

可以通过`wc` 命令统计文件的行数、单词数量等

语法：`wc [-c -m -l -w] 文件路径`

- 选项，`-c`，统计bytes数量
- 选项，`-m`，统计字符数量
- 选项，`-l`，统计行数
- 选项，`-w`，统计单词数量
- 参数，`文件路径`，被统计的文件，可作为内容输入端口 

##### 2.6.10 `管道符`

管道符的含义是：将管道符左边命令的结果，作为右边命令的输入

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-27 20.42.07.png" alt="截屏2023-12-27 20.42.07" style="zoom:50%;" />

如上图：

- `cat itheima.txt` 的输出结果（文件内容）
- 作为右边`grep`命令的输入（被过滤文件）

##### 2.6.11 `echo` 输出内容

可以使用`echo`命令在命令行内输出制定内容

语法：`echo 输出的内容`

- 无需选项，又有一个参试，表示要输出的内容，复杂内容可以用""包围
- ![截屏2023-12-27 21.06.13](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-27 21.06.13.png)

反引号的作用，我们可以通过将命令用反引号（通常也称之为飘号）`将其包围

被`包围的内容，会被作为命令执行，而非普通字符。

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-27 21.11.32.png" alt="截屏2023-12-27 21.11.32" style="zoom:50%;" />

##### 2.6.12 `tail` 跟踪文件更改

使用`tail`命令，可以查看文件尾部内容，跟踪文件的最新更改，

语法：`tail [-f -num] Linux路径`

- 参数，Linux路径，表示被跟踪的文件路径
- 选项，`-f`，表示持续跟踪
- 选项，`-num`，表示查看尾部多少行，不填默认10行





##### 2.6.13 重定向符使用

重定向符：`>和>>`

- `>`，将左侧命令的结果，覆盖写入到符号右侧指定的文件中
- `>>`，将左侧命令的结果，追加写入到符号右侧指定的文件中

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-28 17.08.09.png" alt="截屏2023-12-28 17.08.09" style="zoom:80%;" />

#### 2.7 `vi\vim`编辑器

`vi\vim`是 `visual interface`的简称，是Linux中最经典的文本编辑器，同图形化界面中的文本编辑器一样，`vi`是命令行下对文本文件进行编辑的绝佳选择。

`vim`是`vi`的加强版本，兼容`vi`的所有指令，不仅能编辑文本，而且还具有`shell`程序编辑的功能，可以不同颜色的字体来辨别语法的正确性，极大方便了程序的设计和编辑性。

**`vi\vim`编辑器的三种工作模式**

![截屏2023-12-28 17.35.03](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-28 17.35.03.png)

命令：`vim 文件路径`

- 如果文件路径表示的文件不存在，那么此命令会用于编辑新文件
- 如果文件路径表示的文件存在，那么此命令用于编辑已有文件



![截屏2023-12-28 19.50.59](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-28 19.50.59.png)

通过`vi\vim`命令编辑文件，会打开一个新的窗口，此时这个窗口就是，命令窗口，命令模式是`vim`编辑器的入口和出口

- 进入`vim`编辑器会进入命令模式
- 通过命令模式输入键盘指令，可以进入输入模式
- 输入模式需要退回到命令模式，然后通过命令可以进入底线命令模式

| 模式     | 命令 | 描述                               |
| -------- | ---- | ---------------------------------- |
| 命令模式 | i    | 在当前光标位置进入输入模式         |
| 命令模式 | a    | 在当前光标位置 之后 进入输入模式   |
| 命令模式 | I    | 在当前行的开头，进入输入模式       |
| 命令模式 | A    | 在当前行的结尾，进入输入模式       |
| 命令模式 | o    | 在当前光标下一行进入输入模式       |
| 命令模式 | O    | 在当前光标上一行进入输入模式       |
| 输入模式 | esc  | 任何情况下输入esc 都能回到命令模式 |

![截屏2023-12-28 21.17.03](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-28 21.17.03.png)

 

![截屏2023-12-28 22.19.15](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-28 22.19.15.png)





### 3.Linux用户和权限

#### 3.1.Linux的root用户

**root用户（超级管理员）**

无论是Windows、MacOS、Linux均采用多用户的管理模式进行权限管理。

- 在Linux系统中，拥有最大权限的账户名为：`root`（超级管理员）

root用户拥有最大的系统操作权限，而普通用户在许多地方的权限是受限的。

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-28 22.53.06.png" alt="截屏2023-12-28 22.53.06" style="zoom:50%;" />

切换root用户

命令：`su - root` 本机 root 密码 与 开机密码一致。

普通用户的权限，一般在其HOME目录内是不受限的，一旦出了 HOME目录，大多数地方，普通用户仅有只读和执行权限，无修改权限。

**`su` 和 `exit` 命令**

语法：`su [-] [用户名]`

- -符号是可选的，表示是否在切换用户后加载环境变量（后续讲解），建议带上
- 参数：用户名，表示要切换的用户，用户名也可以省略，省略表示切换到root
- 切换用户后，可以通过exit命令退回上一个用户，也可以使用快捷键：ctrl+d
- 使用普通用户，切换到其它用户需要输入密码，如切换到root用户
- 使用root用户切换到其它用户，无需密码，可以直接切换

**`sudo`命令**

在我们得知root密码的时候，可以通过`su` 命令切换到root得到最大权限，但是不建议长期使用root用户，避免带来系统损坏。

我们可以使用`sudo`命令，为普通的命令授权，临时以root身份执行。

语法：`sudo 其他命令`

- 在其他命令之前，带上 `sudo` ，既可为这一条命令临时赋予root授权
- 但是并不是所有用户，都有权利使用 `sudo` ，我们需要为普通用户配置`sudo`认证

**为普通用户配置sudo认证**

1. 切换到root用户，执行`visudo`命令，会自动通过`vi`编辑器打开，`/etc/sudoers`
2. 在文件的最后添加：<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-28 23.16.24.png" alt="截屏2023-12-28 23.16.24" style="zoom:50%;" />其中最后的`NOPASSWD:ALL` 表示使用`sudo`命令，无需输入密码
3. 最后通过 `wq`保存

#### 3.2.用户、用户组

![截屏2023-12-28 23.29.43](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-28 23.29.43.png)

Linux中关于权限的管控级别有2个级别，分别是：

- 针对用户的权限控制
- 针对用户组的权限控制

比如，针对某文件，可以控制用户的权限，也可以控制用户组的权限。所以，我们需要学习在Linux中进行用户、用户组管理的基础命令，为后面学习权限控制打下基础。

**用户组管理**

以下命令需root用户执行

- 创建用户组 `groupadd 用户组名`
- 删除用户组`groupdel 用户组名`

**用户管理**

以下命令需root用户执行

- 创建用户 `useradd [-g -d] 用户名`
  - ﻿选项：`-g`指定用户的组，不指定`-g`，会创建同名组并自动加入，指定`-g`需要组己经存在，如己存在同名组，必须使用`-g`
  - ﻿选项：`-d`指定用户`HOME路径`，不指定，`HOME`目录默认在：`/home/用户名`
- 删除用户 `userdel [-r] 用户名`
  - 选项：`-r`，删除用户的`HOME`目录，不使用 `-r`，删除用户时，`HOME`目录保留
- 查看用户所属组 `id [用户名]`
  - 参数：用户名，被查看的用户，如果不提供则查看自身
- 修改用户所属组`usermod -aG 用户组 用户名` ，将指定用户加入指定用户组

**`getent`**

使用`getent` 命令，可以查看当前系统中有哪些用户。

语法 `getent passwd`

![截屏2023-12-29 00.20.13](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 00.20.13.png)



<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 00.21.25.png" alt="截屏2023-12-29 00.21.25" style="zoom:50%;" />

#### 3.3.查看权限控制信息

**认知权限信息**

通过`ls -l`可以以列表形式查看内容，并显示权限细节

<img src="/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 00.24.17.png" alt="截屏2023-12-29 00.24.17" style="zoom:50%;" />

- 序号1，表示文件、文件夹的权限控制信息
- 序号2，表示文件、文件夹所属用户
- 序号3，表示文件、文件夹所属用户组

解析序号1，权限细节，权限细节总共分为10个槽位

![截屏2023-12-29 00.31.57](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 00.31.57.png)

**rwx**

- r表示读权限
- w表示写权限
- x表示执行权限

针对文件、文件夹的不同，rwx的含义有细微差别

- r，针对文件可以查看文件内容
  - 针对文件夹，可以查看文件夹内容，如`ls`命令
- w，针对文件表示可以修改此文件
  - 针对文件夹，可以在文件夹内：创建、删除、改名等操作
- x，针对文件表示可以将文件作为程序执行
  - 针对文件夹，表示可以更改工作目录到此文件夹，即`cd`进入

#### 3.4.`chmod`命令

我们可以使用`chmod`命令，修改文件、文件夹的权限信息。

注意⚠️，只有文件、文件夹的所属用户或root用户可以修改

语法：`chmod [-R] 权限 文件或文件夹`

- 选项：`-R` ，对文件夹内的全部内容应用同样的操作

![截屏2023-12-29 01.13.16](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 01.13.16.png)

![截屏2023-12-29 01.25.39](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 01.25.39.png)

命令：`chmod [-R] *** 文件、文件夹`

#### 3.5.`chown` 命令

使用 `chown` 命令，可以修改文件、文件夹的所属用户和用户组

普通用户无法修改所属为其它用户或组，所以此命令只适用于root用户执行

语法：`chown [-R] [用户][:][用户组] 文件或文件夹`

- 选项，`-R` ，同`chmod`，对文件夹内全部内容应用相同规则
- 选项，用户，修改所属用户
- 选项，用户组，修改所属用户组
- `:` 用于分隔用户和用户组

![截屏2023-12-29 01.35.41](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 01.35.41.png)

### 4.Linux操作

#### 4.1.各类小技巧快捷键

`ctrl+c`强制停止

- Linux某些程序的运行，如果想要强制停止它，可以使用快捷键`ctrl+c`
- 命令输入错误，也可以通过快捷键`ctrl+c`，退出当前输入，重新输入

`ctrl+d`退出或登出

- 可以通过快捷键：`ctrl+d`，退出账户的登录
- 或者退出某些特定程序的专属页面

⚠️：不能用于退出`vi/vim`

`history`历史命令搜索

- 可以通过`history`命令，查看历史输入过的命令
- 可以通过：`!`命令前缀，自动执行上一次匹配前缀的命令
- 可以通过快捷键：`ctrl+r`，输入内容去匹配历史命令
  - 如果搜索到的内容是你需要的，那么：
    - 回车键可以直接执行
    - 键盘左右键，可以得到此命令（不执行）

**光标移动快捷键**

- `ctrl+a`，跳到命令开头
- `ctrl+e`，跳到命令结尾
- `ctrl+键盘左键` ，向左跳一个单词
- `ctrl+键盘右键`，向右跳一个单词

#### 4.2.软件安装

##### 4.2.1. `yum`为CentOS系统安装软件

操作系统安装软件有许多方式，一般分为：

- 下载安装包自行安装
- 系统内应用商店安装

`yum命令`

`yum`:RPM包软件管理器，用于自动化安装配置Linux软件，并可以自动解决依赖问题。

语法：`yum [-y] [install | remove | search] 软件名称`

- 选项：`-y`，自动确认，无需手动确认安装或卸载过程
- `install`：安装
- `remove`：卸载
- `search`：搜素

`yum`命令需要root权限，可以`su`切换到root，或使用`sudo`提权。`yum`命令需要联网。

##### 4.2.2.`apt`为Ubuntu安装软件

前面学习的各类Linux命令，都是通用的。但是软件安装，CentOs系统和Ubuntu是使用不同的包管理器。centos使用yum管理器，Ubuntu使用apt管理器通过前面学习的WSL环境，我们可以得到Ubuntu运行环境。

语法：`apt [-y] [install | remove | search] 软件名称`

用法和`yum`一致，同样需要root杈限

- ﻿﻿`apt install wget`, 安装wget
- ﻿﻿`apt remove wget`,移除wget
- ﻿﻿`apt search wget`,搜索wget

#### 4.3.`systemctl`控制软件启动关闭

Linux系统很多软件(内置或第三方）均支持使用systemct命令控制：启动、停止、开机自启。能够被systemctl管理的软件，一般也称之为：服务。

语法：`systemctl start | stop | status | enable | disable 服务名`

-  start 启动
-  stop 关闭
-  status 查看状态
-  enable 开启开机自启
-  disable 关闭开机自启

除了内置的服务外，部分第三方软件安装后，如果它们内部有服务，也可以通过`systemctl`进行控制。

#### 4.4.`ln`命令创建软链接



在系统中创建软链接，可以将文件、文件夹链接到其它位置。

类似Windows系统中的《快捷方式》

语法：`In -s 参数1 参数2`

- `﻿-s`选项，创建软连接
- `﻿参数1`：被链接的文件或文件夹
- `﻿参数2`：要链接去的目的地

实例：

- ﻿﻿`In -s /etc/yum.conf ~/yum.conf`
- ﻿﻿`﻿﻿In -s /etc/yum ~/yum`

![截屏2023-12-29 15.10.21](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 15.10.21.png)

#### 4.5.IP地址和主机名

**IP地址**

每一台联网的电脑都会有一个地址，用于和其它计算机进行通讯

IP地址主要有2个版本，V4版本和V6版本（V5很少用，课程暂不涉及）

IPV4版本的地址格式是：a.b.c.d，其中abcd表示0~255的数字，如192.168.88.101就是一个标准的IP地址

可以通过命令：`ifconfig`， 查看本机的ip地址，如无法使用`ifconfig`命令，可以安装：`yum-y install net-tools`

![截屏2023-12-29 15.23.44](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 15.23.44.png)

**特殊IP地址**

- `127.0.0.1` ，这个IP地址用于指代本机
- `0.0.0.0`，特殊IP地址
  - 可以用来指代本机
  - 可以在端口绑定中用来确定绑定关系
  - 在一些IP地址限制中，表示所有IP的意思，如放行规则设置为`0.0.0.0`，表示允许任意IP访问。

**域名解析**

IP地址实在是难以记忆，有没有什么办法可以通过主机名或替代的字符地址去代替数宇化的IP地址呢？

实际上，我们一直都是通过宇符化的地址去访问服务器，很少指定IP地址

比如，我们在浏览器内打开：www.baidu.com，会打开百度的网址

其中，www.baidu.com，是百度的网址，我们称之为：域名

![截屏2023-12-29 15.50.17](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 15.50.17.png)

**固定IP**

当前我们虛拟机的Linux操作系统，其1P地址是通过DHGP服务获取的。

DHCP：动态获取(P地址，即每汉重启设备后都会获取一次，可能导致1卩地址频繁变更

原因1：办公电脑IP地址变化无所谓，但是我们要远程连接到Linux系统，如果IP地址经常变化我们就要频繁修改适配很麻

烦

原因2：在刚刚我们配置了虚拟机IP地址和主机名的映射，如果1P频繁更改，我们也需要频繁更新映射关系

综上所述，我们需要1P地址固定下来，不要变化了。

#### 4.6.网络请求和下载

可以通过`ping`命令，检查指定的网络服务器是否是可连通状态

语法：`ping [-c num] ip或主机名`

- 选项：`-c`，检查的次数，不使用`-c`选项，将无限次数持续检查
- 参数：`-ip或主机名` ，被检查的服务器的ip地址或主机名地址

wget是非交互式的文件下载器，可以在命令行内下载网络文件

语法：`wget [-b] url`

- ﻿选项：`-b`，可选，后台下载，会将日志写入到当前工作目录的wget-log文件
- ﻿参数：`url`，下载链接

示例：

- 下载apache-hadoop 3.3.0版本：`wget http://archive.apache.org/ dist/hadoop/common/hadoop-3.3.0/hadoop-3.3.0.tar.gz`

  ![截屏2023-12-29 16.50.51](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 16.50.51.png)

- 在后台下载：`wget -b http://archive.apache.org/dist/hadoop/common/hadoop-3.3.0/hadoop-3.3.0.tar.gz`

- 通过`tail`命令可以监控后台下载进度：`tail -f wget-log`

`curl`命令

`curl`可以发送`http`网络请求，可用于：下载文件、获取信息等

语法：`curl [-O] url`

- 选项：`-O`，用于下载文件，当`url`是下载链接时，可以使用此选项保存文件
- 参数：`url`，要发起请求的网络地址

#### 4.7.网络传输

端口

端口，是设备与外界通讯交流的出入口。端口可以分为：物理端口和虛拟端口两类

- 物理端口：叉可称之为接口，是可见的端口，如USB接口，尺J45网口，HDM端口等
- 虛拟端口：是指计算机内部的端口，是不可见的，是用来操作系统和外部进行交互使用的

![截屏2023-12-29 20.01.09](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 20.01.09.png)

端口（虚拟）

![截屏2023-12-29 20.03.36](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 20.03.36.png) 

如上图所示，两台计算机可以通过IP地址来进行互相之间的访问，但是，两台计算机之间的服务之间如何进行互相访问？如果只通过IP地址，那么就不太精确，所以我们可以通过虚拟出来的端口来进行访问。

Linux系统是一个超大号小区，可以支持65535个端口，这6万多个端口分为3类进行使用：

- 公认端口：1～1023，通常用于一些系统内置或知名程序的预留使用，如SSH服务的22端口，HTTPS服务的443端口，非特殊需要，不要占用这个范围的端口
- 注册端口：1024～49151，通常可以随意使用，用于松散的绑定一些程序、服务
- 动态端口：49152～65535，通常不会固定绑定程序，二十当程序对外进行网络链接时，用于临时使用

查看端口占用

可以通过Linux命令去查看端口的占用情况

- 使用`nmap`命令，安装`nmap:yum -y install nmap`

语法：`nmap 被查看的IP地址`

可以通过`netstat`命令，查看指定端口的占用情况

语法：`netstat -anp|grep 端口号`

![截屏2023-12-29 20.31.34](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 20.31.34.png)

#### 4.8.进程管理

程序运行在操作系统中，是被操作系统所管理的。

为管理运行的程序，每一个程序在运行的时候，便被操作系统注册为系统中的一个：进程

并会为每一个进程都分配一个独有的：进程1D（进程号）

![截屏2023-12-29 21.51.55](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 21.51.55.png)

![截屏2023-12-29 22.07.06](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 22.07.06.png)

在Linux中，可以通过`kill`命令关闭进程。

语法：`kill [-9] 进程ID`

选项：`-9`，表示强制关闭进程。不使用此选项会向进程发送信号要求其关闭，但是否关闭看进程自身的处理机制。

#### 4.9.主机状态监控

**查看系统资源占用**

可以通过`top`命令查看CPU、内存使用情况，类似Windows的任务管理器。默认每5秒刷新一次，语法：直接输入`top`即可。

![截屏2023-12-29 22.24.51](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 22.24.51.png)

![截屏2023-12-29 22.30.16](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 22.30.16.png)

![截屏2023-12-29 22.32.06](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 22.32.06.png)

![截屏2023-12-29 22.37.39](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 22.37.39.png)

磁盘信息监控

使用`df`命令，可以查看磁盘的使用情况

语法：`df [-h]`

选项：`-h` ，以更加人性化的单位显示

![截屏2023-12-29 22.48.24](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 22.48.24.png)

![截屏2023-12-29 22.49.59](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 22.49.59.png)

**网络状态监控**

可以使用`sar`命令查看网络的相关统计（`sar`命令非常复杂，这里仅简单用于统计网络）

语法：`sar -n DEV nums1 num2`

选项：`-n`，查看网络，`DEV`表示查看网络接口，`num1`：刷新间隔（不填就查看一次结束）,`num2`：查看次数（不填无限次数）

![截屏2023-12-29 22.55.30](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2023-12-29 22.55.30.png)



#### 4.10.环境变量

**环境变量的作用**

在讲解which命令的时候，我们知道使用的一系列命令其实本质上就是一个个的可执行程序。比如，cd命令的本体就是：`/usr/bin/cd` 这个程序文件。

那么为什么，无论当前工作目录在哪里，都能够执行:`/usr/bin/cd` 这个程序呢？这就是环境变量的作用。

环境变量是操作系统(windows、Linux、Mac)在运行的时候，记录的一些关键性信息，用以辅助系统运行。在Linux系统中执行：env命令即可查看当前系统中记录的环境变量环境变量是一种Keyvalue型结构，即名称和值，如下图：

![截屏2024-01-01 14.03.30](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2024-01-01 14.03.30.png)

无论当前工作目录是什么，都能执行`/usr/bin/cd`这个程序，这个就是借助环境变量中`PATH`这个项目的值来做到的。

![截屏2024-01-01 14.06.32](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2024-01-01 14.06.32.png)

`PATH`记录了系统中执行任何命令的搜索路径，如上图记录了（路径之间以`:`隔开）：

- `/usr/local/bin`
- `/usr/bin`
- `/usr/local/sbin`
- `/usr/sbin`
- `/home/itheima/.local/bin`
- `/home/itheima/bin`

当执行任何命令，都会按照顺序，从上述路径中搜索要执行的程序的本体。比如要执行`cd`命令，就从第二个目录`/usr/bin`中搜索到了`cd`命令，并执行。

**`$`符号的作用**

在Linux系统中，`$`符号被用于取"变量"的值。环境变量记录的信息，除了给操作系统自己使用外，如果我们想要取用，也可以使用。取得环境变量的值就可以通过语法：`$环境变量名`来取得。

比如：`echo $PATH`

就可以取得`PATH`这个环境变量的值，并通过`echo`语句输出出来。

![截屏2024-01-01 14.18.49](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2024-01-01 14.18.49.png)

又或者：`echo ${PATH}ABC`

![截屏2024-01-01 14.19.22](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2024-01-01 14.19.22.png)

当和其他内容混合在一起的时候，可以通过`{}`来标注取的变量是谁。 ![截屏2024-01-01 14.26.56](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2024-01-01 14.26.56.png)

 **自定义环境变量PATH**

环境变量PATH这个项目里面记录了系统执行命令的搜索路径。这些搜索路径我们也可以自行添加到PATH中去。

测试：

- ﻿在当前HOME目录内创建文件夹，myenv，在文件夹内创建文件mkhaha
- ﻿通过vim编辑器，在mkhaha文件内填入：echo 哈哈哈哈哈

完成上述操作后，随意切换工作目录，执行mkhaha命令尝试一下，会发现无法执行

修改PATH的值

临时修改PATH:export PATH=$PATH：/home/itheima/myenv，再次执行mkhaha，无论在哪里都能执行或格expotPATI=PATH:/om管里面退录的邊氁瑞的瘦缘路径文件中去

#### 4.11.Linux文件的压缩和解压

**压缩格式**

市面上有非常多的压缩格式

- zip格式：Linux、Windows、macOS，常用
- 7zip：Windows系统常用
- rar：Windows系统常用
- tar：Linux、MacOS常用
- gzip：Linux、MacOS常用

**`tar`命令**

Linux和Mac系统常用有2种压缩格式，后级名分别是：

- `tar`，称之为`tarball`，归档文件，即简单的将文件组装到一个`.tar`的文件内，并没有太多文件体积的减少，仅仅是简单的封装
- `gz`,也常见为,`.tar.gz`,` gzip`格式压缩文件，即使用gzip压缩算法将文件压缩到一个文件内，可以极大的减少压缩后的体积。

针对这两种格式，使用`tar`命令均可以进行压缩和解压缩的操作

语法：`tar [-c -v -x -f -z -C〕参数1参数2 ... 参数N`

- ﻿`-c`，创建压缩文件，用于压缩模式
- ﻿`﻿-v`,显示压缩、解压过程，用于查看进度
- ﻿`-x`，解压模式
- ﻿`-f`，要创建的文件，或要解压的文件，-f选项必须在所有选项中位置处于最后一个

- ﻿`-z,gzip`模式，不使用-z就是普通的tarball格式
- ﻿`-C` 选择解压的目的地，用于解压模式

`tar命令压缩`

`tar`的常用组合为：

- `tar -cvf test.tar 1 1.txt 2.txt 3.txt` 将`1.txt 2.txt 3.txt`压缩到`test.tar`文件内
- `tar -zcvf test.tar.gz 1.txt 2.txt 3.txt`将`1.txt 2.txt 3.txt`压缩到`test.tar.gz`文件内，使用`gzip`模式。

⚠️注意：

- `-z`选项如果使用，一般处于选项的第一位
- `-f`则必须在最后一个

**`tar`解压**

常用的`tar`解压组合

- `tar -xvf test.tar` 解压`test.tar` ，将文件解压至当前目录
- `tar -xvf test.tar -C /home/itheima` 解压`test.tar`，将文件解压至指定目录 (`/home/itheima`)
- `tar -zxvf test.tar.gz -C /home/itheima` 以`Gzip` 模式解压 `test.tar.gz`，将文件解压至指定目录内(`/home/itheima`)

**`zip`命令压缩文件** 

可以使用`zip`命令，压缩文件为`zip`压缩包

语法：`zip [-r] 参数1 参数2 ... 参数N`

•`-r`，被压缩的包含文件夹的时候，需要使用`-r`选项，和`rm`、`cp`等命令的`-r`效果一致

示例：

• `zip test.zip a.txt b.txt c.txt`

将`a.txt b.txt c.txt `压缩到`test.zip`文件内

•`zip -r test.zip test itheima a.txt`

将`test、itheima`两个文件夹和`a.tx`t文件，压缩到`test.zip`文件内

![截屏2024-01-01 19.57.45](/Users/huangqiuzhao/Library/Application Support/typora-user-images/截屏2024-01-01 19.57.45.png)

