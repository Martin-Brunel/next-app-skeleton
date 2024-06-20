import { User } from "@/domain/entities/user";
import { GetUsersRepository } from "./getUsers.type";

export const getUsersRepository: GetUsersRepository = async (): Promise<User[]> => {
    return [{
      id: 1,
      email: "foo@bar.com",
      name: "foobar"
    }, {
      id: 2,
      email: "bob@alice.com",
      name: "bobalice"
    }];
  };
