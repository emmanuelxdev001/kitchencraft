import CategoryList from "./Screen/CategoryList";
import ProductListing from "./Screen/ProductsListing";
import Slider from "./Screen/Slider";


const Home = () => {
  return (
    <div>
      <Slider />
      <CategoryList />
      <ProductListing />
    </div>
  );
};

export default Home;
