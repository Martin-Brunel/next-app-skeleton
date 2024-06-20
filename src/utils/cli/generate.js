const fs = require("fs");

const actionName = process.argv.slice(2)[0];

const upperActionName = actionName.toUpperCase();
const camelActionName = `${actionName[0].toUpperCase()}${actionName
  .slice(1)
  .toLowerCase()}`;
const lowerActionName = actionName.toLowerCase();

// creation du fichier action
const actionpath = `src/interfaceAdapters/state/actions/${lowerActionName}.ts`;

if (!fs.existsSync(actionpath)) {
  const textAction = `import { ${camelActionName}State } from "@/interfaceAdapters/state/reducers/${lowerActionName}Reducer";

  export enum ${camelActionName}Type  {
   
  }
  
  `;

  fs.writeFile(actionpath, textAction, (err) => {
    if (err) throw err;
  });
}
// creation du reducer
const reducerpath = `src/interfaceAdapters/state/reducers/${lowerActionName}Reducer.ts`;

if (!fs.existsSync(reducerpath)) {
  const textReducer = `import { ${camelActionName}Type } from '@/interfaceAdapters/state/actions/${lowerActionName}';
  export type ${camelActionName}State = {

  }

  const initialState: ${camelActionName}State= {
  };

  export const ${lowerActionName}Slice = createSlice({
    name: ${lowerActionName},
    initialState,
    reducers: {
      set${camelActionName}State: (state, action: PayloadAction<Partial<${camelActionName}State>>) => ({
        ...state,
        ...action.payload,
      }),
    },
  });

export const { set${camelActionName}State } = ${lowerActionName}Slice.actions;

export default ${lowerActionName}Slice.reducer;
  `;

  fs.writeFile(reducerpath, textReducer, (err) => {
    if (err) throw err;
  });
}

// creation du middleware

const middlewarepath = `src/interfaceAdapters/state/middlewares/${lowerActionName}Middleware.ts`;

if (!fs.existsSync(middlewarepath)) {
  const textMiddleware = `import { RootState } from "@/interfaceAdapters/state/store";
  import { Middleware } from "redux";
  import { AnyAction } from "@/types/action";
  import { ${camelActionName}Type } from "@/interfaceAdapters/state/actions/${lowerActionName}";

  const ${lowerActionName}Middleware: Middleware<{}, RootState> = (store) => (next) => async (action) => {
    const type = (action as AnyAction<${camelActionName}Type>).type;
    switch (type) {
      default:
        next(action);
    }
  };
  
  export default ${lowerActionName}Middleware;
  `;

  fs.writeFile(middlewarepath, textMiddleware, (err) => {
    if (err) throw err;
  });
}
