import { useEffect } from "react";
import './ThemeToggle.css';

function ThemeToggle(){
  useEffect(() => {
    console.log('## ThemeToggle 렌더링.');
  });

  // TODO 5. ThemeContext 사용하기(theme, toggleDone() 호출)

  return (
    <button
      className="theme-toggle"
    >🌙 다크 모드 / ☀️ 라이트 모드</button>
  );
}

export default ThemeToggle;