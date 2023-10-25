import { Routes, Route, NavLink } from 'react-router-dom';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ul>
        <li>
          <NavLink to="/">Home page</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={ <div>Home page</div>} />
      </Routes>
    </div>
  );
};
