import React from 'react';
import { Link } from 'react-router-dom';
import { studentsData } from "../../data/studenstData"; 

const JadwalKelas = () => {

  // --- 1. LOGIKA PENCARI SISWA ---
  // Fungsi ini mencari siswa di studentsData berdasarkan potongan nama
  // Contoh: cariSiswa("faiz") akan menemukan "Faiz Ghazali Raindra..."
  const cariSiswa = (namaPanggilan) => {
    const siswa = studentsData.find(s => 
      s.name.toLowerCase().includes(namaPanggilan.toLowerCase())
    );
    
    // Fallback: Kalau nama tidak ditemukan di database, bikin objek dummy biar web gak error
    return siswa || {
      name: namaPanggilan, // Pakai nama input aja
      photo: "https://via.placeholder.com/150", // Gambar kosong
      status: ""
    };
  };

  // --- 2. SUSUNAN PENGURUS KELAS ---
  const pengurus = {
    ketua: cariSiswa("Faiz"),
    sekretaris: cariSiswa("Baraka"),
    bendahara: cariSiswa("Albar")
  };

  // --- 3. SUSUNAN JADWAL PIKET ---
  // Tinggal masukin nama panggilan di sini
  const jadwalPiket = [
    {
      hari: "Senin",
      icon: "🧹",
      warna: "blue", // Tema Biru
      petugas: [cariSiswa("Rakki"), cariSiswa("Fawwaz"), cariSiswa("Siddiq")] // Note: Pastikan "Siddiq" sesuai ejaan di data
    },
    {
      hari: "Selasa",
      icon: "🗑️",
      warna: "sky", // Tema Langit
      petugas: [cariSiswa("Imam"), cariSiswa("Zhafran"), cariSiswa("Albar")]
    },
    {
      hari: "Rabu",
      icon: "🪟",
      warna: "cyan", // Tema Cyan
      petugas: [cariSiswa("Baraka"), cariSiswa("Faiz"), cariSiswa("Hibban")]
    },
    {
      hari: "Kamis",
      icon: "🧴",
      warna: "indigo", // Tema Indigo
      petugas: [cariSiswa("Izzam"), cariSiswa("Kahfi"), cariSiswa("Novri")]
    },
    {
      hari: "Jumat",
      icon: "✨",
      warna: "teal", // Tema Teal
      petugas: [cariSiswa("Barra"), cariSiswa("Naufal"), cariSiswa("Rafif")]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 relative overflow-hidden">
      
      {/* Tombol Kembali */}
      <div className="absolute top-5 left-5 z-20">
        <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali
        </Link>
      </div>

      <div className="max-w-7xl mx-auto pt-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-2">
            Struktur & Jadwal
          </h1>
          <p className="text-slate-500 text-lg">Kelas Kita Tercinta 🚀</p>
        </div>

        {/* --- BAGIAN PENGURUS KELAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-start">
          
          {/* Sekretaris (Kiri) */}
          <OfficerCard 
            role="Sekretaris" 
            data={pengurus.sekretaris} 
            color="cyan" 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />} 
          />

          {/* Ketua (Tengah - Besar) */}
          <div className="md:-mt-6 z-10">
            <OfficerCard 
              role="Ketua Kelas" 
              data={pengurus.ketua} 
              color="blue" 
              isLeader={true}
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />} 
            />
          </div>

          {/* Bendahara (Kanan) */}
          <OfficerCard 
            role="Bendahara" 
            data={pengurus.bendahara} 
            color="indigo" 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />} 
          />
        </div>

        <hr className="border-slate-200 mb-12 mx-auto w-1/2" />

        {/* --- BAGIAN JADWAL PIKET --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {jadwalPiket.map((hari, index) => (
             <div key={index} className={`group w-full bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border-t-4 border-${hari.warna}-500 ${hari.hari === 'Jumat' ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className={`p-4 border-b flex justify-between items-center bg-${hari.warna}-50 border-${hari.warna}-100`}>
                  <h3 className={`text-lg font-bold text-${hari.warna}-800`}>{hari.hari}</h3>
                  <span className="text-2xl">{hari.icon}</span>
                </div>
                <div className="p-5">
                  <ul className="space-y-4">
                    {hari.petugas.map((siswa, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <img 
                          src={siswa.photo} 
                          alt={siswa.name} 
                          className="w-10 h-10 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                        />
                        <div className="flex flex-col">
                          <span className="text-slate-700 font-medium text-sm">{siswa.name}</span>
                          {/* Logic Badge OSIS */}
                          {siswa.status === "osis" && (
                            <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full w-fit font-bold">OSIS</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
          ))}
        </div>

        <div className="text-center mt-12 text-slate-400 text-xs">
          <p>&copy; 2024 Kelas XII RPL 1</p>
        </div>

      </div>
    </div>
  );
};

// --- COMPONENT KECIL BUAT KARTU PENGURUS (Biar Rapi) ---
const OfficerCard = ({ role, data, color, icon, isLeader = false }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-md border-b-4 border-${color}-500 text-center transform transition duration-300 ${isLeader ? 'shadow-xl relative' : 'hover:-translate-y-1'}`}>
      
      {isLeader && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">
          LEADER
        </div>
      )}

      <div className={`w-16 h-16 mx-auto bg-${color}-50 rounded-full flex items-center justify-center text-${color}-600 mb-4 ring-4 ring-white shadow-sm`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icon}
        </svg>
      </div>
      
      <h3 className={`text-lg font-bold text-gray-800`}>{role}</h3>
      
      {/* Foto Profil Pengurus */}
      <div className="mt-3 mb-2 flex justify-center">
         <img src={data.photo} alt={data.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
      </div>

      <p className={`text-${color}-600 font-semibold text-sm`}>{data.name}</p>
    </div>
  );
};

export default JadwalKelas;