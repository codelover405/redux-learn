import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css";


import FormMik from "./FormMik";
// pro
import { store } from "./state/store";
import { Provider } from 'react-redux';

// part1
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from "./Layout";  //layout main Navbar
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Payment from "./Payment";

import All from "./All";



// end part1


// dropdown
import List from "./List";
import Images from "./Images";
import Table from "./Table";

import Side from "./component/Side";
import Customers from "./component/Customers";
import BookList  from "./component/BookList ";
import Orders from "./component/Orders";
import Products from "./component/Products";
import Search from "./Search";


import Card from "./Card";
import Info from "./Info";
import Forum from "./Forum";



// Orders
import A from "./Orders/A";
import B from "./Orders/B";
import C from "./Orders/C";
import D from "./Orders/D";
import E from "./Orders/E";


import Product from "./Product";
import ProductOrder from './ProductOrder';

import Tables from "./Tables";


// form
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";
import { Values } from "redux-form-website-template";



import Basic from "./component/Basic";


import Post from "./Post";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}


      {/* <Values form="simple" /> */}

<Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="payment" element={<Payment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
          {/* <Route path="search" element={<Post />} /> */}
          {/* <Route path="search" element={<FormMik />} /> */}
          {/* <Route path="search" element={<SimpleForm onSubmit={showResults} />} /> */}
          <Route path="*" element={<NoPage />} />
          {/* All */}
          <Route path="all" element={<All />}>
            <Route path="card" element={<Card />} />
            <Route path="info" element={<Info />} />
            <Route path="forum" element={<Forum />} />
            <Route path="side" element={<Side />} />
            <Route path="about" element={<About />} />
            <Route path="payment" element={<Payment />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* dropdown */}
          <Route path="list" element={<List />} />
          {/* <Route path="list/img" element={<Images />} /> */}
          <Route path="list/img" element={<Tables />} />
          <Route path="list/table" element={<Table />} />
          {/* wrapp Side */}
          <Route exact path="list/side" element={<Side />}>
            <Route exact path="Customers" element={<Customers />} />
            <Route path="booklist" element={<BookList  />} />
            <Route path="Products" element={<Products />} />
            <Route path="basic" element={< Basic/>} />
            {/* Orders */}
            <Route axact path="Orders" element={<Orders title={"Starter projects"} ReadTitle={"Guides"} />}>
              <Route path='id-1' element={<A />} />
              <Route path='id-2' element={<B />} />
              <Route path='id-3' element={<C />} />
              <Route path='id-4' element={<D />} />
              <Route path='id-5' element={<E />} />
            </Route>
            {/* <Route path="Products" element={<Products />} /> */}
          </Route>
          {/* <Route path="product" element={<ProductOrder />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
</Provider>
    {/* <SimpleForm onSubmit={showResults} /> */}
      {/* <Values form="simple" /> */}
  </>
);

// </Route>
reportWebVitals();
