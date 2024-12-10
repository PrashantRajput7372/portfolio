// import React from 'react'
import experince from "./data/experience.json";
// "id": 1,
// "role": "Consultant",
// "organisation": "Tata Consultancy Service",
// "startDate": "Dec, 2021",
// "endDate": "Pre sent",
// "location": "Banglore",
// "experiences": [
//   "Worked as Sap Basis Consultant"
// ],
// "imageSrc": "company/google.png"
const Experince = () => {
  return (
    <div className="Container ex my-4" id="experince">
      <h1 className="exText"> Experience </h1>

      <div className="ex-item">
        {experince.map((res) => {
          return (
            <div
              className="ex-items text-center my-4"
              data-aos="zoom-in"
              data-duration="1000"
              key={res.id}
            >
              <div className="left">
                <img src={res.imageSrc} alt="companylogo" />
              </div>
              <div className="right ">
                <h2>{res.role}</h2>
                <h4>
                  {res.startDate} {res.endDate} {res.location}
                </h4>
                <h5>{res.experiences}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experince;
