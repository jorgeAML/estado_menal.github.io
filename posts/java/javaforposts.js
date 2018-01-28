//java posts
$(document).ready(function () {
	$("<ul/>", {
		"appendTo": "nav",
		"class": "onlynav",
		html: "<li><img></li><li><a/></li><li><a/></li><li><a/></li><li><a/></li>",
	});
	$(".onlynav").find("img").eq(0).attr({
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/logonav.jpg",
		"class": "imgnav",
	});
	$(".onlynav").find("a").eq(0).html("Página principal").attr({
		href: "http://www.medicinaresources.com/",
		title: "volver a medicinaresources",
	});
	$(".onlynav").find("a").eq(1).html("Github").attr({
		href: "https://github.com/jorgeAML",
		title: "ver repositorios en Github",
	});
	$(".onlynav").find("a").eq(2).html("MR noticias").attr({
		href: "#",
		title: "Noticias",
	});
	$(".onlynav").find("a").eq(3).html("Acerca de nosotros").attr({
		href: "#",
		title: "conoce un poco más de MedicinaResources",
	});

	//POSTS

	$("<div/>", {
		"appendTo": ".post",
		"class": "row",
	});
	$("<div/>", {
		"appendTo": ".row",
		"class": "column",
	});
	$("<div/>", {
		"appendTo": ".column",
		"class": "hojapost",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "circle-parrafo",
		html: "26 de enero del 2018 / MedicinaResources noticias",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal-x4",
		html: "¿Ads en MedicinaResources? ¿Privatización o vigilancia?",
	});
	$("<img>", {
		"appendTo": ".hojapost",
		"class": "imgpost1",
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/ads.jpg",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "Anuncios en MedicinaResources no fue la mejor apuesta para el 2018",
	});
	$("<p/>", {
		"appendTo":".hojapost",
		"class": "parafo-prin",
		html: "Al pareceer los anuncios hoy en día son usados en cualquier página web que visitas, en MedicinaResources tenemos un derecho a la privacidad - que incluye eliminar “Ads” o mejor conocidos anuncios de patrocinadores. Pero esto no es lo interesante, la tecnología de encriptación que utiliza nuestro sitio no acopla o no manipula adecuadamente el código transferido del patrocinador ya sea “Google” y por esto solamente puedes llegar a ver la publicidad en un marco ubicado a la derecha de tu pantalla.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "Ahora viene lo fácil, puedes llegar a bloquear la publicidad de internet, o cualquier página que visites, nosotros recomendamos el plugin de “duckduckgo” ademas de ser un navegador que no te persigue mediante cualquier busqueda realizada en internet, lo sugerimos como el mejor, para navegador sin que tu historial de busqueda sea recolectada para fines de venta.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "En realidad fue un experimento que ya dentro de poco se dara de baja, no es por el dinero, sino por la privacidad y seguridad de nuestros usuarios, vimos que es un gran riesgo, ya que es demasiado fácil hackear este tipo de cosas, simplemente las personas se ariesgan - no por dar click sobre el anuncio en una página sino por navegar en un sitio web que use “Ads” y sea engañado para dar click sobre él y que su información sea robada (así de sencillo).",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin linkpost1",
		html: "Puedes ver este <a>video</a> y la página de <a>duckduckgo</a> para descargar el plugin necesario para navegar con seguridad.",
	});
	$(".linkpost1").find("a").eq(0).attr({
		href: "https://youtu.be/B-icPvF3RG8",
		title: "Dan Kaminski: En internet hay siete llaves de seguridad y yo tengo una de ellas",
	})
	$(".linkpost1").find("a").eq(1).attr({
		href: "https://duckduckgo.com/",
		title: "DuckDuckGo doesn't save your searches and doesn't send your searches to other sites.",
	})
	$("<div/>", {
		"appendTo": ".hojapost",
		"insertAfter": ".linkpost1",
		"class": "circle-eira",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "title-mrn",
		html: "Eira Giralt de MedicinaResources, recursos educativos y seguridad informática.",
	});



	//footer
	$("<p/>", {
		"appendTo": "footer",
		html: "MedicinaResources &copy 2018",
	});
});
