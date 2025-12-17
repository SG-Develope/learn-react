import './App.css';

function App(){
  return (
    <>
      <div className="todoapp">
        <header>
          <h1>Todo List</h1>
          <nav>
            <div>
              <ul>
                <li><a className="menu-dark" href="./home.html">Home</a></li>
                <li><a className="menu" href="./about.html">About</a></li>
                <li><a className="menu" href="./todolist.html">TodoList</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <div id="main">
          <h2>Home</h2>
          <div className="todo">
            <p>Todo List App은 할일을 관리하는 리액트 앱입니다.</p>
          </div>
        </div>
        <footer>
          <p>Copyrightⓒ FrontEnd BootCamp. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;