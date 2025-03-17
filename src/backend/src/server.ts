import fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';


const server = fastify({ logger: true});

const start = async () => {

    server.setErrorHandler((error, request, reply) => {
        reply.code(400).send({ message: error.message });
    })

    await server.register(cors);
    await server.register(routes);

    try{
        await server.listen({ port: 5173 });
    }catch(error){
        process.exit(1);
    }
}

start();