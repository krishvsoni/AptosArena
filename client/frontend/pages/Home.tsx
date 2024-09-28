import AllPlayers from "@/components/AllPlayers";
import AnimatedPinDemo from "@/components/AnimatedPinDemo";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      {/* Navbar */}
      <Navbar />

      {/* Top Players Section */}
      <div className="top-players w-full py-6">
        <AnimatedPinDemo />
      </div>

      {/* All Players Section */}
      <div className="all-players w-full">
        <AllPlayers />
      </div>
    </div>
  );
};

export default Home;
