import { jsx as _jsx } from "react/jsx-runtime";
export const ImageAccordionContent = ({ styles = "", children }) => {
    return (_jsx("div", { className: `${styles} absolute z-10 bottom-6 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out `, children: children }));
};
