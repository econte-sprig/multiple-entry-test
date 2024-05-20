import { ModuleRegistry } from "../registry.ts";

export const attach = (e: HTMLElement) => {
  console.log('attaching');
  const cm = ModuleRegistry.ClickLogger();
  if (cm) cm.attach(e);

  const mm = ModuleRegistry.MouseLogger();
  if (mm) mm.attach(e);
};
