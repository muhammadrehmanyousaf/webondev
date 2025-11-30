'use client';

import React from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ 
  src, 
  alt, 
  className = "w-full h-48 object-cover",
  fallbackSrc = '/images/blog/placeholder.svg'
}) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default BlogImage;
