
import React, { ReactElement } from 'react';
import {ImageAccordionItem} from './ImageAccordionItem';

interface ImageAccordionProps {
  styles?: string;
  children: ReactElement | ReactElement[];
  // active?: number;
  // orientation?: 'horizontal' | 'vertical';
  // navWrapStyles?: string;
  // panelWrapStyles?: string;
}

export const ImageAccordion: React.FC<ImageAccordionProps> = ({
  children,
  styles = "",
  ...rest
}) => {

  return (
    <div className={` ${styles} w-[1080px] h-[250px] flex overflow-hidden my-[50px] mx-auto `} {...rest}>
      {React.Children.map(children, (child: React.ReactElement) => {
        if (React.isValidElement(child) && (child.type === ImageAccordionItem)) {
          return child;
        }
        return null;
      })}
    </div>
  );
};
