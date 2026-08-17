import React from 'react';
import Link from 'next/link';

export default function BeybladeXPage() {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Weekly Events', href: '#' },
    { name: 'Product List', href: '#' },
    { name: 'Parts List', href: '#' },
    { name: 'Combo Hot', href: '#' },
    { name: 'Bey X Timer', href: '#' },
    { name: 'Score Board', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Bey News', href: '#' },
    { name: 'กติกาการแข่งขัน', href: '#' },
    { name: 'แลกโค๊ด', href: '#' },
    { name: 'รายชื่อผู้ขาย', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header Banner / Logo Beyblade X */}
      <header className="flex justify-center items-center py-8 border-b border-gray-800 bg-black">
        <div className="flex flex-col items-center justify-center">
          <img 
            src="/beyblade-x-logo.png" 
            alt="Beyblade X Logo" 
            className="h-28 md:h-40 w-auto object-contain"
          />
        </div>
      </header>

      {/* Main Body with Sidebar Navigation */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-120px)]">
        {/* Sidebar Menu */}
        <aside className="w-full md:w-60 bg-black p-4 border-r border-gray-800 flex flex-col gap-2 shrink-0">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <button className="w-full py-2.5 px-4 rounded-full bg-white text-black font-semibold text-left hover:bg-gray-200 transition shadow text-base">
                {item.name}
              </button>
            </Link>
          ))}
        </aside>

        {/* Content Area - ขยับขึ้นบนและจัดกึ่งกลางแนวนอน */}
        <main className="flex-1 p-8 bg-black flex flex-col items-center justify-start pt-12 gap-10 text-center">
          
          {/* บรรทัดที่ 1: ข้อความไฟนีออน ขยับดุ๊กดิ๊ก ดึงดูดสายตา */}
          <a
            href="https://script.google.com/macros/s/AKfycbzBSD1vLD5z3OuQPZGzaEJE2F7SRgdUkOwCEOL_0RTR3cCagL1f4uzBMOg_037h7Bx8vA/exec"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block animate-bounce hover:animate-none transition-transform duration-300 transform hover:scale-110 cursor-pointer"
          >
            <span className="text-2xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,100,0,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(255,200,0,1)]">
              🔥 (คลิก) เพื่อดูงานแข่งที่กำลังจะมาถึง 🏆
            </span>
          </a>

          {/* บรรทัดที่ 2: ข้อความสีฟ้า-ม่วงไซเบอร์ มีเอฟเฟกต์ Pulse & Hover Glow */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe1wgphHbHUk7UayksmahQ1orNlquZzFCC9LHgO1vaOW9W7xQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block animate-pulse hover:animate-none transition-transform duration-300 transform hover:scale-110 cursor-pointer"
          >
            <span className="text-2xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(0,200,255,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(0,255,255,1)]">
              📝 ลงข้อมูลงานแข่ง (คลิก) ✨
            </span>
          </a>

        </main>
      </div>
    </div>
  );
}