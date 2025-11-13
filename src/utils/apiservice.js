const API_BASE_URL = 'http://localhost:8000/api'; 

// Fungsi untuk mengambil semua data yang dibutuhkan di halaman utama
export const fetchHomePageData = async () => {
    let productsData = [];
    let promoData = null;
    let success = false;

    try {
        // --- 1. Ambil Data Produk ---
        const productRes = await fetch(`${API_BASE_URL}/products/`);
        productsData = await productRes.json();

        // --- 2. Ambil Data Promosi ---
        const promoRes = await fetch(`${API_BASE_URL}/promotions/`);
        const promoList = await promoRes.json();
        
        if (promoList && promoList.length > 0) {
            promoData = promoList[0]; // Ambil promo yang pertama/terbaru
        }
        
        success = true;

    } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
        // Jika gagal, kembalikan 'success: false'
    }

    return {
        products: productsData,
        promotion: promoData,
        success: success,
    };
};