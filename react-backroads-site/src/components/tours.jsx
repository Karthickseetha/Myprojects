import { tours } from "../constants";
import Title from "./title.component";
import TourCard from "./tour.card";
const Tours = () => {
    return (
        
    <section className="section" id="tours">
            <Title 
            partOne='Featured'
             partTwo='tours'/>
  

    <div className="section-center featured-center">

        {tours.map((item)=>{

            return(
                <TourCard 
                key={item.id} 
                {...item}/>
            )

        })}
    </div>
  </section>

     );
}
 
export default Tours;