<?php
    class Enviroment {
        private $devModeEnabled;
        private $host;
        private $root;

        public function __construct( $mode ){
            $this->devModeEnabled = $mode;
            $this->root= 'fyavision';
            $this->host = 'https://'.$_SERVER['HTTP_HOST'].'/'.$this->root.'/';
        }

        public function __get($name){
            return $this->$name;
        }
    }
?>