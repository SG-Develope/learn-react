type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleDone: () => void;
}

// TODO 1. Context 객체 생성(기본값 설정)


// TODO 2. Provider 컴포넌트를 만들어서 export
// toggleDone에서 구현할 내용
// document.body.classList.toggle('dark', theme === 'dark');

