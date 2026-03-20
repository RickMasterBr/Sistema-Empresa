const url = "http://localhost:3071/funcionarios";
const resultado = document.getElementById("resultado");

async function exibirFuncionarios() {

    const response = await fetch(url);
    const data = await response.json();

    data.map((funcionario) => {

        const div = document.createElement("div");
        const nome = document.createElement("p");
        const cpf = document.createElement("p");
        const funcao = document.createElement("p");

        nome.innerText = funcionario.nome;
        cpf.innerText = funcionario.cpf;
        funcao.innerText = funcionario.funcao;

        div.appendChild(nome);
        div.appendChild(cpf);
        div.appendChild(funcao);

        resultado.appendChild(div);

    })}

const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const funcao = document.getElementById("funcao");

btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault();

    const data = {
        nome: nome.value,
        cpf: cpf.value,
        funcao: funcao.value
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => alert("Funcionario cadastrado com sucesso!"))
    .then(exibirFuncionarios());

});

exibirFuncionarios();