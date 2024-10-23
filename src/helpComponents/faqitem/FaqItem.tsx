import { FC, ReactNode, useState } from 'react';
import cx from 'classnames';

import s from './Faq.module.scss';

interface FaqItemProps {
    header: string;
    text: string | ReactNode;
}

export const FaqItem: FC<FaqItemProps> = ({ header, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <button className={cx(s.root, { [s.open]: isOpen } )} onClick={toggleMenu}>
        <div className={s.header}>
            <div className={s.header}>{header}</div>
            <svg className={cx(s.crosshair, { [s.rotate]: isOpen })} role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="2px" fill="none" fillRule="evenodd" strokeLinecap="square">
                    <g transform="translate(1.000000, 1.000000)" stroke="white">
                        <path d="M0,11 L22,11">
                        </path>
                        <path d="M11,0 L11,22">
                        </path>
                    </g>
                </g>
            </svg>
        </div>
        <div className={s.mainText}>{text}</div>
    </button>
  )
}
