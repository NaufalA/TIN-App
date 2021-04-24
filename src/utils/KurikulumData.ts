interface Semester {
  title: string;
  totalSks?: number;
  pilihan?: boolean;
  data: Matkul[];
}

interface Matkul {
  subject: string;
  status: string;
  sks: number;
  bidang?: string;
}

export const KurikulumData: Semester[] = [
  {
    title: 'Semester 1',
    totalSks: 20,
    data: [
      {
        subject: 'Pancasila dan Kewarganegaraan',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Agama',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Bahasa Inggris',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Bahasa Indonesia',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Kemampuan Belajar dan Literasi Ilmiah',
        status: 'Wajib',
        sks: 1,
      },
      {
        subject: 'Pengantar Agroindustri',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Olah raga, kesenian, dan kreativitas',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Fisika Dasar',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Kimia Dasar',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Mikrobiologi Dasar',
        status: 'Wajib',
        sks: 2,
      },
    ],
  },
  {
    title: 'Semester 2',
    totalSks: 20,
    data: [
      {
        subject: 'Kalkulus',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Teori dasar sistem',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Dasar Ekonomi dan Manajemen',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Perhitungan Dasar Rekayasa Proses	',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Mikrobiologi Industri',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Satuan Proses',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Gambar Teknik, Skema dan Model',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Sistem Informasi Berbasis Komputer',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Ekonomi Teknik',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Manajemen Finansial',
        status: 'Wajib',
        sks: 2,
      },
    ],
  },
  {
    title: 'Semester 3',
    totalSks: 22,
    data: [
      {
        subject: 'Statistika Industri',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Matematika Industri',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Sistem Kendali dan Instrumentasi',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Riset Operasional 1',

        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Rantai pasok, logistik, dan transportasi',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Pengetahuan dan Analisis Bahan Alami',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Satuan Operasi Industri	l',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Dasar Rekayasa Bioprosesr',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Pemrograman Komputerk',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Peralatan Agroindustri',
        status: 'Wajib',
        sks: 2,
      },
    ],
  },
  {
    title: 'Semester 4',
    totalSks: 21,
    data: [
      {
        subject: 'Teknologi Minyak, emulsi, dan oleokimia',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Teknologi Serat, Karet dan Resin',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Pengembangan Industri Kecil Menengah',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Riset Operasional 2',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Ergonomi dan Tata Cara Kerja',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Rancangan Percobaan',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Biorefineri dan Bioekonomi',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Manajemen Lingkungan Industri',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Manajemen Operasi Agroindustri',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Assessment 1',
        status: 'Wajib',
        sks: 1,
      },
    ],
  },
  {
    title: 'Semester 5',
    totalSks: 19,
    data: [
      {
        subject: 'Manajemen Mutu',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Teknik Kendali Mutu',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Wirausaha Berbasis Sosio-Teknologi (Techopreneurship)',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Pengemasan dan penyimpanan dalam Agroindustri	1',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Penanganan Bahan',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Teknologi Pati dan Gula',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Teknologi Bahan Penyegar dan Minyak Atsiri',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Metode Ilmiah (Penelitian)r',
        status: 'Wajib',
        sks: 2,
      },
      {
        subject: 'Usulan Tugas Akhir (Penelitian)',
        status: 'Wajib',
        sks: 2,
      },
    ],
  },
  {
    title: 'Semester 6',
    totalSks: 18,
    data: [
      {
        subject: 'Mata Kuliah Pilihan Teknologi Proses dan Bioproses',
        status: 'Pilihan',
        sks: 2,
      },
      {
        subject: 'Mata Kuliah Pilihan Teknologi Proses dan Bioproses',
        status: 'Pilihan',
        sks: 2,
      },
      {
        subject: 'Mata Kuliah Pilihan Teknologi Proses dan Bioproses',
        status: 'Pilihan',
        sks: 2,
      },
      {
        subject: 'Mata Kuliah Pilihan Teknologi Proses dan Bioproses',
        status: 'Pilihan',
        sks: 2,
      },
      {
        subject: 'Mata Kuliah Pilihan Sistem dan Manajemen',
        status: 'Pilihan',
        sks: 2,
      },
      {
        subject: 'Mata Kuliah Pilihan Sistem dan Manajemen',
        status: 'Pilihan',
        sks: 2,
      },
      {
        subject: 'Mata Kuliah Pilihan Sistem dan Manajemen',
        status: 'Pilihan',
        sks: 2,
      },
      {
        subject: 'Mata Kuliah Pilihan Sistem dan Manajemen',
        status: 'Pilihan',
        sks: 2,
      },
      {
        subject: 'Inovasi',
        status: 'Wajib',
        sks: 2,
      },
    ],
  },
  {
    title: 'Semester 7',
    totalSks: 16,
    data: [
      {
        subject: 'Perancangan Agroindustri',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Perancangan sistem informasi',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Perancangan bisnis agro',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Praktek Kerja Lapangan**',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Kuliah Kerja Mahasiswa (KKM)*',
        status: 'Wajib',
        sks: 3,
      },
      {
        subject: 'Assessment 2',
        status: 'Wajib',
        sks: 1,
      },
    ],
  },
  {
    title: 'Semester 8',
    totalSks: 6,
    data: [
      {
        subject: 'Skripsi dan Publikasi Ilmiah',
        status: 'Wajib',
        sks: 6,
      },
    ],
  },
  {
    title:
      'Mata kuliah pilihan yang ditawarkan di Prodi Teknologi Industri Pertanian, UNPAD',
    pilihan: true,
    data: [
      {
        subject: 'Analisis dan Rekayasa Sistem',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Pemodelan dan Simulasi Agroindustri',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Sistem Pendukung Keputusan',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Ekonomi Manajerial',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Mata Kuliah Pilihan Sistem dan Manajemen',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Teknik Peramalan dan Analisis Prospek',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Manajemen Pemasaran',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Analisis Big Data',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Sistem Pakar dan Kecerdasan Buatan',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Psikologi Konsumen',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'E-commerce',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Manajemen Proyek	',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Manajemen Proyek',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Manajemen Sumber Daya Manusia',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Life Cycle Assessment (LCA)',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Sistem dan Manajemen',
      },
      {
        subject: 'Industri Hasil Hutan',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Industri Parfum dan Kosmetik',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Teknologi Bioindustri',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Bioteknologi Lingkungan',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Teknologi Metabolit',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Teknologi Membran',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Ekstraksi bahan aktif',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Teknologi Industri Halal',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Teknologi Hilir ProdukBioproses',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Teknologi Enzim Industrial',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
      {
        subject: 'Teknologi Bioenergi',
        status: 'Pilihan',
        sks: 2,
        bidang: 'Teknologi Proses dan Bioproses',
      },
    ],
  },
];
