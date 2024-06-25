import home from '/src/img/home.png';
import React from 'react';

function Home() {
    return (
      <section className="h-full w-full flex mx-auto items-center">
        <img src={home} 
          alt="WICC Logo" 
          className="max-w-full h-auto sm:p-10" 
          style={{maxHeight: '100%', maxWidth: '100%'}}
        />

      </section>
    );
  }

  export default Home;
