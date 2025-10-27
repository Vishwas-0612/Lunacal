import ProfileCard from "./components/ProfileCard.jsx";
import Gallery from "./components/Gallery.jsx";
import Divider from "./components/Divider.jsx";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#272a2f] flex flex-col lg:flex-row xl:flex-row gap-8 xl:gap-[57px] p-6 md:p-12 lg:gap-6 lg:p-8 items-center justify-center">
      <div className="w-full xl:w-[836px] xl:h-[689px] rounded-[27px] border border-[#96BEE7] bg-[#616161D1] opacity-100 flex-shrink-0  lg:w-[830px] xl:max-w-[500px] h-[400px] sm:h-[320px] lg:h-[400px]"></div>
      <div className="w-full xl:w-auto flex flex-col gap-6 items-center">
        <ProfileCard />
        <Divider />
        <Gallery />
        <Divider />
      </div>
    </main>
  );
}

export default App;

//  <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] h-[250px] sm:h-[320px] lg:h-[400px] xl:h-[450px] rounded-[20px] border border-[#96BEE7] bg-[#616161D1] opacity-100 flex-shrink-0"></div>
