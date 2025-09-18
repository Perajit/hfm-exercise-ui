import { countries } from '@/constants/countries';
import { useAuthContext } from '@/context/AuthContext';
import { FC } from 'react';
import BaseFieldValue from '../_base/BaseFieldValue/BaseFieldValue';

type MyProfileProps = {
  title?: string;
  className?: string;
};

const MyProfile: FC<MyProfileProps> = (props) => {
  const { title, className = '' } = props;
  const { currentUser } = useAuthContext();

  const country = currentUser?.countryCode ? countries[currentUser.countryCode] : null;

  return (
    <div>
      {title ? (
        <h2 className="text-2xl text-center font-bold mb-8">
          {title}
        </h2>
      ) : null}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
        <BaseFieldValue
          field="First Name"
          value={currentUser?.firstName ?? 'N/A'}
        />
        <BaseFieldValue
          field="Last Name"
          value={currentUser?.lastName ?? 'N/A'}
        />
        <BaseFieldValue
          field="Country"
          value={country?.name ?? 'N/A'}
        />
        <BaseFieldValue
          field="Phone Number"
          value={country ? `${country.phoneCode}${currentUser?.phoneNumber}` : 'N/A'}
        />
      </div>
    </div>
  );
};

export default MyProfile;
