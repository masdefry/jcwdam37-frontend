import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function EffectPage() {
  const [number, setNumber] = useState<number>(0);
  const [bebas, setBebas] = useState<any>('');

  // Trigger 1x after rendering UI
  useEffect(() => {
    console.log('useEffect-01');
  }, []);

  useEffect(() => {
    console.log('useEffect-02');
  }, [number]);

  useEffect(() => {
    return () => {
      console.log('useEffect-03');
    };
  }, []);

  return (
    <>
      {console.log('rendering')}
      <h1>Use Effect</h1>
      <button onClick={() => setNumber(1)}>Change Number</button>
      <NavLink to='/react-hooks/use-state'>Go to use state page</NavLink>
    </>
  );
}
