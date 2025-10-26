import ProfileCard from "./components/ProfileCard.jsx";
import Gallery from "./components/Gallery.jsx";
import Divider from "./components/Divider.jsx";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#272a2f] flex flex-col xl:flex-row gap-8 xl:gap-[57px] p-6 md:p-12 items-center justify-center">
      <div className="w-full xl:w-[836px] h-[400px] xl:h-[689px] rounded-[27px] border border-[#96BEE7] bg-[#616161D1] opacity-100 flex-shrink-0"></div>
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
