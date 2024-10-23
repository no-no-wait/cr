import { FC, ReactNode } from 'react';

import s from './Wrapper.module.scss';

interface WrapperProps {
    children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className={s.root}>{children}</div>
  )
}
