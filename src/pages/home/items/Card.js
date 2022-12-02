import { Link } from 'react-router-dom';

const Card = ({data}) => {
    const { _id, name, image } = data;
    
    return (
        <div>
            <div className="card w-96 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}!</h2>
                <p>If you want second hand car for buy</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${_id}`}><button className="btn btn-primary">Go</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Card;