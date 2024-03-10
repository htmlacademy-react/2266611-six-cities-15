type PremiumBadgeProps = {
  sectionName: string;
}

const PremiumBadge = ({ sectionName }: PremiumBadgeProps): JSX.Element => (
  <div className={`${sectionName}__mark`}>
    <span>Premium</span>
  </div>
);

export default PremiumBadge;
