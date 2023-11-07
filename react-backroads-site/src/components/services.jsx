import Title from "./title.component";
import { services } from '../constants'
import ServiceCard from "./service.card";

const Services = () => {
    return ( 
        
    <section className="section services" id="services">
          <Title partOne='Our' partTwo='Services'/>
  
    <div className="section-center services-center">
        
        {services.map((item)=>{
            const {id,icon,title,text}=item; 
            return (
                
            <ServiceCard
             key={id} 
            icon={icon} 
            title={title}
             text={text} 
             />
            )
        })}
        
    </div>
  </section>


     );
}
 
export default Services;