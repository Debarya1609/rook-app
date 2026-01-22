import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-center">
        {/* Background */}
        <img
          src="/graphics/dots-fade.png"
          alt=""
          className="home-bg"
        />

        {/* Foreground content */}
        <div className="home-content">
          <img
            src="/rook-logo.png"
            alt="ROOK"
            className="home-logo"
          />

          <p className="home-description">
            ROOK is an AI-powered digital marketing analyst designed to help
            refine digital presence with consultant-grade reasoning.
          </p>

          <button className="primary-cta">+ New Project</button>
        </div>
      </div>
    </div>
  );
}
