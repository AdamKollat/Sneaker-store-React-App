import ProductCard from "./product_description";

const Products = () => {
    return(
        <div class='product_container'>
            <h3>Protucts 'ere</h3>
            <br />
            <div class='product_card'>
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </div>
        </div>
    )
}

export default Products;