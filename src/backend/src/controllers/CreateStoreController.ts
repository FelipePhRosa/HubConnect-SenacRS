import { PrismaClient } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";

const prisma = new PrismaClient();

export class CreateStoreController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, ownerId } = request.body as { name: string; ownerId: string };

        if (!name || !ownerId) {
            return reply.status(400).send({ error: "Nome da loja e ID do dono são obrigatórios" });
        }

        try {

            const store = await prisma.store.create({
                data: {
                    name,
                    ownerId,
                    description: "",
                },
            });

            return reply.status(201).send(store);
        } catch (error) {
            return reply.status(500).send({ error: "Erro ao criar loja" });
        }
    }
}
