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

      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Dea Amelia Setyorini, seorang Full Stack Web
            Developer, Saya percaya bahwa desain dan fungsionalitas harus
            berjalan beriringan, sehingga setiap proyek yang saya kembangkan
            tidak hanya terlihat menarik tetapi juga memberikan pengalaman
            pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
