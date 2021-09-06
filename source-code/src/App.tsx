import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Layout } from 'layouts'
import { BackgroundTasks } from 'components/BackgroundTasks'

function App() {
  return (
    <Router>
      <Link to="/">Go Home</Link> / <Link to="/login">Go to Login</Link> /
      <Link to="/about">Go to About</Link>
      <BackgroundTasks />
      <Layout />
      <div
        style={{
          padding: 10,
          boxSizing: 'border-box',
          border: '1px solid #ccc'
        }}
      >
        Inspect element to see layout per page was changed
      </div>
    </Router>
  )
}

export default App
