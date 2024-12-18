import { FC } from 'react';

interface HeaderProps {
  title: string;
  description: string;
}

export const Header: FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{description}</p>
    </div>
  );
};