Link do site: https://reidncweather.netlify.app/
Link da planilha: https://docs.google.com/spreadsheets/d/1aMBbJGjf1XRzTjfxfYJeX8ACKvFkDpbAjx3XprMAzRE/edit?usp=sharing
# 🌦️ DncWeather - Busca de Endereço e Clima

Uma aplicação Front-End simples e eficiente que permite ao usuário consultar informações de endereço via CEP e a previsão do tempo atual por coordenadas geográficas, mostrando as informações do CEP e a temperatura com base na Latitude e Longitude fornecidos e também salvando os dados de consulta em uma planilha externa.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com tecnologias puras (Vanilla), sem a necessidade de frameworks:

*   **HTML5**: Estrutura da página e formulários.
*   **CSS3**: Estilização e layout responsivo.
*   **JavaScript (ES6+)**: Lógica de consumo de APIs, manipulação do DOM e integração.

## 🔌 APIs Consumidas

A aplicação faz requisições assíncronas para as seguintes interfaces:

1.  **[ViaCEP](https://viacep.com.br)**: Para busca de logradouro, bairro e localidade através do CEP informado.
2.  **[Open-Meteo](https://open-meteo.com)**: Para obter a temperatura em tempo real com base na latitude e longitude.
3.  **[SheetMonkey](https://sheetmonkey.io)**: Utilizado como "Back-End" para registrar os dados preenchidos no formulário diretamente em uma planilha do Google Sheets.

## 🛠️ Como rodar o projeto

1.  Clone este repositório:
    ```bash
    git clone https://github.com
    ```
2.  Abra o arquivo `index.html` em qualquer navegador moderno.
3.  Insira um **CEP** válido, uma **latitude** e uma **longitude**.
4.  Exemplo de valores que testei e funcionou **CEP**: 01001000 , exemplo de **latitude**: -23.000, exemplo de **longitude**: -46.000
5.  Clique em **Acessar** para ver os resultados na tela e enviar os dados para a planilha.

## 📝 Notas de Implementação

*   **Persistência de Dados**: O formulário utiliza o atributo `target="_blank"` para garantir que o envio dos dados para o SheetMonkey não interrompa a experiência do usuário na página principal.
*   **Assincronismo**: Foi utilizado `Promise.all` para otimizar as requisições das APIs de CEP e Clima, fazendo com que ambas sejam executadas simultaneamente.

## ✒️ Autor

* **Reinaldo M. Ferreira**

