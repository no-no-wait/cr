import { FC } from 'react'
import cx from 'classnames';

import s from './MarketingInfo.module.scss';

interface MarketingInfoProps {
    headerText: string;
    text: string;
    line: string;
    hpline: string;
    right?: boolean;
    className?: string;
}

export const MarketingInfo: FC<MarketingInfoProps> = ({ headerText, text, line, hpline, right = true, className }) => {
  return (
    <div className={cx(s.root, { [s.start]: !right, [s.end]: right }, className)}>
        <img src={hpline} className={cx(s.tfhp, s.ml, { [s.ml2]: !right })} alt="hp" />
        <div className={cx(s.presaleText, s.ml, { [s.ml2]: !right })}>{headerText}</div>
        <img src={line} className={cx(s.line, { [s.lineLeft]: !right })} alt="line" />
        <div className={cx(s.infoText, s.mt, s.ml, { [s.mt2]: !right, [s.ml2]: !right } )}>{text}</div>
    </div>
  )
}
