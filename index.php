<?
session_start();
header('Content-Type: text/html; charset=utf-8');



/*if ($_GET["req"] == 'home') {
	$page = 'home';
}*/

$page = $_GET['req'];






if ( file_exists('pages/all/'.$page.'.php') ) include 'pages/all/'.$page.'.php';
else if ( $_SESSION['ulogin'] == 1 and file_exists('pages/auth/'.$page.'.php') ) include 'pages/auth/'.$page.'.php';
else if ( $_SESSION['ulogin'] != 1 and file_exists('pages/guest/'.$page.'.php') ) include 'pages/guest/'.$page.'.php';
else exit('404!');

function top($title)
{
	echo "<!DOCTYPE html><html><head><title>".$title."</title><link rel='stylesheet' href='index.css'></head><body id='app'>";
};

function bottom()
{
	echo "</body></html>";
}



?>

