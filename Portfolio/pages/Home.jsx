import ProjectCard from "../components/ProjectCard";
import GrapheneTraceLogo from "../src/assets/GrapheneTraceLogo.png";
import CarDealershipLogo from "../src/assets/CarDealershipLogo.png";

export const Home = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Computer Science Student</h1>
                    <h2>Aspiring Software Engineering Looking for work</h2>
                </div>
            </header>

            <main>
                <div className="container">
                <h2>My Projects:</h2>

                <div className="card-grid">
                    <ProjectCard 
                        link="/GrapheneTrace"
                        title="Graphene Trace Sensore Mat"
                        desc="An ASP.NET MVC web application for visualizing data from Graphene Trace Sensore Mats."
                        img={GrapheneTraceLogo}
                    />
                    <ProjectCard 
                        link="/CarDealership"
                        title="Car Dealership Management System"
                        desc="A terminal-based application written in C to manage car dealership stock and sales."
                        img={CarDealershipLogo}
                    />
                </div>

                <h2>Skills</h2>
                    <h3>Programming</h3>
                    <p>Proficient in C, C#, and Java</p>
                    <h3>Agile Methodologies</h3>
                    <p>Experience working in Agile development environments</p>
                </div>
            </main>
        </div>
    );
};