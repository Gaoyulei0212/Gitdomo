<?php
session_start();//启动session
$capt= $_SESSION["captcha"];//获得验证码
if(isset($_POST["submit"])) {//判断是否点击提交
	$user = $_POST["username"];
	$psw =md5( $_POST["password"]);
	$phone = $_POST["phone"];
	if ($user == "" || $psw == "" || $phone == "") {//用户名、密码、邮箱一旦有为空的，就刷新页面
		echo "<script>alert('please again!');history.go(-1);</script>";
	} else {
		if($_POST["captcha_u"]==$capt){
			$link = mysql_connect("127.0.0.1", "root", "123456");
			//3、设置访问字符集
			mysql_set_charset($link, "utf8");
			mysql_select_db($link,"tz");//选择tz数据库
			mysql_query($link,'set name gb2312');
			$sql="select username from user where username='$_POST[username]'";//在username当中寻找，判断是否已存在用户名
			$result=mysql_query($link,$sql);//执行sql语句
			$num=mysql_num_rows($result);//将执行完的结果用1或0表示
			if($num)//如果已经存在该用户$num为1
			{
				echo"<script>alert('username already exist');history.go(-1);</script>";
			}
			else{
				$sql_phone="select phone from user where phone='$_POST[phone]'";
				$result=mysql_query($link,$sql_phone);
				$num=mysql_num_rows($result);
				if($num){
					echo"<script>alert('phone already exist');history.go(-1);</script>";
				}else{
					$sql_insert="insert into user (username,password,phone) values ('$_POST[username]','$psw','$_POST[phone]')";
					$res_insert=mysql_query($link,$sql_insert);//执行sql语句将该用户的用户名、密码、邮箱存入数据库
					echo"<script>alert('OK');</script>";//弹出OK对话框
					echo "<script language='javascript'>window.location='login.html'</script>";//页面跳转
				}
			}
 
		}
		else{
			echo"<script>alert('captcha error!');history.go(-1);</script>";
		}
	}
}
else
{
	echo"<script>alert('error！');history.go(-1);</script>";
}