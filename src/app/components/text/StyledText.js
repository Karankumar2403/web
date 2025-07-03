import React from 'react'

const StyledText = ({ primary, secondary, children,className }) => {
  const gradientStyle = {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundImage: `linear-gradient(to right, ${primary}, ${secondary})`,
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className={`${className}`}>
      <span style={gradientStyle}>
      {children}
    </span>
    </div>
  );
}

export default StyledText
