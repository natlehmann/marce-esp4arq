


<!DOCTYPE HTML>

<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$para = 'info@espacio4arq.com.ar';
$titulo = 'ASUNTO DEL MENSAJE';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Mensaje:\n $mensaje";
?>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" type="text/css" href="style/style.css" />
<link rel="stylesheet" href="style/mobile.css" type="text/css"
	media="only screen and (max-width : 568px)" />
<link rel="stylesheet" href="style/mobile.css" type="text/css"
	media="only screen and (max-width : 792px) and (orientation : portrait)" />

<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/ajustesMobile.js"></script>
<script src="js/ajustesMobileContacto.js"></script>

<title>espacio4arq</title>
</head>
<body>
	<div id="contenedor">
		<div id="logoInt">
			<a href="home.htm"><img src="images/logo.jpg" alt="" width="188"
				height="69" border="0" /></a>
		</div>
		<div id="menu">
			<img src="images/arquitecturaIndex.jpg" alt="" width="106"
				height="18" />
			<ul class="mi-menu">
				<li><a href="que.htm">que</a></li>
				<li><a href="quienes.htm">quienes</a></li>
				<li><a href="como.htm">como</a></li>
				<li><a href="#">servicios</a>
					<ul>
						<li><a href="consultoria.htm">Consultor&iacute;a</a></li>
						<li><a href="space.htm">Space planning</a></li>
						<li><a href="imagen.htm">Imagen corporativa</a></li>
						<li><a href="proyecto.htm">Proyecto</a></li>
						<li><a href="gerenciamiento.htm">Gerenciamiento de obra</a></li>
						<li><a href="mudanzas.htm">Mudanzas Corporativas</a></li>
					</ul></li>
				<li><a href="galeria.htm">porfolio</a></li>
				<li><a href="contacto.htm">contacto</a></li>
			</ul>
		</div>
		<div id="contenidosinFondo">
			<div class="contenidoInternoVerde">
				<div class="tituloContacto">contacto</div>
				
				<div class="close-link"><a href="home.htm">X</a></div>

				<div class="descripcionQuienes">
					<div class="columnaCentrada">
						<br />
						<br /> 
						<img src="images/bullets.png" alt="" width="7" height="16" />
						<?php
if (mail($para, $titulo, $msjCorreo, $header)) {
?>
						Gracias por contactarnos, nos comunicaremos a la brevedad
					  <?php
} else {
    ?>
						Su mensaje no fue enviado. Vuelva a intentar en unos minutos
					  <?php
        }
?>

					</div>
				</div>
			</div>
		</div>

		<div id="pieQuienes">
			<div class="pieIzq">
				<li><a href="mailto:info@espacio4arq.com.ar" target="_blank">info@espacio4arq.com.ar</a></li>
				<li><a
					href="http://www.linkedin.com/company/espacio-cuatro-arquitectura"><img
						src="images/li.jpg" alt="" width="56" height="14" /></a></li>
				<li><a href="#"><img src="images/fb.jpg" alt="" width="69"
						height="14" /></a></li>
			</div>
			<div class="pieDer">Copyright 2014 Espacio4arq. All rights
				reserved.</div>
		</div>


	</div>
</body>
</html>