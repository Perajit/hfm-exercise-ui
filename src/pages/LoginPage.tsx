import BaseCard from '@/components/_base/BaseCard/BaseCard';
import LoginForm from '@/components/LoginForm/LoginForm';
import { useAuthContext } from '@/context/AuthContext';
import { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const redirectToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-[730px] mx-auto px-8 py-16">
      <h1 className="text-black font-[SofiaSansCondensed] leading-none text-heading-1 mb-8">
        Login
      </h1>
      <BaseCard className="p-8">
        <LoginForm title="" onSubmissionSuccess={redirectToPreviousPage} />
      </BaseCard>
    </div>
  );
};

export default LoginPage;
