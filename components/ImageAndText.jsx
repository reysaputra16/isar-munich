import Image from "next/image";

const ImageAndText = () => {
  return (
    <section className="flex flex-wrap items-center w-full mt-16 bg-lightBlue rounded-lg">
      {/* Image section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Image
          src={"/images/running.png"}
          alt="running-image"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      {/* Text section */}
      <div className="w-full md:w-1/2 flex-start flex-col md:p-8 text-gray-500">
        <div className="text-left md:text-left">
          <h1 className="font-satoshi font-semibold text-2xl text-white tracking-wide">
            Selamat Datang di Website Kami!
          </h1>
          <p className="mt-5 text-lg text-gray-200 sm:text-xl">
            Selamat datang di platform resmi organisasi olahraga Indonesia di
            Munich, Jerman! Kami hadir untuk menjadi rumah bagi para pecinta
            olahraga yang ingin bermain, bertemu, dan berkompetisi sebagai
            bagian dari komunitas Indonesia di Munich. Baik Anda seorang atlet
            profesional atau sekadar hobi berolahraga, kami menyediakan
            fasilitas dan kegiatan untuk mendukung semangat olahraga Anda.
          </p>
          <p className="mt-5 text-lg text-gray-200 sm:text-xl">
            Bergabunglah dengan kami untuk memperkuat persaudaraan melalui
            olahraga dan tetap terhubung dengan budaya Indonesia di tanah
            rantau. 💪🇮🇩
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageAndText;
