import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { ImageAccordionContent } from './ImageAccordionContent';
export const ImageAccordionItem = ({ styles = "", imageStyles = "", children, src = "https://images.unsplash.com/photo-1536974735554-66bfa1ede9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", alt = "" }) => {
    return (_jsxs("div", { className: `${styles} relative w-1/5 p-5 transition-[width] duration-500 ease-in-out group hover:w-4/5 `, children: [_jsx("img", { src: src, alt: alt, className: `${imageStyles} absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-60 ` }), React.Children.map(children, (child) => {
                if (React.isValidElement(child) && (child.type === ImageAccordionContent)) {
                    return child;
                }
                return null;
            })] }));
};
