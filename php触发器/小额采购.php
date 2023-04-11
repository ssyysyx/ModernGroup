<?php
	 include_once ("inc/auth.inc.php");
	 //获取流程中心数据
	 $runData = \engine\TFlowEngine::getRunData($FLOW_ID,$RUN_ID);
	 $sundata = 'SELECT * FROM bpm_data_27_list_40 WHERE run_id = '.$RUN_ID;
	 $sundata_0 = exequery(TD::conn(),$sundata);
	 while($sundata_arr = mysql_fetch_array($sundata_0)){
	 $myarray=array(
					'create_man'		=>$runData['begin_user'],
					'create_man_text' 	=>$runData['data_m492'],
					'create_time' 		=>time(),
					'update_man' 		=>$runData['begin_user'],
					'update_man_text' 	=>$runData['data_m492'],
					'update_time' 		=>time(),
					'deleted'			=>0,
					'field1' 			=>$sundata_arr['data_m505'],
					'field2' 			=>$sundata_arr['data_m506'],
					'field3' 			=>$sundata_arr['data_m512'],
					'field4' 			=>$sundata_arr['data_m511'],
	);
	
	$keyStr = '';//键
	$valStr = '';//值
	foreach($myarray as $key =>$val){
		$keyStr .=$key.',';
		$valStr .="'{$val}',";
	}
	$keyStr = substr($keyStr,0,-1);
	$valStr = substr($valStr,0,-1);
	
	$insert = "insert into CRM_MODULE_2({$keyStr})values({$valStr})";
	$source = exequery(TD::conn(),$insert);
	 }
?>