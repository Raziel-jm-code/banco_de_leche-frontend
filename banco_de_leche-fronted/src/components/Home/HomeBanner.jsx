const HomeBanner = () => {
    return (
  <section
    className="relative bg-[url(https://acunarperinatal.com/wp-content/uploads/2023/03/shutterstock_1255518868-1-1024x683.jpg)] bg-cover bg-center bg-no-repeat"
  >
    <div
      className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 className="mx-auto text-3xl font-extrabold sm:text-5xl text-white">
        
  
          <strong className="mx-auto block font-extrabold text-black">
          Banco de Leche Materna
          </strong>
        </h1>
  
        <p className="mx-auto mt-4 max-w-lg sm:text-xl/relaxed text-white">
        
        </p>
  
        {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="/horoscopo"
            className="mx-auto block w-full rounded bg-rose-600 px-12 py-3 text-2xl font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Comenzar
          </a>
        </div> */}
      </div>
    </div>
  </section>
    );
  }
  export default HomeBanner