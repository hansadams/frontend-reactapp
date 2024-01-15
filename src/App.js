import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main';
import About from './main/pages/about';
import Join from './main/pages/join';
import Admin from './admin';
import Login from './main/pages/login';
import Plans from './admin/pages/plans';
import AddPlan from './admin/pages/plans/add';
import EditPlan from './admin/pages/plans/single';
import Success from './main/pages/join/pages/success'
import Members from './admin/pages/members';
import Footer from './main/components/Footer';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="about" element={<About />} />
        <Route path="join/success" element={<Success />} />
        <Route path="join" element={<Join />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Members />}/>
        <Route path="admin/plans" element={<Plans />}/>
        <Route path="admin/plans/add" element={<AddPlan />}/>
        <Route path="admin/plans/:Id" element={<EditPlan />} />
        <Route path="admin/members" element={<Members />}/>
        

      </Routes>
    </Router>
    <Footer/></>
  );
}

export default App;
