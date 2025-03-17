import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { CreateStoreController } from "./controllers/CreateStoreController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return { hello: "world" }
    } )

    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    })

    fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUserController().handle(request, reply)
    })

    fastify.delete("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply)
    })

    fastify.post("/store", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateStoreController().handle(request, reply)
    })

}