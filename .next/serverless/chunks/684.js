exports.id = 684;
exports.ids = [684];
exports.modules = {

/***/ 4985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j_": () => (/* binding */ DogSpinner),
/* harmony export */   "Oi": () => (/* binding */ DogContainer),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const DogSpinner = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
  size: "xl",
  position: "absolute",
  left: "50%",
  top: "50%",
  ml: "calc(0px - var(--spinner-size) / 2)",
  mt: "calc(0px - var(--spinner-size))"
});
const DogContainer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children
}, ref) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
  ref: ref,
  className: "voxel-dog",
  m: "auto",
  mt: ['-20px', '-60px', '-120px'],
  mb: ['-40px', '-140px', '-200px'],
  w: [280, 480, 640],
  h: [280, 480, 640],
  position: "relative",
  children: children
}));

const Loader = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(DogContainer, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(DogSpinner, {})
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ 5356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8547);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
  global: props => ({
    body: {
      bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#f0e7db', '#202023')(props)
    }
  })
};
const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
};
const fonts = {
  heading: "'M PLUS Rounded 1c'"
};
const colors = {
  grassTeal: '#88ccca'
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  config,
  styles,
  components,
  fonts,
  colors
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ 6506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const NotFound = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
      as: "h1",
      children: "Foul!"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: "The page you're looking for was not found."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
      my: 6
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      my: 6,
      align: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          colorScheme: "teal",
          children: "Return to home"
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ 5744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/logo.js






const LogoBox = (styled_default()).span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const footPrintImg = `/images/footprint${(0,react_.useColorModeValue)('', '-dark')}.png`;
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: "/",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LogoBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: footPrintImg,
          width: 20,
          height: 20,
          alt: "logo"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          color: (0,react_.useColorModeValue)('gray.800', 'whiteAlpha.900'),
          fontFamily: "M PLUS Rounded 1c\", sans-serif",
          fontWeight: "bold",
          ml: 3,
          children: "Remidi Kamal"
        })]
      })
    })
  });
};

/* harmony default export */ const logo = (Logo);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(3724);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./components/theme-toggle-button.js





const ThemeToggleButton = () => {
  const {
    toggleColorMode
  } = (0,react_.useColorMode)();
  return /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
    exitBeforeEnter: true,
    initial: false,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
      style: {
        display: 'inline-block'
      },
      initial: {
        y: -20,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1
      },
      exit: {
        y: 20,
        opacity: 0
      },
      transition: {
        duration: 0.2
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
        "aria-label": "Toggle theme",
        colorScheme: (0,react_.useColorModeValue)('purple', 'orange'),
        icon: (0,react_.useColorModeValue)( /*#__PURE__*/jsx_runtime_.jsx(icons_.MoonIcon, {}), /*#__PURE__*/jsx_runtime_.jsx(icons_.SunIcon, {})),
        onClick: toggleColorMode
      })
    }, (0,react_.useColorModeValue)('light', 'dark'))
  });
};

/* harmony default export */ const theme_toggle_button = (ThemeToggleButton);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
;// CONCATENATED MODULE: ./components/navbar.js
const _excluded = ["href", "path", "_target", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const LinkItem = _ref => {
  let {
    href,
    path,
    _target,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const active = path === href;
  const inactiveColor = (0,react_.useColorModeValue)('gray200', 'whiteAlpha.900');
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: href,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, _objectSpread(_objectSpread({
      p: 2,
      bg: active ? 'grassTeal' : undefined,
      color: active ? '#202023' : inactiveColor,
      _target: _target
    }, props), {}, {
      children: children
    }))
  });
};

const Navbar = props => {
  const {
    path
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, _objectSpread(_objectSpread({
    position: "fixed",
    as: "nav",
    w: "100%",
    bg: (0,react_.useColorModeValue)('#ffffff40', '#20202380'),
    style: {
      backdropFilter: 'blur(10px)'
    },
    zIndex: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Container, {
      display: "flex",
      p: 2,
      maxW: "container.md",
      wrap: "wrap",
      align: "center",
      justify: "space-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
        align: "center",
        mr: 5,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
          as: "h1",
          size: "lg",
          letterSpacing: 'tighter',
          children: /*#__PURE__*/jsx_runtime_.jsx(logo, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
        direction: {
          base: 'column',
          md: 'row'
        },
        display: {
          base: 'none',
          md: 'flex'
        },
        width: {
          base: 'full',
          md: 'auto'
        },
        alignItems: "center",
        flexGrow: 1,
        mt: {
          base: 4,
          md: 0
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(LinkItem, {
          href: "/works",
          path: path,
          children: "Works"
        }), /*#__PURE__*/jsx_runtime_.jsx(LinkItem, {
          href: "/Courses",
          path: path,
          children: "Courses"
        }), /*#__PURE__*/jsx_runtime_.jsx(LinkItem, {
          href: "/posts",
          path: path,
          children: "Posts"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinkItem, {
          _target: "_blank",
          href: "https://www.linkedin.com/in/kamal-remidi-9ba3b1140/",
          path: path,
          display: "inline-flex",
          alignItems: "center",
          style: {
            gap: 4
          },
          pl: 2,
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoLogoLinkedin */.gXb, {}), "Profile"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
        flex: 1,
        align: "right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(theme_toggle_button, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          ml: 2,
          display: {
            base: 'inline-block',
            md: 'none'
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu, {
            isLazy: true,
            id: "navbar-menu",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuButton, {
              as: react_.IconButton,
              icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.HamburgerIcon, {}),
              variant: "outline",
              "aria-label": "Options"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.MenuList, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                  as: react_.Link,
                  children: "About"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/works",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                  as: react_.Link,
                  children: "Works"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/posts",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                  as: react_.Link,
                  children: "Posts"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/Courses",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                  as: react_.Link,
                  children: "Courses"
                })
              })]
            })]
          })
        })]
      })]
    })
  }));
};

