# PCI — Panel Critical Info

MVP full-stack Nuxt (JavaScript), SQLite, login aman, role admin/user, card informasi, target pembaca, kuis, komentar, monitoring dan export CSV.

## Jalankan
```bash
cp .env.example .env
npm install
npm run seed
npm run dev
```
Buka http://localhost:3000

Demo admin: `admin@pci.local` / `Admin123!`  
Demo user: `10001` / `User123!`

## Keamanan yang diterapkan
- Password bcrypt cost 12, cookie session HTTP-only/SameSite, JWT HS256 dengan kedaluwarsa 8 jam.
- Validasi input Zod pada endpoint autentikasi dan komentar.
- Rate limit login sederhana, security headers, RBAC server-side, reset token acak SHA-256 sekali pakai selama 30 menit, audit login.
- Query parameterized untuk SQLite.

## Integrasi produksi
- Email reset saat ini dicetak ke terminal agar demo dapat dipakai tanpa kredensial SMTP.
- Notifikasi card baru dicetak ke terminal. Sambungkan provider resmi untuk SMTP, WhatsApp Business Platform, dan Instagram Messaging sesuai persetujuan/kontak pengguna.
- Lampiran MVP memakai URL. Untuk production gunakan object storage, antivirus scanning, MIME sniffing, batas ukuran, signed URL, dan allowlist file: PDF, PNG, JPG/JPEG, SVG, DOC/DOCX, XLS/XLSX.
- Rate limiter in-memory perlu diganti Redis untuk multi-instance.
- Jalankan di belakang HTTPS/reverse proxy, rotasi secret, backup SQLite, dan logging terpusat.

## Arsitektur data
`users`, `cards`, `card_targets`, `questions`, `comments`, `password_resets`, `audit_logs`.

## Kapasitas 2.000 karyawan
SQLite WAL cocok untuk MVP dan beban baca dominan pada satu instance. Jika concurrent writes/analytics meningkat, migrasikan ke PostgreSQL tanpa mengubah kontrak API.
