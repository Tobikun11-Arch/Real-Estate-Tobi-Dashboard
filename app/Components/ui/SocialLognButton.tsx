import React from 'react';

interface SocialButtonProps {
    platform: string;
    logoUrl: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ platform, logoUrl }) => (
    <div className="bg-white h-full gap-2 justify-center w-full flex items-center border border-gray-300 rounded-md">
        <div
        className="w-6 h-6 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${logoUrl})` }}
        ></div>
        <p className="text-black text-xs">{platform}</p>
    </div>
);

const SocialLoginButtons: React.FC = () => (
    <div className="w-full h-11 flex mt-5 gap-2">
        <SocialButton
        platform="Google"
        logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
        />
        <SocialButton
        platform="Facebook"
        logoUrl="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
        />
    </div>
);

export default SocialLoginButtons;
