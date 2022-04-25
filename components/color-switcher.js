import { useEffect, useState } from 'react';
import { IconButton, useColorMode } from 'theme-ui';

const ColorSwitcher = (props) => {
  const [mode, setMode] = useColorMode()
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.scrollY > 100 ? setIsScrolled(true) : setIsScrolled(false)
  })
  return (
    <div id='color'>
      <IconButton
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        // title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
        sx={{
          display: (isScrolled ? "block" : "none"),
          position: 'absolute',
          top: ['10px'],
          right: [2, 3],
          color: 'primary',
          cursor: 'pointer',
          borderRadius: 'circle',
          transition: 'box-shadow 0.230s ease-in-out',
          ':hover,:focus': {
            boxShadow: '0 0 0 3px',
            outline: 'none'
          }
        }}
        {...props}
      >
        <svg viewBox="0 0 32 32" width={24} height={24} fill="currentcolor">
          <circle
            cx={16}
            cy={16}
            r={14}
            fill="none"
            stroke="currentcolor"
            strokeWidth={4}
          />
          <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
        </svg>
      </IconButton>
    </div>
  )
}

export default ColorSwitcher
