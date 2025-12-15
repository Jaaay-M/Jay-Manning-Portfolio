import ProjectCard from "../components/ProjectCard";
import GrapheneTraceLogo from "../src/assets/GrapheneTraceLogo.png";
import CarDealershipLogo from "../src/assets/CarDealershipLogo.png";

export const Home = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Welcome To my Portfolio</h1>
                </div>
            </header>

            <main>
                <div className="container">
                    <h2>My Projects:</h2>

                <div className="card-grid">
                    <ProjectCard 
                        link="https://github.com/Jaaay-M/Graphene_Trace_ARU"
                        title="Graphene Trace Sensore Mat"
                        desc="An ASP.NET MVC web application for visualizing data from Graphene Trace Sensore Mats."
                        img={GrapheneTraceLogo}
                    />
                    <ProjectCard 
                        link="https://github.com/Jaaay-M/Car_Dealership"
                        title="Car Dealership Management System"
                        desc="A terminal-based application written in C to manage car dealership stock and sales."
                        img={CarDealershipLogo}
                    />
                </div>
                    
                </div>
            </main>
        </div>
    );
};