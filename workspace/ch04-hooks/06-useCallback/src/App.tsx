import { useCallback, useState } from "react";
import Price from "./Price";
import Product from "./Prouduct";
import Shipping from "./Shipping";

function App() {
  console.log("App 렌더링");
  const data = {
    _id: 1,
    price: 135000,
    shippingFees: 2500,
    name: "나이키 잼",
    quantity: 35, // 총 판매 수량
    buyQuantity: 10, // 구매된 수량
    mainImage:
      "https://res.cloudinary.com/ddedslqvv/image/upload/v1762758428/nike/ImRUIv9wzf.jpg",
    content:
      "나이키가 세계적인 무대에 오르는 브레이크 댄서를 위해 제작한 첫 신발인 잼과 함께 몸과 마음, 정신을 하나로 만들어 보세요. 신발의 모든 디테일을 꼼꼼히 제작했기 때문에 자신 있게 사이퍼에 도전할 수 있습니다. 유연하고 내구성이 뛰어난 갑피가 몸을 따라 움직이며, 중창의 텍스처 처리된 핸드 그립 덕분에 공중에서 신발을 쉽게 잡을 수 있습니다. 그리고 위아래가 뒤집힌 로고를 배치해 프리즈 동작을 할 때 로고가 똑바로 보이는 재미를 더했죠.",
  };

  //상품 수량은 Price 컴포넌트에서 관리하지 않고 부모 ㅓㅁ포넌트인 APP에서 관리해야
  //Price, Shipping 자식 컴포넌트에서 같이 사용 가능함
  const [quantity, setQuantity] = useState(1);

  const shippingPrice = data.shippingFees * Math.ceil(quantity / 5);

  //수량이 변경되면 호출되는 이벤트 핸들러
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  //생성될때마다 새 객체 생성이라서 shipping 값 변동없어도 계속 리렌더링된다 (memo설정된상태)-> 때문에 useCallback사용;
  // const handlePayment = () => {
  //   const productprice = data.price * quantity
  //   const totalPrice = productprice + shippingPrice

  //   alert(`${totalPrice.toLocaleString()}원을 결제하시겠습니까?`);
  // }
  const handlePayment = useCallback(() => {
    alert(`${shippingPrice.toLocaleString()}원을 결제하시겠습니까?`);
  }, []);

  return (
    <>
      <h1>
        06 useCallback(함수 자체를 memoize), React.memo(컴포넌트를 memoize)
      </h1>

      <Product {...data} />
      <Price
        price={data.price}
        maxQuantity={data.quantity - data.buyQuantity}
        shippingFees={data.shippingFees}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
      />

      <Shipping fees={shippingPrice} handlePayment={handlePayment} />
    </>
  );
}

export default App;
