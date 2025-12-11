interface shippingProps {
  quantity: number;
  shippingFees: number;
  handlePayment: () => void
}

function Shipping({ quantity, shippingFees, handlePayment }: shippingProps) {
  const fees = shippingFees * Math.ceil(quantity / 5);
  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: {fees.toLocaleString()}
        <br />
      </div>
      <br />
      <button type="button" onClick={handlePayment}>
        결제
      </button>
    </>
  );
}

export default Shipping;