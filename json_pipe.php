<?php
header('Access-Control-Allow-Origin: *');
 
if (isset($_GET['url']) && preg_match('`^http://`', $_GET['url'])) {
   echo file_get_contents($_GET['url']);
}
//else if (isset($_GET['urlencode'])) {
//    echo file_get_contents(urldecode($_GET['url']));
//}
?>
