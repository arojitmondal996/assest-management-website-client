import { Container } from "@mui/material";
import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Packages from "../components/Packages";
import useAuth from "../features/authentication/useAuth";
import Loading from "../ui/Loading";

export default function Home() {
  const { loading } = useAuth();
  return loading ? (
    <Loading />
  ) : (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <section>
          <Container maxWidth="lg" sx={{ mx: "auto", my: 16 }}>
            <Banner />
          </Container>
        </section>

        <section>
          <About />
        </section>

        <section>
          <Packages />
        </section>
      </main>
      <Footer />
    </div>
  );
}
