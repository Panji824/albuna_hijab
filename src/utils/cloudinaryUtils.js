const YOUR_CLOUD_NAME = 'dhlzov8xo'; // GANTI DENGAN CLOUD NAME ANDA YANG BENAR
const BASE_URL = `https://res.cloudinary.com/${YOUR_CLOUD_NAME}/image/upload/`;

export const getCloudinaryUrl = (image) => {
    if (!image) return null;
    
    // PERBAIKAN: Jika input sudah berupa URL lengkap (mengandung 'cloudinary.com'), 
    // kembalikan saja URL itu, jangan tambahkan BASE_URL lagi.
    if (image.startsWith('http://') || image.startsWith('https://') || image.includes('cloudinary.com')) {
        return image;
    }
    
    // Jika input hanya Public ID (contoh: 'products/0YOB1NrR7EcUPMzxSogLDTXGWGUoDc28F02bFtyX_z9hkxd.jpg')
    // Baru tambahkan BASE_URL.
    return `${BASE_URL}${image}`;
};