/* harmony default export */ const navbar = (Navbar);
;// CONCATENATED MODULE: ./components/footer.js



const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    align: "center",
    opacity: 0.4,
    fontSize: "sm",
    children: ["\xA9 ", new Date().getFullYear(), " Remidi Kamal | All Rights Reserved."]
  });
};

/* harmony default export */ const footer = (Footer);
// EXTERNAL MODULE: ./components/voxel-dog-loader.js
var voxel_dog_loader = __webpack_require__(4985);
;// CONCATENATED MODULE: ./components/layouts/main.js








const LazyVoxelDog = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(330), __webpack_require__.e(31)]).then(__webpack_require__.bind(__webpack_require__, 1031)), {
  ssr: false,
  loading: () => /*#__PURE__*/jsx_runtime_.jsx(voxel_dog_loader/* default */.ZP, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1031)],
    modules: ["../components/layouts/main.js -> " + '../voxel-dog']
  }
});

const Main = ({
  children,
  router
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    as: "main",
    pb: 8,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Kamal's homepage"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "author",
        content: "Remidi Kamal"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "author",
        content: "RemidiKamal"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/favicon.ico",
        type: "image/x-icon"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:site",
        content: "@RemidiKamal"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:creator",
        content: "@RemidiKamal"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: "/card.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "Remidi Kamal's Homepage"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "/card.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Remidi Kamal - Homepage"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(navbar, {
      path: router.asPath
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Container, {
      maxW: "container.md",
      pt: 14,
      children: [/*#__PURE__*/jsx_runtime_.jsx(LazyVoxelDog, {}), children, /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
    })]
  });
};

/* harmony default export */ const main = (Main);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/fonts.js



const Fonts = () => /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
  id: "1920365038",
  children: ["@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');"]
});

/* harmony default export */ const fonts = (Fonts);
// EXTERNAL MODULE: ./lib/theme.js
var theme = __webpack_require__(5356);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Website({
  Component,
  pageProps,
  router
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
    theme: theme/* default */.Z,
    children: [/*#__PURE__*/jsx_runtime_.jsx(fonts, {}), /*#__PURE__*/jsx_runtime_.jsx(main, {
      router: router,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
        exitBeforeEnter: true,
        initial: true,
        children: /*#__PURE__*/(0,external_react_.createElement)(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
          key: router.route
        }))
      })
    })]
  });
}

/* harmony default export */ const _app = (Website);

/***/ }),

/***/ 3789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5356);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





class Document extends next_document__WEBPACK_IMPORTED_MODULE_1__.default {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ColorModeScript, {
          initialColorMode: _lib_theme__WEBPACK_IMPORTED_MODULE_2__/* .default.config.initialColorMode */ .Z.config.initialColorMode
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7020:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/CxvDQphJdv4ARaLaEhJFa/_buildManifest.js","static/CxvDQphJdv4ARaLaEhJFa/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/index-81d1af9ce036b59ff51d.js"],"/404":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/404-e53a39fe2cf9a22fa956.js"],"/Courses":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/Courses-06cfe412c333a32d6bbc.js"],"/_app":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/_app-14303c4988347914f113.js"],"/_error":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/_error-737a04e9a0da63c9d162.js"],"/posts":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/posts-045b72599bf9c39f1d51.js"],"/works":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/works-78e717e64d38eccb08c8.js"],"/works/Scouting":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/works/Scouting-0dc7d175cfb7c39e6054.js"],"/works/sarribdarija":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/works/sarribdarija-699add2da916ee8d5413.js"],"/works/self":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/works/self-09f06536967444c65763.js"],"/works/wfs-tool":["static/chunks/webpack-59941c6480cbe8b12061.js","static/chunks/framework-717d42ae9e172961f2a5.js","static/chunks/main-1f2c591c5d3bfcfc95e6.js","static/chunks/pages/works/wfs-tool-425142e6c678d008d40d.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"../components/layouts/main.js -> ../voxel-dog":{"id":1031,"files":["static/chunks/fb7d5399.9b8a6980c1ce3f69a648.js","static/chunks/330.050565aa0988e0d5bab2.js","static/chunks/31.5171230787b84ed96a5e.js"]}}');

/***/ }),

/***/ 9450:
/***/ ((module) => {

"use strict";
module.exports = {"Dg":[]};

/***/ })

};
;