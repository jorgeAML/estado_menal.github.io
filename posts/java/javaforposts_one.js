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
		html: "1 de febrero del 2018 / MedicinaResources Motivación",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal-x4",
		html: "El porque necesitas concentrarte",
	});
	$("<img>", {
		"appendTo": ".hojapost",
		"class": "imgpost1",
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/focus.jpg",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "Deja que la grandeza tome su rumbo en el camino de la vida",
	});
	$("<p/>", {
		"appendTo":".hojapost",
		"class": "parafo-prin",
		html: "Tenemos una tendencia que nos permite tomar distintas direcciones. Para involucrarnos en tantas actividades y causas.  Pero somos más eficaces cuando nos concentramos.  Especialmente cuando nos concentramos en nuestras habilidades, y usamos únicamente los recursos y apoyo que tengamos a disposición.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "Es sencillo quedar atrapado en los detalles y olvidarse del cuadro grande. Concéntrate en el cuadro y muchos de los detalles no tienen importancia.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "Esto no significa poner nuestra cabeza en la arena y descuidando los detalles que si importan. Significa concentrarse en lo que es más importante.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin linkpost1",
		html: "Averigua que es lo que te da el mejor aprovechamiento de tu tiempo. No dividas tu tiempo en muchas actividades diferentes, a menos que así quieras gastarlo. Pero si estas intentado completar algo en específico, necesitas concentrarte solo en ello.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "No necesitas ser estupendo en todo, solo debes ser el mejor en lo que te gusta.  Deja que otros sean buenos en lo que ellos quieran.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin afterCircle",
		html: "Y no hagas algo que simplemente tenga que ser bueno, hazlo porque te gusta, y porque es importante para ti, deja que la grandeza tome su rumbo en el camino de la vida.",
	});
	$("<div/>", {
		"appendTo": ".hojapost",
		"insertAfter": ".afterCircle",
		"class": "circle-devorah",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "title-mrn",
		html: "Devorah Aller de Personal Growth, motivación.",
	});
	//footer
	$("<p/>", {
		"appendTo": "footer",
		html: "MedicinaResources &copy 2018",
	});
});
