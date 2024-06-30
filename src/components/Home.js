import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />{" "}
      Selamat Datang di Portofolio Saya
      <motion.p
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      Halo! Saya Ahmad Rizal, seorang pengembang web dengan hasrat mendalam
      untuk menciptakan aplikasi web yang inovatif dan responsif. Dengan
      pengalaman di berbagai proyek menggunakan teknologi seperti React,
      Node.js, dan lainnya, saya selalu berusaha memberikan solusi terbaik untuk
      setiap tantangan yang dihadapi. Saya percaya bahwa teknologi dapat
      mengubah dunia menjadi tempat yang lebih baik, dan saya berkomitmen untuk
      menjadi bagian dari perubahan tersebut. Selamat datang di portofolio saya,
      di mana Anda dapat menemukan berbagai proyek dan kontribusi saya di dunia
      teknologi.
    </div>
  );
};

export default Home;
