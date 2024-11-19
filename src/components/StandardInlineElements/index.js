import { Link } from 'gatsby';
import React from 'react';

const StandardInlineElements = () => {
  return (
    <div className="font-roboto pb-[20px] lg:pb-[30px]">
      <h2 className="text-purple">Standard Inline Elements</h2>
      <p className="text-[13px] xl:text-[14px] 2xl:text-[1rem] text-gray-500 pt-6">
        <span className="font-bold text-black">Bold text</span> dolor sit amet,
        consectetur accent color adipisicing elit, hovered accents sed do
        eiusmod tempor hovered ut labore et dolore magna aliqu quis nostrud
        exercitation ullamco laboris nisllum dolore eu fugiat nulla pariatur.
        Excepteur sint{' '}
        <span className="bg-green-custom text-white px-1">
          occaecat cupidatat
        </span>{' '}
        non proident officia sunt in culpa qui deserunt mest laborum.
      </p>
      <p className="text-[13px] xl:text-[14px] 2xl:text-[1rem] text-gray-500 md:pt-4 lg:pt-6">
        <span className="italic text-black">Example</span> iste natus error sit
        voluptatem italic text example doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore vei{' '}
        <span className="underline text-black">architecto</span> beatae
        explicabo. Nemo enptatem quia oluptas{' '}
        <Link to="/" className="text-green-500 hover:text-green-custom">
          Tooltip Title
        </Link>{' '}
        aut odit aut fugit, sed quia consequuntur magni dolores eos quiet.
      </p>
    </div>
  );
};

export default StandardInlineElements;
