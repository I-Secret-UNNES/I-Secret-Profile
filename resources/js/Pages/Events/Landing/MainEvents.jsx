import CalenderLogo from '@/Components/icon/CalenderLogo';
import InstagramLogo from '@/Components/icon/InstagramLogo';
import LocationLogo from '@/Components/icon/LocationLogo';
import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';

const Jarak = ({ tinggi }) => {
  return <div className={tinggi}></div>;
};

const MainEvents = () => {
  return (
    <GuestLayout>
      <section className='h-28'>
        <img
          src='https://picsum.photos/seed/picsum/200/300'
          alt='banner main'
          className='w-full h-full object-cover'
        />
      </section>

      <Jarak tinggi={'h-16'} />

      <section className='w-[85%] mx-auto  py-4'>
        <div className='bg-[#335DCB] inline-block px-6 py-1 rounded-lg max-w-full'>
          <h1 className='text-white text-lg font-bold'>Program Kerja</h1>
        </div>

        <Jarak tinggi={'h-10'} />

        <h1 className='font-bold text-xl'>
          Musyawarah Kerja I-SECRET ILKOM UNNES
        </h1>

        <Jarak tinggi={'h-10'} />

        <div className='h-[300px]'>
          <img
            src='https://picsum.photos/seed/picsum/600/400'
            alt='Logo I-Secret'
            className='w-full h-full object-cover'
          />
        </div>

        <Jarak tinggi={'h-3'} />

        <div className='flex '>
          <CalenderLogo color='black' className='block h-6 w-auto fill-current text-gray-800' />
          <h1 className='ml-2 font-bold text-black'>June 07, 2024</h1>
        </div>

        <Jarak tinggi={'h-3'} />

        <div className='flex '>
          <LocationLogo className='block h-5 w-auto fill-current text-gray-800' />
          <h1 className='ml-2 font-bold text-black'>Location</h1>
        </div>

        <Jarak tinggi={'h-5'} />

        <h1 className='text-black'>
          Musyawarah Kerja (Musker) Isecret Ilkom UNNES adalah sebuah forum
          pertemuan tahunan yang diselenggarakan oleh Ikatan Mahasiswa Sistem
          Komputer (Isecret) Universitas Negeri Semarang (UNNES). Acara ini
          merupakan ajang penting bagi seluruh anggota Isecret Ilkom untuk
          melakukan evaluasi terhadap kinerja organisasi selama setahun terakhir
          dan merencanakan program kerja untuk tahun berikutnya
        </h1>

        <br />

        <h1 className='text-black'>
          Dalam Musker ini, para anggota organisasi berkumpul untuk
          mendiskusikan berbagai aspek kegiatan yang telah dilaksanakan,
          mengidentifikasi keberhasilan dan kendala yang dihadapi, serta mencari
          solusi untuk peningkatan kinerja di masa depan. Selain itu, forum ini
          juga menjadi tempat untuk menyusun dan menetapkan rencana strategis
          serta program kerja yang akan dijalankan selama setahun ke depan,
          dengan fokus pada pengembangan kompetensi anggota, peningkatan
          kerjasama internal dan eksternal, serta kontribusi nyata bagi
          masyarakat dan lingkungan sekitar.
        </h1>
      </section>
    </GuestLayout>
  );
};

export default MainEvents;
