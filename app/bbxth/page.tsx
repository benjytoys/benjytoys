import React from 'react';
import Link from 'next/link';

export default function BeybladeXPage() {
  // เมนูฝั่งซ้ายของจอ
  const leftMenuItems = [
    { name: 'Home', href: '/' },
    { name: 'Product List', href: '#' },
    { name: 'Parts List', href: '#' },
    { name: 'Combo Hot', href: '#' },
    { name: 'Bey X Timer', href: '#' },
    { name: 'Score Board', href: '#' },
  ];

  // เมนูฝั่งขวาของจอ
  const rightMenuItems = [
    { name: 'Community', href: '#' },
    { name: 'Bey News', href: '#' },
    { name: 'กติกาการแข่งขัน', href: '#' },
    { name: 'แลกโค้ด', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Header / Logo Beyblade X */}
      <header className="flex justify-center items-center pt-8 pb-4 bg-black">
        <img 
          src="/beyblade-x-logo.png" 
          alt="Beyblade X Logo" 
          className="h-28 md:h-40 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
        />
      </header>

      {/* Main Container: แยกฝั่งซ้าย - กลาง - ขวา */}
      <div className="flex flex-col md:flex-row flex-1 justify-between items-start p-4 md:p-6 gap-6">
        
        {/* Sidebar ฝั่งซ้ายสุด */}
        <aside className="w-full md:w-48 flex flex-col gap-2">
          {leftMenuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <button className="w-full py-2.5 px-4 rounded-full bg-white text-black font-semibold text-xs md:text-sm text-center hover:bg-gray-200 transition shadow">
                {item.name}
              </button>
            </Link>
          ))}
        </aside>

        {/* Content ตรงกลางจอ */}
        <main className="flex-1 flex flex-col items-center justify-start gap-8 text-center pt-6 md:pt-10">
          {/* บรรทัดที่ 1 */}
          <a 
            href="https://docs.google.com/spreadsheets/d/1X3vS23Kz23mZ4Y-4sZ6K420e6e_A41_g/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl md:text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition flex items-center justify-center gap-3 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]"
          >
            <span>🥊</span> (คลิก) เพื่อดูงานแข่งที่กำลังจะมาถึง <span>🏆</span>
          </a>

          {/* บรรทัดที่ 2 */}
          <a 
            href="https://forms.gle/4J39K4K7A8293021" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg md:text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition flex items-center justify-center gap-3 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          >
            <span>📂</span> ลงข้อมูลงานแข่ง (คลิก) <span>🧩</span>
          </a>

          {/* บรรทัดที่ 3 (เพิ่มใหม่) */}
          <a 
            href="#" 
            className="text-lg md:text-2xl font-bold text-fuchsia-400 hover:text-fuchsia-300 transition flex items-center justify-center gap-3 drop-shadow-[0_0_20px_rgba(232,121,249,0.8)]"
          >
            <span>🥤</span> Rankings Smoothie Tournament <span>👑</span>
          </a>
        </main>

        {/* Sidebar ฝั่งขวาสุด */}
        <aside className="w-full md:w-48 flex flex-col gap-2">
          {rightMenuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <button className="w-full py-2.5 px-4 rounded-full bg-white text-black font-semibold text-xs md:text-sm text-center hover:bg-gray-200 transition shadow">
                {item.name}
              </button>
            </Link>
          ))}
        </aside>

      </div>
    </div>
  );
}