import SocialLastIcon from '@/components/_icon/SocialLastIcon';
import type { FC, HTMLProps } from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTelegram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const appStoreImgSrc = '/images/appstore.svg';
const goolgePlayImgSrc = '/images/googleplay.svg';

export type AppFooterProps = Omit<HTMLProps<HTMLBaseElement>, 'title'>;

export const AppFooter: FC<AppFooterProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <footer
      className={`bg-zinc-900 text-dark-base pt-8 pb-10 px-8 flex justify-center ${className}`}
      {...otherProps}
    >
      <div className="container max-w-[1320px] flex flex-col gap-6 items-start text-start md:flex-row lg:gap-10">
        <div className="flex flex-col gap-2 md:min-w-[300px]">
          <div>
            <h2 className="text-neutral-200 font-bold leading-6.5">
              Find us on
            </h2>
            <ul data-testid="social-links-holder" className="text-xl flex flex-wrap gap-4 my-4">
              <li>
                <a href="#">
                  <FaFacebook size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaXTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTelegram size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn size={20} />
                </a>
              </li>
              <li>
                <a href="#">
                  <SocialLastIcon height={20} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-neutral-200 font-bold leading-6.5">
              Download HFM App
            </h2>
            <div className="flex flex-wrap gap-1 my-4">
              <a href="#">
                <img src={appStoreImgSrc} alt="App Store" className="min-w-[130px] h-[39px] -ml-2" />
              </a>
              <a href="#">
                <img src={goolgePlayImgSrc} alt="Google Play" className="min-w-[130px] h-[39px] -ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="basis-full">
          <h2 className="text-neutral-200 font-bold leading-6.5">
            Risk Warning
          </h2>
          <p className="text-[11px] py-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu p
          </p>
        </div>
      </div>
    </footer>
  );
};
