const express = require("express");

const app = express();

app.get("/customers", (req, res, next) => {
  return res.json({
    success: true,
    data: [
      {
        name: "Andy Mulyono",
        star: "5",
        day: "1",
        address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
        city: "Jakarta"
      },
      {
        name: "Jessica Angelia",
        star: "4.8",
        day: "2",
        address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
        city: "Jakarta"
      },
      {
        name: "Martin Oktavino",
        star: "4.1",
        day: "1",
        address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
        city: "Jakarta"
      },
      {
        name: "Josh Tanuwijaya",
        star: "4",
        day: "2",
        address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
        city: "Jakarta"
      },
      {
        name: "Melinda Sina",
        star: "3.8",
        day: "3",
        address: "Jln. Ks. Tubun No. 2-4, RT4, Kota Bambu",
        city: "Jakarta"
      }
    ]
  });
});

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);