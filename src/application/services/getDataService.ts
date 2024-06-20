import { User } from "@/domain/entities/user";
import { GetUsersRepository } from "@/infrastructure/repositories/users/getUsers/getUsers.type";

export interface GetDataServiceInput {
  getUsersRepository: GetUsersRepository;
}

export interface GetDataServiceOutput {
  userList: User[];
}

export const getDataService = async (
  port: GetDataServiceInput
): Promise<GetDataServiceOutput> => {
  const users = await port.getUsersRepository();
  const filteredUsers = users.filter((user) => user.id !== 2);
  return { userList: filteredUsers };
};
