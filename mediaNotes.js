        function calculaMedia(){

        const url = new URLSearchParams(window.location.search)
        let nota1 = url.get("nota1")
        let nota2 = url.get("nota2")

        let media = (Number(nota1) + Number(nota2))/2;

        document.getElementById("media").value = media;
            if(media >= 6){
                document.getElementById("status").
                innerHTML="Aprovado"
                document.getElementById("status").style.
                color="green"
            }else{
                document.getElementById("status").
                innerHTML="Reprovado"
                document.getElementById("status").style.
                color="red"
            }
        }