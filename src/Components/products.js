import ProductCard from "./product_description";

const Products = () => {
    return(
        <div class='products'>
            <h3>Protucts 'ere</h3>
            <br />
            <div class='header'>
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </div>
        </div>
    )
}

export default Products;