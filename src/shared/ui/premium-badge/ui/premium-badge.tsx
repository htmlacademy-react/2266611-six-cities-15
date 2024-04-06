import { memo } from 'react';

type PremiumBadgeProps = {
  sectionName: string;
}

const PremiumBadge = ({ sectionName }: PremiumBadgeProps): JSX.Element => (
  <div className={`${sectionName}__mark`}>
    <span>Premium</span>
  </div>
);

const MemoizedPremiumBadge = memo(PremiumBadge);

export default MemoizedPremiumBadge;
