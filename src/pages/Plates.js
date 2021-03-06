import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { PlateContext } from '../context/plates';


const Plates = () => {
    const { plates } = useContext(PlateContext);

    if (!plates.length) {
        return <h3>No Plates Availables</h3>
    }

    return (
        <section className="books">
            {plates.map(({ image: image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`plates/${id}`} className="btn book-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Plates