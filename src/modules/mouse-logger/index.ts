import { ModuleRegistry } from "../registry.ts";
import { MouseLogger } from "../types/types";

const Module: MouseLogger = {
  name: "mouse-logger",
  attach: function (elem: HTMLElement): void {
    elem.addEventListener('mouseenter', () => {
      console.log('mouseenter');
    });
  },
};
ModuleRegistry.RegisterModules(Module);

export default Module;