import React from 'react';
import BrutalButton from '../components/ui/BrutalButton';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-[clamp(120px,20vw,300px)] font-bold leading-none text-brutal-black dark:text-brutal-white">
        404
      </h1>
      <p className="font-body text-lg text-brutal-gray mt-4">
        PAGE_NOT_FOUND. IT DOESN'T EXIST. NEVER DID.
      </p>
      <div className="mt-8">
        <BrutalButton variant="primary" href="/">
          BACK_HOME →
        </BrutalButton>
      </div>
    </div>
  );
};

export default NotFound;
