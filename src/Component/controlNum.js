export const ControlNumber = (productNumState, action) => {
  const { count } = productNumState;

  switch (action.type) {
    case "increase":
      return { ...productNumState, count: count + 1 };
    case "decrease":
      return { ...productNumState, count: count - 1 };
    case "delete":
      return { ...productNumState, count: count - count };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};
