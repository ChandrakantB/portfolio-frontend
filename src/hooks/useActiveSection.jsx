import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px', // adjust for earlier trigger
        threshold: 0.1
      }
    );

    const elements = sectionIds.map(id => document.getElementById(id));
    elements.forEach(el => el && observer.observe(el));

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, [sectionIds]);

  return active;
};

export default useActiveSection;
