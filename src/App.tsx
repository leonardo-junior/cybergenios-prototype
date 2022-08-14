function App(): JSX.Element {

  return (
    <>
      <nav>
        <img src="/favicon-32x32.png" />

        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">Fale Conosco</a>
          </li>

          <li>
            <a href="/">Sobre</a>
          </li>

          <li>
            <a href="/">Tabela</a>
          </li>

          <li>
            <a href="/">Entrar</a>
          </li>
        </ul>
      </nav>

      <header>
        <h1>MUSTANG</h1>
      </header>

      <main>
        <div>
          <ul>
            <li>
              <img src="/cars-showcase/car-1.png"></img>
              <p>Car Name</p>
              <p>Year: 2015</p>
              <p>Velocity: 180km/hr</p>
              <p>Potency: 9/10</p>
              <p>User rating: 8/10</p>
            </li>
          </ul>
        </div>

        <article>
          <h1>O que são</h1>

          <p>
            A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo utilitário esportivo. As SUVs costumam ter porte avantajado, além de interior espaçoso e possibilidade de trafegar dentro e fora da cidade.
          </p>
        </article>

        <article>
          <h1>Mustang</h1>

          <p>
            O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.
          </p>
        </article>
      </main>
    </>
  )
}

export default App


