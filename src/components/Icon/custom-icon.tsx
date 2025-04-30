import { SVGAttributes } from "react";
import * as icons from "./Icon";

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps extends SVGAttributes<SVGElement> {
    icon: IconType;
    width?: number;
    height?: number;
    fill?: string;
    visible?: boolean;
}

export default function Icon({ icon, width, height, fill = "none", visible = true,  ...props }: IconProps) {
    const SVGIcon = icons[icon];
    return <SVGIcon width={width || 24} height={height || 24} fill={fill} {...props} display={visible ? "": "none"}/>;
}

Icon.defaultProps = {
    width: 24,
    height: 24,
};
