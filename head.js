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

	
	
}
