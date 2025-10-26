// import { useState } from "react";
// import { HelpCircle } from "lucide-react";

// const ProfileCard = () => {
//   const [activeTab, setActiveTab] = useState("about");

//   const tabs = [
//     { key: "about", label: "About Me" },
//     { key: "experiences", label: "Experiences" },
//     { key: "recommended", label: "Recommended" },
//   ];

//   return (
//     <>
//       <div className="bg-[#363c43] rounded-[1.2rem] shadow-[6px_6px_10px_rgba(0,0,0,0.4)] relative w-[720px] h-[316px] p-6">
//         <div className="absolute top-4 left-4">
//           <HelpCircle size={25} className="text-[#4a5055]" />
//         </div>

//         <div className="mt-[23px] ml-[59px] mr-[64px] w-[597px]">
//           {/* Tabs */}
//           <div className="flex gap-[6px] bg-[#171717] rounded-[1.4rem] p-1 mb-6 shadow-inner font-poppins">
//             {tabs.map((tab) => {
//               const isActive = activeTab === tab.key;

//               return (
//                 <button
//                   key={tab.key}
//                   onClick={() => setActiveTab(tab.key)}
//                   className={`relative flex-1 py-3 px-8 rounded-[1.2rem] font-medium overflow-hidden
//                   transition-all duration-300
//                   ${
//                     isActive
//                       ? "bg-[#28292d] text-white shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]"
//                       : "text-[#a3adb7]"
//                   }
//                   group
//                 `}
//                 >
//                   {/* Hover sliding background for inactive buttons */}
//                   {!isActive && (
//                     <span
//                       className="
//                     absolute inset-0 bg-[#28292d]
//                     -translate-x-full group-hover:translate-x-0
//                     transition-transform duration-300 ease-in-out
//                     rounded-[1.2rem] z-0
//                   "
//                     ></span>
//                   )}
//                   <span className="relative z-10">{tab.label}</span>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Content */}
//           <div className="h-[165px] text-[#969ca3] text-[15px] leading-[1.75] pr-4">
//             {activeTab === "about" && (
//               <>
//                 <p className="mb-5 font-jakarta font-normal not-italic text-[20px] leading-[100%] tracking-[0%]">
//                   Hello! I'm Dave, your sales rep here from Salesforce. I've
//                   been working at this awesome company for 3 years now.
//                 </p>
//                 <p className="mb-5 font-jakarta font-normal not-italic text-[20px] leading-[100%] tracking-[0%]">
//                   I was born and raised in Albany, NY & have been living in
//                   Santa Carla for the past 10 years with my wife Tiffany and my
//                   4-year-old twin daughters- Emma and Ella. Both of them are
//                   just starting school, so my calendar is usually blocked
//                   between 9-10 AM. This is a...
//                 </p>
//               </>
//             )}

//             {activeTab === "experiences" && (
//               <>
//                 <p className="mb-5 font-jakarta font-normal not-italic text-[20px] leading-[100%] tracking-[0%]">
//                   Hello! I'm Dave, your sales rep here from Salesforce. I've
//                   been working at this awesome company for 3 years now.
//                 </p>
//                 <p className="mb-5 font-jakarta font-normal not-italic text-[20px] leading-[100%] tracking-[0%]">
//                   I was born and raised in Albany, NY & have been living in
//                   Santa Carla for the past 10 years with my wife Tiffany and my
//                   4-year-old twin daughters- Emma and Ella. Both of them are
//                   just starting school, so my calendar is usually blocked
//                   between 9-10 AM. This is a...
//                 </p>
//               </>
//             )}

