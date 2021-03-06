export const CSS_PROPERTY_CAN_BE_COVERTED_WITH_UNIT = [
  "width",
  "height",
  "top",
  "left",
  "bottom",
  "right",
  "fontSize",
];

export type InlineStyleUnit = "px" | "rem" | "%";

export function addInlineStyleUnit(value: number, unit: InlineStyleUnit) {
  return `${value}${unit}`;
}

export function removeInlineStyleUnit(value: string): number {
  return value ? parseInt(value, 10) : 0;
}

export function convertInlineStyle(styles: any) {
  const current: any = {};
  if (styles) {
    Object.keys(styles).forEach((key: string) => {
      if (CSS_PROPERTY_CAN_BE_COVERTED_WITH_UNIT.includes(key)) {
        current[key] = addInlineStyleUnit(styles[key], "px");
      } else {
        current[key] = styles[key];
      }
    });
  }
  return current;
}
