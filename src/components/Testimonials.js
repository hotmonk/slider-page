import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <h1>Testimonials <hr class="headingHr"></hr></h1>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src="assets/userdefault.jpg" alt="user" className="user"></img>
                        <blockquote>Great Forest has been instrumental in helping us minimize trash and maximize recycling and composting at our large-scale festivals.  Through comprehensive planning, educational sorting stations and well-designed signage, Great Forest has moved us toward our goal of successfully separating waste at our events while educating event-goers on the importance and processes of sustainable waste management.</blockquote>
                        <h3>Anubhav Mittal <span>  Co-founder, xyz reclaimation</span></h3>                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src="assets/userdefault2.jpg" alt="user" className="user"></img>
                        <blockquote>The Mayor’s Zero Waste Challenge resulted in the total diversion of 36,910 tons of material being diverted from landfill and incineration, which results in an enormous environmental benefit to our city… Great Forest played an important role in helping participants like the Peninsula New York reach a 67% diversion rate… It’s organizations like these that are helping forge the way to the city’s goal of Zero Waste to landfill by 2030.</blockquote>
                        <h3>Vasundhara Shinde <span>  HR Head, ABC Pvt Ltd </span></h3>                    </div>
                </div>                
                <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src="assets/userdefault3.jpg" alt="user" className="user"></img>
                        <blockquote>Great Forest has developed and maintained all of our ongoing sustainability initiatives, including energy efficiency projects, the installation of waterless urinals and our comprehensive recycling program. Using their quantitative metrics system, Great Forest tracks these programs to report our successes and drive improvement. As a result, we have achieved a recycling diversion ratio of 90% and we are sure for more.</blockquote>
                        <h3>Dev Jadeja <span>  Resource Manager, DJ Materials</span></h3>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
