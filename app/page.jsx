import Feed from "@components/Feed";
import ImageAndText from "@components/ImageAndText";
import SportCardList from "@components/SportCardList";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          <span className="text-lg text-neonGreen">#MENUJUEV</span>
          <br className="" />
          ISAR
          <span className="red_gradient text-center"> Munich</span>
        </h1>
        <p className="mt-5 text-brokenWhite font-normal text-lg max-md:hidden">
          Komunitas Olahraga Indonesia di Munich
        </p>
        {/*
        <button type="button" className="head_btn mt-10">
          <Link href="/register">Register Here</Link>
        </button>
        */}
      </section>
      {/* Image and Text Section */}
      {/* <ImageAndText /> */}
      <section className="flex flex-wrap items-center w-full mt-16 rounded-lg">
        <div className="w-full flex-start flex-col md:p-8 text-gray-500">
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
      </section>
      {/* Sport Categories */}
      <section className="w-full flex-center flex-col mt-16">
        <h1 className="head_text text-center mb-10">
          <span className="lime_gradient">Cabang Olahraga</span>
        </h1>
        <SportCardList />
      </section>
      {/* The "Why E.V." Section */}
      <section className="w-full flex-start flex-col mt-16">
        <h1 className="font-satoshi font-semibold text-2xl text-white tracking-wide">
          Kenapa Perlu E.V.?
        </h1>
        <p className="mt-5 text-lg text-gray-200 sm:text-xl">
          E.V. adalah sarana dari dinas olahraga kota Munich yang memberikan
          kemudahan kepada anggotanya.
        </p>
        <p className="mt-5 text-lg text-gray-200 sm:text-xl">
          Pemerintah kota Munich memberikan subsidi biaya untuk e.V. yang
          bersifat nirlaba (gemeinnützig). Salah satunya yaitu subsidi hingga
          75% untuk penyewaan lapangan indoor milik kota. Dengan adanya lapangan
          yang terjangkau dan kualitas baik, maka secara langsung mendukung para
          olahragawan baik yang sekadar hobi maupun yang ingin mengikuti
          kompetisi olahraga secara rutin.
        </p>
      </section>
    </>
  );
};

export default Home;
