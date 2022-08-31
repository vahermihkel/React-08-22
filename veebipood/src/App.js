import './App.css';

// ctrl + ä on kommentaaride lisamiseks
// (saan edit -> toggle line comment)
// kommentaarid ei mõjuta koodi
// alt="" <--- alternative text
// 1. kui pildi aadress (src="") on vigane, siis näidatakse pildi asemel
// alternative texti
// 2. pimedad ei näe pilte, neile loetakse ette alt (kohustuslik riigiettevõtetes)
// 3. arendajad (server ei tööta) näevad ka

function App() {
  // <div> ----> division
  // ümbritseja
  // return () sulgude sees peab olema 1 komplekt elemente
  return (
    <div className="App">
      <img className="pilt" alt="Nobe pilt auto" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" />
      <button className="nupp">Vajuta mind</button>
      <div>Ksadasdas</div>
    </div>
  );
}

export default App;
