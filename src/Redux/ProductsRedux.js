import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  receivedPopJuices: ['juiceArray'], // array of objects
  productsError: ['problem'],
});

export const homepageActions = Types;
export default Creators;

export const INITIAL_STATE = {
  popJuices: [{
    title: 'Rome Fortune',
    price: 'Jerome Raheem',
    nicotine_strengths: ['430'],
    image_url: './Images/raheem.jpeg',
  }, {
    title: 'Evol',
    price: 'Future',
    nicotine_strengths: ['189'],
    image_url: './Images/evol.jpg',
  }, {
    title: '2 Chainz / Lil Wayne',
    price: 'Collegrove',
    nicotine_strengths: ['45'],
    image_url: './Images/collegrove.jpg',
  }],
  error: null,
};

function receivedPopJuices(state, { juiceArray }) {
  return ({
    popJuices: [...juiceArray],
    error: null,
  });
}

function productsError({ popJuices }, { problem }) {
  return ({
    popJuices,
    error: problem,
  });
}

export const productsReducer = createReducer(INITIAL_STATE, {
  [Types.RECEIVED_POP_JUICES]: receivedPopJuices,
  [Types.PRODUCTS_ERROR]: productsError,
});
