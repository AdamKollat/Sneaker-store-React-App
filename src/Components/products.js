import ProductCard1 from "./product1";
import ProductCard2 from "./product2";
import ProductCard3 from "./product3";

const Products = () => {
    return(
        <div class='product_container'>
            <h3>Top products:</h3>
            <br />
            <div class='product_card'>
               <ProductCard1 />
               <ProductCard2 />
               <ProductCard3 />
            </div>
        </div>
    )
}

export default Products;