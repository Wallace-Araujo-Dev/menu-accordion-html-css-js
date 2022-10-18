const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function(item){
    item.addEventListener("click", function(){
        const itemAtivo = document.querySelector(".ativo");
        item.classList.add("ativo");
        if(itemAtivo){
            itemAtivo.classList.remove("ativo")
        }
    })
})