// vendorB.js
function normalizeVendorB(data) {
  return data.map(item => {
    return {
      product_code: item.sku,
      product_name: item.productName,
      price: item.price,
      status: item.isAvailable ? "available" : "sold out"
    };
  });
}

module.exports = normalizeVendorB;
