# memory-m

这是一个管理碎片化记忆知识点的应用。

![](http://otoibqemc.bkt.clouddn.com/Snip20180101_1.png)

目前有三个功能：

 - 管理日常常用链接
 - 管理日常任务
 - 管理碎片化记忆知识点。

所有记录的知识点会按照艾宾浩斯记忆曲线，自动recall到桌面，让你自然而然加深印象去记忆，一切就是那么简单。

文件分两个部分

- ss 文件夹 laravel框架搭建api及服务器基本，可以直接安装在你的虚拟主机
- vv 文件夹 vue-cli搭建前端webpack环境，build后直接的文件直接嵌入ss文件夹。 不过你也可以直打开vv 文件夹快速了解本项目。

你可以快速开始，下载文件夹，打开vv文件夹

然后

```
npm run dev
```
浏览器地址： 
localhost：9998

用户名：admin 密码：123456

你也可以完整的了解本项目。
在那之前还需要几个步骤：

1.配置好你的数据库，并在ss/config/database.php做配置
2.数据库迁移

```
php artisan migrate
```
3.使用tinker创建你的账户

```
App\User::create(['name'=>'admin','password'=>'123456'])
```
4.然后在vv文件夹中的main.js中注释掉mock，在api.js中设置你的域名或者本地地址

然后就可以在本地环境上使用本项目。当然如果觉得麻烦可以直接与我联系

wechat：Alt-ace 

email：740336406@qq.com
