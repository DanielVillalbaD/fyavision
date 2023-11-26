<?php
    require_once "./config/ini.php";
    global $root;
    global $core;
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <?php 
        $core->getLinkTag();
        require_once($_SERVER['DOCUMENT_ROOT']."/$root/app/components/head-links.php");
    ?>
    <style>
        <?php
            require_once($_SERVER['DOCUMENT_ROOT'].'/modulos/header/header.css');
        ?>
    </style>
</head>
<body>
    <?php 
        require_once($_SERVER['DOCUMENT_ROOT']."/$root/app/views/home.php");
        require_once($_SERVER['DOCUMENT_ROOT']."/$root/app/components/scripts.php");
    ?>
</body>
</html>