import "../css/Home.css";
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="home-container">
      {/* パララックス背景 */}
      <div className="parallax-background"></div>

      {/* タイトルアニメーション */}
      <motion.h1
        className="title"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        星光メタバース
      </motion.h1>

      {/* ナビゲーションリンク */}
      <div className="links-container">
        <motion.a
          href="/login"
          className="nav-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Login
        </motion.a>
        <motion.a
          href="/signup"
          className="nav-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Sign Up
        </motion.a>
        <motion.a
          href="/exe"
          className="nav-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Metaverse
        </motion.a>
        <motion.a
          href="/setting"
          className="nav-link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Setting
        </motion.a>
      </div>
    </div>
  );
};

export default Home;
