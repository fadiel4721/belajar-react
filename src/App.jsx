import { useLayoutEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Homepage from './component/HomePage';

const user = {
  name: 'Fadiel Muhammad',
  imageUrl: 'https://picfiles.alphacoders.com/338/thumb-1920-338146.png',
  imageSize: 190,
};
const TierMLBB = [
  { rank: 'Epic', isTier: false, id: 1 },
  { rank: 'Legend', isTier: false, id: 2 },
  { rank: 'Mytic', isTier: false, id: 3 },
  { rank: 'Honor', isTier: false, id: 4 },
  { rank: 'Glory', isTier: false, id: 5 },
  { rank: 'Immortal', isTier: true, id:6 },
  
]
const products = [
  { title: 'Kubis', isFruit: false, id: 1 },
  { title: 'Bawang Putih', isFruit: false, id: 2 },
  { title: 'Apel', isFruit: true, id: 3 },
];

const bajus = [
  { outfit: 'kemeja', isPake: true, id:1},
  { outfit: 'sepatu', isPake: false, id:2},
  { outfit: 'levis', isPake: true, id:3},
]
function OutfitSekarang({ bajus }) {
  return (
    <ul>
      {bajus.map((baju ) => (
      <li
          key={baju.id}
          style={{
            color: baju.isPake ? 'blue' : 'black',
          }}
      
        >
          
          {baju.outfit}
      </li>
      ))}
    </ul>
  );
}
function ShoppingList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li
          key={product.id}
          style={{
            color: product.isFruit ? 'magenta' : 'darkgreen',
          }}
        >
          {product.title}
        </li>
      ))}
    </ul>
  );
}
function TierMLBBList({ TierMLBB }) {
  return (
    <ul>
      {TierMLBB.map((tier) => (
        <li
          key={tier.id}
          style={{
            color: tier.isTier ? 'white' : 'darkgreen',
          }}
          >
          {tier.rank}
          {tier.isTier && (
            <img
            src="/images/immortal.png" 
            alt={`${tier.rank} image`}
            style={{
              width: 50,
              height: 50,
              // marginLeft: 10,
              // marginBottom:10,
            }}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

function MyButton3() {
  function handleClick() {
    alert('Anda mengeklik saya!');
  }

  return <button onClick={handleClick}>Klik Saya</button>;
}

function MyButton4() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Diklik {count} kali</button>;
}

function Header() {
  return (
    <div>
      <h1>Belajar React</h1>
    </div>
  );
}

function Bottom({ name }) {
  return (
    <div>
      <h1>Hari Pertama{name}</h1>
    </div>
  );
}

function MyButton() {
  return <button>Saya adalah tombol</button>;
}

function AboutPage() {
  return (
    <>
      <h1>Tentang</h1>
      <p>Halo.<br />Apa kabar?</p>
    </>
  );
}

function ReactTest({ name }) {
  return <h1>Halo{name}</h1>;
}

function MyButton5({ count, onClick }) {
  return <button onClick={onClick}>Diklik {count} kali</button>;
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>Penghitung yang diperbarui bersamaan</h1>
     
        <MyButton5 count={count} onClick={handleClick} />
        <p></p>
        <MyButton5 count={count} onClick={handleClick} />
        <ShoppingList products={products} />
        <TierMLBBList TierMLBB={TierMLBB}/>
        <Header />
        <Homepage />
        <AboutPage />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ReactTest name=" Teknologi Informasi" />
      <h1>Vite + Belajar React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
       ini minus 
        </button>
        <p></p>
        <button onClick={() => setCount((count) => count + 1)}>
        ini tambah  
        </button>
        <p></p>
        <button onClick={() => setCount((count) => count = 0)}>
        ini reset 
        </button>
        <h1> {count}</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Bottom name=" React" />
        <MyButton />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyButton3 />
      <p></p>
      <MyButton4 />
      <OutfitSekarang bajus={bajus}/>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

export default App;
