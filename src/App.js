import React from "react";
import {Routes, Route} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Accueil from "./containers/Home";
import Products from "./containers/Products";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Layout from "./components/blog/Layout";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

import './index.css';
import './components/blog/asset/index_blog.css'


const App = () => {
  return (
 
<> 
<NavBar/>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/Products" element={ <Products />} />
      <Route path="/Contact" element={ <Contact />} />
      <Route path="/About" element={ <About />} />
   
      <Route path="/Blog" element={<Layout />} >
          <Route index element={<PostsList />} />
      </Route>
      <Route path="/post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />  
      </Route>
    </Routes>
<Footer/>
</>
  )
  };


export default App;
