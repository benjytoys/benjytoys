import React from 'react';
import Link from 'next/link';

export default function BeybladeXPage() {
  // ปุ่มฝั่งซ้าย
  const leftMenuItems = [
    { name: 'Home', href: '/' },
    { name: 'Product List', href: '#' },
    { name: 'Parts List', href: '#' },
    { name: 'Combo Hot', href: '#' },
    { name: 'Bey X Timer', href: '#' },
    { name: 'Score Board', href: '#' },
  ];

  // ปุ่มฝั่งขวา
  const rightMenuItems = [
    { name: 'Community', href: '#' },
    { name: 'Bey News', href: '#' },
    { name: 'กติกาการแข่งขัน', href: '#' },
    { name: 'แลกโค้ด', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Header / Logo Beyblade X */}
      <header className="flex justify-center items-center py-6 bg-black border-b border-gray-900">
        <img 
          src="/beyblade-x-logo.png" 
          alt="Beyblade X Logo" 
          className="h-20 md:h-28 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        />
      </header>

      {/* Layout Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar: แบ่ง 2 คอลัมน์ (ซ้าย-ขวา) */}
        <aside className="w-full md:w-80 bg-black p-4 border-r border-gray-900 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2">
            {/* Column 1: ฝั่งซ้าย */}
            <div className="flex flex-col gap-2">
              {leftMenuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <button className="w-full py-2 px-3 rounded-full bg-white text-black font-semibold text-xs md:text-sm text-center hover:bg-gray-200 transition shadow">
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>

            {/* Column 2: ฝั่งขวา */}
            <div className="flex flex-col gap-2">
              {rightMenuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <button className="w-full py-2 px-3 rounded-full bg-white text-black font-semibold text-xs md:text-sm text-center hover:bg-gray-200 transition shadow">
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 bg-black flex flex-col items-center justify-center gap-6">
          <button className="text-xl md:text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition flex items-center gap-2">
            <span>🥊</span> (คลิก) เพื่อดูงานแข่งที่กำลังจะมาถึง <span>🏆</span>
          </button>

          <button className="text-lg md:text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2">
            <span>📂</span> ลงข้อมูลงานแข่ง (คลิก) <span>🧩</span>
          </button>
        </main>
      </div>
    </div>
  );
}