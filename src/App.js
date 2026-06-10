import React from 'react';
import './App.css';

function MathCard(props) {
  return (
    <div className={`math-card ${props.category}`}>
      <div className="card-header">
        <span className="badge-category">{props.category === 'datar' ? '2D' : '3D'}</span>
        <h3>{props.name}</h3>
      </div>
      <p className="definition">"{props.definition}"</p>
      <div className="formula-box">
        {props.formulas.map((f, index) => (
          <div key={index} className="formula-line">
            <strong>{f.label}:</strong> <code>{f.value}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const bangunDatarList = [
    {
      name: 'Persegi',
      definition: 'Bangun datar dua dimensi yang dibentuk oleh empat buah rusuk yang sama panjang.',
      formulas: [
        { label: 'Luas (L)', value: 'sisi x sisi' },
        { label: 'Keliling (K)', value: '4 x sisi' }
      ]
    },
    {
      name: 'Segitiga',
      definition: 'Bangun datar yang dibentuk oleh tiga buah sisi dan memiliki tiga buah titik sudut.',
      formulas: [
        { label: 'Luas (L)', value: '1/2 x alas x tinggi' },
        { label: 'Keliling (K)', value: 'sisi A + sisi B + sisi C' }
      ]
    },
    {
      name: 'Persegi Panjang',
      definition: 'Bangun datar dua dimensi yang dibentuk oleh dua pasang sisi yang masing-masing sama panjang dan sejajar dengan pasangannya.',
      formulas: [
        { label: 'Luas (L)', value: 'panjang x lebar' },
        { label: 'Keliling (K)', value: '2 x (panjang + lebar)' }
      ]
    },
    {
      name: 'Lingkaran',
      definition: 'Himpunan semua titik pada bidang dalam jarak tertentu yang disebut jari-jari dari titik pusat.',
      formulas: [
        { label: 'Luas (L)', value: 'pi x r x r' },
        { label: 'Keliling (K)', value: '2 x pi x r' }
      ]
    },
    {
      name: 'Trapesium',
      definition: 'Bangun datar dua dimensi yang dibentuk oleh empat buah rusuk yang dua di antaranya saling sejajar namun tidak sama panjang.',
      formulas: [
        { label: 'Luas (L)', value: '1/2 x (sisi sejajar A + B) x tinggi' },
        { label: 'Keliling (K)', value: 'sisi A + sisi B + sisi C + sisi D' }
      ]
    }
  ];

  const bangunRuangList = [
    {
      name: 'Kubus',
      definition: 'Bangun ruang tiga dimensi yang dibatasi oleh enam bidang sisi berbentuk bujur sangkar.',
      formulas: [
        { label: 'Volume (V)', value: 'sisi x sisi x sisi' },
        { label: 'Luas Permukaan (LP)', value: '6 x (sisi x sisi)' }
      ]
    },
    {
      name: 'Balok',
      definition: 'Bangun ruang tiga dimensi yang dibentuk oleh tiga pasang persegi panjang yang saling berhadapan.',
      formulas: [
        { label: 'Volume (V)', value: 'panjang x lebar x tinggi' },
        { label: 'Luas Permukaan (LP)', value: '2 x (pl + pt + lt)' }
      ]
    },
    {
      name: 'Tabung',
      definition: 'Bangun ruang tiga dimensi yang dibentuk oleh dua buah lingkaran identik yang sejajar dan sebuah persegi panjang yang mengelilingi kedua lingkaran tersebut.',
      formulas: [
        { label: 'Volume (V)', value: 'pi x r x r x tinggi' },
        { label: 'Luas Permukaan (LP)', value: '2 x pi x r x (r + tinggi)' }
      ]
    },
    {
      name: 'Kerucut',
      definition: 'Bangun ruang limas istimewa yang beralaskan lingkaran dan memiliki satu titik puncak.',
      formulas: [
        { label: 'Volume (V)', value: '1/3 x pi x r x r x tinggi' },
        { label: 'Luas Permukaan (LP)', value: '(pi x r x r) + (pi x r x s)' }
      ]
    },
    {
      name: 'Bola',
      definition: 'Bangun ruang tiga dimensi yang dibentuk oleh tak hingga lingkaran berjari-jari sama panjang dan berpusat pada satu titik yang sama.',
      formulas: [
        { label: 'Volume (V)', value: '4/3 x pi x r x r x r' },
        { label: 'Luas Permukaan (LP)', value: '4 x pi x r x r' }
      ]
    }
  ];

  return (
    <div className="App">
      <header className="hero-section">
        <h1>Materi Pembelajaran Matematika</h1>
        <h2>Bangun Datar dan Bangun Ruang</h2>
        <p className="tagline">Eksplorasi rumus dan definisi matematika dengan visual yang menyenangkan.</p>
      </header>

      <main className="container">
        <section className="math-section">
          <div className="section-title">
            <div className="icon-circle datar-icon"></div>
            <h2>Kategori: Bangun Datar</h2>
          </div>
          <div className="math-grid">
            {bangunDatarList.map((bangun, idx) => (
              <MathCard 
                key={idx}
                category="datar"
                name={bangun.name}
                definition={bangun.definition}
                formulas={bangun.formulas}
              />
            ))}
          </div>
        </section>

        <section className="math-section">
          <div className="section-title">
            <div className="icon-circle ruang-icon"></div>
            <h2>Kategori: Bangun Ruang</h2>
          </div>
          <div className="math-grid">
            {bangunRuangList.map((bangun, idx) => (
              <MathCard 
                key={idx}
                category="ruang"
                name={bangun.name}
                definition={bangun.definition}
                formulas={bangun.formulas}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="math-footer">
        <p>Gibran Saputra @2026</p>
      </footer>
    </div>
  );
}

export default App;