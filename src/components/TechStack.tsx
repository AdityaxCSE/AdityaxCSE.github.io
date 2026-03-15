
import Marquee from "react-fast-marquee";
import { 
  SiJenkins, 
  SiDocker, 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible, 
  SiPython, 
  SiSonarqubeserver, 
  SiLinux,
  SiGithubactions,
  SiTrivy,
} from "react-icons/si";
import { FaAws, FaWindows, FaGit } from "react-icons/fa";
import "../App.css";

const TechStack = () => {
  const techIcons = [
    { icon: SiJenkins, name: "Jenkins", color: "#D24939" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: SiTerraform, name: "Terraform", color: "#7B42BC" },
    { icon: SiAnsible, name: "Ansible", color: "#EE0000" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiSonarqubeserver, name: "SonarQube", color: "#4E9BCD" },
    { icon: SiLinux, name: "Linux", color: "#FCC624" },
    { icon: FaGit, name: "Git", color: "#F05032" },
    { icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
    { icon: SiTrivy, name: "Trivy", color: "#0080FF" },
    { icon: FaWindows, name: "Windows Server", color: "#0078D6" },
  ];

  return (
    <div className="techstack-modern section-container" id="techstack">
      <h2>My <span>Techstack</span></h2>
      <div className="marquee-container">
        <Marquee 
          gradient={true} 
          gradientColor="#0f002c"
          gradientWidth={100} 
          speed={60} 
          pauseOnHover={true}
        >
          {techIcons.map((tech, index) => (
            <div key={index} className="tech-item">
              <tech.icon className="tech-icon" style={{ color: tech.color }} />
              <p>{tech.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
      
      <div className="marquee-container" style={{ marginTop: '2rem' }}>
        <Marquee 
          gradient={true} 
          gradientColor="#0f002c"
          gradientWidth={100} 
          speed={50} 
          direction="right"
          pauseOnHover={true}
        >
          {/* We create a reversed array directly instead of modifying in place */}
          {[...techIcons].reverse().map((tech, index) => (
            <div key={`reverse-${index}`} className="tech-item">
              <tech.icon className="tech-icon" style={{ color: tech.color }} />
              <p>{tech.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
