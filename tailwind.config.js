/**
 * Tailwind CSS Configuration
 * 
 * This file contains custom theme extensions and configurations for the portfolio.
 * Feel free to modify these values to customize the design system.
 */

export default {
  // Content paths for Tailwind to scan for classes
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  
  // Dark mode configuration - uses class strategy for manual theme switching
  darkMode: 'class',
  
  theme: {
    extend: {
      // Custom drop shadows for special effects
      dropShadow: {
        // Purple glow effect for hover states and highlights
        // Modify color (#a855f7) to change glow color theme
        'glow-purple': '0 0 10px #a855f7',
        
        // Additional glow effects you can add:
        // 'glow-blue': '0 0 10px #3b82f6',
        // 'glow-green': '0 0 10px #10b981',
        // 'glow-orange': '0 0 10px #f97316',
      },
      
      // Custom font families
      fontFamily: {
        // Primary font family - Poppins for modern, clean typography
        // To change: Replace 'Poppins' with your preferred font and update imports
        'poppins': ['Poppins', 'sans-serif'],
        
        // Additional font options you can add:
        // 'mono': ['Fira Code', 'monospace'], // For code blocks
        // 'serif': ['Playfair Display', 'serif'], // For elegant headings
      },
      
      // Custom animations for micro-interactions
      animation: {
        // Gradient animation for animated backgrounds
        // Duration (8s) can be adjusted for faster/slower animation
        'gradient': 'gradient 8s linear infinite',
        
        // Floating animation for elements
        // Duration (6s) and easing can be modified for different float effects
        'float': 'float 6s ease-in-out infinite',
        
        // Additional animations you can add:
        // 'pulse-slow': 'pulse 3s ease-in-out infinite',
        // 'bounce-gentle': 'bounce 2s ease-in-out infinite',
      },
      
      // Keyframe definitions for custom animations
      keyframes: {
        // Gradient animation keyframes - creates sliding background effect
        // Modify background-position and background-size for different effects
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        
        // Floating animation keyframes - creates up/down movement
        // Modify translateY values to change float height and direction
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' } // Change -20px for different float height
        },
        
        // Additional keyframes you can add:
        // 'pulse-glow': {
        //   '0%, 100%': { opacity: '1' },
        //   '50%': { opacity: '0.5' }
        // },
        // 'slide-in': {
        //   '0%': { transform: 'translateX(-100%)' },
        //   '100%': { transform: 'translateX(0)' }
        // }
      },
      
      // Color palette extensions (uncomment and modify to customize)
      // colors: {
      //   primary: {
      //     50: '#f3e8ff',   // Lightest purple
      //     500: '#a855f7',  // Main purple (change this to shift theme)
      //     600: '#9333ea',  // Darker purple
      //     900: '#581c87',  // Darkest purple
      //   },
      //   accent: {
      //     50: '#fef3c7',   // Light orange
      //     500: '#f97316',  // Main orange (change this to shift accent)
      //     600: '#ea580c',  // Darker orange
      //   }
      // },
      
      // Spacing scale extensions (uncomment to customize spacing)
      // spacing: {
      //   '18': '4.5rem',    // Custom spacing values
      //   '88': '22rem',
      //   '128': '32rem',
      // },
      
      // Border radius extensions (uncomment to customize rounded corners)
      // borderRadius: {
      //   '4xl': '2rem',     // Extra large rounded corners
      //   '5xl': '2.5rem',
      // }
    },
  },
  
  // Tailwind plugins (add plugins here for additional functionality)
  plugins: [],
};
