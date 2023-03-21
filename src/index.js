import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from './routes/Product';
import Category from './routes/Category';
import Search from './routes/Search';
import Redirect from './routes/Redirect';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { useState, createContext } from 'react';
import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares';
import { useInstantSearch} from 'react-instantsearch-hooks-web';
import { useLayoutEffect } from 'react';
import aa from 'search-insights';
import {SEARCH_CLIENT, PRODUCTS_INDEX} from './constants';



/* Insights */
function InsightsMiddleware() {

  const {use} = useInstantSearch();
  
  useLayoutEffect(() => {
    const middleware = createInsightsMiddleware({
      insightsClient: aa,
    })

    return use(middleware);
  }, [use]);

  return null;
}

aa("setUserToken", 'anonymous');

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Search />} />
        <Route path="/redirect" element={<Redirect/>} />
        <Route path="/:sku" element={<Product />} />
        <Route path="/category/:cat" element={<Category />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <InstantSearch searchClient={SEARCH_CLIENT} indexName={PRODUCTS_INDEX}>
      <InsightsMiddleware/>
      <RouterProvider router={router} />
    </InstantSearch>
  
);






