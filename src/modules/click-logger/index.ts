import { ModuleRegistry } from "../registry.ts";
import { ClickLogger } from "../types/types";

const Module: ClickLogger = {
  name: "click-logger",
  attach: function (elem: HTMLElement): void {
    elem.addEventListener('click', () => {
      console.log('click');
    });
  },
};
ModuleRegistry.RegisterModules(Module);

export default Module;