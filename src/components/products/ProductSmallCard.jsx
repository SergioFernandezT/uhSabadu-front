/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function ProductSmallCard({ id, name, image, discount, price }) {
  const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    
      <Link to={`/products/detail/${id}`}>
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
          <i className="fas fa-truck"></i>
        </article>
      </Link >
  );
}
