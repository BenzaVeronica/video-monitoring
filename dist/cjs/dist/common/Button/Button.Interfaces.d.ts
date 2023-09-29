/// <reference types="react" />
export type iconType = "add" | "edit" | "back";
export type variantType = "outline" | "gray";
export interface ButtonProps {
    icon?: iconType;
    variant?: variantType;
    className?: string;
    disabled?: boolean;
    children?: string | JSX.Element;
    onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
}
//# sourceMappingURL=Button.Interfaces.d.ts.map