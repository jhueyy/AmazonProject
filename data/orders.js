export const orders = JSON.parse(localStorage.getItem('orders')) || [];

// if nothing in local storage, use empty array as default

export function addOrder(order){
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

