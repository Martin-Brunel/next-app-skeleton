import { User } from "@/domain/entities/user";

export type GetUsersRepository = () => Promise<User[]>