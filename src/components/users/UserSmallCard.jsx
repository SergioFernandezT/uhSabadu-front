/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function UserSmallCard({ id, first_name, last_name, email, image }) {
  return (

    <Link to={`/products/detail/${id}`}>
      <figure className="product-box_image">
        <img src={`/images/users/${image}`}
          alt={`imagen de usuario: ${first_name}`} />
      </figure>
      <article className="product-box_data">
        <h2>
          {first_name}
        </h2>
        <span>
          {last_name}
        </span>
        <p>
          {email}
        </p>
        {/* <i className="fas fa-truck"></i> */}
      </article>
    </Link >
  );
}
