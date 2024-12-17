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
          <br className="max-md:hidden" />
          Organisasi Olahraga di <br className="max-md:hidden" />
          <span className="red_gradient text-center">Munich</span>
        </h1>
        <p className="mt-5 text-brokenWhite font-normal text-lg">
          Meningkatkan kualitas olahraga untuk warga Indonesia di Munich
        </p>
        <button type="button" className="head_btn mt-10">
          <Link href="/register">Register Here</Link>
        </button>
      </section>
      {/* Sport Categories */}
      <section className="w-full flex-center flex-col mt-16">
        {/* <h1 className="head_text text-center mb-10">
          <span className="lime_gradient">Cabang Olahraga</span>
        </h1>*/}
        <SportCardList />
      </section>
      {/* Image and Text Section */}
      <ImageAndText />
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
