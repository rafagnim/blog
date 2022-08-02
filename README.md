
<h2> Blog com Angular </h2>

Este projeto foi desenvolvido em aula proporcionada pela Digital Innovation One, através do desenvolvedor Wheslley Rimar Bezerra.

Foi desenvolvido um blog em Angular;
<hr>
Em relação ao projeto desenvolvido em aula, fiz as seguintes alterações (desafios propostos pelo educador):

Ajustes para adequar a versão mais recente;

Opção de busca por nome e exibição;

Opção de envio de e-mail, dos dados registrados na tela de contato.

<hr>
Pré-requisitos para a execução do projeto:

Qualquer navegador;

<hr>
Alguns sites utilizados/links úteis:

https://formsubmit.co/ -> ferramenta utilizada para envio de e-mails. É necessário se cadastrar e utilizar o token disponibilizado no e-mail enviado.
Para enviar através do Angular (localhost:4200), logo após o promeiro POST a ferramenta encaminha um novo e-mail com outro token.

pixabay.com -> banco de imagens

<hr>
Alguns comandos úteis:

Para subir o backend com JsonServer:

npm init -y

npm i json-server

npm start

(conforme configuração efetuada no package-json:
"scripts": {
"start": "json-server --watch banco.json --port 3000"
})

No front/Angular:

npm i bootstrap

npm i jquery@~3.4.1

npm i popper.js

npm add @fortawesome/angular-fontawesome



