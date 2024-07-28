import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
       <Navbar/>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Footer />
    
    </>
  );
}

export default Home;
