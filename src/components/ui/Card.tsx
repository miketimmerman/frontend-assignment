type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => (
  // TODO add class merge utility
  <div className={`bg-white p-4 rounded ${className}`}>{children}</div>
);
export default Card;
