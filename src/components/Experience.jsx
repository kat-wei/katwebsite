// import experiences from "../data/experiences.json";

// const Experience = () => {
//   return (
//     <>
//       {experiences.map((data, index) => (
//         <div
//           key={index}
//           className="w-[80%] sm:w-[90%] bg-white p-12 rounded-3xl shadow-xl flex flex-col space-y-5"
//         >
//           <div className="flex flex-row items-center space-x-3">
//             <img src={data.logo} alt="logo" className="h-16" />
//             <div className="flex flex-col text-base">
//               <div>{data.time}</div>
//               <div className="font-semibold text-base">{data.role}</div>
//             </div>
//           </div>
//           <div className="text-base">
//             {data["bullet points"].map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Experience;

import React from 'react';
import experiences from '../data/experiences.json';

const Experience = () => {
  return (
    <div className="container bg-custom">
      <div className="experience-title">Experience</div>
      <div className="experience-subtitle">
        Here is a quick summary of my most recent experiences:
      </div>
      {experiences.map((data, index) => (
        <div key={index} className="card">
          <div className="experience-item">
            <img src={data.logo} alt="logo" className="experience-logo" />
            <div className="experience-details">
              <div>{data.time}</div>
              <div className="font-semibold">{data.role}</div>
            </div>
          </div>
          <ul className="experience-details">
            {data['bullet points'].map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;

