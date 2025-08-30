import { Outlet } from 'react-router-dom';
import { AppFooter } from './components/AppFooter/AppFooter';
import { AppHeader } from './components/AppHeader/AppHeader';

export default function App() {
  return (
    <>
      <AppHeader />
      <main className="min-h-screen bg-[#f4f4f4]">
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}
