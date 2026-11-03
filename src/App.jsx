import ProductCard from './ProductCard'
import './App.css'

function App() {
  return (
    <div className="shop">
      <header><a className="logo" href="#">desk<span>shop</span>.</a><span>Маленькие вещи для больших идей</span></header>
      <main>
        <section className="intro">
          <p className="eyebrow">ТВОЁ РАБОЧЕЕ ПРОСТРАНСТВО</p>
          <h1>Собери свой<br /><span>идеальный стол.</span></h1>
          <p className="intro-text">Удобные, красивые и просто любимые вещи.<br />Всё, чтобы работать и учиться с удовольствием.</p>
          <a className="catalog-link" href="#catalog">Смотреть коллекцию ↗</a>
          <div className="sticker" aria-hidden="true">work<br />in comfort<span>✳</span></div>
        </section>
        <section id="catalog" className="catalog">
          <div className="section-heading"><h2>На твоём столе</h2><span>Коллекция / 05 вещей</span></div>
          <div className="products">
            <ProductCard name="Наушники" price={3990} image="/products/headphones.jpg" category="Когда включил любимый трек" color="peach" />
            <ProductCard name="Клавиатура" price={5490} image="/products/keyboard.jpg" category="Я и дедлайн через пять минут" color="lavender" />
            <ProductCard name="Настольная лампа" price={2490} image="/products/lamp.jpg" category="Когда наконец понял useState" color="yellow" />
            <ProductCard name="Кружка" price={890} image="/products/mug.jpg" category="Кофе или ещё немного поспать?" color="pink" />
            <ProductCard name="Блокнот" price={690} image="/products/notebook.jpg" category="План был хорош. Почти." color="green" />
          </div>
        </section>
      </main>
      <footer><span className="logo">desk<span>shop</span>.</span><p>Хороший день начинается с уютного стола.</p><span>Лабораторная работа №1 · React</span></footer>
    </div>
  )
}

export default App
