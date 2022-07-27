import { Link, useParams } from 'react-router-dom';
import services from '../data';

const SingleService = () => {

  const { serviceId } = useParams();

  const service = services.find((service) => service.id === serviceId);

  const { image, name } = service;

  return (
    <section className='section'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/services' className='btn'>Serviceliste</Link>
    </section>
  );
};

export default SingleService;
