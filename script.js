// script.js
// Data level (lengkap untuk level 1, 2, dan 3)
const levelsData = {
    levels: [
        {
            id: "level1",
            title: "Pencurian Jam Antik",
            difficulty: "easy",
            briefing: `
                <h3>Kasus: Pencurian Jam Antik Harrington</h3>
                <p>Sebuah jam antik berharga telah dicuri dari rumah tua keluarga Harrington. Kejadian ini terjadi antara pukul 14.00-16.00 saat tidak ada penghuni rumah.</p>
                
                <h3>Tugas Anda:</h3>
                <ul>
                    <li>Periksa setiap sudut ruang tamu untuk menemukan petunjuk</li>
                    <li>Wawancarai para saksi dan tersangka</li>
                    <li>Kumpulkan bukti-bukti yang relevan</li>
                    <li>Pecahkan teka-teki yang menghalangi investigasi</li>
                    <li>Tentukan siapa pelaku pencurian dan ajukan tuduhan</li>
                </ul>
                
                <h3>Petunjuk Investigasi:</h3>
                <p>Perhatikan baik-baik:</p>
                <ul>
                    <li>Objek-objek yang terlihat tidak pada tempatnya</li>
                    <li>Area yang terlihat lebih bersih dari sekitarnya (mungkin ada sesuatu yang dipindahkan)</li>
                    <li>Percakapan dengan NPC mungkin memberikan petunjuk penting</li>
                    <li>Beberapa petunjuk saling terkait - kumpulkan sebanyak mungkin</li>
                </ul>
                
                <h3>Teka-teki:</h3>
                <p>Anda akan menemukan lemari terkunci dengan kode 3 digit. Perhatikan buku harian Amelia untuk petunjuknya.</p>
            `,
            locations: [
                {
                    id: "livingroom",
                    title: "Ruang Tamu",
                    background: "image.png",
                    objects: ["table", "window", "cabinet", "bookshelf"]
                }
            ],
            objects: [
                {
                    id: "table",
                    title: "Meja Kayu",
                    description: "Meja kayu antik dengan ukiran rumit. Terdapat debu di sebagian permukaannya, tetapi ada area yang bersih dimana sesuatu mungkin pernah diletakkan.",
                    clue_id: "clue1",
                    interactable: true,
                    position: { x: 40, y: 60 }
                },
                {
                    id: "window",
                    title: "Jendela",
                    description: "Jendela besar dengan kaca berdebu. Terdapat goresan kecil di kusen jendela, sepertinya ada yang mencoba membukanya dari luar.",
                    clue_id: null,
                    interactable: true,
                    position: { x: 80, y: 30 }
                },
                {
                    id: "cabinet",
                    title: "Lemari Kaca",
                    description: "Lemari kaca berisi berbagai barang antik dan porselen. Salah satu rak terlihat kosong, dengan bekas debu berbentuk persegi panjang - seukuran dengan jam yang dicuri.",
                    clue_id: "clue2",
                    interactable: true,
                    position: { x: 60, y: 70 }
                },
                {
                    id: "bookshelf",
                    title: "Rak Buku",
                    description: "Rak buku penuh dengan novel-novel lama dan buku referensi. Salah satu buku terlihat tidak sejajar dengan yang lain.",
                    clue_id: "clue3",
                    interactable: true,
                    position: { x: 20, y: 50 }
                }
            ],
            clues: [
                {
                    id: "clue1",
                    title: "Catatan Servis",
                    description: "Catatan servis jam dari bengkel setempat. Tertulis 'Perlu penggantian pegas utama - diperkirakan selesai 2 minggu' dan ditandatangani oleh Thomas, si tukang servis.",
                    type: "document",
                    is_true_clue: true,
                    location_id: "table",
                    related_to: ["clue4"]
                },
                {
                    id: "clue2",
                    title: "Foto Keluarga",
                    description: "Foto keluarga Harrington yang diambil setahun yang lalu. Semua anggota keluarga terlihat bahagia, dengan jam antik terpajang di latar belakang.",
                    type: "photo",
                    is_true_clue: true,
                    location_id: "cabinet",
                    related_to: []
                },
                {
                    id: "clue3",
                    title: "Buku Harian Tersembunyi",
                    description: "Buku harian milik putri keluarga, Amelia. Dalam entri terbaru, dia menulis tentang kekhawatirannya bahwa seseorang mengawasi rumah mereka.",
                    type: "document",
                    is_true_clue: true,
                    location_id: "bookshelf",
                    related_to: ["clue5"]
                },
                {
                    id: "clue4",
                    title: "Sidik Jari",
                    description: "Sidik jari yang ditemukan di dekat lokasi jam dicuri. Terlihat samar dan tidak jelas.",
                    type: "physical",
                    is_true_clue: false,
                    location_id: "window",
                    related_to: []
                },
                {
                    id: "clue5",
                    title: "Kunci Palsu",
                    description: "Kunci yang ditemukan tersembunyi di bawah keset. Ternyata adalah kunci duplikat untuk pintu belakang.",
                    type: "physical",
                    is_true_clue: true,
                    location_id: "doormat",
                    related_to: []
                }
            ],
            npc: [
                {
                    id: "housekeeper",
                    name: "Bu Wilson",
                    role: "Pembantu Rumah",
                    avatar: "ibu wilson.png",
                    answers: {
                        q1: "Saya sedang membersihkan ruang tamu pagi ini dan jam itu masih ada. Lalu saya pergi ke pasar seperti biasa.",
                        q2: "Thomas? Ya, dia datang kemarin untuk memperbaiki jam itu. Dia bilang perlu membawanya ke bengkel tapi Tuan Harrington tidak mengizinkan.",
                        q3: "Tuan Harrington sangat marah ketika tahu jamnya hilang. Itu peninggalan almarhum ayahnya."
                    },
                    position: { x: 50, y: 80 }
                },
                {
                    id: "repairman",
                    name: "Thomas",
                    role: "Tukang Servis",
                    avatar: "thomas.png",
                    answers: {
                        q1: "Saya hanya memperbaiki jam itu seperti permintaan Tuan Harrington. Tapi dia tidak mau saya bawa ke bengkel.",
                        q2: "Jam itu memang bermasalah dengan pegas utamanya. Butuh perhatian khusus.",
                        q3: "Saya pergi sekitar jam 3 sore. Jam itu masih ada di meja ketika saya pergi."
                    },
                    position: { x: 70, y: 40 }
                }
            ],
            puzzles: [
                {
                    id: "p1",
                    type: "lock",
                    question: "Lemari ini terkunci dengan kode 3 digit. Dapatkah Anda membukanya?",
                    answer: "312",
                    hints: [
                        "Coba perhatikan buku harian Amelia, mungkin ada petunjuk di sana.",
                        "Tanggal ulang tahun Amelia adalah 3 Desember (3/12)"
                    ],
                    position: { x: 60, y: 70 }
                }
            ],
            suspects: [
                {
                    id: "s1",
                    name: "Bu Wilson",
                    description: "Pembantu rumah tangga yang telah bekerja untuk keluarga Harrington selama 10 tahun.",
                    guilt: false
                },
                {
                    id: "s2",
                    name: "Thomas",
                    description: "Tukang servis jam yang datang sehari sebelum pencurian.",
                    guilt: true
                },
                {
                    id: "s3",
                    name: "Amelia Harrington",
                    description: "Putri keluarga Harrington yang sering menulis di buku harian.",
                    guilt: false
                }
            ],
            endings: {
                good: "Anda berhasil membuktikan bahwa Thomas adalah pencurinya! Dia membuat kunci duplikat saat memperbaiki jam dan kembali malam hari untuk mencurinya. Thomas ditangkap dan jam dikembalikan kepada keluarga Harrington.",
                bad: "Anda menuduh salah orang! Thomas memiliki alibi yang kuat dan bukti yang Anda kumpulkan tidak cukup. Pencuri yang sebenarnya lolos dan kasus ini ditutup tanpa resolusi.",
                hidden: "Anda menemukan bahwa Amelia sebenarnya yang mengambil jam untuk membayar utang judi rahasianya. Keluarga memutuskan untuk menyelesaikan ini secara diam-diam."
            },
            requirements_to_solve: {
                min_true_clues: 2,
                required_clues: ["clue1", "clue5"]
            },
            audio: {
                background: "assets/audio/level1_bg.mp3"
            }
        },
        {
            id: "level2",
            title: "Misteri Toko Buku",
            difficulty: "medium",
            briefing: `
                <h3>Kasus: Misteri Kematian Pemilik Toko Buku</h3>
                <p>Pak Anton, pemilik toko buku "Litera", ditemukan tewas di tokonya pagi ini oleh karyawannya. Polisi menduga ini pembunuhan tapi tidak ada bukti jelas.</p>
                
                <h3>Tugas Anda:</h3>
                <ul>
                    <li>Periksa toko buku untuk menemukan petunjuk tersembunyi</li>
                    <li>Wawancarai para saksi dan tersangka</li>
                    <li>Kumpulkan bukti-bukti yang relevan</li>
                    <li>Pecahkan teka-teki yang lebih kompleks</li>
                    <li>Tentukan siapa pembunuhnya dan ajukan tuduhan</li>
                </ul>
                
                <h3>Petunjuk Investigasi:</h3>
                <p>Kasus ini lebih rumit dari yang terlihat:</p>
                <ul>
                    <li>Perhatikan dengan cermat barang-barang yang tidak pada tempatnya</li>
                    <li>Beberapa petunjuk mungkin sengaja disembunyikan atau dipalsukan</li>
                    <li>Percakapan dengan NPC mungkin mengandung informasi yang saling bertentangan</li>
                    <li>Beberapa petunjuk memerlukan interpretasi yang lebih mendalam</li>
                </ul>
                
                <h3>Teka-teki:</h3>
                <p>Anda akan menemukan beberapa teka-teki yang lebih menantang, termasuk sandi tersembunyi dalam buku-buku dan kombinasi brankas rahasia.</p>
            `,
            locations: [
                {
                    id: "bookstore",
                    title: "Toko Buku Litera",
                    background: "bg2.png",
                    objects: ["counter", "bookshelf1", "bookshelf2", "reading_table", "backroom_door"]
                }
            ],
            objects: [
                {
                    id: "counter",
                    title: "Meja Kasir",
                    description: "Meja kasir dengan mesin kasir tua. Terdapat beberapa dokumen dan nota penjualan berantakan.",
                    clue_id: "clue2_1",
                    interactable: true,
                    position: { x: 30, y: 70 }
                },
                {
                    id: "bookshelf1",
                    title: "Rak Buku Misteri",
                    description: "Rak buku berisi novel-novel misteri dan thriller. Beberapa buku terlihat lebih sering diakses.",
                    clue_id: "clue2_2",
                    interactable: true,
                    position: { x: 20, y: 40 }
                },
                {
                    id: "bookshelf2",
                    title: "Rak Buku Non-Fiksi",
                    description: "Rak buku berisi buku-buku non-fiksi dan referensi. Salah satu buku terlihat tidak sesuai dengan kategori lainnya.",
                    clue_id: "clue2_3",
                    interactable: true,
                    position: { x: 60, y: 40 }
                },
                {
                    id: "reading_table",
                    title: "Meja Baca",
                    description: "Meja baca dengan lampu hijau. Terdapat beberapa buku yang tersebar dan sebuah gelas kopi setengah habis.",
                    clue_id: "clue2_4",
                    interactable: true,
                    position: { x: 50, y: 60 }
                },
                {
                    id: "backroom_door",
                    title: "Pintu Belakang",
                    description: "Pintu menuju ruang belakang toko. Terkunci dari dalam dengan kunci masih tertancap.",
                    clue_id: null,
                    interactable: true,
                    position: { x: 80, y: 30 }
                }
            ],
            clues: [
                {
                    id: "clue2_1",
                    title: "Catatan Utang",
                    description: "Catatan utang yang menunjukkan beberapa orang berhutang uang dalam jumlah besar kepada almarhum.",
                    type: "document",
                    is_true_clue: true,
                    location_id: "counter",
                    related_to: ["clue2_5"]
                },
                {
                    id: "clue2_2",
                    title: "Buku dengan Anotasi",
                    description: "Buku novel misteri dengan beberapa halaman yang diberi tanda. Beberapa kalimat digarisbawahi secara mencurigakan.",
                    type: "document",
                    is_true_clue: true,
                    location_id: "bookshelf1",
                    related_to: ["clue2_6"]
                },
                {
                    id: "clue2_3",
                    title: "Buku Berongga",
                    description: "Buku hukum yang telah dimodifikasi dengan bagian dalam yang berongga. Sepertinya digunakan untuk menyembunyikan sesuatu.",
                    type: "physical",
                    is_true_clue: true,
                    location_id: "bookshelf2",
                    related_to: []
                },
                {
                    id: "clue2_4",
                    title: "Residu Kimia",
                    description: "Sisa-sisa bahan kimia ditemukan di dasar gelas kopi. Diduga merupakan racun.",
                    type: "physical",
                    is_true_clue: true,
                    location_id: "reading_table",
                    related_to: ["clue2_7"]
                },
                {
                    id: "clue2_5",
                    title: "Kunci Cadangan",
                    description: "Kunci cadangan toko ditemukan tersembunyi di bawah karpet. Milik salah satu karyawan.",
                    type: "physical",
                    is_true_clue: false,
                    location_id: "counter",
                    related_to: []
                }
            ],
            npc: [
                {
                    id: "employee",
                    name: "Sari",
                    role: "Karyawan Toko",
                    avatar: "sari.png",
                    answers: {
                        q1: "Saya yang menemukan Pak Anton pagi ini. Saya langsung panik dan memanggil polisi.",
                        q2: "Pak Anton memang punya banyak masalah dengan pemasok akhir-akhir ini. Tapi dia tidak pernah membicarakannya dengan saya.",
                        q3: "Toko ini sepi dalam beberapa bulan terakhir. Pak Anton sering tertekan karena masalah keuangan."
                    },
                    position: { x: 40, y: 60 }
                },
                {
                    id: "supplier",
                    name: "Budi",
                    role: "Pemasok Buku",
                    avatar: "budi.png",
                    answers: {
                        q1: "Saya datang kemarin untuk menagih pembayaran yang sudah terlambat 3 bulan. Tapi Pak Anton meminta waktu lagi.",
                        q2: "Saya hanya bertemu dia sebentar lalu pergi. Tidak ada yang aneh.",
                        q3: "Ya, kami sempat berdebat. Tapi tidak sampai saya ingin membunuhnya!"
                    },
                    position: { x: 70, y: 50 }
                }
            ],
            puzzles: [
                {
                    id: "p2_1",
                    type: "code",
                    question: "Temukan pola dari buku-buku yang diberi tanda untuk mengungkap kode 4 digit.",
                    answer: "7294",
                    hints: [
                        "Perhatikan urutan buku di rak misteri - halaman yang ditandai mungkin petunjuk",
                        "Jumlahkan angka-angka dari halaman yang ditandai"
                    ],
                    position: { x: 20, y: 40 }
                }
            ],
            suspects: [
                {
                    id: "s2_1",
                    name: "Sari",
                    description: "Karyawan toko yang menemukan jenazah. Mengalami masalah keuangan.",
                    guilt: false
                },
                {
                    id: "s2_2",
                    name: "Budi",
                    description: "Pemasok buku yang sedang berselisih dengan almarhum mengenai pembayaran.",
                    guilt: true
                },
                {
                    id: "s2_3",
                    name: "Rina",
                    description: "Mantan karyawan yang dipecat karena mencuri.",
                    guilt: false
                }
            ],
            endings: {
                good: "Anda berhasil membuktikan bahwa Budi adalah pembunuhnya! Dia meracuni kopi Pak Anton karena tidak terima ditagih terus menerus. Budi mengaku dan ditangkap.",
                bad: "Kesimpulan Anda salah! Tuduhan terhadap orang yang tidak bersalah membuat pembunuh yang sebenarnya lolos. Kasus ini tidak terpecahkan.",
                hidden: "Anda menemukan bahwa Sari sebenarnya terlibat dalam pencurian dan tidak sengaja menyebabkan kematian Pak Anton saat berkelahi."
            },
            requirements_to_solve: {
                min_true_clues: 3,
                required_clues: ["clue2_1", "clue2_4", "clue2_3"]
            },
            audio: {
                background: "assets/audio/level2_bg.mp3"
            }
        },
        {
            id: "level3",
            title: "Rahasia Keluarga Tua",
            difficulty: "hard",
            briefing: `
                <h3>Kasus: Rahasia Keluarga Blackwood</h3>
                <p>Jonathan Blackwood, patriark keluarga kaya Blackwood, ditemukan tewas di perpustakaan rumah keluarganya. Keluarga ini dikenal dengan rahasia gelapnya yang tersembunyi selama puluhan tahun.</p>
                
                <h3>Tugas Anda:</h3>
                <ul>
                    <li>Selidiki rumah mewah keluarga Blackwood</li>
                    <li>Wawancarai anggota keluarga yang masing-masing memiliki motif</li>
                    <li>Kumpulkan bukti-bukti yang saling terkait secara kompleks</li>
                    <li>Pecahkan teka-teki rumit yang melindungi rahasia keluarga</li>
                    <li>Ungkap kebenaran yang telah tersembunyi puluhan tahun</li>
                </ul>
                
                <h3>Petunjuk Investigasi:</h3>
                <p>Ini adalah kasus paling rumit yang pernah Anda tangani:</p>
                <ul>
                    <li>Setiap petunjuk mungkin memiliki banyak lapisan makna</li>
                    <li>NPC mungkin berbohong atau menyembunyikan informasi penting</li>
                    <li>Beberapa bukti sengaja dipalsukan untuk menyesatkan</li>
                    <li>Diperlukan pemikiran lateral untuk menghubungkan petunjuk-petunjuk</li>
                </ul>
                
                <h3>Teka-teki:</h3>
                <p>Anda akan menghadapi teka-teki multi-lapis termasuk kode tersembunyi dalam lukisan keluarga, surat wasiat yang dienkripsi, dan mekanisme rahasia yang melindungi bukti penting.</p>
            `,
            locations: [
                {
                    id: "mansion",
                    title: "Rumah Keluarga Blackwood",
                    background: "assets/img/level3/mansion.webp",
                    objects: ["desk", "safe", "painting", "book", "window", "rug"]
                }
            ],
            objects: [
                {
                    id: "desk",
                    title: "Meja Tulis",
                    description: "Meja tulis antik dengan laci terkunci. Terdapat tumpukan surat dan dokumen di atasnya.",
                    clue_id: "clue_l1",
                    interactable: true,
                    position: { x: 30, y: 60 }
                },
                {
                    id: "safe",
                    title: "Brankas",
                    description: "Brankas tua yang tersembunyi di balik lukisan. Memiliki kombinasi yang rumit.",
                    clue_id: null,
                    interactable: true,
                    position: { x: 50, y: 40 }
                },
                {
                    id: "painting",
                    title: "Lukisan Keluarga",
                    description: "Lukisan minyak keluarga dari generasi sebelumnya. Ada sesuatu yang aneh dengan mata salah satu subjek.",
                    clue_id: "clue_l2",
                    interactable: true,
                    position: { x: 70, y: 30 }
                },
                {
                    id: "book",
                    title: "Buku Hukum",
                    description: "Buku hukum kuno dengan sampul kulit. Beberapa halaman terlihat sering dibuka.",
                    clue_id: "clue_l3",
                    interactable: true,
                    position: { x: 20, y: 50 }
                },
                {
                    id: "window",
                    title: "Jendela",
                    description: "Jendela dengan kaca patri. Salah satu panelnya retak dari dalam.",
                    clue_id: "clue_l4",
                    interactable: true,
                    position: { x: 80, y: 20 }
                },
                {
                    id: "rug",
                    title: "Karpet Oriental",
                    description: "Karpet indah dengan pola rumit. Ada noda gelap di salah satu ujungnya.",
                    clue_id: "clue_l5",
                    interactable: true,
                    position: { x: 40, y: 70 }
                }
            ],
            clues: [
                {
                    id: "clue_l1",
                    title: "Surat Wasiat",
                    description: "Surat wasiat yang menunjukkan perubahan mendadak dalam pembagian warisan. Ditandatangani sehari sebelum kematian.",
                    type: "document",
                    is_true_clue: true,
                    location_id: "desk",
                    related_to: ["clue_l3", "clue_l6"]
                },
                {
                    id: "clue_l2",
                    title: "Kunci Kecil",
                    description: "Kunci kecil yang tersembunyi di balik lukisan. Sepertinya untuk kotak atau laci tertentu.",
                    type: "physical",
                    is_true_clue: true,
                    location_id: "painting",
                    related_to: ["clue_l7"]
                },
                {
                    id: "clue_l3",
                    title: "Catatan Pertemuan",
                    description: "Catatan tentang pertemuan dengan pengacara sehari sebelum kematian. Membahas perubahan wasiat.",
                    type: "document",
                    is_true_clue: true,
                    location_id: "book",
                    related_to: ["clue_l1"]
                },
                {
                    id: "clue_l4",
                    title: "Serpihan Kaca",
                    description: "Serpihan kaca yang ditemukan di dekat jendela. Bisa jadi dari benda yang dipakai sebagai senjata.",
                    type: "physical",
                    is_true_clue: false,
                    location_id: "window",
                    related_to: []
                },
                {
                    id: "clue_l5",
                    title: "Noda Darah",
                    description: "Noda darah yang tersamar di ujung karpet. Diperkirakan sudah berusia beberapa hari.",
                    type: "physical",
                    is_true_clue: true,
                    location_id: "rug",
                    related_to: ["clue_l8"]
                },
                {
                    id: "clue_l6",
                    title: "Surat Cinta",
                    description: "Surat cinta yang ditujukan kepada istri muda almarhum. Ditulis oleh tangan yang tidak dikenal.",
                    type: "document",
                    is_true_clue: false,
                    location_id: "desk",
                    related_to: []
                },
                {
                    id: "clue_l7",
                    title: "Foto Lawas",
                    description: "Foto lawas yang menunjukkan almarhum dengan seseorang yang bukan anggota keluarga. Diambil 30 tahun yang lalu.",
                    type: "photo",
                    is_true_clue: true,
                    location_id: "safe",
                    related_to: ["clue_l9"]
                },
                {
                    id: "clue_l8",
                    title: "Botol Obat",
                    description: "Botol obat dengan label yang dihapus. Berisi pil-pil yang tidak dikenal.",
                    type: "physical",
                    is_true_clue: false,
                    location_id: "trash",
                    related_to: []
                },
                {
                    id: "clue_l9",
                    title: "Akta Kelahiran",
                    description: "Akta kelahiran yang menunjukkan hubungan keluarga yang selama ini disembunyikan.",
                    type: "document",
                    is_true_clue: true,
                    location_id: "safe",
                    related_to: ["clue_l7"]
                }
            ],
            npc: [
                {
                    id: "widow",
                    name: "Elaine Blackwood",
                    role: "Janda Almarhum",
                    avatar: "assets/img/npc/widow.webp",
                    answers: {
                        q1: "Suami saya baik sekali. Dia tidak punya musuh. Saya tidak tahu siapa yang ingin menyakitinya.",
                        q2: "Perubahan wasiat? Ya, kami membicarakannya. Dia ingin memastikan saya dan anak-anak terlindungi.",
                        q3: "Malam itu saya ada di kamar. Saya mendengar suara berdebat tapi mengira itu TV."
                    },
                    position: { x: 40, y: 60 }
                },
                {
                    id: "son",
                    name: "Richard Blackwood",
                    role: "Putra Tertua",
                    avatar: "assets/img/npc/son.webp",
                    answers: {
                        q1: "Ayah dan saya memang punya perbedaan pendapat tentang bisnis keluarga, tapi tidak sampai saya ingin menyakitinya.",
                        q2: "Saya sedang meeting dengan investor malam itu. Anda bisa mengeceknya.",
                        q3: "Ayah berubah setelah menikah lagi. Dia menjadi lebih tertutup."
                    },
                    position: { x: 60, y: 50 }
                },
                {
                    id: "lawyer",
                    name: "Mr. Harrison",
                    role: "Pengacara Keluarga",
                    avatar: "assets/img/npc/lawyer.webp",
                    answers: {
                        q1: "Tuan Blackwood ingin mengubah wasiatnya untuk memberikan lebih banyak kepada charity. Itu yang kami bicarakan.",
                        q2: "Tidak, tidak ada yang menentang perubahan itu. Keluarga selalu mendukung keputusannya.",
                        q3: "Saya meninggalkan rumah sekitar jam 8 malam. Tuan Blackwood masih baik-baik saja."
                    },
                    position: { x: 70, y: 30 }
                }
            ],
            puzzles: [
                {
                    id: "p3_1",
                    type: "safe",
                    question: "Brankas ini memiliki kombinasi 4 digit. Temukan petunjuknya di sekitar ruangan.",
                    answer: "1975",
                    hints: [
                        "Coba perhatikan lukisan keluarga, mungkin ada petunjuk di sana.",
                        "Tahun pernikahan mereka adalah kuncinya. Cari di buku catatan atau dokumen."
                    ],
                    position: { x: 50, y: 40 }
                },
                {
                    id: "p3_2",
                    type: "rearrange",
                    question: "Susun potongan surat ini untuk mengungkap pesan rahasia.",
                    answer: "Jangan percaya siapa pun, kebenaran ada di brankas",
                    hints: [
                        "Cari kata-kata yang sering muncul bersama.",
                        "Pesan ini adalah peringatan dari almarhum."
                    ],
                    position: { x: 30, y: 60 }
                }
            ],
            suspects: [
                {
                    id: "s3_1",
                    name: "Elaine Blackwood",
                    description: "Janda almarhum yang menikah dengannya 5 tahun lalu. Akan menerima warisan besar.",
                    guilt: false
                },
                {
                    id: "s3_2",
                    name: "Richard Blackwood",
                    description: "Putra tertua yang berselisih dengan ayahnya mengenai bisnis keluarga.",
                    guilt: false
                },
                {
                    id: "s3_3",
                    name: "Mr. Harrison",
                    description: "Pengacara keluarga yang mengetahui semua rahasia keluarga Blackwood.",
                    guilt: true
                },
                {
                    id: "s3_4",
                    name: "Sophia Blackwood",
                    description: "Putri bungsu yang sering diabaikan ayahnya.",
                    guilt: false
                }
            ],
            endings: {
                good: "Anda berhasil membongkar konspirasi Mr. Harrison! Dia adalah anak haram almarhum yang ingin merebut warisan dengan menghabisi semua ahli waris sah. Bukti kuat mengarah padanya dan dia akhirnya mengaku.",
                bad: "Kesimpulan Anda salah! Tuduhan Anda terhadap anggota keluarga yang tidak bersalah justru memperkeruh situasi. Pembunuh yang sebenarnya lolos dan kebenaran tetap tersembunyi.",
                hidden: "Anda menemukan bahwa almarhum sebenarnya bunuh diri karena merasa bersalah telah menyembunyikan rahasia keluarga selama puluhan tahun. Surat wasiat terakhirnya meminta maaf pada semua orang."
            },
            requirements_to_solve: {
                min_true_clues: 4,
                required_clues: ["clue_l1", "clue_l7", "clue_l9", "clue_l5"]
            },
            audio: {
                background: "assets/audio/level3_bg.mp3"
            }
        }
    ]
};

