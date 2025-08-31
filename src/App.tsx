import { Outlet } from 'react-router-dom';
import { AppFooter } from './components/AppFooter/AppFooter';
import { AppHeader } from './components/AppHeader/AppHeader';

export default function App() {
  return (
    <>
      <AppHeader className="font-[OpenSans]" />
      <main className="font-[OpenSans] min-h-screen bg-[#f4f4f4]">
        <Outlet />
      </main>
      <AppFooter className="font-[OpenSans]" />
    </>
  );
}
