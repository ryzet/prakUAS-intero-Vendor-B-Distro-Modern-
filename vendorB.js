// vendorB.js
function normalizeVendorB(data) {
  return data.map(item => {
    return {
      kode_produk: item.sku,
      nama_produk: item.productName,
      harga: item.price,
      status: item.isAvailable ? "tersedia" : "habis"
    };
  });
}

module.exports = normalizeVendorB;
