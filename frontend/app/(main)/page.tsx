import { sizeConfig } from "@/config/size.config";

export default function Home() {
  return (
   <section
        className="h-screen bg-white dark:bg-gray-800"
   >
       <div className="max-w-5xl mx-auto px-3.5">
           <div
               className="text-white"
               style={{paddingTop: `calc(20px + ${sizeConfig.headerSize}px)`}}
           >Home</div>
       </div>
   </section>
  );
}
