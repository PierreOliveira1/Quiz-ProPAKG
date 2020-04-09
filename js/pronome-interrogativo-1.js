var acertos = 0;
function tes(){
    var radios = document.getElementsByName("questão-1");
    for (var i = 0 in radios){
        if(radios[0].checked){
            acertos += 1;
        }
    }
    var radios1 = document.getElementsByName("questão-2");
        for (var i = 0 in radios1){
            if(radios1[1].checked){
                acertos += 1;
            }
        }
        var radios2 = document.getElementsByName("questão-3");
        for (var i = 0 in radios2){
            if(radios2[1].checked){
                acertos += 1;
            }
        }
        var radios3 = document.getElementsByName("questão-4");
        for (var i = 0 in radios3){
            if(radios3[3].checked){
                acertos += 1;
            }
        }
        var radios4 = document.getElementsByName("questão-5");
        for (var i = 0 in radios4){
            if(radios4[2].checked){
                acertos += 1;
            }
        }
        alert("Você acertou: " + acertos + " pontos de 50");

        if (acertos < 30){
            window.open("../academia/pronome-interrogativo-2.html");
        }
}