import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@style/globals.css";

export const metadata = {
  title: "Olahraga Organisasi Munich",
  description: "Olahraga Organisasi untuk Warga Indonesia di Munich",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="bg-darkBlue min-h-screen">
            <main className="app">
              <Nav />
              {children}
              <Footer />
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
