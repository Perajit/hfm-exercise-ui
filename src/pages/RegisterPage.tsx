import BaseCard from '@/components/_base/BaseCard/BaseCard';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import { useAuthContext } from '@/context/AuthContext';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const RegisterPage: FC = () => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-[730px] mx-auto px-8 py-16">
      <h1 className="text-black font-[SofiaSansCondensed] leading-none text-heading-1 mb-8">
        Register
      </h1>
      <BaseCard className="p-8">
        <RegisterForm title="" />
      </BaseCard>
    </div>
  );
};

export default RegisterPage;
