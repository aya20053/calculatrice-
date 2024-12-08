let dv2 = document.getElementById("dv2");
let historiqueList = document.getElementById("historique-list");
let expression = "";

function calculer(value) {
    expression += value;
    dv2.value = expression;
}

function calcule() {
    try {
        let resultat = eval(expression);
        ajouterHistorique(expression, resultat); 
        dv2.value = resultat;
        expression = String(resultat); 
    } catch (error) {
        dv2.value = "Erreur";
        expression = "";
    }
}

function effacerTout() {
    expression = "";
    dv2.value = "";
}

function supprimerDernier() {
    expression = expression.slice(0, -1);
    dv2.value = expression;
}

function ajouterHistorique(expr, resultat) {
    let item = document.createElement("li");
    item.innerHTML = `🧮 ${expr} = <strong>${resultat}</strong>`;
    historiqueList.appendChild(item);
}
