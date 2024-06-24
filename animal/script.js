var cachorros = [
    { "nome": "Bolt", "imagem": "dog1" },
    { "nome": "Pintinha", "imagem": "dog2" },
    { "nome": "Mark", "imagem": "dog3" },
    { "nome": "Zayan", "imagem": "dog4" }
]
var gatos = [
    { "nome": "Nina", "imagem": "cat1" },
    { "nome": "Luna", "imagem": "cat2" },
    { "nome": "Mel", "imagem": "cat3" },
    { "nome": "Nick", "imagem": "cat4" }
]
var animais = document.getElementById('select_animais');
var galeria = document.getElementById('galeria');
var nome = document.getElementById('nome');

animais.addEventListener('input', listarAnimais);
galeria.addEventListener('mouseover', mostrarNome);
galeria.addEventListener('mouseout', limparNome);

function listarAnimais() {
    limparDivGaleria();
    if (animais.value == "dog") {
        for (var i = 0; i < cachorros.length; i++) {
            let dog = document.createElement("img");
            dog.src = "./img/" + cachorros[i].imagem + ".jpg";
            dog.alt = cachorros[i].nome;
            galeria.appendChild(dog);
        }
    }

    else if (animais.value == "cat") {
        for (var i = 0; i < gatos.length; i++) {
            let cat = document.createElement("img");
            cat.src = "./img/" + gatos[i].imagem + ".jpg";
            cat.alt = gatos[i].nome;
            galeria.appendChild(cat);
        }
    }
}

function mostrarNome(event) {
    nome.innerText = event.target.alt;
}

function limparNome() {
    h2.innerText = " ";
}

function limparDivGaleria(){
    var elemento = document.querySelector("#galeria");
    while(elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
}
}

