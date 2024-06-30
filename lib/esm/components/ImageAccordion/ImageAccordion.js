import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ImageAccordionItem } from './ImageAccordionItem';
export const ImageAccordion = ({ children, styles = "", ...rest }) => {
    return (_jsx("div", { className: ` ${styles} w-[1080px] h-[250px] flex overflow-hidden my-[50px] mx-auto `, ...rest, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && (child.type === ImageAccordionItem)) {
                return child;
            }
            return null;
        }) }));
};
