function getFeedback(){
    let retorno = document.querySelector(".retorno");

    let input = document.querySelector(".nome");
    let nome = input.value;

    let textarea = document.querySelector(".textarea");
    let feedback = textarea.value;

    if (nome === "" || feedback === ""){
        return;
    }

    let titulo = document.createElement("h3");
    let div = document.createElement("div");
    let texto = document.createElement("p");

    titulo.innerText = nome;
    texto.innerText = feedback;

    div.append(titulo);
    div.append(texto);
    retorno.append(div);

    input.value = "";
    textarea.value = "";

}

let btn_enviar = document.querySelector(".button");
btn_enviar.addEventListener("click", getFeedback);