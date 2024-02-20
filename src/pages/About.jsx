import { Outlet } from 'react-router-dom';

export const About = () => {
  return (
    <main>
      {/* <h1>Receipt enter</h1> */}
      <h1>Despre aplicatie</h1>
      <p>Aici descriu pe scurt aplicatia si cum functioneaza </p>
      <p>mai ales partea de fisiere</p>
      <Outlet />
    </main>
  );
};
