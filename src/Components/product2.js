const Product2 = (props) => {
    const product = props.product;
    const description = product.map((listItem) =>
        <li>{listItem}</li>
    );   

    return (
        <ul>{description}</ul>
    )
}

const product2 = ['Name: Blue Sneakers', 'Colour: Blue', 'Material: Canvasr', 'Sizes: 7-11'];

const ProductCard2 = () => {
    return(
    <div>
        <img src='https://www.pngitem.com/pimgs/m/130-1301665_shoes-air-jordan-shoe-sneakers-cartoon-clipart-shoes.png' class='prod_image'></img>
        <ul>
            <Product2 product={product2} />
        </ul>
    </div>
    )
}

export default ProductCard2;