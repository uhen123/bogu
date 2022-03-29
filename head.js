window.onload = function (){
	// var xbVideo = '<video id="xbVideo" autoplay loop muted ></video>';
	// $("#xbBody").append(xbVideo);
	// var xbSource  = '<source id="xbSource" src="video/06096b63-be6b-4ccc-a7d5-d6b488be6974.mp4" type="audio/mp4" />';
	// $("#xbVideo").append(xbSource);
	
	//<li >
	//	<img style="float: left;margin-top: 5px;margin-right: 22px;width: 100px;height: 50px;"
	//	src="img/7a1f814add1ef784de4c172ec7c088cce7d518000ecd390a8f741181fd78e80fQzpcVXNlcnNc6LW15rWg5Y2aXEFwcERhdGFcUm9hbWluZ1xpRGluZ1RhbGtcOTcxMTk1ODY4X3YyXEltYWdlRmlsZXNcMTY0Nzg0ODAxNTUyOF9EMzhENTZGMi02QzJDLTQ4MmMtODU3Ri1CQjg4RTg2MjE3OEEucG5n.png" >
	//</li>
	//<li class="layui-nav-item layui-this" ><a href=""><p style="color: #000000;">首页</p></a></li>
	
	var xbDivHead = '<div id="xbDivHead"></div>';
	$("#xbBody").append(xbDivHead);
	var xbUlHead = '<ul id="xbUlHead" class="layui-nav"></ul>';
	$("#xbDivHead").append(xbUlHead);
	//首页
	var xbLiHead1 = '<li class="layui-nav-item layui-this" ><a href=""><p style="color: #000000;">首页</p></a></li>';
	$("#xbUlHead").append(xbLiHead1);
	//小学
	var xbLiHead2 = '<li class="layui-nav-item" id="xbLiHead2"></li>';
	$("#xbUlHead").append(xbLiHead2);
	var xbLiHead2Dl = '<a id="xbLiHead2Dl" href="javascript:;"></a>';
	$("#xbLiHead2").append(xbLiHead2Dl);
	var xbLiHead2P = '<p id="xbLiHead2P" style="color: #000000;">小学</p>';
	$("#xbLiHead2Dl").append(xbLiHead2P);
	var xbLIhead2Dl = '<dl class="layui-nav-child"><dd><a href="">小学教材</a></dd><dd><a href="">小学剑桥</a></dd><dd></dl>';
	$("#xbLiHead2").append(xbLIhead2Dl);
		//初中
	var xbLiHead3 = '<li class="layui-nav-item" id="xbLiHead3"></li>';
	$("#xbUlHead").append(xbLiHead3);
	var xbLiHead3Dl = '<a id="xbLiHead3Dl" href="javascript:;"></a>';
	$("#xbLiHead3").append(xbLiHead3Dl);
	var xbLiHead3P = '<p id="xbLiHead3P" style="color: #000000;">初中</p>';
	$("#xbLiHead3Dl").append(xbLiHead3P);
	var xbLIhead3Dl = '<dl id="xbLIhead3Dl" class="layui-nav-child"><dd><a href="">初中教材</a></dd><dd><a href="">初中剑桥</a></dd><dd><a href="">中考词汇</a></dd></dl>';
	$("#xbLiHead3").append(xbLIhead3Dl);
	//高中
	var xbLiHead4 = '<li class="layui-nav-item" id="xbLiHead4"></li>';
	$("#xbUlHead").append(xbLiHead4);
	var xbLiHead4Dl = '<a id="xbLiHead4Dl" href="javascript:;"></a>';
	$("#xbLiHead4").append(xbLiHead4Dl);
	var xbLiHead4P = '<p id="xbLiHead4P" style="color: #000000;">高中</p>';
	$("#xbLiHead4Dl").append(xbLiHead4P);
	var xbLIhead4Dl = '<dl class="layui-nav-child"><dd><a href="">高中教材</a></dd><dd><a href="">中职教材</a></dd><dd><a href="">高考词汇</a></dd></dl>';
	$("#xbLiHead4").append(xbLIhead4Dl);
	//大学
	var xbLiHead5 = '<li class="layui-nav-item" id="xbLiHead5"></li>';
	$("#xbUlHead").append(xbLiHead5);
	var xbLiHead5Dl = '<a id="xbLiHead5Dl" href="javascript:;"></a>';
	$("#xbLiHead5").append(xbLiHead5Dl);
	var xbLiHead5P = '<p id="xbLiHead5P" style="color: #000000;">大学</p>';
	$("#xbLiHead5Dl").append(xbLiHead5P);
	var xbLIhead5Dl = '<dl class="layui-nav-child">   <dd><a href="">四级</a></dd><dd><a href="">六级</a></dd><dd><a href="">考研</a></dd><dd><a href="">英专</a></dd><dd><a href="">高职</a></dd><dd><a href="">成人</a></dd><dd><a href="">同力申硕</a></dd><dd><a href="">BEC</a></dd><dd><a href="">PETS</a></dd></dl>';
	$("#xbLiHead5").append(xbLIhead5Dl);
	//留学
	var xbLiHead6 = '<li class="layui-nav-item" id="xbLiHead6"></li>';
	$("#xbUlHead").append(xbLiHead6);
	var xbLiHead6Dl = '<a id="xbLiHead6Dl" href="javascript:;"></a>';
	$("#xbLiHead6").append(xbLiHead6Dl);
	var xbLiHead6P = '<p id="xbLiHead6P" style="color: #000000;">留学</p>';
	$("#xbLiHead6Dl").append(xbLiHead6P);
	var xbLIhead6Dl = '<dl class="layui-nav-child"><dd><a href="">雅思核心</a></dd><dd><a href="">托福词汇</a></dd><dd><a href="">托福核心</a></dd><dd><a href="">GMAT词汇</a></dd><dd><a href="">GRE3000</a></dd><dd><a href="">SAT词汇</a></dd><dd><a href="">托业核心</a></dd></dl>';
	$("#xbLiHead6").append(xbLIhead6Dl);
	//其他
	var xbLiHead7 = '<li class="layui-nav-item" id="xbLiHead7"></li>';
	$("#xbUlHead").append(xbLiHead7);
	var xbLiHead7Dl = '<a id="xbLiHead7Dl" href="javascript:;"></a>';
	$("#xbLiHead7").append(xbLiHead7Dl);
	var xbLiHead7P = '<p id="xbLiHead7P" style="color: #000000;">其他</p>';
	$("#xbLiHead7Dl").append(xbLiHead7P);
	var xbLIhead7Dl = '<dl class="layui-nav-child"><dd><a href="">新概念</a></dd><dd><a href="">经济学人</a></dd></dl>';
	$("#xbLiHead7").append(xbLIhead7Dl);
	
	
}
