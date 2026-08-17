import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header Banner / Logo */}
      <header className="flex justify-center items-center py-8 border-b border-gray-800 bg-black">
        <div className="relative flex flex-col items-center">
          <img 
            src="/benjy-toys-logo.png" 
            alt="Benjy Toys Logo" 
            className="h-40 md:h-60 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,0,0,0.3)]"
          />
        </div>
      </header>

      {/* Main Body with Sidebar Navigation */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-100px)]">
        {/* Sidebar Menu */}
        <aside className="w-full md:w-56 bg-black p-4 border-r border-gray-800 flex flex-col gap-3">
          <Link href="/">
            <button className="w-full py-2 px-4 rounded-full bg-slate-700 text-white font-semibold text-left hover:bg-slate-600 transition shadow">
              Home
            </button>
          </Link>
          <Link href="/beyblade-x">
            <button className="w-full py-2 px-4 rounded-full bg-white text-black font-semibold text-left hover:bg-gray-200 transition shadow">
              Beyblade X
            </button>
          </Link>
          <button className="w-full py-2 px-4 rounded-full bg-white text-black font-semibold text-left hover:bg-gray-200 transition shadow">
            Bariba Reverse
          </button>
          <button className="w-full py-2 px-4 rounded-full bg-white text-black font-semibold text-left hover:bg-gray-200 transition shadow">
            เครื่องดนตรี
          </button>
          <button className="w-full py-2 px-4 rounded-full bg-white text-black font-semibold text-left hover:bg-gray-200 transition shadow">
            โซเชียล
          </button>
          <button className="w-full py-2 px-4 rounded-full bg-white text-black font-semibold text-left hover:bg-gray-200 transition shadow">
            กิจกรรม
          </button>
          <button className="w-full py-2 px-4 rounded-full bg-white text-black font-semibold text-left hover:bg-gray-200 transition shadow">
            ข่าวสาร
          </button>
          <button className="w-full py-2 px-4 rounded-full bg-white text-black font-semibold text-left hover:bg-gray-200 transition shadow">
            สนับสนุนเว็ป
          </button>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-8 bg-black flex flex-wrap gap-8 items-start justify-start">
          {/* Beyblade X Card (คลิกเพื่อไปหน้า Beyblade X) */}
          <Link href="/beyblade-x" className="flex flex-col items-center group cursor-pointer">
            <div className="p-2 rounded-xl hover:bg-gray-900 transition border border-transparent hover:border-gray-800 w-80 md:w-[450px]">
              <img 
                src="/beyblade-x-logo.png" 
                alt="Beyblade X Logo" 
                className="w-full h-auto object-contain"
              />
            </div>
            <span className="mt-3 text-yellow-400 font-bold text-xl group-hover:underline">
              Beyblade X
            </span>
          </Link>
        </main>
      </div>
    </div>
  );
}