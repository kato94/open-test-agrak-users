import presetUno from "@unocss/preset-uno";
import presetIcons from '@unocss/preset-icons';
import { defineConfig } from "unocss";
import { ModalOptions, MODAL_OPTIONS } from "./src/components/Modal/options";

const generateButtonColors = (modal: ModalOptions): string[] => {
  const types = Object.values(modal);

  const newArr: string[] = types.map((item) => ([
    `bg-${item.color}-500`,
    `shadow-${item.color}-500/70`,
    `hover:shadow-${item.color}-500/40`,
    `c-${item.color}-500`,
    `i-${item.icon}`,
  ])).flat();

  return newArr;
};

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
  ],

  safelist: [
    ...generateButtonColors(MODAL_OPTIONS),
  ],
});
