import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

//start promise then call load products
// once products are finished loading, runs anon function then display finished loading, then call resolve
// which THEN displays next step

// so here, we waited for load products to finish, then called resolve to go to next step

async function loadPage(){
  try {
    // throw 'error1';
    //put code that could cause an error into try
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');
        resolve('value3');
      });
    });
  } catch(error) {
    // if there's an error inside try, runs code inside catch
    console.log('Unexpected Error, Please try again later.');
  
  }
  

  renderOrderSummary();
  renderPaymentSummary();

}

loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   })


// ]).then((values) => {
//   console.log(values);
//   renderOrderSummary();
//   renderPaymentSummary();
// });

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

*/

/*
// load products is async
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
 
});

*/


