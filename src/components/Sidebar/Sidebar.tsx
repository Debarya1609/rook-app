import { motion, type Variants } from "framer-motion"
import {
  Home,
  Search,
  Wrench,
  CheckCircle,
  Sparkles,
  ChevronLeft,
} from "lucide-react"
import { useState } from "react"
import "./Sidebar.css"

type NavItem = {
  id: string
  label: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "analyze", label: "Rook Analyze", icon: Search },
  { id: "build", label: "Rook Build", icon: Wrench },
  { id: "evaluate", label: "Rook Evaluate", icon: CheckCircle },
  { id: "create", label: "Rook Create", icon: Sparkles },
]

const sidebarVariants: Variants = {
  expanded: {
    width: 240,
    transition: { stiffness: 260, damping: 28 },
  },
  collapsed: {
    width: 72,
    transition: { stiffness: 260, damping: 28 },
  },
}

const labelVariants: Variants = {
  expanded: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.18, ease: "easeOut" },
  },
  collapsed: {
    opacity: 0,
    x: -6,
    transition: { duration: 0.12, ease: "easeIn" },
  },
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const activeId = "home" // hook this to router later

  return (
    <motion.aside
      className="sidebar"
      variants={sidebarVariants}
      animate={collapsed ? "collapsed" : "expanded"}
      initial={false}
    >
      {/* Top */}
      <div className="sidebar-top">
        <button
          className="collapse-btn"
          onClick={() => setCollapsed((v) => !v)}
        >
          <motion.div
            animate={{ rotate: collapsed ? 180 : 0 }}
            transition={{ stiffness: 260, damping: 20 }}
          >
            <ChevronLeft size={18} />
          </motion.div>
        </button>
      </div>

      {/* Navigation */}
      <motion.nav
        className="sidebar-nav"
        initial={false}
        animate={collapsed ? "collapsed" : "expanded"}
        variants={{
          expanded: { transition: { staggerChildren: 0.04 } },
          collapsed: {
            transition: { staggerChildren: 0.02, staggerDirection: -1 },
          },
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.id === activeId

          return (
            <motion.div
              key={item.id}
              className={`sidebar-item ${isActive ? "active" : ""}`}
            >
              <motion.div
                className="icon-wrapper"
                whileHover={{ y: -1 }}
                transition={{ stiffness: 300, damping: 20 }}
              >
                <Icon size={20} />
              </motion.div>

              <motion.span
                className="label"
                variants={labelVariants}
                animate={collapsed ? "collapsed" : "expanded"}
              >
                {item.label}
              </motion.span>
            </motion.div>
          )
        })}
      </motion.nav>
    </motion.aside>
  )
}
