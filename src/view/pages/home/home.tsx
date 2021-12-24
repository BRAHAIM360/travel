import * as React from 'react';
import About from '../../components/about';
import Categories from '../../components/categories';
import Footer from '../../components/footer';
import Homesec from '../../components/homeSec';
import Navbar from '../../components/navbar';
import Newsletter from '../../components/newsletter';
import Packeges from '../../components/packeges';
import Reviews from '../../components/reviews';
import Search from '../../components/search';
import Services from '../../components/services';
import Shop from '../../components/shop';

export interface homeProps {

}

export const Home: React.FC<homeProps> = ({ }) => {
  const [scrol, setScrol] = React.useState(0);


  const [active, setActive] = React.useState("")
  const [search, setSearch] = React.useState("")


  return (
    <>
      <Navbar active={active} setActive={setActive} setSearch={setSearch} />
      <Search search={search} setSearch={setSearch} />
      <Homesec />
      <Categories />
      <About />
      <Shop />
      <Packeges />
      <Services />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}