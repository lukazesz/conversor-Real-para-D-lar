async function converter() {
        const valorReal = document.getElementById("input").value;
        const resultado = document.getElementById("resultado");

        if (valorReal === "" || valorReal <= 0) {
            resultado.innerHTML = "Por favor, insira um valor válido.";
            return;
        }

        try {
            const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
            const data = await response.json();
            const cotacao = parseFloat(data.USDBRL.bid);

            const valorConvertido = (valorReal / cotacao).toFixed(2);

            resultado.innerHTML = `💵 Valor em dólar: <b>US$ ${valorConvertido}</b> <br>
            🏦 Cotação atual: <b>R$ ${cotacao}</b>`;
        } catch (error) {
            resultado.innerHTML = "Erro ao buscar a cotação. Tente novamente.";
            console.error(error);
        }
    }