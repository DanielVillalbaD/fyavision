<?php
    global $host;
    global $root;
?>
<div class="card-container">
    <div class="wrapper">
    <div class="home general-padding"> 
        <header>
            <section class="slider">
                <div id="slide_a">
                    <picture class="bg">
                        <source
                            type="image/avif"
                            srcset="<?=$host?>/app/assets/img/blue.avif"
                        />
                        <source
                            type="image/webp"
                            srcset="<?=$host?>/app/assets/img/blue.webp"
                        />
                        <img
                            src="<?=$host?>/app/assets/img/blue.jpg"
                            alt="Gafas modernas mujer fya vision"
                            decoding="async"
                            width="1920"
                            height="1200"
                        />
                    </picture>
                    <div id="abg"></div>
                    <picture>
                        <source
                            type="image/avif"
                            srcset="<?=$host?>/app/assets/img/mujer2.avif"
                        />
                        <source
                            type="image/webp"
                            srcset="<?=$host?>/app/assets/img/mujer2.webp"
                        />
                        <img
                            src="<?=$host?>/app/assets/img/mujer2.png"
                            alt="Gafas modernas mujer fya vision"
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
                </div>
            </section>
            
            <section class="cubeMenu">
                <nav id="ccubes">
                <div class="cube">
                    <div class="top">5</div><div class="front">1</div><div class="back">3</div><div class="right">2</div><div class="left">4</div><div class="bottom">6</div>
                </div>
                </nav>
            </section>

            <div class="lmenu"></div>
            <div class="logo">
                <span class="fya"><span>F<small>&</small>A</span></span>
                <span class="vision">Vision</span>
            </div>
            <h1 class="title">Óptica a la vanguardia técnica en San Martín de la Vega</h1>

        </header>
        <!--
        <main>
            <section class="glass">
                <div class="card">
                    <span class="blocks">
                    Lorem ipsum dolosrjaljdñlsa jlksajfdñlsa fjsañlkj lkj ñlsakfdj ñlas.kjf ñlkj mñlaskjdlfsakjfdñl sajñlfjl.ak sjmlñesk jmfñlsadk jfñlsaf m
                </div>
            </section>
        </main>
-->
        <!--
        <div class="home-body">
            <img src="<?//=$host?>/app/assets/img/logo500.png">
            
        </div>
        <?php
            //require_once($_SERVER['DOCUMENT_ROOT']."/$root/app/components/form.php");
        ?>  
        -->
    </div>
</div>