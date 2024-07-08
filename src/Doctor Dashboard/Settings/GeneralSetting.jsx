import React, { useState, useEffect } from 'react';
import { useTheme } from '../Components/ThemeContext';
import { ImCheckmark2 } from 'react-icons/im';
import theme1 from '../../assets/theme1.png';
import theme2 from '../../assets/theme2.png';
import theme3 from '../../assets/theme3.png';
import { useTranslation } from 'react-i18next';
import i18n from '@i18n/i18n';  // Use the alias to import i18n

const Circle = ({ id, selected, onClick, bgColor, markColor }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${bgColor}`}
    >
      {selected && (
        <span className={`text-[18px] ${markColor}`}>
          <ImCheckmark2 />
        </span>
      )}
    </div>
  );
};

const GeneralSetting = () => {
  const { theme, appearance, handleThemeChange, handleAppearanceChange } = useTheme();
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load selected circle and image from local storage
    const savedCircle = localStorage.getItem('selectedCircle');
    const savedImage = localStorage.getItem('selectedImage');
    if (savedCircle) {
      setSelectedCircle(Number(savedCircle));
    }
    if (savedImage) {
      setSelectedImage(Number(savedImage));
    }
  }, []);

  useEffect(() => {
    // Save selected circle and image to local storage
    if (selectedCircle !== null) {
      localStorage.setItem('selectedCircle', selectedCircle);
    }
    if (selectedImage !== null) {
      localStorage.setItem('selectedImage', selectedImage);
    }
  }, [selectedCircle, selectedImage]);

  useEffect(() => {
    // Handle appearance and theme changes
    if (selectedCircle !== null) {
      const circle = circles.find(c => c.id === selectedCircle);
      if (circle) {
        circle.onClick(); // Change appearance based on selected circle
      }
    }
  }, [selectedCircle]);

  useEffect(() => {
    // Handle theme change based on selected image
    if (selectedImage !== null) {
      const image = images.find(i => i.id === selectedImage);
      if (image) {
        handleThemeChange(image.themeName); // Change theme based on selected image
      }
    }
  }, [selectedImage]);

  const handleCircleClick = (id) => {
    setSelectedCircle(id);
  };

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  const circles = [
    { id: 1, bgColor: 'bg-[#22D1EE]', markColor: 'text-[#000]', onClick: () => handleAppearanceChange('blue') },
    { id: 2, bgColor: 'bg-[#17B978]', markColor: 'text-[#000]', onClick: () => handleAppearanceChange('green') },
    { id: 3, bgColor: 'bg-[#A6FFF2]', markColor: 'text-[#000]', onClick: () => handleAppearanceChange('accent') },
    { id: 4, bgColor: 'bg-transparent border', markColor: 'text-[#fff]', onClick: () => handleAppearanceChange('default') },
  ];

  const images = [
    { id: 1, src: theme1, themeName: 'dark', name: 'Dark Theme' },
    { id: 2, src: theme2, themeName: 'light', name: 'Light Theme' },
    { id: 3, src: theme3, themeName: 'system', name: 'System Theme' },
  ];

  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={`${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <div className="pt-[3rem]">
        <div>
          <h1 className='text-[25px] font-medium font-Inter leading-[46px]'>{i18n.t('language')}</h1>
          <select onChange={handleChange} value={i18n.language} className={`outline-none w-full sm:w-[50%] md:w-[30%] lg:w-[20%] py-[8px] px-[10px] mt-2 ${theme === 'dark' ? 'bg-gray-800' : theme === 'light' ? 'bg-[rgba(0,0,0,0.5)]' : 'bg-gray-100'} ${appearance === 'green' ? 'text-[#17B978]' : appearance === 'blue' ? 'text-[#22D1EE]' : appearance === 'accent' ? 'text-[#A6FFF2]' : theme === 'dark' ? 'text-white' : theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <div>
          <h2 className='text-[25px] font-medium font-Inter leading-[46px] mt-5'>{i18n.t('Appearance')}</h2>
          <div className="flex flex-wrap space-x-8 mt-5">
            {circles.map((circle) => (
              <Circle
                key={circle.id}
                id={circle.id}
                selected={selectedCircle === circle.id}
                onClick={handleCircleClick}
                bgColor={circle.bgColor}
                markColor={circle.markColor}
              />
            ))}
          </div>
        </div>
        <div className='mt-[3rem]'>
          <h2 className='text-[25px] font-medium font-Inter leading-[46px]'>{i18n.t('Theme')}</h2>
          <div className='flex flex-wrap items-center gap-8 mt-5'>
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(image.id)}
                className={`relative w-full sm:w-[40%] md:w-[30%] lg:w-[25%] cursor-pointer`}
              >
                <img src={image.src} alt={`Theme ${image.id}`} className='w-full' />
                <h1 className='text-[18px] font-medium font-Inter leading-[46px] text-center'>{i18n.t(`${image.name}`)}</h1>
                {selectedImage === image.id && (
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[95%] p-[10px] rounded-[100px] ${appearance === 'green' ? 'bg-[#17B978]' : appearance === 'blue' ? 'bg-[#22D1EE]' : appearance === 'accent' ? ' bg-[#A6FFF2]' : theme === 'dark' ? 'bg-white' : 'bg-gray-800'}`}>
                    <ImCheckmark2 className='text-[30px] text-black' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSetting;