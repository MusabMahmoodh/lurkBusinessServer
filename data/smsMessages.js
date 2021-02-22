export const customerOrder = (customer, orderID) => {
  return `Hey ${customer}, Your order #${orderID} is now Processing. Thank you for shopping at LURK.`;
};
export const customerOrderInform = (customer, orderID) => {
  return `Hey, we have a new order #${orderID} from ${customer}`;
};
export const customerOrderCompleted = (customer, orderID) => {
  return `Hey ${customer}, Your order #${orderID} is now Completed. Thank you for shopping at LURK.`;
};
