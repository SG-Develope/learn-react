
const btnBg = {
  gray: "bg-gray-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  white: "bg-white-500",
  gold: 'bg-gold-500'
} as const // 모든 속성이 readonly가 되고 각 속성의 타입이 string이 아니라 리터럴로 추론됨

const btnColor = {
  black: "text-gray",
  blue: "text-blue",
  red: "text-red",
  white: "text-white",
} as const;


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  color?: string;
  bg?: keyof typeof btnBg;
}

function Button({ children, type='button', bg='gray', color='black', ...rest }: ButtonProps){
  return (
    <button
      type={type}
      className={`${btnBg[bg]} border border-black/11 ${btnColor[color]} py-2 px-4`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;