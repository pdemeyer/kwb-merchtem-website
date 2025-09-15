export const theme = {
  layout: {
    styles: {
      base: {
        background: "zeverderij bg-blue-gray-50 dark:bg-blue-gray-900 text-blue-gray-900 dark:text-white",
      },
    },
  },
  fonts: {
    sans: 'Radio Canada Big',
  },
  button: {
    defaultProps: {
      variant: "filled",
    },
    styles: {
      base: {
        text: {
          initial:
            "text-gray-600 hover:text-red-800 dark:text-gray-300 dark:hover:text-red-500 font-semibold px-4 py-2 transition-colors duration-300",
          disabled:
            "text-gray-400 dark:text-gray-600 cursor-not-allowed",
        },
      },
    },
  },
  typography: {
    styles: {
      base: {
        paragraph: {
          initial: 'text-base text-pink-800 dark:text-gray-200',
        },
        a: {
          initial: "text-red-500 underline",
        },
        h1: {
          initial: 'text-3xl font-bold text-blue-gray-900',
        },
        h2: {
          initial: 'text-2xl text-blue-gray-800',
        },
        h3: {
          initial: 'text-xl text-blue-gray-800',
        },

      },
    },
  },
};

/*

          initial: "text-gray-700 hover:text-red-600 transition-colors font-medium",
          disabled: "text-gray-400 cursor-not-allowed",

export const theme = {
  button: {
    defaultProps: {
      variant: "text",
      color: "blue",
    },
    styles: {
      base: {
        text: {
          initial:
            "text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500 font-semibold px-4 py-2 transition-colors duration-300",
          disabled:
            "text-gray-400 dark:text-gray-600 cursor-not-allowed",
        },
      },
    },
  },
  typography: {
    styles: {
      base: {
        paragraph: {
          initial:
            "text-gray-800 dark:text-gray-200 text-base leading-relaxed",
        },
      },
    },
  },
};


*/
