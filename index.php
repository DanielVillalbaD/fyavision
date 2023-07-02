<?php
    require_once "./config/ini.php";
    $translate = new TranslationController('es');
    $translations = $translate->getTranslations();
    global $root;
    $pageData = new BasicData($translations["MetaDataResource"]["titleHome"]);
    global $core;
?>
<!DOCTYPE html>
<html lang="<?=$translate->currentLang?>">
<head>
    <?php 
        echo $pageData->metaTagsElement;
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