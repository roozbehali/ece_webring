"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/layouts/ASCIIText.jsx":
/*!**********************************************!*\
  !*** ./src/components/layouts/ASCIIText.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction useWindowSize() {\n    _s();\n    // Initialize state with undefined width/height so server and client renders match\n    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: undefined,\n        height: undefined\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // only execute all the code below in client side\n        // Handler to call on window resize\n        function handleResize() {\n            // Set window width/height to state\n            setWindowSize({\n                width: window.innerWidth - 1000,\n                height: window.innerHeight\n            });\n        }\n        // Add event listener\n        window.addEventListener(\"resize\", handleResize);\n        // Call handler right away so state gets updated with initial window size\n        handleResize();\n        // Remove event listener on cleanup\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []); // Empty array ensures that effect is only run on mount\n    return windowSize;\n}\n_s(useWindowSize, \"c4qf3T3ntwaWr7rmXJcJwcTfMJk=\");\nconst AsciiArtConverter = (param)=>{\n    let { imagePath } = param;\n    _s1();\n    const size = useWindowSize();\n    let MAXIMUM_WIDTH = size.width - 1200;\n    let MAXIMUM_HEIGHT = undefined;\n    if (size.width > 700) {\n        let MAXIMUM_HEIGHT = size.height - 850;\n    } else {\n        let MAXIMUM_HEIGHT = size.height - 700;\n    }\n    console.log(MAXIMUM_WIDTH, MAXIMUM_HEIGHT);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [asciiArt, setAsciiArt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toGrayScale = (r, g, b)=>0.21 * r + 0.72 * g + 0.07 * b;\n    const getFontRatio = ()=>{\n        const pre = document.createElement(\"pre\");\n        pre.style.display = \"inline\";\n        pre.textContent = \" \";\n        document.body.appendChild(pre);\n        const { width, height } = pre.getBoundingClientRect();\n        document.body.removeChild(pre);\n        return height / width;\n    };\n    const convertToGrayScales = (context, width, height)=>{\n        const imageData = context.getImageData(0, 0, width, height);\n        const grayScales = [];\n        for(let i = 0; i < imageData.data.length; i += 4){\n            const r = imageData.data[i];\n            const g = imageData.data[i + 1];\n            const b = imageData.data[i + 2];\n            const grayScale = toGrayScale(r, g, b);\n            imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;\n            grayScales.push(grayScale);\n        }\n        context.putImageData(imageData, 0, 0);\n        return grayScales;\n    };\n    const clampDimensions = (width, height)=>{\n        const ratio = getFontRatio();\n        const rectifiedWidth = Math.floor(ratio * width);\n        if (height > MAXIMUM_HEIGHT) {\n            const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);\n            return [\n                reducedWidth,\n                MAXIMUM_HEIGHT\n            ];\n        }\n        if (width > MAXIMUM_WIDTH) {\n            const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);\n            return [\n                MAXIMUM_WIDTH,\n                reducedHeight\n            ];\n        }\n        return [\n            rectifiedWidth,\n            height\n        ];\n    };\n    const getCharacterForGrayScale = (grayScale)=>{\n        const grayRamp = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n        const rampLength = grayRamp.length;\n        return grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];\n    };\n    const drawAscii = (grayScales, width)=>{\n        const asciiImage = grayScales.reduce((asciiImage, grayScale, index)=>{\n            let nextChars = getCharacterForGrayScale(grayScale);\n            if ((index + 1) % width === 0) {\n                nextChars += \"\\n\";\n            }\n            return asciiImage + nextChars;\n        }, \"\");\n        setAsciiArt(asciiImage);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!imagePath) return;\n        const loadImage = (src)=>{\n            return new Promise((resolve, reject)=>{\n                const image = new Image();\n                image.onload = ()=>resolve(image);\n                image.onerror = (e)=>reject(e);\n                image.src = src;\n            });\n        };\n        const processImage = async ()=>{\n            const canvas = canvasRef.current;\n            const context = canvas.getContext(\"2d\");\n            try {\n                const image = await loadImage(imagePath);\n                const [width, height] = clampDimensions(image.width, image.height);\n                canvas.width = width;\n                canvas.height = height;\n                context.drawImage(image, 0, 0, width, height);\n                const grayScales = convertToGrayScales(context, width, height);\n                drawAscii(grayScales, width);\n            } catch (e) {\n                console.error(\"Failed to load image:\", e);\n            }\n        };\n        processImage();\n    }, [\n        imagePath\n    ]); // Effect runs whenever imagePath changes\n    const letters = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n    let isAnimating = false;\n    const changeText = (event)=>{\n        if (isAnimating) return;\n        isAnimating = true;\n        let iterations = 0;\n        const originalText = event.target.dataset.value;\n        const interval = setInterval(()=>{\n            const newText = [];\n            for(let i = 0; i < originalText.length; i++){\n                if (i < iterations) {\n                    newText.push(originalText[i]);\n                } else {\n                    newText.push(originalText[i] === \"\\n\" ? originalText[i] : letters[Math.floor(Math.random() * letters.length)]);\n                }\n            }\n            event.target.innerText = newText.join(\"\");\n            iterations += 250;\n            //iterations += Math.floor(Math.random() * 1000); // Increase this to change more characters at a time\n            if (iterations >= originalText.length) {\n                clearInterval(interval);\n                isAnimating = false;\n            }\n        }, 15); // Decrease this to make it go faster\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-[3px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                onMouseOver: changeText,\n                className: \"text-right\",\n                style: {\n                    textShadow: \"#eab308 1px 0 1px\"\n                },\n                \"data-value\": asciiArt,\n                children: asciiArt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n        lineNumber: 183,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(AsciiArtConverter, \"OEoS5JNCfhpVsdn9C+PFrvjfH1E=\", false, function() {\n    return [\n        useWindowSize\n    ];\n});\n_c = AsciiArtConverter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsciiArtConverter);\nvar _c;\n$RefreshReg$(_c, \"AsciiArtConverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0QsS0FBS3lDLE1BQU0sS0FBS1osUUFBUXBDLE1BQU0sRUFBRTtnQkFFM0Q7WUFDRjtZQUVBdUMsTUFBTUcsTUFBTSxDQUFDTyxTQUFTLEdBQUdGLFFBQVFHLElBQUksQ0FBQztZQUN0Q1YsY0FBYztZQUNkLHNHQUFzRztZQUN0RyxJQUFJQSxjQUFjQyxhQUFhekMsTUFBTSxFQUFFO2dCQUNyQ21ELGNBQWNOO2dCQUNkUixjQUFjO1lBQ2hCO1FBQ0YsR0FBRyxLQUFLLHFDQUFxQztJQUMvQztJQUVBLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3RCO2dCQUFPdUIsS0FBSy9FO2dCQUFXVyxPQUFPO29CQUFFQyxTQUFTO2dCQUFPOzs7Ozs7MEJBQ2pELDhEQUFDSjtnQkFDQ3dFLGFBQWFqQjtnQkFDYmUsV0FBVTtnQkFDVm5FLE9BQU87b0JBQUVzRSxZQUFZO2dCQUFvQjtnQkFDekNDLGNBQVlqRjswQkFFWEE7Ozs7Ozs7Ozs7OztBQUlUO0lBaktNUjs7UUFDU1o7OztLQURUWTtBQW1LTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvQVNDSUlUZXh0LmpzeD9iNDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xyXG4gIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcclxuICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXHJcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xyXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgIGhlaWdodDogdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gb25seSBleGVjdXRlIGFsbCB0aGUgY29kZSBiZWxvdyBpbiBjbGllbnQgc2lkZVxyXG4gICAgLy8gSGFuZGxlciB0byBjYWxsIG9uIHdpbmRvdyByZXNpemVcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgLy8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcclxuICAgICAgc2V0V2luZG93U2l6ZSh7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLTEwMDAsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgXHJcbiAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuICAgIFxyXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG4gIHJldHVybiB3aW5kb3dTaXplO1xyXG59XHJcblxyXG5jb25zdCBBc2NpaUFydENvbnZlcnRlciA9ICh7IGltYWdlUGF0aCB9KSA9PiB7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxyXG4gIGxldCBNQVhJTVVNX1dJRFRIID0gc2l6ZS53aWR0aCAtIDEyMDA7XHJcbiAgbGV0IE1BWElNVU1fSEVJR0hUID0gdW5kZWZpbmVkO1xyXG4gIGlmKHNpemUud2lkdGggPiA3MDApe1xyXG4gICAgbGV0IE1BWElNVU1fSEVJR0hUID0gc2l6ZS5oZWlnaHQgLSA4NTA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBNQVhJTVVNX0hFSUdIVCA9IHNpemUuaGVpZ2h0IC0gNzAwO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhNQVhJTVVNX1dJRFRILCBNQVhJTVVNX0hFSUdIVClcclxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2FzY2lpQXJ0LCBzZXRBc2NpaUFydF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHRvR3JheVNjYWxlID0gKHIsIGcsIGIpID0+IDAuMjEgKiByICsgMC43MiAqIGcgKyAwLjA3ICogYjtcclxuXHJcbiAgY29uc3QgZ2V0Rm9udFJhdGlvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcbiAgICBwcmUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgcHJlLnRleHRDb250ZW50ID0gJyAnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcmUpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBwcmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHByZSk7XHJcbiAgICByZXR1cm4gaGVpZ2h0IC8gd2lkdGg7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udmVydFRvR3JheVNjYWxlcyA9IChjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGNvbnN0IGdyYXlTY2FsZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgIGNvbnN0IHIgPSBpbWFnZURhdGEuZGF0YVtpXTtcclxuICAgICAgY29uc3QgZyA9IGltYWdlRGF0YS5kYXRhW2kgKyAxXTtcclxuICAgICAgY29uc3QgYiA9IGltYWdlRGF0YS5kYXRhW2kgKyAyXTtcclxuICAgICAgY29uc3QgZ3JheVNjYWxlID0gdG9HcmF5U2NhbGUociwgZywgYik7XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ldID1cclxuICAgICAgICBpbWFnZURhdGEuZGF0YVtpICsgMV0gPVxyXG4gICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAyXSA9XHJcbiAgICAgICAgICBncmF5U2NhbGU7XHJcbiAgICAgIGdyYXlTY2FsZXMucHVzaChncmF5U2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICByZXR1cm4gZ3JheVNjYWxlcztcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGFtcERpbWVuc2lvbnMgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xyXG4gICAgY29uc3QgcmF0aW8gPSBnZXRGb250UmF0aW8oKTtcclxuICAgIGNvbnN0IHJlY3RpZmllZFdpZHRoID0gTWF0aC5mbG9vcihyYXRpbyAqIHdpZHRoKTtcclxuXHJcbiAgICBpZiAoaGVpZ2h0ID4gTUFYSU1VTV9IRUlHSFQpIHtcclxuICAgICAgY29uc3QgcmVkdWNlZFdpZHRoID0gTWF0aC5mbG9vcihcclxuICAgICAgICAocmVjdGlmaWVkV2lkdGggKiBNQVhJTVVNX0hFSUdIVCkgLyBoZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIFtyZWR1Y2VkV2lkdGgsIE1BWElNVU1fSEVJR0hUXTtcclxuICAgIH1cclxuICAgIGlmICh3aWR0aCA+IE1BWElNVU1fV0lEVEgpIHtcclxuICAgICAgY29uc3QgcmVkdWNlZEhlaWdodCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKGhlaWdodCAqIE1BWElNVU1fV0lEVEgpIC8gcmVjdGlmaWVkV2lkdGhcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIFtNQVhJTVVNX1dJRFRILCByZWR1Y2VkSGVpZ2h0XTtcclxuICAgIH1cclxuICAgIHJldHVybiBbcmVjdGlmaWVkV2lkdGgsIGhlaWdodF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2hhcmFjdGVyRm9yR3JheVNjYWxlID0gKGdyYXlTY2FsZSkgPT4ge1xyXG4gICAgY29uc3QgZ3JheVJhbXAgPVxyXG4gICAgICAnJEBCJTgmV00jKm9haGtiZHBxd21aTzBRTENKVVlYemN2dW54cmpmdC98KCkxe31bXT8tXyt+PD5pIWxJOzosXCJeYFxcJy4gJztcclxuICAgIGNvbnN0IHJhbXBMZW5ndGggPSBncmF5UmFtcC5sZW5ndGg7XHJcbiAgICByZXR1cm4gZ3JheVJhbXBbTWF0aC5jZWlsKCgocmFtcExlbmd0aCAtIDEpICogZ3JheVNjYWxlKSAvIDI1NSldO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRyYXdBc2NpaSA9IChncmF5U2NhbGVzLCB3aWR0aCkgPT4ge1xyXG4gICAgY29uc3QgYXNjaWlJbWFnZSA9IGdyYXlTY2FsZXMucmVkdWNlKChhc2NpaUltYWdlLCBncmF5U2NhbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBuZXh0Q2hhcnMgPSBnZXRDaGFyYWN0ZXJGb3JHcmF5U2NhbGUoZ3JheVNjYWxlKTtcclxuICAgICAgaWYgKChpbmRleCArIDEpICUgd2lkdGggPT09IDApIHtcclxuICAgICAgICBuZXh0Q2hhcnMgKz0gJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFzY2lpSW1hZ2UgKyBuZXh0Q2hhcnM7XHJcbiAgICB9LCAnJyk7XHJcblxyXG4gICAgc2V0QXNjaWlBcnQoYXNjaWlJbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaW1hZ2VQYXRoKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbG9hZEltYWdlID0gKHNyYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiByZWplY3QoZSk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcHJvY2Vzc0ltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShpbWFnZVBhdGgpO1xyXG4gICAgICAgIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IGNsYW1wRGltZW5zaW9ucyhpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgZ3JheVNjYWxlcyA9IGNvbnZlcnRUb0dyYXlTY2FsZXMoY29udGV4dCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGRyYXdBc2NpaShncmF5U2NhbGVzLCB3aWR0aCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBpbWFnZTonLCBlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcm9jZXNzSW1hZ2UoKTtcclxuICB9LCBbaW1hZ2VQYXRoXSk7IC8vIEVmZmVjdCBydW5zIHdoZW5ldmVyIGltYWdlUGF0aCBjaGFuZ2VzXHJcblxyXG4gIGNvbnN0IGxldHRlcnMgPSAnJEBCJTgmV00jKm9haGtiZHBxd21aTzBRTENKVVlYemN2dW54cmpmdC98KCkxe31bXT8tXyt+PD5pIWxJOzosXCJeYFxcJy4gJztcclxuICBsZXQgaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICBjb25zdCBjaGFuZ2VUZXh0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoaXNBbmltYXRpbmcpIHJldHVybjtcclxuICAgIGlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgIGxldCBpdGVyYXRpb25zID0gMDtcclxuICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnZhbHVlO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1RleHQgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmlnaW5hbFRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA8IGl0ZXJhdGlvbnMpIHtcclxuICAgICAgICAgIG5ld1RleHQucHVzaChvcmlnaW5hbFRleHRbaV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdUZXh0LnB1c2goXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVGV4dFtpXSA9PT0gJ1xcbidcclxuICAgICAgICAgICAgICA/IG9yaWdpbmFsVGV4dFtpXVxyXG4gICAgICAgICAgICAgIDogbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZXR0ZXJzLmxlbmd0aCldXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IG5ld1RleHQuam9pbignJyk7XHJcbiAgICAgIGl0ZXJhdGlvbnMgKz0gMjUwO1xyXG4gICAgICAvL2l0ZXJhdGlvbnMgKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7IC8vIEluY3JlYXNlIHRoaXMgdG8gY2hhbmdlIG1vcmUgY2hhcmFjdGVycyBhdCBhIHRpbWVcclxuICAgICAgaWYgKGl0ZXJhdGlvbnMgPj0gb3JpZ2luYWxUZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sIDE1KTsgLy8gRGVjcmVhc2UgdGhpcyB0byBtYWtlIGl0IGdvIGZhc3RlclxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzNweF1cIj5cclxuICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PjwvY2FudmFzPlxyXG4gICAgICA8cHJlXHJcbiAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZVRleHR9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiXHJcbiAgICAgICAgc3R5bGU9e3sgdGV4dFNoYWRvdzogJyNlYWIzMDggMXB4IDAgMXB4JyB9fVxyXG4gICAgICAgIGRhdGEtdmFsdWU9e2FzY2lpQXJ0fVxyXG4gICAgICA+XHJcbiAgICAgICAge2FzY2lpQXJ0fVxyXG4gICAgICA8L3ByZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc2NpaUFydENvbnZlcnRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQXNjaWlBcnRDb252ZXJ0ZXIiLCJpbWFnZVBhdGgiLCJzaXplIiwiTUFYSU1VTV9XSURUSCIsIk1BWElNVU1fSEVJR0hUIiwiY29uc29sZSIsImxvZyIsImNhbnZhc1JlZiIsImFzY2lpQXJ0Iiwic2V0QXNjaWlBcnQiLCJ0b0dyYXlTY2FsZSIsInIiLCJnIiwiYiIsImdldEZvbnRSYXRpbyIsInByZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInRleHRDb250ZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVtb3ZlQ2hpbGQiLCJjb252ZXJ0VG9HcmF5U2NhbGVzIiwiY29udGV4dCIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsImdyYXlTY2FsZXMiLCJpIiwiZGF0YSIsImxlbmd0aCIsImdyYXlTY2FsZSIsInB1c2giLCJwdXRJbWFnZURhdGEiLCJjbGFtcERpbWVuc2lvbnMiLCJyYXRpbyIsInJlY3RpZmllZFdpZHRoIiwiTWF0aCIsImZsb29yIiwicmVkdWNlZFdpZHRoIiwicmVkdWNlZEhlaWdodCIsImdldENoYXJhY3RlckZvckdyYXlTY2FsZSIsImdyYXlSYW1wIiwicmFtcExlbmd0aCIsImNlaWwiLCJkcmF3QXNjaWkiLCJhc2NpaUltYWdlIiwicmVkdWNlIiwiaW5kZXgiLCJuZXh0Q2hhcnMiLCJsb2FkSW1hZ2UiLCJzcmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwiZSIsInByb2Nlc3NJbWFnZSIsImNhbnZhcyIsImN1cnJlbnQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZXJyb3IiLCJsZXR0ZXJzIiwiaXNBbmltYXRpbmciLCJjaGFuZ2VUZXh0IiwiZXZlbnQiLCJpdGVyYXRpb25zIiwib3JpZ2luYWxUZXh0IiwidGFyZ2V0IiwiZGF0YXNldCIsInZhbHVlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5ld1RleHQiLCJyYW5kb20iLCJpbm5lclRleHQiLCJqb2luIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm9uTW91c2VPdmVyIiwidGV4dFNoYWRvdyIsImRhdGEtdmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layouts/ASCIIText.jsx\n"));

/***/ })

});