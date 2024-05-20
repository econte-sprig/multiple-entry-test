import { CLICK_LOGGER_NAME, ClickLogger, MOUSE_LOGGER_NAME, Module, MouseLogger } from "../types/types";

let registeredModules: Module[] = [];
export const ModuleRegistry = {
  RegisterModules: (...modules: Module[]) => {
    console.log('Registered: '  + modules.map((m) => m.name).join(', '));
    registeredModules = [...registeredModules, ...modules];
  },

  ClickLogger: () => {
    return registeredModules.find((m) => m.name === CLICK_LOGGER_NAME) as (ClickLogger | undefined);
  },

  MouseLogger: () => {
    return registeredModules.find((m) => m.name === MOUSE_LOGGER_NAME) as (MouseLogger | undefined);
  },
};
