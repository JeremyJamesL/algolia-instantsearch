import algoliasearch from "algoliasearch/lite";

export const APP_ID = 'YSWWVAX5RB';
export const API_KEY = '9fb3db0222f7b5aef0e2b30791ee6201';
export const PRODUCTS_INDEX = 'federated_ecomm_PRODUCTS';
export const ARTICLES_INDEX = 'federated_ecomm_ARTICLES';
export const SEARCH_CLIENT = algoliasearch(APP_ID, API_KEY);
