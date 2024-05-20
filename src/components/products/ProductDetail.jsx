export default function ProductDetail({ id, name, image, description, discount, price }) {
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return (
        <>
            <figure className="product-box_image">
                <img src={`/images/products/${image}`}
                    alt={`imagen de producto ${name}`} />
            </figure>
            <article className="product-box_data">
                <h2>
                    $ {toThousand(price * (100 - discount) / 100)}
                </h2>
                <span>
                    {discount} % OFF
                </span>
                <p>
                    {name}
                </p>
                <p>
                    {description}
                </p>
                <i className="fas fa-truck"></i>
            </article>
        </>
    );
}
