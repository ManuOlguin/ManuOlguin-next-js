import React from 'react'

function AboutContainer() {
  return (
    <section class="text-gray-600 body-font">

  <div class="container px-5 pt-12  pb-24 mx-auto">
  <h1 class=" title-font sm:text-5xl font-mono font-black text-5xl text-center mb-4 text-red-500 pb-12">¿Quienes somos? </h1>

  <div class="flex flex-col w-full mb-12 lg:px-28 px-1">

  <div class="lg:flex-grow justify-around lg:flex-row lg:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 mb-0 items-center text-center">
  <div class="lg:max-w-lg lg:w-3/4 md:w-1/2 w-full lg:pr-12">
        <img class="object-cover object-center rounded" alt="hero" src="/assets/avengers.webp"></img>
      </div>
    <div class="lg:w-1/2 w-full lg:mt-0 mt-5 text-center">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">Nosotros</h1>
    <p> ¡Hola, amigas y amigos! Bienvenidos a el punto de encuentro número uno en toda Latinoamérica para fanáticos de las series de Marvel. ¿De qué va todo esto? Bueno, acá te contamos. 
    <br></br><br></br>
    Somos fanáticos como vos, pero nos tomamos muy en serio nuestro amor por el Universo Cinematográfico de Marvel. Desde las calles de Buenos Aires hasta las playas de Cancún, nos hemos convertido en la banda más grande de fanáticos marveleros de habla hispana.
    </p>
    
    </div>
    
    
  </div>

  </div>
    <div class="flex flex-col  w-full lg:mb-12 mb-3 lg:px-28 px-1">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">Nuestro Equipo</h1>
      <p class="lg:w-2/3  leading-relaxed text-base">Los que hacen posible esta comunidad</p>
    </div>
    <div class="flex flex-wrap -m-2 lg:px-28 px-1">
      <div class="p-2 lg:w-1/4 md:w-1/2 w-full lg:me-4">
        <div class="h-full flex items-center border-gray-100 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/assets/manu.jpg"></img>
          <div class="flex-grow">
            <h4 class="text-gray-00 title-font font-medium">Manuel Olguin</h4>
            <p class="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/assets/manu2.jpg"></img>
          <div class="flex-grow">
            <h4 class="text-gray-00 title-font font-medium">Manuel Olguin</h4>
            <p class="text-gray-500">Next JS dev</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/4 md:w-1/2 w-full lg:mx-4">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/assets/manu3.jpg"></img>
          <div class="flex-grow">
            <h4 class="text-gray-00 title-font font-medium">Manuel Olguin</h4>
            <p class="text-gray-500">Content manager</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default AboutContainer 