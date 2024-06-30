import React, { ReactElement } from 'react';
interface ImageAccordionItemProps {
    styles?: string;
    imageStyles?: string;
    children: ReactElement | ReactElement[];
    src?: string;
    alt?: string;
}
export declare const ImageAccordionItem: React.FC<ImageAccordionItemProps>;
export {};
