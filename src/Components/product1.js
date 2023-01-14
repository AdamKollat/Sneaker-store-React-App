const Product1 = (props) => {
    const product = props.product;
    const description = product.map((listItem) =>
        <li>{listItem}</li>
    );   

    return (
        <ul>{description}</ul>
    )
}

const product1 = ['Name: Red Sneakers', 'Colour: Red', 'Material: Synthetic leather', 'Sizes: 6-12'];

const ProductCard1 = () => {
    return(
    <div>
        <img src='https://www.pngitem.com/pimgs/m/5-53098_transparent-shoe-clipart-jordan-1-drawing-easy-hd.png' class='prod_image'></img>
        <ul>
            <Product1 product={product1} />
        </ul>
    </div>
    )
}

export default ProductCard1;