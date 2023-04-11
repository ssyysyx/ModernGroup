<?php
	 include_once ("inc/auth.inc.php");
	 session_start();
	 include_once("inc/flow_engine2.0/inc/engine/TFlowEngine.php");
	 //获取流程中心数据
	 $runData = \engine\TFlowEngine::getRunData($FLOW_ID,$RUN_ID);
	 $array=array(
					'create_man'		=>$runData['begin_user'],
					'create_man_text' 	=>$runData['data_m517'],
					'create_time' 		=>time(),
					'update_man' 		=>$runData['begin_user'],
					'update_man_text' 	=>$runData['data_m517'],
					'update_time' 		=>time(),
					'field1' 			=>$runData['id'],
					'field2' 			=>$runData['data_m516'],
					'deleted'			=>0,

	);
	
	$keyStr = '';//键
	$valStr = '';//值
	foreach($array as $key =>$val){
		$keyStr .=$key.',';
		$valStr .="'{$val}',";
	}
	$keyStr = substr($keyStr,0,-1);
	$valStr = substr($valStr,0,-1);
	
	$insert = "insert into CRM_MODULE_3({$keyStr})values({$valStr})";
	$source = exequery(TD::conn(),$insert);
?>