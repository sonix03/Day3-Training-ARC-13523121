# Crypto Price Tracker
## 📂 Struktur Folder
```
/crypto-tracker
├── app.py                 
├── requirements.txt       
├── templates/
│   ├── 
├── static/
│   ├── style.css         
│   ├── script.js         
```

## 🚀 Cara Menjalankan
1. **Pastikan Python telah terinstal**
2. **Buat Virtual Environment**
   ```bash
   python -m venv venv
   ```
3. **Aktifkan Virtual Environment**
   - **Windows**:
     ```bash
     venv\Scripts\activate
     ```
   - **Mac/Linux**:
     ```bash
     source venv/bin/activate
     ```
4. **Install dependensi dari `requirements.txt`**
   ```bash
   pip install -r requirements.txt
   ```
5. **Jalankan server Flask**
   ```bash
   python app.py
   ```
6. **Buka browser** dan akses:
   ```
   http://127.0.0.1:5000/
   ```

## 📸 Testing API dengan Postman
### Endpoint: `/crypto/<coin>`

Gunakan Postman atau cURL untuk melakukan testing:
1. **Request contoh** (Misalnya untuk Bitcoin):
   ```
   GET http://127.0.0.1:5000/crypto/bitcoin
   ```
2. **Response berhasil:**
   ```json
   {
       "coin": "bitcoin",
       "price": 45000.5
   }
   ```



