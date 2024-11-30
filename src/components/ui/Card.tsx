type CardProps = {
  children: React.ReactNode;
};

// TODO add class merge utility
const Card = ({ children }: CardProps) => {
  return <div className="bg-white p-4 rounded">{children}</div>;
};

export default Card;
