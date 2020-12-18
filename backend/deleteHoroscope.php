<?php
session_start();

if (isset($_SERVER["REQUEST_METHOD"])) {
if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
    if(isset($_SESSION['horoscope'])) {
        unset($_SESSION['horoscope']);
        echo "true";
    } 
        else{
            echo "false";
        }
    }   else {
        echo "false";
        
    }
}    

?>

