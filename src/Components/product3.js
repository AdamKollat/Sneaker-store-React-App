const Product3 = (props) => {
    const product = props.product;
    const description = product.map((listItem) =>
        <li>{listItem}</li>
    );   

    return (
        <ul>{description}</ul>
    )
}

const product3 = ['Name: Green Sneakers', 'Colour: Green', 'Material: Synthetic leather', 'Sizes: 5-10'];

const ProductCard3 = () => {
    return(
    <div>
        <img src='https://www.pngkey.com/png/detail/5-59806_converse-clipart-hip-hop-shoe-illustration-nike-sneakers.png' class='prod_image'></img>
        <ul>
            <Product3 product={product3} />
        </ul>
    </div>
    )
}

export default ProductCard3;