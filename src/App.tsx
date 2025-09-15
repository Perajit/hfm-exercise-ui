import { Outlet } from 'react-router-dom';
import { AppFooter } from './components/AppFooter/AppFooter';
import { AppHeader } from './components/AppHeader/AppHeader';

export default function App() {
  return (
    <>
      <AppHeader className="font-[OpenSans]" />
      <main className="font-[OpenSans] bg-[#f4f4f4] flex-1">
        <Outlet />
      </main>
      <AppFooter className="font-[OpenSans]" />
    </>
  );
}
