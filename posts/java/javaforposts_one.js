//java posts
$(document).ready(function () {
	$("<div/>", {
		"appendTo": ".nav",
		"class": "navbar",
		"html": "<div/><div/><nav><div/><div/><div/></nav>",
	});
	$(".navbar").find("nav").eq(0).attr({
		"class": "navbar_items",
	});
	$(".navbar").find("div").eq(1).html("<i class='material-icons'>&#xE5D2;</i>").attr({
		"class": "navbar_link navbar_link-toogle",
	});
	$(".navbar").find("div").eq(0).html("<a href='https://jorgeaml.github.io/medicinaresourcesblog.github.io/'>MedicinaResources - blog</a>").attr({
		"class": "navbar_link navbar_link-brand",
	});
	$(".navbar").find("div").eq(2).html("<a href='https://github.com/jorgeAML'>Github</a>").attr({
		"class": "navbar_link",
	});
	$(".navbar").find("div").eq(3).html("<a href='mrnoticias/mrnoticias.html'>MR noticias</a>").attr({
		"class": "navbar_link",
	});
	$(".navbar").find("div").eq(4).html("<a href='#'>Acerca de nosotros</a>").attr({
		"class": "navbar_link",
	});

	/*
	FUCTION RESPONSIVE NAV 
	*/

	$(".navbar_link-toogle").click(function(){
		$(".navbar_items").slideToggle( 800 );
	})
	$(".navbar_items").click(function() {
		console.log('show this shit');
	});
	$(".navbar a").mouseenter(function(){
		$(this).addClass("navbar-h", "slow");
	});
	$(".navbar a").mouseleave(function(){
		$(this).removeClass("navbar-h", "slow");
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
		"src": "imagenes/focus.jpg",
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
	$("<div/>", {
		"appendTo": "footer",
		"class": "foot-div",
		html: "<div/><div/><div/>", 
	});
	$(".foot-div").find("div").eq(0).html("MedicinaResources &copy 2018");
	$(".foot-div").find("div").eq(1).html("Guatemala - Santiago");
	$(".foot-div").find("div").eq(2).html("San Petersburgo - Rusia");
});
