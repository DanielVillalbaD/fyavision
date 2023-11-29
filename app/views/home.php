<?php
    global $host;
    global $root;
?>
<div class="card-container">
    <div class="wrapper">
    <div class="home general-padding"> 
        <header>
            <section class="slider">
                <div>
                    <picture class="bg" id="p1">
                        <source
                            type="image/avif"
                            srcset="<?=$host?>/app/assets/img/fondo-wam800.avif"
                        />
                        <source
                            type="image/webp"
                            srcset="<?=$host?>/app/assets/img/fondo-wam800.webp"
                        />
                        <img
                            src="<?=$host?>/app/assets/img/fondo-wam800.jpg"
                            alt="Gafas modernas mujer fya vision"
                            decoding="async"
                            width="1920"
                            height="1200"
                        />
                    </picture>
                    <picture class="bg" id="p2">
                        <source
                            type="image/avif"
                            srcset="<?=$host?>/app/assets/img/fondo-vision.avif"
                        />
                        <source
                            type="image/webp"
                            srcset="<?=$host?>/app/assets/img/fondo-vision.webp"
                        />
                        <img
                            src="<?=$host?>/app/assets/img/fondo-vision.jpg"
                            alt="Gafas modernas mujer fya vision"
                            decoding="async"
                            width="1920"
                            height="1200"
                            loading="lazy"
                        />
                    </picture>
                    <div id="abg"></div>
                    <picture id="sp1">
                        <source
                            type="image/avif"
                            srcset="<?=$host?>/app/assets/img/wam800.avif"
                        />
                        <source
                            type="image/webp"
                            srcset="<?=$host?>/app/assets/img/wam800.webp"
                        />
                        <img
                            src="<?=$host?>/app/assets/img/wam800.png"
                            alt="Equipo optometría, óptica san martín de la vega"
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
                    <picture id="sp2">
                        <source
                            type="image/avif"
                            srcset="<?=$host?>/app/assets/img/vision.avif"
                        />
                        <source
                            type="image/webp"
                            srcset="<?=$host?>/app/assets/img/vision.webp"
                        />
                        <img
                            src="<?=$host?>/app/assets/img/vision.png"
                            alt="Equipo optometría, óptica san martín de la vega"
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
                </div>
            </section>
            <nav class="cubeMenu">
                <div id="ccubes">
                    <div class="cube">
                        <div class="top">4</div><div class="front" aria-label="iniciar presentación"><span></span></div><div class="back">2</div><div class="right">1</div><div class="left">3</div><div class="bottom">5</div>
                    </div>
                </div>
            </nav>

            <div class="lmenu"></div>
            <div class="logo">
                <span class="fya"><span>F<small>&</small>A</span></span>
                <span class="vision">Vision</span>
            </div>
            <h1 class="title">Óptica a la vanguardia técnica en San Martín de la Vega</h1>

        </header>
        <main>
            <section class="glass" id="right">
                <div class="container">
                    <div class="card">
                        <p class="fp"><span>7</span><span>medidas en tan solo 90 segundos y sin molestias, realizaremos un preciso análisis de tu fisiología ocular.</span></p>
                        <p>Nuestra óptica <strong>F<small>&</small>A Vision</strong> pone a San Martín de la Vega a la vanguardia en la detección, evaluación y seguimiento de los diferentes problemas de salud visual de nuestros vecinos gracias a la inversión en el equipo más avanzado, entre ellos, el aberrómetro de frente de onda WAM800.</p>
                        <p>Entre otras funciones, este equipo brinda una excelente solución para:</p>
                        <ul>
                            <li>La detección y seguimiento de la glaucoma</li>
                            <li>La detección de cataratas</li>
                            <li>El control fisiológico de la miopía</li>
                            <li>La simulación de tu vista</li>
                            <li>La evaluación de la vista cansada y de cerca</li>
                        </ul>
                    </div>
                    <div class="index" aria-label="Paso 1, fisiologia ocular"><span>1</span><h2><strong>FISIOLOGÍA</strong><br/>WAM800</h2></div> 
                    <button class="close" aria-label="cerrar">&#10005;</button>
                    <button class="next" aria-label="siguiente paso">&#10230;</button>
                </div>
            </section>
            <section class="glass" id="back">
                <div class="container">
                    <div class="card">
                    <p class="fp"><span>0.01</span><span>dioptrías de sensibilidad en tu graduación gracias al foróptero VISION-R 800</span></p>
                        <p>Este equipo ha venido para revolucionar la optometría, no solo por su sensibilidad en tu graduación, que logra gracias a un sistema de refracción de lente líquida, además nos permite hacer pequeños ajustes de potencia durante el examen, lo que reduce significativamente el tiempo empleado en la graduación y reduce, por tanto, la fatiga visual de nuestros pacientes.</p>
                        <p>De poco serviría tanta precisión si no contásemos con un laboratorio de vanguardia en la fabricación de lentes con capacidad de afinamiento de 0.01 dioptrías en alta calidad.</p>
                        <p>Todo esto se traduce en <strong>una visión más nítida</strong>.</p>
                    </div>
                    <div class="index" aria-label="Paso 2, graduacion"><span>2</span><h2><strong>GRADUACIÓN</strong><br/>VISION-R 800</h2></div> 
                    <button class="close" aria-label="cerrar">&#10005;</button>
                    <button class="prev" aria-label="paso anterior">&#10229;</button>
                    <button class="next" aria-label="siguiente paso">&#10230;</button>
                </div>
            </section>
            <section class="glass" id="left">
                <div class="container">
                    <div class="card">
                        <p class="fp"><span>0.01</span><span>dioptrias de sensibilidad, gracias este sistema de refracción que proporciona una revolución tecnológica en el sector de la optometría.</span></p>
                        <p>Nuestra óptica <strong>F<small>&</small>A Vision</strong> pone a tu alcance el foróptero VISION-R 800 para hacer el examen visual más preciso del mercado.</p>
                        <p>De poco serviría tanta precisión si no contásemos con un laboratorio de vanguardia en la fabricación de lentes con capacidad de afinamiento de 0.01 dioptrías en alta calidad.</p>
                        <p>Todo esto se traduce en una visión más nítida de la que hasta ahora habías experimentado con tus lentes de contacto.</p>
                        <p>Si todavía no te hemos convencido, sigue leyendo, aún no hemos terminado...</p>
                    </div>
                    <div class="index" aria-label="Paso 3, fisiologia ocular"><span>3</span><h2><strong>FISIOLOGÍA</strong><br/>WAM800</h2></div> 
                    <button class="close" aria-label="cerrar">&#10005;</button>
                    <button class="prev" aria-label="paso anterior">&#10229;</button>
                    <button class="next" aria-label="siguiente paso">&#10230;</button>
                </div>
            </section>
            <section class="glass" id="top">
                <div class="container">
                    <div class="card">
                        <p class="fp"><span>7</span><span>medidas en tan solo 90 segundos y sin molestias, realizaremos un preciso análisis de tu fisiología ocular.</span></p>
                        <p>Nuestra óptica <strong>F<small>&</small>A Vision</strong> pone a San Martín de la Vega a la vanguardia en la detección, evaluación y seguimiento de los diferentes problemas de salud visual de nuestros vecinos gracias a la inversión en el equipo más avanzado, entre ellos, el aberrómetro de frente de onda WAM800.</p>
                        <p>Entre otras funciones, este equipo brinda una excelente solución para:</p>
                        <ul>
                            <li>La detección y seguimiento de la glaucoma</li>
                            <li>La detección de cataratas</li>
                            <li>El control fisiológico de la miopía</li>
                            <li>La simulación de tu vista</li>
                            <li>La evaluación de la vista cansada y de cerca</li>
                        </ul>
                    </div>
                    <div class="index" aria-label="Paso 3, fisiologia ocular"><span>4</span><h2><strong>FISIOLOGÍA</strong><br/>WAM800</h2></div> 
                    <button class="close" aria-label="cerrar">&#10005;</button>
                    <button class="prev" aria-label="paso anterior">&#10229;</button>
                    <button class="next" aria-label="siguiente paso">&#10230;</button>
                </div>
            </section>
            <section class="glass" id="bottom">
                <div class="container">
                    <div class="card">
                        <p class="fp"><span>7</span><span>medidas en tan solo 90 segundos y sin molestias, realizaremos un preciso análisis de tu fisiología ocular.</span></p>
                        <p>Nuestra óptica <strong>F<small>&</small>A Vision</strong> pone a San Martín de la Vega a la vanguardia en la detección, evaluación y seguimiento de los diferentes problemas de salud visual de nuestros vecinos gracias a la inversión en el equipo más avanzado, entre ellos, el aberrómetro de frente de onda WAM800.</p>
                        <p>Entre otras funciones, este equipo brinda una excelente solución para:</p>
                        <ul>
                            <li>La detección y seguimiento de la glaucoma</li>
                            <li>La detección de cataratas</li>
                            <li>El control fisiológico de la miopía</li>
                            <li>La simulación de tu vista</li>
                            <li>La evaluación de la vista cansada y de cerca</li>
                        </ul>
                    </div>
                    <div class="index" aria-label="Paso 3, fisiologia ocular"><span>5</span><h2><strong>FISIOLOGÍA</strong><br/>WAM800</h2></div> 
                    <button class="close" aria-label="cerrar">&#10005;</button>
                    <button class="prev" aria-label="paso anterior">&#10229;</button>
                    <button class="next" aria-label="siguiente paso">&#10230;</button>
                </div>
            </section>
        </main>
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