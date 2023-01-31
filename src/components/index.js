// * /pages components
/*
All components will be used in the pages folder components
use cards and layout components within pages components
this is the central export destination for all the components with a route
*/
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Features from './pages/Features';
import Bigcommerce from './pages/Bigcommerce';
import ScheduleDemo from './pages/ScheduleDemo';
import Stepin from './pages/Stepin';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
export { default as Navbar } from './layout/NewNavbar';

export { Home, About, Features, Bigcommerce, ScheduleDemo, Stepin, Services, Blogs, Careers };
