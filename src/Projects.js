import warbler from "./static/warbler.png";
import jobly from "./static/jobly.png";
import { Link } from "react-router-dom";


/**Show two projects Jobly and Warbler
 * Props: none
 * 
 * Routes -> Projects
 */

function Projects() {


  return (
    <main className="Projects container-fluid" id="main">
      <section id="portfolio container" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>PROJECTS</h2>
          </div>
        </div>

        <div className="container d-flex justify-content-between flex-nowrap">
          <div className="row justify-content-around align-items-center" >
            <div className="project-img-container col-6 col-lg-6 col-md-8 rounded mt-2 mb-4">
              <img className="jobly-img img-fluid" src={`${jobly}`} alt="jobly homepage" height="500" width="600" />
            
            <div className="description-container ">
              <div className="row justify-content-evenly">
                <div className="col-6 col-lg-6 col-md-6 flex-row justify-content-evenly rounded mt-2 ">
                  <h3 className="title">Jobly</h3>
                  <Link className="btn btn-light fw-bold me-2" to={{ pathname: "http://jobly.demo.lidanhuang.com/" }} target="_blank">Demo</Link>
                  <Link className="btn btn-light fw-bold" to={{ pathname: "https://github.com/Lidan-Huang/react-jobly" }} target="_blank">GitHub</Link>
                </div>
              </div>

              <p className="description-container pt-2">
                Jobly is a responsive single page React web application for job searching. Users need authentication by registering or logging in to reach the private routes. Users could browse all jobs by job titles or company name, they could also search companies by company names. Users can update their profile.
              </p>
              <p className="despcription-skills">React | Node | Express | PostgreSQL</p>
            </div>
          </div>
        </div>

          <div className="row justify-content-around flex-nowrap align-items-center" >
            <div className="project-img-container col-6 col-lg-6 col-md-8 rounded mt-2 mb-4">
              <div>
                <img className="warbler-img img-fluid" src={`${warbler}`} alt="warbler homepage" height="500" width="600" />
              </div>

              <div className="description-container ">
                <div className="row d-inline-flex ">
                  <div className="col-4 col-lg-4 col-md-6 flex-row justify-content-evenly rounded mt-2 ">
                    <h3 className="title">Warbler</h3>
                    {/* <span className="external-links"> */}
                    <Link className="btn btn-light fw-bold me-2" to={{ pathname: "https://r24-flask-warbler-lidan.herokuapp.com/" }} target="_blank">Demo</Link>
                    {/* </span> 
                    <span className="external-links">  */}
                    <div className="col-4 col-lg-4 col-md-6 rounded mt-2 ">
                      <Link className="btn btn-light fw-bold" to={{ pathname: "https://github.com/Lidan-Huang/flask-warbler" }} target="_blank">GitHub</Link>
                      {/* </span>  */}
                    </div>
                  </div>
                </div>

                <p className="description-container pt-2">
                  Warbler is a micro blogging site. Users can register their accounts. Once authenticated and logged in, they can do following or unfollowing each other, send and like tweets. Users could add new friends by searching warbler names. Users also could update or delete profile.
                </p>
                <p className="despcription-skills">Flask | Jinja | WTForms | PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </section >
    </main >
  );
}

export default Projects;

// {/* <div className="heading-row row justify-content-around">
//         <h4 className="heading-title col-11">PROJECTS</h4>
//       </div> */}
//         {/* <div className="Project project-row row justify-content-around align-items-center">
//           <div className="project-img-container col-10 col-md-8 col-lg-5 rounded mt-2">
//             <img className="project-jobly-img" src={`${jobly}`} alt="jobly homepage" />
//           </div>
//         </div> */}
//         {/* <Footer /> */}

// {/* <div className="container d-flex flex-column justify-content-around">
//           <div className="row " data-aos="fade-up">
//             <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//               <div className="portfolio-wrap">
//                 <img src={`${jobly}`} className="img-fluid" alt="jobly homepage" height="350" width="450"/>
//                 <div class="portfolio-info">
//                   <h4>Jobly</h4>

//                   <div class="portfolio-links">
//                     <Link to="/jobly" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Jobly"><i class="bx bx-plus"></i></Link>
//                     <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//                 <div className="portfolio-wrap">
//                   <img src={`${warbler}`} className="img-fluid" alt="warbler homepage" height="350" width="450"/>
//                   <div class="portfolio-info">
//                     <h4>Warbler</h4>

//                     <div class="portfolio-links">
//                       <Link to="/jobly" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Warbler"><i class="bx bx-plus"></i></Link>
//                       <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}