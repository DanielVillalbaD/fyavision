<?php

    class UserController {

        public static function saveUser(){
            try{
                $user = new User($_POST);
                $count_user = $user->checkUser();
                $count_user = intval($count_user['count(*)']);
                if($count_user > 0){
                    return ["error"=>"User already exists"];
                } else{
                    $user->saveUser();
                    return ["success" => "The user has been saved successfully"];
                }
            }catch( Exception $e ){
                $error = $e->getMessage();
                return ["error"=>$error];
            } 
        }
    }
?>