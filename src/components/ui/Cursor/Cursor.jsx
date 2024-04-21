import React, { useEffect, useState } from 'react';
import s from './style.module.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      <div className={s.cursor1} style={{ top: position.y - 15, left: position.x - 15 }}></div>
      <div className={s.cursor2} style={{ top: position.y - 30, left: position.x - 32 }}></div>
    </>
  );
};

export default Cursor;