jQuery(function(){
	var sx=0;
	var pt=0;
	var yjfy=0;
	var maxyjfy=0;
	var jsfy=0;
	var lpjg=0;
    jQuery("[name='DATA_4']").on('blur',function(event){
		var a = jQuery(this).val();
		if (isNaN(a)){
			alert("单价应为数字！请重新输入！");
			jQuery(this).val("");
		}
		else{
			sx=a;
		}
		if (sx>0 && 10>=sx) {
			if (pt>3){
				alert("如果随行人数小于10位陪同人数不可超过3位");
				jQuery(this).val("");
			}
		}
		else if (sx>10){
			if (pt/sx>0.3){
				alert("如果随行人数大于10位陪同人数/随行人数<=0.3");
				jQuery(this).val("");
			}
		}
	});
    jQuery("[name='DATA_37']").on('blur',function(event){
		var b = jQuery(this).val();
		if (isNaN(b)){
			alert("单价应为数字！请重新输入！");
			jQuery(this).val("");
		}
		else{
			pt=b;
		}
		if (sx>0 && 10>=sx){
			if (pt>3){
				alert("如果随行人数小于10位陪同人数不可超过3位");
				jQuery(this).val("");
			}
		}
		else if (sx>10){
			if (pt/sx>0.3){
				alert("如果随行人数大于10位陪同人数/随行人数<=0.3");
				jQuery(this).val("");
			}
		}
	});	
    jQuery("[name='DATA_5']").on('blur',function(event){
		var c = jQuery(this).val();
		var selecta = document.getElementById("s1");
		var d = selecta.value;
		if (isNaN(c)){
			alert("预计费用应为数字！请重新输入！");
			jQuery(this).val("");
		}
		else{
			yjfy=c;
		}
		if (d=="商务接待"){
			var maxyjfy =500*(eval(sx)+eval(pt));
			if (yjfy>eval(maxyjfy)){
				alert("预计费用超出规定范围，不能超出"+maxyjfy);
				jQuery(this).val("");
			}
		}
		else {
			var maxyjfy =60*(eval(sx)+eval(pt));
			if (yjfy>eval(maxyjfy)){
				alert("预计费用超出规定范围，不能超出"+maxyjfy);
				jQuery(this).val("");
			}
		}
	});	
    jQuery("[name='DATA_14']").on('blur',function(event){
		var e = jQuery(this).val();
		if (isNaN(e)){
			alert("结算价格应为数字！请重新输入！");
			jQuery(this).val("");
		}
		else{
			jsfy=e;
		}
		if (jsfy>yjfy){
			alert("结算费用超出预计费用,请将结算费用修改为您的预计费用");
			jQuery(this).val("");
		}
	});	
    jQuery("[name='DATA_16']").on('blur',function(event){
		var f = jQuery(this).val();
		if (isNaN(f)){
			alert("礼品价应为数字！请重新输入！");
			jQuery(this).val("");
		}
		else{
			lpjg=f;
		}
		if (lpjg>300){
			alert("礼品价格不应超过300元");
			jQuery(this).val("");
		}
	});	
});