# CRUD Enpoint

Tugas membuat enpoint Create, Read, Update, dan Delete untuk Biodata

## Instalasi

1. Clone repositori ini.
2. Jalankan perintah `npm install` untuk menginstal dependensi.
3. Jalankan perintah `npm start` untuk menjalankan proyek.

## Penggunaan

### API Endpoints

- GET `/data`: Mendapatkan daftar semua data.
- GET `/data/:id`: Mendapatkan detail data berdasarkan ID.
- POST `/data`: Membuat data baru.
- PUT `/data/:id`: Memperbarui data berdasarkan ID.
- DELETE `/data/:id`: Menghapus data berdasarkan ID.

### Contoh Penggunaan API

- Mendapatkan daftar semua tugas:
  GET /data
- Mendapatkan detail tugas dengan ID tertentu:
  GET /data/:id
- Membuat data baru:
  POST /data
  Body:

```json
{
  "nama": "sanris",
  "tempatLahir": "bandung",
  "tanggalLahir": "2000-01-02",
  "alamat": "Jl. Raya No. 123"
}
```

- Memperbarui data dengan ID tertentu:
  PUT /data/:id
  Body:

```json
{
  "nama": "sanris ganteng",
  "tempatLahir": "bandung",
  "tanggalLahir": "2000-01-02",
  "alamat": "Jl. Raya lebar  No. 123"
}
```

- Menghapus data dengan ID tertentu:
  DELETE /data/:id
