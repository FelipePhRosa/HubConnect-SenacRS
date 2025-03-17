import prismaClient from "../../src/prisma";

interface CreateUserProps{
    name: string;
    email: string;
    password: string;
    role: string;
}

class CreateUserService{
    async execute({name, email, password, role}: CreateUserProps){
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {email}
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        if(!name || !email || !password || !role){
            throw new Error("Information Incomplete.")
        }	

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password,
                role,
            }
        })

        return user
    }
}

export { CreateUserService}