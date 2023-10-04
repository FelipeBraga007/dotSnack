// Aguarde até que o documento esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Referência ao elemento da mensagem de sucesso
    var successMessage = document.querySelector(".success-message");

    // Adicione um manipulador de eventos ao formulário
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        // Impede o envio do formulário padrão
        event.preventDefault();

        // Exibe a mensagem de sucesso
        successMessage.style.display = "block";

        // Limpa o formulário (você pode adicionar código aqui para limpar os campos)
    });
});
// Função para salvar os dados no localStorage
function salvarCadastroNoLocalStorage(dados) {
    // Verifica se o localStorage está disponível no navegador
    if (typeof (Storage) !== "undefined") {
        // Recupera os dados já existentes (se houver) do localStorage
        var cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

        // Adiciona o novo cadastro à lista de cadastros
        cadastros.push(dados);

        // Converte a lista de cadastros em formato JSON e a armazena no localStorage
        localStorage.setItem("cadastros", JSON.stringify(cadastros));
    }
}

// Evento de envio do formulário
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do envio do formulário

    // Obtem os valores do formulário
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("birthday").value;
    var curso = document.getElementById("curso").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var sexo = document.querySelector('input[name="Sexo"]:checked').value;
    var senha = document.getElementById("senha").value;

    // Cria um objeto com os dados do cadastro
    var cadastro = {
        nome: nome,
        dataNascimento: dataNascimento,
        curso: curso,
        telefone: telefone,
        email: email,
        sexo: sexo,
        senha: senha
    };

    // Salva o cadastro no localStorage
    salvarCadastroNoLocalStorage(cadastro);

    // Exibe a mensagem de sucesso
    document.querySelector(".success-message").style.display = "block";

    // Limpa o formulário após o envio
    document.querySelector("form").reset();
});
