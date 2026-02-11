// Via Cep
        async function getAdressByCep() {
            const cep = document.getElementById('cep').value;
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            return data;
        }

        async function getPrevisao() {
            const lat = document.getElementById('lat').value;
            const long = document.getElementById('long').value;
            const response2 = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`
            );
            const data = await response2.json();
            return data;
        }

        async function ambasApis() {
            try {
                const [dataFromAPI1, dataFromAPI2] = await Promise.all([
                    getAdressByCep(),
                    getPrevisao()
                ]);

                // Dados para a API do VIACEP
                document.getElementById('rua').innerHTML = dataFromAPI1.logradouro;
                document.getElementById('bairro').innerHTML = dataFromAPI1.bairro;
                document.getElementById('cidade').innerHTML = dataFromAPI1.localidade + ` / ${dataFromAPI1.uf} `;

                // Dados recebidos da api.open-meteo
                document.getElementById('resposta').value = `Previsão do tempo de acordo coma a região: ${dataFromAPI2.hourly.temperature_2m[0]} ºC`;

            } catch (error) {
                console.log(error);
                alert('Cep, latitude, longitude não encontrado(s) ou inválidos');
            }
        }     