//             {activeTab === "recommended" && (
//               <>
//                 <p className="mb-5 font-jakarta font-normal not-italic text-[20px] leading-[100%] tracking-[0%]">
//                   Hello! I'm Dave, your sales rep here from Salesforce. I've
//                   been working at this awesome company for 3 years now.
//                 </p>
//                 <p className="mb-5 font-jakarta font-normal not-italic text-[20px] leading-[100%] tracking-[0%]">
//                   I was born and raised in Albany, NY & have been living in
//                   Santa Carla for the past 10 years with my wife Tiffany and my
//                   4-year-old twin daughters- Emma and Ella. Both of them are
//                   just starting school, so my calendar is usually blocked
//                   between 9-10 AM. This is a...
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfileCard;

import { useState } from "react";
import { HelpCircle } from "lucide-react";

const ProfileCard = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { key: "about", label: "About Me" },
    { key: "experiences", label: "Experiences" },
    { key: "recommended", label: "Recommended" },
  ];

  return (
    <div className="bg-[#363c43] rounded-[1.2rem] shadow-[6px_6px_10px_rgba(0,0,0,0.4)] relative w-full max-w-[720px] h-auto p-4 md:p-6">
      <div className="absolute top-4 left-4">
        <HelpCircle size={25} className="text-[#4a5055]" />
      </div>

      {/* Content wrapper: full-width on mobile, fixed-width on desktop */}
      <div className="w-full md:w-[597px] mx-auto mt-8 md:mt-[23px]">
        {/* Tabs: stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row gap-[6px] bg-[#171717] rounded-[1.4rem] p-1 mb-6 shadow-inner font-poppins">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex-1 py-3 px-4 sm:px-8 rounded-[1.2rem] font-medium overflow-hidden
                transition-all duration-300 text-sm md:text-base
                ${
                  isActive
                    ? "bg-[#28292d] text-white shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]"
                    : "text-[#a3adb7]"
                } 
                group
              `}
              >
                {/* Hover sliding background for inactive buttons */}
                {!isActive && (
                  <span
                    className="
                  absolute inset-0 bg-[#28292d]
                  -translate-x-full group-hover:translate-x-0
                  transition-transform duration-300 ease-in-out
                  rounded-[1.2rem] z-0
                "
                  ></span>
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="h-[165px] text-[#969ca3] text-[15px] leading-relaxed overflow-y-auto pr-4">
          {activeTab === "about" && (
            <>
              <p className="mb-5 font-jakarta font-normal not-italic text-base md:text-[20px] leading-relaxed md:leading-[100%] tracking-[0%]">
                Hello! I'm Dave, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now.
              </p>
              <p className="mb-5 font-jakarta font-normal not-italic text-base md:text-[20px] leading-relaxed md:leading-[100%] tracking-[0%]">
                I was born and raised in Albany, NY & have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my
                4-year-old twin daughters- Emma and Ella. Both of them are just
                starting school, so my calendar is usually blocked between 9-10
                AM. This is a...
              </p>
            </>
          )}

          {activeTab === "experiences" && (
            <>
              <p className="mb-5 font-jakarta font-normal not-italic text-base md:text-[20px] leading-relaxed md:leading-[100%] tracking-[0%]">
                Hello! I'm Dave, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now.
              </p>
              <p className="mb-5 font-jakarta font-normal not-italic text-base md:text-[20px] leading-relaxed md:leading-[100%] tracking-[0%]">
                I was born and raised in Albany, NY & have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my
                4-year-old twin daughters- Emma and Ella. Both of them are just
                starting school, so my calendar is usually blocked between 9-10
                AM. This is a...
              </p>
            </>
          )}

          {activeTab === "recommended" && (
            <>
              <p className="mb-5 font-jakarta font-normal not-italic text-base md:text-[20px] leading-relaxed md:leading-[100%] tracking-[0%]">
                Hello! I'm Dave, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now.
              </p>
              <p className="mb-5 font-jakarta font-normal not-italic text-base md:text-[20px] leading-relaxed md:leading-[100%] tracking-[0%]">
                I was born and raised in Albany, NY & have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my
                4-year-old twin daughters- Emma and Ella. Both of them are just
                starting school, so my calendar is usually blocked between 9-10
                AM. This is a...
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