// Game State Management
class GameState {
    constructor() {
        this.currentLevel = null;
        this.inventory = [];
        this.levelsCompleted = {};
        this.audioEnabled = false;
        this.currentMusic = null;
        this.load();
    }

    save() {
        const saveData = {
            currentLevel: this.currentLevel,
            inventory: this.inventory,
            levelsCompleted: this.levelsCompleted,
            audioEnabled: this.audioEnabled
        };
        localStorage.setItem('detectiveGame_save', JSON.stringify(saveData));
    }

    load() {
        const saveData = localStorage.getItem('detectiveGame_save');
        if (saveData) {
            try {
                const data = JSON.parse(saveData);
                this.currentLevel = data.currentLevel;
                this.inventory = data.inventory || [];
                this.levelsCompleted = data.levelsCompleted || {};
                this.audioEnabled = data.audioEnabled || false;
            } catch (e) {
                console.error('Error loading save data:', e);
            }
        }
    }

    reset() {
        this.currentLevel = null;
        this.inventory = [];
        this.levelsCompleted = {};
        this.save();
    }

    addToInventory(clue) {
        if (!this.inventory.find(item => item.id === clue.id)) {
            this.inventory.push(clue);
            this.save();
            return true;
        }
        return false;
    }

    completeLevel(levelId) {
        this.levelsCompleted[levelId] = true;
        this.save();
    }

