export interface User {
    id: string
    email: string
    name: string
}

export interface UserCreate {
    name: string
    email: string
}
export interface UserRepository {
    create(data: UserCreate): Promise<User>
}