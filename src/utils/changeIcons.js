import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineHome } from 'react-icons/hi2';
import { LuSmartphone } from 'react-icons/lu';
import { PiCakeLight } from 'react-icons/pi';
import { RxPerson } from 'react-icons/rx';

export const changeIcons = (icon) => {
  switch (icon) {
    case 'name':
      return <RxPerson />;
    case 'birth':
      return <PiCakeLight />;
    case 'phone':
      return <LuSmartphone />;
    case 'email':
      return <AiOutlineMail />;
    case 'address':
      return <HiOutlineHome />;

    default:
      return;
  }
};
