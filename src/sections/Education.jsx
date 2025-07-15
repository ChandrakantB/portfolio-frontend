import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">🎓 Education</h2>
      <div className="timeline">

        {/* 🏫 College */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Jabalpur Engineering College, Jabalpur</h3>
            <p>Bachelor of Technology in Computer Science</p>
            <p className="timeline-duration">August 2023 – Present</p>
            <p className="timeline-extra">Currently in 3rd Year</p>
          </div>
        </div>

        {/* 🏫 School */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Jawahar Navodaya Vidyalaya, Betul</h3>
            <p>High School & Higher Secondary</p>
            <p className="timeline-duration">10th: 80% | 12th: 81%</p>
            <p className="timeline-extra">Completed in 2021</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
