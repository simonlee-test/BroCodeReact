import { useState, ChangeEvent } from 'react';

const MyComponent = () => {
  const [name, setName] = useState<string>('Guest');
  const [quantity, setQuantity] = useState<number>(1);
  const [comment, setComment] = useState<string>('');
  const [payment, setPayment] = useState<string>('COD');
  const [shipping, setShipping] = useState<string>('delivery');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  const handlePaymentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShipping(event.target.value)
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <textarea
        placeholder="Leave delivery instruction"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select a payment method</option>
        <option value="E-wallet">E-wallet</option>
        <option value="creditCard">Master/Visa</option>
        <option value="COD">Cash on delivery</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        Pick-up
        <input
          type="radio"
          name=""
          value="pick-up"
          checked={shipping === 'pick-up'}
          onChange={handleShippingChange}
        />
      </label>
      <label>
        Delivery
        <input
          type="radio"
          value="delivery"
          checked={shipping === 'delivery'}
          onChange={handleShippingChange}
        />
      </label>
      <p>Delivery method: {shipping} </p>
    </div>
  );
};

export default MyComponent;
