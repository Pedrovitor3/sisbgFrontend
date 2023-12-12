# SISBG

O sistema recebe os documentos com os dados e o pdf
a partir desses dados e possivel montar um pdf com todos os documentos, que na sua função principal é para gerar o boletim geral.

## Índice

1. [Sobre](#sobre)
2. [Funcionalidades](#funcionalidades)
3. [Instalação](#instalação)
4. [Uso](#uso)
5. [Contribuição](#contribuição)
6. [Licença](#licença)

## Sobre

O objetivo do sistema foi inovar a forma de geração do boletim geral.
O sistema que gera um pdf final com todos os dados e pdf daquele boletim e gera tabelas automaticas utilizando os dados.

Foi utilizado React, NodeJs, Docker, Postgres.

## Funcionalidades

Gera uma Tabela com os dados enviados do usuario no pdf.
gera um pdf com todos os documentos enviados naquele boletim
organização de documentos.
verificação com um autenticador.

## Instalação

Exemplo:

```bash
# Clonar o repositório do frontend.
git clone https://github.com/Pedrovitor3/sisbgFrontend.git

# Entrar no diretório do Frontend
cd sisbgFrontend

# Instalar dependências
yarn install

# Clonar o repositório do Backend.
git clone https://github.com/Pedrovitor3/sisbgBackend.git

# Entrar no diretório do Backend
cd sisbgBackend

# Instalar dependências
yarn install
