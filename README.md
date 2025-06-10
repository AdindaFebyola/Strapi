# Proyek Akhir: Implementasi Strapi v3 dengan Docker

Proyek akhir ini untuk mata kuliah Administrasi Sistem yang mengimplementasikan Headless CMS Strapi v3.6.8 dan database PostgreSQL menggunakan Docker Compose.

## Arsitektur

Sistem ini terdiri dari dua kontainer utama:
- **`strapi`**: Menjalankan aplikasi backend Strapi berbasis Node.js.
- **`db_v3`**: Menjalankan database PostgreSQL untuk penyimpanan data yang persisten.

Kedua kontainer berkomunikasi melalui jaringan internal Docker yang kustom.

## Cara Menjalankan

1.  **Prasyarat:** Pastikan Docker dan Docker Compose sudah terinstal di sistem Anda.

2.  **Clone Repositori:**
    ```bash
    git clone [https://github.com/username-kamu/nama-repo-kamu.git](https://github.com/username-kamu/nama-repo-kamu.git)
    cd nama-repo-kamu
    ```

3.  **Setup File Konfigurasi (`.env`):**
    Buat file `.env` dengan menyalin template yang disediakan:
    ```bash
    cp .env.example .env
    ```
    Buka file `.env` yang baru dibuat dan isi semua variabel yang ada. Untuk kunci keamanan, Anda bisa men-generate nilai baru menggunakan perintah `openssl rand -base64 32` atau gunakan contoh di bawah ini untuk keperluan demo:

    ```
    DATABASE_PASSWORD=strapiproject123

    APP_KEY=pYeaS5CLcbJvj7NBsgjN/AHe6+TPVXbYLHeOKcGR4nc=
    API_TOKEN_SALT=+8J9lVVG0PzQHavytYrbf1+DFmbd0ivqycdlsp01Mmg=
    JWT_SECRET=VM8tsmPdlpOUhBODihekl9RrwkJfC4J6SLkCGgcRKhE=
    ```

4.  **Jalankan Sistem:**
    Gunakan Docker Compose untuk menjalankan semua layanan:
    ```bash
    docker compose up -d
    ```

5.  **Akses Aplikasi:**
    * Tunggu beberapa menit hingga Strapi selesai melakukan inisialisasi.
    * Akses panel admin di `http://<IP_SERVER>:1337/admin`.
    * Endpoint API contoh bisa diakses di `http://<IP_SERVER>:1337/nama-collection-type`.
