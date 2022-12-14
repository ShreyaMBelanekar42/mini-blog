import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
    <Router>
      <div className='app'>
      <Navbar />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/addblog">
         <AddBlog />
        </Route>
        <Route path="/blogs/:id">
         <BlogDetails />
        </Route>
        <Route path="*">
         <NotFound />
        </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
