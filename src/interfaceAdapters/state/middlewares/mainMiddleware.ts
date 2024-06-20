import { MainType } from "@/interfaceAdapters/state/actions/main";
import { RootState } from "@/interfaceAdapters/state/store";
import { AnyAction } from "@/types/action";
import { Middleware } from "@reduxjs/toolkit";
import { getUsersRepository } from "@/infrastructure/repositories/users/getUsers/getUsers.repository";
import { setMainState } from "@/interfaceAdapters/state/reducers/mainReducer";
import { getDataService } from "@/application/services/getDataService";

const mainMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action) => {
    const type = (action as AnyAction<MainType>).type;
    switch (type) {
      case MainType.GET_DATA:
        try {
          const port = await getDataService({ getUsersRepository });
          store.dispatch(
            setMainState({
              users: port.userList,
            })
          );
        } catch {}
        next(action);
        break;
      default:
        next(action);
    }
  };

export default mainMiddleware;
