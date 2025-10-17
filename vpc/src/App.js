import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">BetterLife</div>
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#blog">BLOG</a>
          <a href="#features">FEATURES</a>
          <a href="#pages">PAGES</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
      
      <div className="hero-section">
        <div className="hero-content">
          <p className="hero-subtitle">There is no other way except Jesus.</p>
          <h1 className="hero-title">
            We love God.<br />
            We believe in God.
          </h1>
          <button className="read-more-btn">READ MORE</button>
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <div className="icon">🙏</div>
          <h3>Daily Prayers</h3>
        </div>
        
        <div className="info-card">
          <div className="icon">📖</div>
          <h3>Continuous Teaching</h3>
        </div>

        <div className="info-card">
          <div className="icon">👥</div>
          <h3>Community Helpers</h3>
        </div>

        <div className="info-card">
          <div className="icon">⛪</div>
          <h3>Set of Sermons</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
