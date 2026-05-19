const overlay = document.getElementById("overlay");
const tabela = document.getElementById("tabela");

const nome = document.getElementById("nome");
const funcao = document.getElementById("funcao");
const salario = document.getElementById("salario");

let linhaEditando = null;

function abrirModal(){

  overlay.classList.remove("hidden");

  limparCampos();

  nome.focus();
}

function fecharModal(){

  overlay.classList.add("hidden");

  esconderErro(nome, "erroNome");
  esconderErro(funcao, "erroFuncao");
  esconderErro(salario, "erroSalario");
}

nome.addEventListener("keydown", function(e){

  if(e.key === "Enter"){

    e.preventDefault();

    if(nome.value.trim() === ""){
      mostrarErro(nome, "erroNome");
    }else{
      esconderErro(nome, "erroNome");
      funcao.focus();
    }
  }
});

funcao.addEventListener("keydown", function(e){

  if(e.key === "Enter"){

    e.preventDefault();

    if(funcao.value.trim() === ""){
      mostrarErro(funcao, "erroFuncao");
    }else{
      esconderErro(funcao, "erroFuncao");
      salario.focus();
    }
  }
});

salario.addEventListener("keydown", function(e){

  if(e.key === "Enter"){

    e.preventDefault();

    salvarFuncionario();
  }
});

function mostrarErro(input, idErro){

  input.classList.add("erro");

  document
    .getElementById(idErro)
    .classList.add("ativo");
}

function esconderErro(input, idErro){

  input.classList.remove("erro");

  document
    .getElementById(idErro)
    .classList.remove("ativo");
}

function validarCampos(){

  let valido = true;

  if(nome.value.trim() === ""){
    mostrarErro(nome, "erroNome");
    valido = false;
  }else{
    esconderErro(nome, "erroNome");
  }

  if(funcao.value.trim() === ""){
    mostrarErro(funcao, "erroFuncao");
    valido = false;
  }else{
    esconderErro(funcao, "erroFuncao");
  }

  if(salario.value.trim() === ""){
    mostrarErro(salario, "erroSalario");
    valido = false;
  }else{
    esconderErro(salario, "erroSalario");
  }

  return valido;
}

function salvarFuncionario(){

  if(!validarCampos()) return;

  if(linhaEditando){

    linhaEditando.children[0].innerText = nome.value;
    linhaEditando.children[1].innerText = funcao.value;
    linhaEditando.children[2].innerText = salario.value;

    linhaEditando = null;

  }else{

    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${nome.value}</td>
      <td>${funcao.value}</td>
      <td>${salario.value}</td>

      <td>
        <span class="icone" onclick="editarFuncionario(this)">
          ✏️
        </span>
      </td>

      <td>
        <span class="icone" onclick="excluirFuncionario(this)">
          🗑️
        </span>
      </td>
    `;

    tabela.appendChild(linha);
  }

  fecharModal();
}

function editarFuncionario(botao){

  linhaEditando = botao.parentElement.parentElement;

  nome.value = linhaEditando.children[0].innerText;
  funcao.value = linhaEditando.children[1].innerText;
  salario.value = linhaEditando.children[2].innerText;

  overlay.classList.remove("hidden");

  nome.focus();
}

function excluirFuncionario(botao){

  botao.parentElement.parentElement.remove();
}

function limparCampos(){

  nome.value = "";
  funcao.value = "";
  salario.value = "";
}