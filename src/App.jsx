import "./App.css";
import Article from "./components/Article";
import ProductItem from "./components/ProductItem";

function App() {
  // Membuat variable yang berisi tentang array object
  // const data = [
  //   {
  //     namaProduk: "Yupi",
  //     harga: "500",
  //     deskripsi: "permen",
  //   },
  //   {
  //     namaProduk: "Kapas",
  //     harga: "1000",
  //     deskripsi: "Tumbuhan",
  //   },
  // ];

  return (
    <>
      <div className="App">
        {/** Perulangan untuk menampilkan array */}
        {/* {data.map((d) => {
          return (
            <ProductItem
              namaProduk={d.namaProduk}
              harga={d.harga}
              deskripsi={d.deskripsi}
            />
          );
        })} */}
        {/** Cara hardcode untuk memanggil component dari parameter */}
        {/* <ProductItem namaProduk="Yupi" harga="500" deskripsi="Permen" />
        <ProductItem namaProduk="Yupi" harga="500" deskripsi="Permen" />
        <ProductItem namaProduk="Yupi" harga="500" deskripsi="Permen" />
        <ProductItem namaProduk="Yupi" harga="500" deskripsi="Permen" />
        <ProductItem namaProduk="Yupi" harga="500" deskripsi="Permen" /> */}
        <Article /> {/** Komponen dipanggil */}
      </div>
    </>
  );
}

export default App;
