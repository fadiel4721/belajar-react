import "./App.css";

function Cases() {
  return (
    <>
      <h1>Study Cases</h1>
      <div className="card">
        <ol style={{ margin: "0", padding: "0" }}>
          <li style={{ marginBottom: "1rem" }}>
            Form Login
            <br />
                      <small>Buat form login sederhana dimana user memasukkan email dan password (tanpa validasi),
                          
                          kemudian ketika menekan tombol login, maka menuju halaman todo list</small>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            Todo List
            <br />
                      <small>Buat todo list sederhana dimana user dapat menambahkan, mengubah, dan menghapus todo list,
                          kemudian ketika menekan tombol next, maka menuju halaman shopping cart</small>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            Shopping Cart
            <br />
                      <small>Buat shopping cart sederhana dimana user dapat menambahkan, mengubah,
                          dan menghapus item dengan ada perhitungan harga, kemudian ketika menekan tombol next, 
                          maka menuju halaman done dimana hanya akan memunculkan tulisan &quot;Studi Kasus Selesai&quot;</small>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Cases;
