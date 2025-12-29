import { Children, createContext, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// TODO 1. Context 객체 생성(기본값 설정)
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {console.log("test")},
});

// TODO 2. Provider 컴포넌트를 만들어서 export

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // force가 true면 해당 클래스를 추가하고 false이면 해당 클래스를 제거
  document.body.classList.toggle('dark', theme === 'dark');

  
  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  )
}

export default ThemeContext;











// toggleDone에서 구현할 내용
// document.body.classList.toggle('dark', theme === 'dark');

