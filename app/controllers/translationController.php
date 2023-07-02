<?php 
    class TranslationController{
        private $enabledLangList;
        private $currentLang;
        
        public function __construct($lang){
            $this->enabledLangList = ['es', 'en', 'de', 'fr', 'it'];
            $this->currentLang = $lang;
        }

        public function __get($name){
            return $this->$name;
        }

        public function getTranslations(){
            global $root;
            require_once($_SERVER['DOCUMENT_ROOT']."/$root/app/literals/literalsResources.".$this->currentLang.".php");
            $translations = $translation;
            return $translations;
        }
    }
?>