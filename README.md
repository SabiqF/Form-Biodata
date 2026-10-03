# Form BIODATA Mahasiswa

Project ini dibuat untuk memenuhi **Tugas Individu Pertemuan 02** dengan tema:

> Membangun Form BIODATA yang fungsional, terbaca, dan mudah diuji.

## 1. Fitur

- Form biodata mahasiswa.
- Input Nama Lengkap.
- Input NIM.
- Pilihan Program Studi.
- Input Tempat Lahir.
- Pilihan Tanggal Lahir.
- Pilihan Jenis Kelamin.
- Input No. HP.
- Input Email.
- Input Alamat.
- Tombol **Simpan Biodata**.
- Tombol **Reset**.
- Validasi input.
- Menampilkan hasil biodata setelah data valid.

## 2. Validasi

Program memiliki validasi berikut:

- Nama wajib diisi.
- NIM wajib diisi dan hanya boleh berupa angka.
- Program Studi wajib dipilih.
- Tempat lahir wajib diisi.
- Tanggal lahir wajib dipilih.
- Jenis kelamin wajib dipilih.
- No. HP wajib diisi, hanya angka, dan panjang 10–15 digit.
- Email wajib diisi dan harus menggunakan format email yang benar.
- Alamat wajib diisi.

## 3. Struktur Project

```text
Form_Biodata/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    └── logo.png
```

## 4. Cara Menjalankan

Tidak memerlukan instalasi database atau server.

1. Ekstrak folder project.
2. Buka folder `Form_Biodata`.
3. Klik dua kali file `index.html`.
4. Form akan terbuka di browser.
5. Isi data biodata.
6. Klik **Simpan Biodata**.
7. Jika data valid, hasil biodata akan muncul.
8. Untuk mengosongkan form, klik **Reset**.

Disarankan menggunakan Google Chrome, Microsoft Edge, atau Mozilla Firefox.

## 5. Pengujian

### Pengujian berhasil
Isi seluruh field dengan data yang benar, misalnya:

- Nama: Budi Santoso
- NIM: 23123456
- Program Studi: Teknik Informatika
- Tempat Lahir: Bogor
- Tanggal Lahir: 2005-05-10
- Jenis Kelamin: Laki-laki
- No. HP: 081234567890
- Email: budi@email.com
- Alamat: Jl. Contoh No. 10, Bogor

Klik **Simpan Biodata**. Program akan menampilkan pesan berhasil dan hasil biodata.

### Pengujian validasi
Coba klik **Simpan Biodata** ketika beberapa field masih kosong. Program harus menampilkan pesan kesalahan pada field yang belum benar.

Coba juga:
- NIM diisi `ABC123`.
- No. HP diisi `0812abc`.
- Email diisi `budi@`.
- Tidak memilih jenis kelamin.

Program harus menolak data tersebut dan menampilkan pesan validasi.

## 6. Dokumentasi Screenshot

Screenshot yang disarankan untuk dikumpulkan:

### Screenshot 1 — Tampilan awal
Tampilkan seluruh form dalam kondisi rapi sebelum diisi.

### Screenshot 2 — Validasi input
Kosongkan beberapa data atau masukkan data yang salah, kemudian klik **Simpan Biodata**. Screenshot tampilan pesan/error validasi.

### Screenshot 3 — Data berhasil
Isi seluruh data dengan benar, klik **Simpan Biodata**, lalu screenshot bagian pesan berhasil dan hasil biodata.

## 7. Kesesuaian dengan Rubrik

| Kriteria | Implementasi |
|---|---|
| UI & Struktur (30%) | Tampilan form rapi, responsif, memiliki bagian Data Pribadi dan Kontak |
| Event & Logika (30%) | Tombol Simpan melakukan validasi dan menampilkan hasil; tombol Reset mengosongkan form |
| Validasi Input (25%) | Validasi field kosong, angka, email, pilihan, dan panjang nomor HP |
| Kerapian Kode (15%) | HTML, CSS, dan JavaScript dipisahkan ke file masing-masing |

## 8. Teknologi

- HTML5
- CSS3
- JavaScript

Project tidak menggunakan framework atau library eksternal.
