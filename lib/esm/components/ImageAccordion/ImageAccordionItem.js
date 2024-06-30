import { jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { ImageAccordionContent } from './ImageAccordionContent';
import { ImageAccordionImage } from './ImageAccordionImage';
export const ImageAccordionItem = ({ styles = "", children }) => {
    return (_jsxs("div", { className: `${styles}`, children: [React.Children.map(children, (child) => {
                if (React.isValidElement(child) && (child.type === ImageAccordionImage)) {
                    return child;
                }
                return null;
            }), React.Children.map(children, (child) => {
                if (React.isValidElement(child) && (child.type === ImageAccordionContent)) {
                    return child;
                }
                return null;
            })] }));
};
