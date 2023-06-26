import useDebounce from '@/hooks/useDebounce';
import { useRef, useState } from 'react';
import {
  MdAttachMoney,
  MdFavorite,
  MdLocalFireDepartment,
  MdTrendingDown,
  MdTrendingUp,
} from 'react-icons/md';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const lastActive = useRef(activeTab);
  const active = useDebounce(activeTab, 100);
  const activeTxt = useDebounce(activeTab, 140 * Math.abs(activeTab - lastActive.current));

  return (
    <div className='relative w-full z-0'>
      <div className='w-full lg:w-11/12 h-full mx-auto rounded-full bg-pattern bg-turquoise p-3 flex justify-evenly items-center'>
        {tabs.map(({ title, bgClass, icon }, index) => (
          <div
            key={title}
            onClick={() => {
              lastActive.current = activeTab;
              setActiveTab(index);
            }}
            className={`selection:bg-transparent select-none relative overflow-hidden bg-white rounded-full`}
          >
            <div
              style={{ transitionDelay: 100 * Math.abs(index - lastActive.current) + 'ms' }}
              className={`${bgClass} ${
                active === index ? 'left-0' : active < index ? '-left-full' : 'left-full'
              } w-full h-full absolute top-0  rounded-full duration-500`}
            ></div>
            <div
              className={`!p-2 rounded-full cursor-pointer whitespace-nowrap flex !gap-1 xl:gap-3 items-center lg:!pr-6 group xl:text-lg !font-medium relative`}
              title={title}
            >
              <span
                style={{ transitionDelay: 10 * Math.abs(index - lastActive.current) + 'ms' }}
                className={`${
                  activeTxt === index ? 'bg-blue-900/50' : bgClass
                } rounded-full w-10 h-10 xxs:w-12 xxs:h-12 lg:w-14 lg:h-14 flex items-center justify-center transition-all duration-300 scale-100 group-hover:bg-opacity-60 group-hover:scale-110 `}
              >
                {icon}
              </span>
              <span
                className={`hidden md:block transition-all duration-300 ${
                  activeTxt === index ? 'text-white' : 'text-blue-900'
                }`}
              >
                {title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsContainer;

const tabs = [
  {
    title: 'Favorite',
    icon: <MdFavorite className='w-6 h-6 transition-all duration-300 text-white' />,
    bgClass: 'bg-burnt-sienna',
  },
  {
    title: 'Best Selling',
    icon: <MdAttachMoney className='w-6 h-6 transition-all duration-300 text-white' />,
    bgClass: 'bg-jade',
  },
  {
    title: 'Higher price',
    icon: <MdTrendingUp className='w-6 h-6 transition-all duration-300 text-white' />,
    bgClass: 'bg-periwinkle',
  },
  {
    title: 'Lower price',
    icon: <MdTrendingDown className='w-6 h-6 transition-all duration-300 text-white' />,
    bgClass: 'bg-electric-blue',
  },
  {
    title: 'Trending',
    icon: <MdLocalFireDepartment className='w-6 h-6 transition-all duration-300 text-white' />,
    bgClass: 'bg-jonquil',
  },
];
