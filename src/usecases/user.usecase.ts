import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositorys/UserRepositoryPrisma";

class UserUseCase {
    private userRepository: UserRepositoryPrisma;
    constructor() {
        this.userRepository = new UserRepositoryPrisma()
    }
    async create({ name, email }: UserCreate): Promise<User> {

    }
}
export { UserUseCase }