import CSS from "csstype";

export interface CSSProperties extends CSS.Properties<string> {}

export type ISection = VSE.ISection<CSSProperties>;
export type IComponent = VSE.IComponent<CSSProperties>;
export type IComponentDefault = Omit<IComponent, "id">;

