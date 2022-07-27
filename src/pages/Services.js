import { Link } from 'react-router-dom';
import services from '../data';

const Services = () => {
  return (
    <section className='section service'>
      <div className='services'>
        {services.map((service) => {
          return (
            <article key={service.id}>
              <h5>{service.name}</h5>
              <img src={service.image} alt={service.name} /><br/>
              <Link to={`/services/${service.id}`} className='btn'>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
