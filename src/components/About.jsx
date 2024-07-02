// import kat from '/src/img/kat.png';

// function About() {
//     return (
//         <section className="h-auto w-[90%] mx-auto p-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//                 <div>
//                     <h1 className="text-2xl font-bold">Hi! I'm Kat!</h1>
//                     <p className="mt-4">
//                         I am a rising junior studying Computer Science at Cornell University. I am interested
//                         in CS topics such as Artificial Intelligence and Game Design. In my free time, I love drawing and channeling
//                         my creativity into different forms of artwork. I enjoy watching kdramas and crocheting. Feel free to contact
//                         me at kzw9@cornell.edu.
//                     </p>
//                 </div>
//                 <div className="flex justify-center">
//                     <img
//                         src={kat}
//                         alt="Kat"
//                         className="w-full max-w-sm h-auto object-cover rounded-lg"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default About;

import kat from '/src/img/kat.png';

function About() {
  return (
    <section className="h-auto w-[80%] mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <h1 className="text-2xl font-bold">Hi! I'm Kat!</h1>
          <p className="mt-4">
            I am a rising junior studying Computer Science at Cornell University. I am interested 
            in CS topics such as Artificial Intelligence and Game Design. In my free time, I love drawing and channeling
            my creativity into different forms of artwork. I enjoy watching kdramas and crocheting. Feel free to contact 
            me at kzw9@cornell.edu.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={kat}
            alt="Kat"
            className="w-full max-w-xs md:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
