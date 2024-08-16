import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";
import cors from '@fastify/cors';

const app: FastifyInstance = fastify({ logger: true });

// Configurando o CORS para permitir requisições do domínio especificado
app.register(cors, {
    origin: 'https://self-kjg0or20x-kauanvoltzfagundes-projects.vercel.app/', // Permite apenas requisições desse domínio
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
});

// Registrando as rotas com prefixo '/users'
app.register(userRoutes, {
    prefix: '/users',
});

app.listen(
    {
        port: 3000,
        host: '0.0.0.0', // Escutando em todas as interfaces de rede disponíveis
    },
    () => console.log("Server running on port 3000")
);
