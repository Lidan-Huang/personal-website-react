import headshot from "./static/headshot.jpeg";

/** Show personal picture and self-introduction
 * Props: none
 * 
 * Routes -> About
 */

function About() {

  return (
    <main id="main">
      <section id="about" classNameName="About">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src={`${headshot}`} className="img-fluid" alt="personal headshot" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <p>
                Hello! I am Lidan Huang, an aspiring software engineer looking
                for tech job. I just graduated from coding bootcamp at Rithm School.
                I studied full stack software development technologies, and worked
                with peers to ship multiple projects.
              </p>
              <br></br>
              <p>
                My previous professional position was a gynecologist-in-charge
                in China, at which time I worked as chief surgeon in surgeries
                including vaginal birth delivery, cesarean section, ovarian
                cystectomy, and salpingectomy with laparoscopy without
                single failure cases, and assisted in major, complex surgeries. I
                also served in outpatient clinics to diagnose patients, relieve
                their concerns and provide proper treatment. I enjoyed helping
                many patients.
              </p>
              <br></br>
              <p>
                After immigrating to USA, I took a career break as taking care
                of two kids and families. During this period time I keep learning
                and volunteering for community and room parent. I
                am now ready to resume my career, to use technology to
                make the world and community better. I believe
                the goodwill is universal across different areas, and soft
                skills I acquired in different domains will be my foundation to
                support me thrive in the new, challenging, and exciting technical
                world!
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>

  );
}

export default About;