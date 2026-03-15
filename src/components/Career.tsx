import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Lead (DevSecOps)</h4>
                <h5>PG-DITISS Project</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Led a group project to build a secure DevSecOps CI/CD pipeline using Jenkins, Docker, Kubernetes, and AWS. Coordinated team tasks, integrated Trivy and SonarQube, and ensured stable builds.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PG Diploma in IT Infrastructure, Systems and Security</h4>
                <h5>CDAC ACTS, Pune</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Intensive curriculum focusing on core infrastructure, systems, security, container orchestration (Docker/Kubernetes), cloud platforms (AWS), and DevSecOps patterns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications</h4>
                <h5>MMMUT, Gorakhpur</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Gained comprehensive knowledge in software engineering, programming paradigms, and algorithmic problem-solving to build a strong foundation for a career in cloud engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>University Institute of Engineering Technology, Kanpur</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Undergraduate program associated with Chhatrapati Shahu Ji Maharaj University, Uttar Pradesh. Focused on core computer science subjects and information technology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII (Maths)</h4>
                <h5>St Francis Xaviers Inter College, Kanpur (UP BOARD)</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Completed Higher Secondary education with a focus on Mathematics and Science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X (General)</h4>
                <h5>St Francis Xaviers Inter College, Kanpur (UP BOARD)</h5>
              </div>
              <h3>2016</h3>
            </div>
            <p>
              Completed Secondary education with a robust foundation in general academics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
