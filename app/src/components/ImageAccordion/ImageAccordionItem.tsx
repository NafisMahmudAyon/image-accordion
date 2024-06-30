import React, { ReactElement } from 'react'
import {ImageAccordionContent} from './ImageAccordionContent';
import {ImageAccordionImage} from './ImageAccordionImage';

interface ImageAccordionItemProps {
  styles?: string;
  children: ReactElement | ReactElement[];
  // active?: number;
  // orientation?: 'horizontal' | 'vertical';
  // navWrapStyles?: string;
  // panelWrapStyles?: string;
}

export const ImageAccordionItem: React.FC<ImageAccordionItemProps> = ({styles="", children}) => {
  return (
    <div className={`${styles}`}>
      {React.Children.map(children, (child: React.ReactElement) => {
        if (React.isValidElement(child) && (child.type === ImageAccordionImage)) {
          return child;
        }
        return null;
      })}
      {React.Children.map(children, (child: React.ReactElement) => {
        if (React.isValidElement(child) && (child.type === ImageAccordionContent)) {
          return child;
        }
        return null;
      })}
    </div>
  )
}
