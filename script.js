function recalculerTVA() {
	var taux_tva_str = document.querySelector('#taux_tva').value;
	taux_tva_str = taux_tva_str.substring(0, taux_tva_str.length - 1); // on enlève le %
	var taux_tva = Math.floor(parseFloat(taux_tva_str));	
	
	var montant_hors_taxes = parseInt(document.querySelector('#montant_ht').value);
	
	var montant_tva = parseInt((taux_tva / 100) * montant_hors_taxes);
	
	var montant_ttc = montant_hors_taxes + montant_tva;
	
	// maj des inputs
	document.querySelector('#montant_tva').value = montant_tva;
	document.querySelector('#montant_ttc').value = montant_ttc;

	// texte en bas de page
	var div = document.querySelector('#texte');
	
	div.innerHTML = '<p>Montant Hors Taxes : <strong>' + montant_hors_taxes + '€</strong></p>';
	div.innerHTML += '<p>Montant TVA : <strong>' + montant_tva + '€</strong> avec un taux égal à <strong>' +
		taux_tva + '%</strong></p>';
	div.innerHTML += '<p>Montant TTC : <strong>' + montant_ttc + '€</strong></p>';
}

var boutons = document.getElementsByTagName('button');

for(var i = 0; i < boutons.length; i++) {
	boutons[i].onclick = function() {
		document.querySelector('#taux_tva').value = this.innerHTML;
		recalculerTVA();
	}
}

// petit soucis : la touche supp n'actualise pas
var input = document.querySelector('#montant_ht');
input.onkeydown = function() {
	if(!isNaN(parseInt(this.value))) {
		recalculerTVA();
	}
}
