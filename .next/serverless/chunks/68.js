"use strict";
exports.id = 68;
exports.ids = [68];
exports.modules = {

/***/ 6389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pg": () => (/* binding */ GridItemStyle)
/* harmony export */ });
/* unused harmony exports GridItem, WorkGridItem */
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7381);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const GridItem = ({
  children,
  href,
  title,
  thumbnail
}) => /*#__PURE__*/_jsx(Box, {
  w: "100%",
  textAlign: "center",
  children: /*#__PURE__*/_jsxs(LinkBox, {
    cursor: "pointer",
    children: [/*#__PURE__*/_jsx(Image, {
      src: thumbnail,
      alt: title,
      className: "grid-item-thumbnail",
      placeholder: "blur",
      loading: "lazy"
    }), /*#__PURE__*/_jsx(LinkOverlay, {
      href: href,
      target: "_blank",
      children: /*#__PURE__*/_jsx(Text, {
        mt: 2,
        children: title
      })
    }), /*#__PURE__*/_jsx(Text, {
      fontSize: 14,
      children: children
    })]
  })
});
const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail
}) => /*#__PURE__*/_jsx(Box, {
  w: "100%",
  textAlign: "center",
  children: /*#__PURE__*/_jsx(NextLink, {
    href: `/works/${id}`,
    children: /*#__PURE__*/_jsxs(LinkBox, {
      cursor: "pointer",
      children: [/*#__PURE__*/_jsx(Image, {
        src: thumbnail,
        alt: title,
        className: "grid-item-thumbnail",
        placeholder: "blur"
      }), /*#__PURE__*/_jsx(LinkOverlay, {
        href: `/works/${id}`,
        children: /*#__PURE__*/_jsx(Text, {
          mt: 2,
          fontSize: 20,
          children: title
        })
      }), /*#__PURE__*/_jsx(Text, {
        fontSize: 14,
        children: children
      })]
    })
  })
});
const GridItemStyle = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {
  styles: `
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `
});

/***/ }),

/***/ 974:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
  shouldForwardProp: prop => {
    return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === 'transition';
  }
});

const Section = ({
  children,
  delay = 0
}) => /*#__PURE__*/_jsx(StyledDiv, {
  initial: {
    y: 10,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  },
  transition: {
    duration: 0.8,
    delay
  },
  mb: 6,
  children: children
});

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Section)));

/***/ })

};
;