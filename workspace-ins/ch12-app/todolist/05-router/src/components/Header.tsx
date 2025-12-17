function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;