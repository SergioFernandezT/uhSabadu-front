const sliderStyle =  {
  aspectRatio: "16 / 9",
  width: "50%",
  position: "relative",
  display: "flex",
  margin: "0 auto",
  overflow: "scroll",
  scrollSnapType: "x mandatory"
}

export default function Home() {
  return (
    <main>
        <div className="slider-container" style={sliderStyle}>
          <div className="slider">
            <img src="/images/carru1.jpg" alt="Imagen 1" />
            <img src="/images/carru2.jpg" alt="Imagen 2" />
            <img src="/images/carru3.jpg" alt="Imagen 3" />
            <img src="/images/carru4.jpg" alt="Imagen 4" />
            <img src="/images/carru5.jpg" alt="Imagen 5" />
            <img src="/images/carru6.jpg" alt="Imagen 6" />
          </div>
        </div>
        <h1>PRODUCTOS DESTACADOS</h1>
        <div className="productos-destacados">
          <div className="card">
            <img src="/images/oferta1.jpg" alt="Producto 1" />
            <p>Oferta 1</p>
            <p>$???</p>
          </div>
          <div className="card">
            <img src="/images/oferta2.jpg" alt="Producto 2" />
            <p>Oferta 2</p>
            <p>$???</p>
          </div>
          <div className="card">
            <img src="/images/oferta3.jpg" alt="Producto 3" />
            <p>Oferta 3</p>
            <p>$???</p>
          </div>
          <div className="card">
            <img src="/images/oferta4.jpg" alt="Producto 4" />
            <p>Oferta 4</p>
            <p>$???</p>
          </div>
        </div>

        <div className="marcas flex flex-row w-screen justify-around items-center my-11">
          <img className="w-1/5 h-fit" src="/images/marca1.png" alt="Marca 1" />
          <img className="w-1/5 h-fit" src="/images/marca2.png" alt="Marca 2" />
          <img className="w-1/5 h-fit" src="/images/marca3.png" alt="Marca 3" />
          <img className="w-1/5 h-fit" src="/images/marca4.png" alt="Marca 4" />
        </div>
      </main>
  )
}
