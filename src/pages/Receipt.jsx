import { Outlet } from 'react-router-dom';

export const Receipt = () => {
  return (
    <main>
      {/* <h1>Receipt enter</h1> */}
      <h1>Introducere bon</h1>
      <p>Aici urmeaza </p>
      <Outlet />
    </main>
  );
};
