import { getUsersMock } from "@/infrastructure/repositories/users/getUsers/getUsers.mock";
import { getDataService } from "../getDataService";

describe("GetDataService", () => {
  test("Is result not empty", async () => {
    const list = await getDataService({ getUsersRepository: getUsersMock });
    expect(list.userList.length > 0).toBe(true);
  });

  test("should filter out the user with id 2", async () => {
    const list = await getDataService({ getUsersRepository: getUsersMock });
    expect(list.userList).toStrictEqual([
      {
        id: 1,
        email: "foo@bar.com",
        name: "foobar",
      },
    ]);
  });
});
