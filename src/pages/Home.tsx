import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/Home.css';  // CSSは前回のものを再利用

const HomePage = () => {
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
        Welcome to Our Metaverse
      </motion.h1>

      {/* ナビゲーションリンク */}
      <div className="links-container">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='nav-link-box'
        >
          <Link to="/login" className="nav-link">Login</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='nav-link-box'
        >
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='nav-link-box'
        >
          <Link to="/exe" className="nav-link">Start Metaverse</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='nav-link-box'
        >
          <Link to="/setting" className="nav-link">Settings</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;