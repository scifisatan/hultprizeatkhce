import React, { ReactNode } from 'react';

interface SectionProps {
  id :string,
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="container">
        {children}
        </div>
    </section>
  )
}

export default Section