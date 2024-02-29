type BadgeProps = {
  className: string;
  text: string;
}

const Badge = ({ className, text }: BadgeProps): JSX.Element => (
  <div className={className}>
    <span>{text}</span>
  </div>
);

export default Badge;
