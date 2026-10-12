tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        cyber: {
                            base: '#030712',
                            card: '#0a0f1d',
                            accent: '#6366f1',
                            cyan: '#06b6d4',
                            neon: '#10b981',
                            violet: '#8b5cf6',
                            border: 'rgba(255, 255, 255, 0.08)'
                        }
                    },
                    fontFamily: {
                        syne: ['Syne', 'sans-serif'],
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    animation: {
                        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'grid-slide': 'gridSlide 20s linear infinite',
                    },
                    keyframes: {
                        pulseGlow: {
                            '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                            '50%': { opacity: '0.8', transform: 'scale(1.05)' }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-12px)' }
                        },
                        gridSlide: {
                            '0%': { backgroundPosition: '0 0' },
                            '100%': { backgroundPosition: '50px 50px' }
                        }
                    }
                }
            }
        }