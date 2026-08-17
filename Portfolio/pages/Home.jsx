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
                        brief="A cost-effective pressure sensing mat using graphene-based sensors for real-time pressure mapping."
                        img={GrapheneTraceLogo}
                    />
                    <ProjectCard 
                        link="/CarDealership"
                        title="Car Dealership Management System"
                        img={CarDealershipLogo}
                    />
                </div>

                <h2>Skills</h2>
                    <h3>Programming Languages</h3>
                    <p>C, C++, C#, Java, JavaScript, SQL, CSS</p>
                    <h3>Tools</h3>
                    <p>Git, Github, Visual Studio Code, Cisco Packet Tracer, Bash</p>
                    <h3>Concepts</h3>
                    <p>Object-Oriented Programming, Data Structures, Algorithms, Agile Development, SDLC, Networking, Operating Systems</p>
                </div>
            </main>
        </div>
    );
};