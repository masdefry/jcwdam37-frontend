// PROPS/PROPERTY   : Mirip seperti parameter di function, untuk menerima argument dari luar

export default function ProgramCard(props: any) {
  return (
    <div
      style={{
        border: '1px solid #eee',
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <img
        src='https://cms.purwadhika.com/uploads/jc_landing_cards_data_88289ce8f8.jpg'
        alt='Ini image'
        style={{ width: '100%', height: 160, objectFit: 'cover' }}
      />

      {/* Content */}
      <div style={{ padding: 16, flex: 1 }}>
        <h3 style={{ margin: '0 0 8px' }}>{props?.title}</h3>

        {/* Badge */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <span
            style={{
              border: '1px solid #ccc',
              borderRadius: 12,
              padding: '4px 10px',
              fontSize: 12,
            }}
          >
            On Campus
          </span>
          <span
            style={{
              border: '1px solid #ccc',
              borderRadius: 12,
              padding: '4px 10px',
              fontSize: 12,
            }}
          >
            3 Bulan
          </span>
        </div>

        <p style={{ fontSize: 14, color: '#555' }}>{props?.desc}</p>
      </div>

      {/* Button */}
      <button
        style={{
          padding: '10px 0',
          backgroundColor: '#2EB872',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        Hubungi Kami
      </button>
    </div>
  );
}
