import kat from '/src/img/kat.png'

function About() {
    return (
      <section className="h-screen w-[80%] flex mx-auto items-center">
        <div className="h-auto flex flex-row sm:flex-col-reverse space-x-10 sm:space-x-0 ">
          <div className="flex flex-col justify-center space-y-5 text-base w-full">
            <h1>Hi! I'm Kat!</h1>
            <p>
              I am a rising Junior studying Computer Science at Cornell University. I am interested 
              in CS topics such as Artificial Intelligence and Game Design. In mxy free time, I love drawing and channeling
              my creativity into different forms of artwork.I enjoy watching kdramas and crocheting. Feel free to contact 
              me at kzw9@cornell.edu.
            </p>
            <div className="flex justify-center ">
            {/* TODO 3: Change this to a custom image! */}
            <img
              src={kat}
              alt="WICC Logo"
              className="object-contain sm:p-10"
            />
          </div>
            
          </div>
        </div>
      </section>
    );
  }

  export default About;
