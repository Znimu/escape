/*        
function extraire() {
	if( ++i < message.length ){  // On incremente i et on compare a la taille du message.
		// Si i ne depasse pas le nombre de caracteres dans le message
		// Note : le premier caractere de la chaine commence a l'index 0
		if (message[i] == '\n'){
			// Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
			document.getElementById(div_tmp).innerHTML += '<br/>';
		} else {
			// Si caractère espace
			if (message[i] == ' ') {
				document.getElementById(div_tmp).innerHTML += ' ';
				i++
			}
			// Sinon on ajoute simplement le caractere a l'emplacement courant.
			document.getElementById(div_tmp).innerHTML += message[i];
		}
	} else {
		// Sinon on arrete le timer car le texte a fini de s'afficher.
		if (div_tmp === "subtitle_header") {
			div_tmp = "title_header";
			message = "YUP, WE CAN DO THAT.";
			i = -1;
		}
		else
			clearTimeout(interval);
	}
}
 
var i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
//var message = "YUP, WE CAN DO THAT."; // Message a afficher, on utilise le caractere \n pour le retour a la ligne.
var message = "Can you build the website of my dreams ?";
var div_tmp = "subtitle_header";
var interval = setInterval(extraire, 120); // On declanche le timer et on le garde dans une variable pour l'arreter plus tard.*/

$(".area1_main").addClass("hidden_area1");
$(".area2_main").addClass("hidden_area1");

$(".area3_main_area1").addClass("hidden_area3");
$(".area3_main_area2").addClass("hidden_area3_2");
$(".area3_main_area3").addClass("hidden_area3");
$(".area3_main_area4").addClass("hidden_area3_2");
$(".area3_main_area5").addClass("hidden_area3");
$(".area3_main_area6").addClass("hidden_area3_2");

$(".img_people1").addClass("img_people_hidden");
$(".img_people2").addClass("img_people_hidden");
$(".area4_cadre_p1").addClass("p_people_hidden");
$(".area4_cadre_p2").addClass("p_people_hidden");

$(".img_sponsor1").addClass("img_sponsor_hidden");
$(".img_sponsor2").addClass("img_sponsor_hidden");
$(".img_sponsor3").addClass("img_sponsor_hidden");
$(".img_sponsor4").addClass("img_sponsor_hidden");

$(".img_team1").addClass("img_team_hidden");
$(".img_team2").addClass("img_team_hidden");
$(".img_team3").addClass("img_team_hidden");


$(window).on("scroll", function() {
	var y = $(window).scrollTop();
	$("#div_scroll").html(y);
	
	if (y > 70){
		$(".div_liste_menu").addClass("liste_menu_fixed");
	} else {
		$(".div_liste_menu").removeClass("liste_menu_fixed");
	}

	if (y > 300){
		$(".area1_main").removeClass("hidden_area1");
	} else {
		$(".area1_main").addClass("hidden_area1");
	}
	
	if (y > 650){
		$(".area2_main").removeClass("hidden_area1");
	} else {
		$(".area2_main").addClass("hidden_area1");
	}
	
	if (y > 1000){
		$(".area3_main_area1").removeClass("hidden_area3");
	}
	else {
		$(".area3_main_area1").addClass("hidden_area3");
	}
	
	if (y > 1050){
		$(".area3_main_area2").removeClass("hidden_area3_2");
	}
	else {
		$(".area3_main_area2").addClass("hidden_area3_2");
	}
	
	if (y > 1100){
		$(".area3_main_area3").removeClass("hidden_area3");
	}
	else {
		$(".area3_main_area3").addClass("hidden_area3");
	}
	
	if (y > 1150){
		$(".area3_main_area4").removeClass("hidden_area3_2");
	}
	else {
		$(".area3_main_area4").addClass("hidden_area3_2");
	}
	
	if (y > 1200){
		$(".area3_main_area5").removeClass("hidden_area3");
	}
	else {
		$(".area3_main_area5").addClass("hidden_area3");
	}
	
	if (y > 1250){
		$(".area3_main_area6").removeClass("hidden_area3_2");
	}
	else {
		$(".area3_main_area6").addClass("hidden_area3_2");
	}
	
	if (y > 1700){
		$(".img_people1").removeClass("img_people_hidden");
		$(".area4_cadre_p1").removeClass("p_people_hidden");
	}
	else {
		$(".img_people1").addClass("img_people_hidden");
		$(".area4_cadre_p1").addClass("p_people_hidden");
	}
	
	if (y > 2000){
		$(".img_people2").removeClass("img_people_hidden");
		$(".area4_cadre_p2").removeClass("p_people_hidden");
	}
	else {
		$(".img_people2").addClass("img_people_hidden");
		$(".area4_cadre_p2").addClass("p_people_hidden");
	}
	
	if (y > 2300){
		$(".img_sponsor1").removeClass("img_sponsor_hidden");
	}
	else {
		$(".img_sponsor1").addClass("img_sponsor_hidden");
	}
	
	if (y > 2350){
		$(".img_sponsor2").removeClass("img_sponsor_hidden");
	}
	else {
		$(".img_sponsor2").addClass("img_sponsor_hidden");
	}
	
	if (y > 2400){
		$(".img_sponsor3").removeClass("img_sponsor_hidden");
	}
	else {
		$(".img_sponsor3").addClass("img_sponsor_hidden");
	}
	
	if (y > 2450){
		$(".img_sponsor4").removeClass("img_sponsor_hidden");
	}
	else {
		$(".img_sponsor4").addClass("img_sponsor_hidden");
	}
	
	if (y > 2850){
		$(".img_team1").removeClass("img_team_hidden");
	}
	else {
		$(".img_team1").addClass("img_team_hidden");
	}
	
	if (y > 2900){
		$(".img_team2").removeClass("img_team_hidden");
	}
	else {
		$(".img_team2").addClass("img_team_hidden");
	}
	
	if (y > 2950){
		$(".img_team3").removeClass("img_team_hidden");
	}
	else {
		$(".img_team3").addClass("img_team_hidden");
	}
});

// MENU //
$("#bouton_menu").on("click", function() {
	$("#bouton_menu").hide();
	$("#bouton_menu_close").show();
	$(".liste_menu").show();
});
$("#bouton_menu_close").on("click", function() {
	$("#bouton_menu").show();
	$("#bouton_menu_close").hide();
	$(".liste_menu").hide();
});