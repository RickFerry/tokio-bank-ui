# Tokio Bank UI

Interface web para o sistema de agendamento de transferências financeiras, desenvolvida com **Vue.js 3** e **Vite**. Esta aplicação consome a API **Tokio Bank** para gerenciar agendamentos de transferências.

## 📌 Tecnologias Utilizadas
- Vue.js 3
- Vite
- Vue Router
- Pinia (Gerenciamento de estado)
- Axios (Requisições HTTP)
- Bootstrap (Estilização)

## 📂 Estrutura do Projeto
```
tokio-bank-ui/
│── src/
│   ├── api/                            # Comunicação com a API
│   │   ├── transferenciaService.js
│   ├── components/                      # Componentes reutilizáveis
│   │   ├── TransferenciaForm.vue
│   │   ├── TransferenciaList.vue
│   ├── pages/                           # Páginas principais
│   │   ├── HomeView.vue
│   │   ├── AgendarTransferencia.vue
│   │   ├── ExtratoTransferencias.vue
│   ├── router/                          # Configuração das rotas
│   │   ├── index.js
│   ├── store/                           # Estado global (Pinia)
│   │   ├── transferenciaStore.js
│   ├── App.vue
│   ├── main.js
│── public/
│── package.json
│── vite.config.js
```

## 🚀 Como Executar o Projeto
### 1️⃣ **Clonar o repositório**
```sh
git clone https://github.com/seu-usuario/tokio-bank-ui.git
cd tokio-bank-ui
```

### 2️⃣ **Instalar as dependências**
```sh
npm install
```

### 3️⃣ **Executar o projeto**
```sh
npm run dev
```
A aplicação estará disponível em: **http://localhost:5173**

## 🛠️ Configuração do Backend (API)
Certifique-se de que a API **Tokio Bank** esteja rodando antes de iniciar o frontend.

### 📌 Configuração do Axios (`src/api/transferenciaService.js`)
```js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/transferencias'
});

export const agendarTransferencia = (transferencia) => api.post('/', transferencia);
export const listarTransferencias = () => api.get('/');
```

## 📌 Funcionalidades Implementadas
- ✅ Agendar transferência
- ✅ Listar transferências agendadas
- ✅ Exibir extrato de transferências

## 🛠️ Testes
Para rodar os testes unitários:
```sh
npm run test
```

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e contribuir!
