import BaseCard from '@/components/_base/BaseCard/BaseCard';
import MyProfile from '@/components/MyProfile/MyProfile';
import { FC } from 'react';

const MyProfilePage: FC = () => {
  return (
    <div className="max-w-[730px] mx-auto px-8 py-16">
      <h1 className="text-black font-[SofiaSansCondensed] leading-none text-heading-1 mb-8">
        My Profile
      </h1>
      <BaseCard className="p-8">
        <MyProfile title="" />
      </BaseCard>
    </div>
  );
};

export default MyProfilePage;
