// vendorB.js
function normalizeVendorB(data) {
  return data.map(item => {
    return {
      kode_product: item.sku,
      name_produk: item.productName,
      price: item.price,
      status: item.isAvailable ? "available" : "sold out"
    };
  });
}

module.exports = normalizeVendorB;
