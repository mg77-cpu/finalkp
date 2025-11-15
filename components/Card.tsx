import React, { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`package ${className}`}>
      <div className="package2">
        {children}
      </div>
    </div>
  );
};

export default Card;