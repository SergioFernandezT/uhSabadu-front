/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <Link to={`/products/detail/${product.id}`}>
      <figure class="product-box_image">
        <img src={`/images/products/${product.image}`}
          alt={`imagen de producto ${product.name}`} />
      </figure>
      <article class="product-box_data">
        <h2>
          $ {toThousand(product.price*(100-product.discount)/100)}
        </h2>
        <span>
          {product.discount} % OFF
        </span>
        <p>
          {product.name}
        </p>
        <i class="fas fa-truck"></i>
      </article>
    </Link>
  );
}
