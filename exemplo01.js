function lerEntrada() {
    //Limpar o painel de resposta:
    document.getElementById("resp").innerHTML = "";

    //Ler a idade:
    var idade = document.getElementById("idade").value;

    //Apresentar a informação no painel de resposta:
    if (idade != "" && idade != undefined && idade != null ) {
        document.getElementById("resp").innerHTML = `Idade informada: ${idade}`;
        votacao(idade);
    }
}

function votacao(idade) {
    if (idade < 18)
        document.getElementById("resp").innerHTML += "<div class='tile'>A pessoa é menor de idade.</div>";
    else
        document.getElementById("resp").innerHTML += "<div class='tile'>A pessoa é maior de idade.</div>";

}