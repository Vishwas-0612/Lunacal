import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Plus, HelpCircle } from "lucide-react";

const Gallery = () => {
  const [images, setImages] = useState([
    "https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=400",
  ]);

  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  // Trigger file input when ADD IMAGE is clicked
  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages((prev) => [...prev, event.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Drag & drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImages((prev) => [...prev, event.target.result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  return (
    <div
      className={`bg-[#363c43] rounded-[1.2rem] shadow-[6px_6px_10px_rgba(0,0,0,0.4)] relative w-full max-w-[720px] p-4 md:p-6`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="absolute top-4 left-4">
        <HelpCircle size={25} className="text-[#4a5055]" />
      </div>

      <div className="w-full md:w-[597px] mx-auto mt-8 md:mt-[23px]">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="bg-[#171717] text-white px-8 py-3 rounded-[1.1rem] text-[15px] font-medium shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)] font-poppins">
            Gallery
          </h2>
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
            <button
              onClick={handleAddImageClick}
              className="flex items-center gap-2 bg-[#ffffff]/[0.03] hover:bg-[#ffffff]/[0.08] transition-all px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white text-xs sm:text-[13px] font-medium shadow-[-6px_-6px_12px_rgba(255,255,255,0.03),_10px_10px_20px_rgba(0,0,0,0.4)]"
            >
              <Plus size={15} strokeWidth={2.5} /> ADD IMAGE
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <button className="p-3 rounded-full bg-gradient-to-br from-[#303439] to-[#161718] hover:from-[#353a3f] hover:to-[#1b1d1e] transition-all shadow-[4px_4px_8px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)]">
              <ArrowLeft
                size={20}
                className="text-[#6f767e]"
                strokeWidth={2.5}
              />
            </button>
            <button className="p-3 rounded-full bg-gradient-to-br from-[#303439] to-[#161718] hover:from-[#353a3f] hover:to-[#1b1d1e] transition-all shadow-[4px_4px_8px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)]">
              <ArrowRight
                size={20}
                className="text-[#6f767e]"
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>

        <div
          className={`flex gap-4 overflow-x-auto overflow-visible pb-2 perspective-[1000px] ${
            dragActive
              ? "border-4 border-dashed border-[#ffffff]/50 rounded-[1.5rem]"
              : ""
          }`}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`gallery-${i}`}
              className="w-[150px] h-[154px] md:w-[175px] md:h-[179px] object-cover rounded-[1.5rem] flex-shrink-0 transition-transform duration-300 grayscale hover:grayscale-0
                 hover:-translate-y-3 hover:rotate-[-6deg] hover:shadow-[0_15px_25px_rgba(0,0,0,0.6)]
                 hover:rotate-y-6 hover:rotate-x-3"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
