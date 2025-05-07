import { Tool } from "ollama";
import ollamaTools from "./tools";

export interface ToolFunction extends Tool {
  execute: (...args: any[]) => Promise<any>;
}

export function getTools() {
  return ollamaTools.filter((item) => "execute" in item) as ToolFunction[];
}

export { ollamaTools };
