<?php 
    //Debug errors
    ini_set('display errors', '1');
    error_reporting(E_ALL);
    //ENVIROMENT
    require_once "enviroment.php";
    // $env = new Enviroment(true);
    $env = new Enviroment(false);
    $host = $env->host;
    $root = $env->root;
    $isDevEnabled = $env->devModeEnabled;

    //TRANSLATIONS
    //require_once($_SERVER['DOCUMENT_ROOT']."/$root/app/controllers/translationController.php");

    //MODELS

    //CONTROLLER

    
    //COMMON MODULES
    require_once($_SERVER['DOCUMENT_ROOT']."/modulos/clases/core.php");
    $core = new core();
    $core->init(2);
?>