import { ReactElement } from "react";

interface ImageAccordionContentProps {
  styles?: string;
  children: ReactElement | ReactElement[];
  // active?: number;
  // orientation?: 'horizontal' | 'vertical';
  // navWrapStyles?: string;
  // panelWrapStyles?: string;
}

export const ImageAccordionContent: React.FC<ImageAccordionContentProps> = ({styles="", children}) => {
  return (
    <div className={`${styles} absolute z-10 bottom-6 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out `}>
      {children}
    </div>
  )
}
