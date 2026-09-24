# Campeonato Gamer

## Situação-problema

Nossa turma vai organizar partidas de jogos. Queremos registrar **jogo**, **time A**, **time B**, **placar** e **status**. Uma partida começa `agendada` com placar `0 X 0.` Depois podemos atualizar o resultado para `finalizada`.

Ao final, a API terá estas rotas 

|Método | Rota | O que faz |
| --- | --- | --- |
| GET | `/` | Confirma que a API está funcionando |
| GET | `/partidas` | Lista a filtra partidas |
| GET | `/partidas:id` | Buscar uma partida |
| POST | `/partidas` | Cadastrar uma partida |
| PUT | `/partidas` | alterar uma partida e o placar |
| DELETE | `/partidas` | Excluir uma partida |

## Etapa 1 - Criar o projeto


No terminal, digite **uma linha por vez**;

````bash
    mkdir CampeonatoGamer
    cd CampeonatoGamer
    code .
    npm init -y
    npm install express cors
    code .
    ```"# CampeonatoGamer." 
