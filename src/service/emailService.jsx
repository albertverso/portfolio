import apiUrl from "./apiService";

// Função para fazer a requisição de envio de e-mail
export const sendEmail = async (emailData) => {
  try {
    const response = await fetch(`${apiUrl}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData), // Os dados do e-mail que você quer enviar
    });

    // Verificando se o código de status é 200
    if (response.status === 200) {
      // Se o status for 200, processa a resposta
      const data = await response.json();
      return data; // Retorna a resposta da API
    }
    else if (response.status === 500) {
      // Se o status for 500, trata o erro
      const errorDetails = await response.text();  // Pega detalhes sobre o erro
      throw new Error(`Email não enviado: ${response.status} - ${response.statusText} - ${errorDetails}`);
    }
    else {
      // Se o status for diferente de 200, trata o erro
      const errorDetails = await response.text();  // Pega detalhes sobre o erro
      throw new Error(`Erro ao enviar e-mail: ${response.status} - ${response.statusText} - ${errorDetails}`);
    }


  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error; // Lança o erro para ser tratado no componente
  }
};
