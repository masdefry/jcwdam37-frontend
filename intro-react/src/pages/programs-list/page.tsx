import { useState } from 'react';
import ProgramCard from '../../components/ProgramCard';

export default function ProgramListPage() {
  const [programs, setPrograms] = useState([]);

  return (
    <>
      <h1>Pilihan Program Purwadhika</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(260px, 1fr))',
          gap: 20,
        }}
      >
        <ProgramCard
          title='Digital Marketing'
          desc='abc'
        />
        <ProgramCard
          title='AI Software'
          desc='bca'
        />
        <ProgramCard
          title='Data Science'
          desc='xyz'
        />
        <ProgramCard
          title='Visual Design'
          desc='zyx'
        />
      </div>
    </>
  );
}
