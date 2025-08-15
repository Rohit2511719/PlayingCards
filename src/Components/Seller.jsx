import React from 'react';

const Seller = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color:"red" }}>Best Sellers</h1>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", width: "30%", padding: "20px", textAlign: "center" }}>
          <img 
            src="https://artofcards.in/media/mf_webp/jpeg/media/catalog/product/cache/3714d3dae98f545f0026fb6279e1bd00/b/b/bb_luxury_6_pack.webp" 
            alt="Card 1" 
            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }} 
          />
          {/* <h2>Card 1</h2>
          <p>Some description for Card 1.</p> */}
        </div>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", width: "30%", padding: "20px", textAlign: "center" }}>
          <img 
            src="https://artofcards.in/media/mf_webp/jpeg/media/catalog/product/cache/3714d3dae98f545f0026fb6279e1bd00/w/h/whatsapp_image_2024-10-21_at_17.06.42.webp" 
            alt="Card 2" 
            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }} 
          />
          {/* <h2>Card 2</h2>
          <p>Some description for Card 2.</p> */}
        </div>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", width: "30%", padding: "20px", textAlign: "center" }}>
          <img 
            src="https://artofcards.in/media/mf_webp/jpeg/media/catalog/product/cache/3714d3dae98f545f0026fb6279e1bd00/m/e/mega_sale_aureo_aviary.webp" 
            alt="Card 3" 
            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }} 
          />
          {/* <h2>Card 3</h2>
          <p>Some description for Card 3.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Seller;
