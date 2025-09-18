import { AppFooter } from '@/components/AppFooter/AppFooter';
import { AppHeader } from '@/components/AppHeader/AppHeader';
import { AuthProvider } from '@/context/AuthContext';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <AuthProvider>
      <AppHeader className="font-[OpenSans]" />
      <main className="font-[OpenSans] bg-[#f4f4f4] flex-1">
        <Outlet />
      </main>
      <AppFooter className="font-[OpenSans]" />
    </AuthProvider>
  );
}
