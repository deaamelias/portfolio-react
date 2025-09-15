import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hello! Saya Dea Amelia Setyorini
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lulusan S1 Informatika dengan IPK 3.87, menguasai JavaScript, PHP,
            SQL, Python, dan Java, serta familiar dengan React, Vue.js, Laravel,
            dan Tailwind CSS. Berpengalaman mengembangkan situs web responsif,
            mengintegrasikan API, dan mengelola database. Memiliki pengalaman
            magang dalam pengembangan website e-commerce serta mengerjakan
            berbagai proyek pengembangan web baik individu maupun tim. Mampu
            bekerja secara teliti, komunikatif, dan memiliki semangat tinggi
            untuk terus belajar.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>
    </>
  );
}

export default App;