    isLevelCompleted(levelId) {
        return !!this.levelsCompleted[levelId];
    }
}

// UI Controller
class UIController {
    constructor() {
        this.gameState = new GameState();
        this.currentLevelData = null;
        this.initializeEventListeners();
        this.updateMuteButton();
        this.checkMobileDevice();
    }

    checkMobileDevice() {
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (this.isMobile) {
            document.body.classList.add('mobile-device');
        }
    }

    initializeEventListeners() {
        // Menu buttons
        document.getElementById('btnStart').addEventListener('click', () => this.startGame('level1'));
        document.getElementById('btnLevelSelect').addEventListener('click', () => this.showLevelSelect());
        document.getElementById('btnHelp').addEventListener('click', () => this.showHelp());
        document.getElementById('btnAbout').addEventListener('click', () => this.showAbout());
        document.getElementById('btnMenu').addEventListener('click', () => this.returnToMenu());
        document.getElementById('btnMute').addEventListener('click', () => this.toggleAudio());

        // Modal close buttons
        document.querySelectorAll('.modal__close, [data-modal-close]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.closeModal(e.target.closest('.modal'));
            });
        });

        // Inventory panel close (mobile)
        document.querySelector('.inventory-panel__close').addEventListener('click', () => {
            document.getElementById('inventoryPanel').classList.remove('inventory-panel--open');
        });

        // Inventory toggle button (mobile)
        document.getElementById('inventoryToggle').addEventListener('click', () => {
            document.getElementById('inventoryPanel').classList.toggle('inventory-panel--open');
        });

        // Accusation button
        document.getElementById('btnAccuse').addEventListener('click', () => {
            this.showAccusationModal();
        });

        // Level selection
        document.querySelectorAll('[data-level]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const levelId = e.target.getAttribute('data-level');
                this.showBriefing(levelId);
            });
        });

        // Briefing start button
        document.getElementById('btnStartLevel').addEventListener('click', () => {
            if (this.currentLevelData) {
                this.closeModal(document.getElementById('briefingModal'));
                this.loadLevel(this.currentLevelData);
            }
        });

        // Form submission
        document.getElementById('accusationForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitAccusation();
        });

        // Touch event for scene objects to prevent zooming
        document.addEventListener('touchstart', function(e) {
            if (e.target.classList.contains('scene-object')) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    startGame(levelId) {
        this.showBriefing(levelId);
    }

    showBriefing(levelId) {
        this.closeAllModals();
        this.currentLevelData = levelsData.levels.find(level => level.id === levelId);
        
        if (!this.currentLevelData) {
            console.error('Level data not found:', levelId);
            return;
        }

        // Show briefing modal
        document.getElementById('briefingTitle').textContent = `Briefing: ${this.currentLevelData.title}`;
        document.getElementById('briefingBody').innerHTML = this.currentLevelData.briefing;
        
        this.openModal(document.getElementById('briefingModal'));
    }

    loadLevel(levelData) {
        this.gameState.currentLevel = levelData.id;
        this.gameState.save();

        // Hide menu, show game scene
        document.getElementById('mainMenu').classList.add('hidden');
        document.getElementById('gameScene').classList.remove('hidden');

        // Set up scene background
        const sceneView = document.getElementById('sceneView');
        const bgImg = sceneView.querySelector('.scene-view__image');
        bgImg.src = levelData.locations[0].background || 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e6ced57b8%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e6ced57b8%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23333%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285%22%20y%3D%22217.7%22%3ELevel%20Background%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
        bgImg.alt = levelData.locations[0].title;

        // Clear existing objects
        const existingObjects = sceneView.querySelectorAll('.scene-object');
        existingObjects.forEach(obj => obj.remove());

        // Add interactive objects
        levelData.objects.forEach(obj => {
            if (obj.interactable) {
                const objElement = document.createElement('div');
                objElement.className = 'scene-object';
                objElement.style.left = `${obj.position.x}%`;
                objElement.style.top = `${obj.position.y}%`;
                objElement.setAttribute('data-object-id', obj.id);
                objElement.setAttribute('title', obj.title);
                
                objElement.addEventListener('click', () => {
                    this.showObjectModal(obj);
                });
                
                sceneView.appendChild(objElement);
            }
        });

        // Add NPCs
        levelData.npc.forEach(npc => {
            const npcElement = document.createElement('div');
            npcElement.className = 'scene-object';
            npcElement.style.left = `${npc.position.x}%`;
            npcElement.style.top = `${npc.position.y}%`;
            npcElement.setAttribute('data-npc-id', npc.id);
            npcElement.setAttribute('title', npc.name);
            npcElement.style.backgroundColor = 'rgba(52, 152, 219, 0.7)';
            
            npcElement.addEventListener('click', () => {
                this.showNPCDialog(npc);
            });
            
            sceneView.appendChild(npcElement);
        });

        // Add puzzles
        levelData.puzzles.forEach(puzzle => {
            const puzzleElement = document.createElement('div');
            puzzleElement.className = 'scene-object';
            puzzleElement.style.left = `${puzzle.position.x}%`;
            puzzleElement.style.top = `${puzzle.position.y}%`;
            puzzleElement.setAttribute('data-puzzle-id', puzzle.id);
            puzzleElement.setAttribute('title', 'Puzzle');
            puzzleElement.style.backgroundColor = 'rgba(243, 156, 18, 0.7)';
            
            puzzleElement.addEventListener('click', () => {
                this.showPuzzle(puzzle);
            });
            
            sceneView.appendChild(puzzleElement);
        });

        // Update inventory
        this.updateInventory();

        // Play background music if audio is enabled
        if (this.gameState.audioEnabled && levelData.audio && levelData.audio.background) {
            this.playAudio(levelData.audio.background, true);
        }
    }

    showObjectModal(object) {
        const modal = document.getElementById('objectModal');
        const clue = this.currentLevelData.clues.find(c => c.id === object.clue_id);
        
        document.getElementById('objectModalTitle').textContent = object.title;
        document.getElementById('objectModalDescription').textContent = object.description;
        
        const takeClueBtn = document.getElementById('btnTakeClue');
        if (clue) {
            takeClueBtn.classList.remove('hidden');
            takeClueBtn.onclick = () => {
                if (this.gameState.addToInventory(clue)) {
                    this.playAudio('assets/audio/clue_found.mp3', false);
                    this.updateInventory();
                    this.closeModal(modal);
                } else {
                    alert('Clue ini sudah ada di inventaris Anda.');
                }
            };
        } else {
            takeClueBtn.classList.add('hidden');
        }
        
        this.openModal(modal);
    }

    showNPCDialog(npc) {
        // Implementation for NPC dialog
        const dialogContainer = document.getElementById('npcDialog');
        dialogContainer.innerHTML = `
            <div class="npc-dialog__header">
                <img src="${npc.avatar}" alt="${npc.name}" class="npc-dialog__avatar">
                <div class="npc-dialog__info">
                    <div class="npc-dialog__name">${npc.name}</div>
                    <div class="npc-dialog__role">${npc.role}</div>
                </div>
            </div>
            <div class="npc-dialog__messages">
                <div class="npc-dialog__message npc-dialog__message--npc">
                    Halo, Detektif. Ada yang bisa saya bantu?
                </div>
            </div>
            <div class="npc-dialog__questions">
                <button class="btn btn--secondary" data-question="q1">Tanya tentang kejadian</button>
                <button class="btn btn--secondary" data-question="q2">Tanya tentang hubungan</button>
                <button class="btn btn--secondary" data-question="q3">Tanya tentang bukti</button>
            </div>
        `;
        
        dialogContainer.classList.remove('hidden');
        
        // Add event listeners to question buttons
        dialogContainer.querySelectorAll('[data-question]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const questionKey = e.target.getAttribute('data-question');
                const answer = npc.answers[questionKey];
                
                // Add player question
                const questionText = e.target.textContent;
                const questionsDiv = dialogContainer.querySelector('.npc-dialog__questions');
                const newQuestion = document.createElement('button');
                newQuestion.className = 'btn btn--secondary';
                newQuestion.textContent = questionText;
                newQuestion.disabled = true;
                questionsDiv.appendChild(newQuestion);
                
                // Remove the clicked button
                e.target.remove();
                
                // Add NPC response
                const messagesDiv = dialogContainer.querySelector('.npc-dialog__messages');
                const playerMessage = document.createElement('div');
                playerMessage.className = 'npc-dialog__message npc-dialog__message--player';
                playerMessage.textContent = questionText;
                messagesDiv.appendChild(playerMessage);
                
                const npcMessage = document.createElement('div');
                npcMessage.className = 'npc-dialog__message npc-dialog__message--npc';
                npcMessage.textContent = answer;
                messagesDiv.appendChild(npcMessage);
                
                // Scroll to bottom
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            });
        });
    }

    showPuzzle(puzzle) {
        // Implementation for puzzle UI
        const puzzleContainer = document.getElementById('puzzleContainer');
        puzzleContainer.innerHTML = `
            <h3 class="puzzle__title">Puzzle</h3>
            <p class="puzzle__description">${puzzle.question}</p>
            <div class="puzzle-input">
                <input type="text" id="puzzleAnswer" placeholder="Masukkan jawaban...">
                <button class="btn" id="btnSubmitPuzzle">Submit</button>
            </div>
            <div class="puzzle__hint hidden" id="puzzleHint">
                <div class="puzzle__hint-title">Petunjuk</div>
                <p id="hintText"></p>
            </div>
        `;
        
        puzzleContainer.classList.remove('hidden');
        
        let attemptCount = 0;
        
        document.getElementById('btnSubmitPuzzle').addEventListener('click', () => {
            const answer = document.getElementById('puzzleAnswer').value;
            if (answer.toLowerCase() === puzzle.answer.toLowerCase()) {
                alert('Puzzle terpecahkan!');
                puzzleContainer.classList.add('hidden');
                // Add reward or progress here
            } else {
                attemptCount++;
                alert('Jawaban salah. Coba lagi.');
                
                // Show hints after certain attempts
                if (attemptCount === 2) {
                    document.getElementById('puzzleHint').classList.remove('hidden');
                    document.getElementById('hintText').textContent = puzzle.hints[0];
                } else if (attemptCount === 4) {
                    document.getElementById('hintText').textContent = puzzle.hints[1];
                }
            }
        });
    }

    showAccusationModal() {
        const modal = document.getElementById('accusationModal');
        const suspectSelect = document.getElementById('suspectSelect');
        const clueSelection = document.getElementById('clueSelection');
        
        // Populate suspects
        suspectSelect.innerHTML = '<option value="">-- Pilih Tersangka --</option>';
        this.currentLevelData.suspects.forEach(suspect => {
            const option = document.createElement('option');
            option.value = suspect.id;
            option.textContent = suspect.name;
            suspectSelect.appendChild(option);
        });
        
        // Populate clues
        clueSelection.innerHTML = '';
        this.gameState.inventory.forEach(clue => {
            const label = document.createElement('label');
            label.className = 'clue-checkbox';
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'accusationClues';
            input.value = clue.id;
            
            label.appendChild(input);
            label.appendChild(document.createTextNode(clue.title));
            clueSelection.appendChild(label);
        });
        
        this.openModal(modal);
    }

    submitAccusation() {
        const suspectSelect = document.getElementById('suspectSelect');
        const selectedClues = Array.from(document.querySelectorAll('input[name="accusationClues"]:checked')).map(input => input.value);
        const reason = document.getElementById('accusationReason').value;
        
        const suspectId = suspectSelect.value;
        if (!suspectId) {
            alert('Pilih tersangka terlebih dahulu.');
            return;
        }
        
        const minClues = this.currentLevelData.requirements_to_solve.min_true_clues;
        if (selectedClues.length < minClues) {
            alert(`Anda perlu setidaknya ${minClues} bukti untuk menuduh.`);
            return;
        }
        
        // Check if accusation is correct
        const suspect = this.currentLevelData.suspects.find(s => s.id === suspectId);
        const requiredClues = this.currentLevelData.requirements_to_solve.required_clues || [];
        const hasRequiredClues = requiredClues.every(clueId => selectedClues.includes(clueId));
        
        let ending;
        if (suspect.guilt && hasRequiredClues) {
            ending = this.currentLevelData.endings.good;
            this.gameState.completeLevel(this.currentLevelData.id);
        } else if (!suspect.guilt) {
            ending = this.currentLevelData.endings.bad;
        } else {
            ending = this.currentLevelData.endings.bad; // Has required clues but wrong suspect
        }
        
        this.showEnding(ending, suspect.guilt);
    }

    showEnding(endingText, isGoodEnding) {
        const modal = document.getElementById('endingModal');
        document.getElementById('endingTitle').textContent = isGoodEnding ? 'Kasus Terpecahkan!' : 'Kesimpulan Salah';
        document.getElementById('endingBody').innerHTML = `<p>${endingText}</p>`;
        
        // Show appropriate buttons
        document.getElementById('btnNextLevel').classList.toggle('hidden', !isGoodEnding);
        document.getElementById('btnRestart').classList.toggle('hidden', !isGoodEnding);
        
        // Set up button actions
        document.getElementById('btnNextLevel').onclick = () => {
            const nextLevel = this.getNextLevelId();
            if (nextLevel) {
                this.startGame(nextLevel);
            } else {
                this.returnToMenu();
            }
        };
        
        document.getElementById('btnRestart').onclick = () => {
            this.startGame(this.currentLevelData.id);
        };
        
        document.getElementById('btnToMenu').onclick = () => {
            this.returnToMenu();
        };
        
        this.openModal(modal);
    }

    getNextLevelId() {
        const currentIndex = levelsData.levels.findIndex(level => level.id === this.currentLevelData.id);
        if (currentIndex < levelsData.levels.length - 1) {
            return levelsData.levels[currentIndex + 1].id;
        }
        return null;
    }

    updateInventory() {
        const inventoryItems = document.getElementById('inventoryItems');
        inventoryItems.innerHTML = '';
        
        if (this.gameState.inventory.length === 0) {
            inventoryItems.innerHTML = '<p class="inventory-empty">Belum ada clue yang ditemukan</p>';
            return;
        }
        
        this.gameState.inventory.forEach(clue => {
            const item = document.createElement('div');
            item.className = 'inventory-item';
            item.innerHTML = `
                <div class="inventory-item__title">${clue.title}</div>
                <div class="inventory-item__description">${clue.description}</div>
            `;
            inventoryItems.appendChild(item);
        });
    }

    showLevelSelect() {
        this.openModal(document.getElementById('levelSelect'));
    }

    showHelp() {
        alert("Game Detektif Misteri\n\n1. Klik objek untuk memeriksanya\n2. Kumpulkan clue dan masukkan ke inventaris\n3. Bicaralah dengan NPC untuk mendapatkan informasi\n4. Pecahkan puzzle untuk membuka area baru\n5. Kumpulkan bukti yang cukup untuk menuduh pelaku");
    }

    showAbout() {
        alert("Case Files: Misteri Rumah Tua\n\nGame detektif interaktif dengan 3 level kesulitan. Temukan clue, interogasi tersangka, dan pecahkan misterinya!\n\nDibuat dengan HTML, CSS, dan JavaScript.");
    }

    returnToMenu() {
        document.getElementById('gameScene').classList.add('hidden');
        document.getElementById('mainMenu').classList.remove('hidden');
        this.currentLevelData = null;
        this.gameState.currentLevel = null;
        
        // Stop any playing music
        if (this.currentMusic) {
            this.currentMusic.pause();
            this.currentMusic = null;
        }
    }

    toggleAudio() {
        this.gameState.audioEnabled = !this.gameState.audioEnabled;
        this.gameState.save();
        this.updateMuteButton();
        
        if (this.gameState.audioEnabled && this.currentLevelData) {
            this.playAudio(this.currentLevelData.audio.background, true);
        } else if (this.currentMusic) {
            this.currentMusic.pause();
            this.currentMusic = null;
        }
    }

    updateMuteButton() {
        const btnMute = document.getElementById('btnMute');
        btnMute.textContent = this.gameState.audioEnabled ? '🔊' : '🔇';
    }

    playAudio(src, loop) {
        if (!this.gameState.audioEnabled) return;
        
        // For the sake of this example, we'll just simulate audio
        console.log(`Playing audio: ${src}, loop: ${loop}`);
        // In a real implementation, you would use the Audio API
    }

    openModal(modal) {
        modal.classList.add('modal--open');
    }

    closeModal(modal) {
        modal.classList.remove('modal--open');
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            this.closeModal(modal);
        });
        
        // Also close any open panels
        document.getElementById('inventoryPanel').classList.remove('inventory-panel--open');
        
        // Close NPC dialog and puzzle container
        document.getElementById('npcDialog').classList.add('hidden');
        document.getElementById('puzzleContainer').classList.add('hidden');
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const uiController = new UIController();
    window.gameUI = uiController; // Expose for debugging
});