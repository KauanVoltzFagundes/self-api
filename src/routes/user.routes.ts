import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate } from "../interfaces/user.interface";
export async function userRoutes(fastify: FastifyInstance) {
    const userUseCase = new UserUseCase()

    fastify.post<{ Body: UserCreate }>('/', (req, reply) => {
        const { name, email } = req.body
        try {
            const data = userUseCase.create({
                name,
                email
            })
            return reply.send(data)
        } catch (error) {
            reply.status(500).send({ message: "Internal server error" })
        }
    }),
        fastify.get('/', async (req, reply) => {
            reply.send([
                { id: 1, url: "https://www.futuraexpress.com.br/blog/wp-content/uploads/2020/03/JPG-Alta-Qualidade.jpg" },
                { id: 2, url: "https://tm.ibxk.com.br/2017/07/13/13160112901226.jpg" },
                { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBh19oIPkDvsBPVUj6zXK0x_FshrRugdVkdQ&s" },
                { id: 4, url: "https://www.wikiparques.org/images/8/8c/2017935485904.jpg" }
            ])

        })
}