//medicinaresources blog
$(document).ready(function () {
	$("<img>", {
		"appendTo": ".header",
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/header.jpg",		
	});
	$("<ul/>", {
		"appendTo": "nav",
		"class": "onlynav",
		html: "<li><a/></li><li><a/></li><li><a/></li><li><a/></li>",
	});
	$(".onlynav").find("a").eq("0").html("Página principal").attr({
		href: "http://www.medicinaresources.com/",
		title: "volver a medicinaresources",
	});
	$(".onlynav").find("a").eq("1").html("Github").attr({
		href: "https://github.com/jorgeAML",
		title: "ver repositorios en Github",
	});
	$(".onlynav").find("a").eq("2").html("MR noticias").attr({
		href: "#",
		title: "Noticias",
	});
	$(".onlynav").find("a").eq("3").html("Acerca de nosotros").attr({
		href: "#",
		title: "conoce un poco más de MedicinaResources",
	});
	//SECCION1 de noticias principales
	$("<div/>", {
		"appendTo": ".noticias1",
		"class": "row",
	});
	$("<div/>", {
		"appendTo": ".row",
		"class": "column",
	});
	$("<div/>", {
		"appendTo": ".column",
		"class": "notpri",
		html: "<a/>",
	});
	$(".notpri").find("a").eq(0).attr({
		href: "#",
		title: "Estadísticas del primer año de MedicinaResources",
		"class": "window-link-n1",
	});
	//foto + historia de la noticia
	$("<div/>", {
		"appendTo": ".window-link-n1",
		"class": "row",
	});
	$("<div/>", {
		"appendTo": ".row",
		"class": "np1 column--2of3",
	});
	$("<div/>", {
		"appendTo": ".row",
		"class": "np2 column",
		"insertAfter": ".column--2of3",
	});
	$("<img>", {
		"appendTo": ".np1",
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/IMG_5992.PNG",
	});
	$("<p/>", {
		"appendTo": ".np2",
		"class": "title-mrn",
		html: "MedicinaResources noticias",
	});
	$("<h1/>", {
		"appendTo": ".np2",
		"class": "title-principal",
		"insertAfter": ".title-mrn",
		html: "Estadísticas del primer año de MedicinaResources",
	});
	$("<p/>", {
		"appendTo": ".np2",
		"class": "parafo-prin",
		"insertAfter": "title-principal",
		html: "Todo un año de estadísticas, algunas bajas y otras altas pero ni modo, descubre que hicimos para que MedicinaResources sea tan único en la región latinoamericana.",
	});
	$("<div/>", {
		"appendTo": ".np2",
		"class": "circle",
		"insertAfter": "parafo-prin",
	});
	$("<p/>", {
		"appendTo": ".np2",
		"class": "circle-parrafo",
		html: "Jorge Martínez de MedicinaResources."
	});


	//noticias 2
	$("<div/>", {
		"appendTo": ".noticias2",
		"class": "row",
	});
	//contenedor para la noticia 2
	$("<div/>", {
		"appendTo": ".row",
		"class": "column n2",
	});
	$("<div/>", {
		"appendTo": ".n2",
		"class": "noti2",
		html: "<a/>",
	});
	$(".noti2").find("a").eq(0).attr({
		title: "El porque necesitas concentrarte",
		href: "#",
		"class": "window-link-n2",
	});
	$("<img>", {
		"appendTo": ".window-link-n2",
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/focus.jpg",
	});
	var newMed = "MedicinaResources noticias";
	$("<p/>", {
		"appendTo": ".window-link-n2",
		"class": "title-mrn scale1-2",
		"insertAfter": "img",
		html: newMed,
	});
	$("<h1/>", {
		"appendTo": ".window-link-n2",
		"class": "title-principal-50 scale1-3",
		"insertAfter": "scale1-2",
		html: "El porque necesitas concentrarte",
	});
	$("<p/>", {
		"appendTo": ".window-link-n2",
		"class": "parafo-prin scale1-4",
		"insertAfter": ".scale1-3",
		html: "Tenemos una tendencia que nos permite a nosotros mismos aprender de diferentes maneras o direcciones. Involucrarnos en muchas actividades y causas. Pero somos más efectivos cuando nos concentramos, especialmente cuando nos concentramos en nuestras habilidades.",
	});
	$("<div/>", {
		"appendTo": ".window-link-n2",
		"class": "circle-devorah",
		"insertAfter": "scale1-4",
	});
	$("<p/>", {
		"appendTo": ".window-link-n2",
		"class": "circle-parrafo-closer",
		html: "Devorah Aller de Personal Growth.",
	});
	//contenedor para la noticia 3
	$("<div/>", {
		"appendTo": ".row",
		"insertAfter": ".n2",
		"class": "column n3",
	});
	$("<div/>", {
		"appendTo": ".n3",
		"class": "noti3",
		html: "<a/>",
	});
	$(".noti3").find("a").eq(0).attr({
		"href": "#",
		"title": "¿Ads en MedicinaResources? ¿Privatización o vigilancia?",
		"class": "window-link-n3",
	});
	$("<img>", {
		"appendTo": ".window-link-n3",
		"src": "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/blog+medicinaresources/imagenes/ads.jpg",
	});
	$("<p/>", {
		"appendTo": "window-link-n3",
		"class": "title-mrn scale2-1",
		"insertAfter": "img",
		html: newMed,
	});
	$("<h1/>", {
		"appendTo": ".window-link-n3",
		"class": "title-principal-50 scale2-2",
		"insertAfter": ".scale2-1",
		html: "¿Ads en MedicinaResources? ¿Privatización o vigilancia?,"
	});
	$("<p/>", {
		"appendTo": ".window-link-n3",
		"class": "parafo-prin scale2-3",
		"insertAfter": ".scale2-2",
		html: "Hace poco decidimos implementar Ads de google en MedicinaResources, ¿pero será necesario? ¿será que todos los que visitan en realidad pueden ver anuncios en MedicinaResources? He aquí algunos consejos para mandar al carajo los anuncios de Google de ¡una vez por todas! y el pequeño experimento en nuestro sitio.",
	});
	$("<div/>", {
		"appendTo": ".window-link-n3",
		"class": "circle-eira",
		"insertAfter": "scale2-3",
	});
	$("<p/>", {
		"appendTo": ".window-link-n3",
		"class": "circle-parrafo-closer",
		html: "Eira Giralt de MedicinaResources.",
	});
	
	var myname = "Jorge Martínez de MedicinaResources";


	//footer

	$("<p/>", {
		"appendTo": "footer",
		html: "MedicinaResources &copy 2018",
	});
});
