import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  logo: string;
  onAction: () => void;
  actionLabel: string;
}

export default function PageHeader({ title, description, logo, onAction, actionLabel }: PageHeaderProps) {
  return (
    <>
      <motion.div 
        className="hero-card"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.4 }}
      >
        <div className="hero-logo-wrapper">
          <img src={logo} alt={title} className="hero-logo" />
        </div>
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </motion.div>

      <hr className="header-divider" />

      <div className="utility-toolbar">
        <div className="left-actions">
          <button className="primary-btn" onClick={onAction}>
            {actionLabel}
          </button>
          <button className="secondary-btn">Delete</button>
        </div>
        
        <div className="right-actions">
          <div className="search-wrapper">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
            <input type="text" placeholder="Search projects..." className="toolbar-search" />
          </div>
        </div>
      </div>
    </>
  );
}