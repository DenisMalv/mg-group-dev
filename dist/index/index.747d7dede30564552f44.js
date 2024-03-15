/*! For license information please see index.747d7dede30564552f44.js.LICENSE.txt */
(()=>{"use strict";var n={"./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":(n,e,t)=>{t.r(e),t.d(e,{default:()=>s});var o=t("./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=t.n(o),i=t("./node_modules/css-loader/dist/runtime/api.js"),r=t.n(i)()(A());r.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"",{version:3,sources:["webpack://./node_modules/normalize.css/normalize.css"],names:[],mappings:"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf",sourcesContent:['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n'],sourceRoot:""}]);const s=r},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/pages/start/start.scss":(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var o=t("./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=t.n(o),i=t("./node_modules/css-loader/dist/runtime/api.js"),r=t.n(i),s=t("./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css"),a=t("./node_modules/css-loader/dist/runtime/getUrl.js"),l=t.n(a),d=new URL(t("./src/fonts/MPLUS1p-Regular.ttf"),t.b),c=new URL(t("./src/fonts/MPLUS1p-Medium.ttf"),t.b),E=new URL(t("./src/fonts/Russo_One.ttf"),t.b),m=r()(A());m.i(s.default);var u=l()(d),p=l()(c),f=l()(E);m.push([n.id,`html,\nbody {\n  font-family: "M PLUS 1p", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.33333;\n  margin: 0 auto;\n  width: 100%;\n  scroll-behavior: smooth;\n  overflow-x: hidden;\n}\n\n.flex {\n  display: flex;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.jc-sb {\n  justify-content: space-between;\n}\n\n.ai-c {\n  align-items: center;\n}\n\n.m-a {\n  margin: auto;\n}\n\n.mt-69 {\n  margin-top: 69px;\n}\n\n.mb-12 {\n  margin-bottom: 12px;\n}\n\n.container {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 12px;\n}\n\n@font-face {\n  font-family: "M PLUS 1p";\n  src: url(${u});\n  font-weight: 400;\n}\n@font-face {\n  font-family: "M PLUS 1p";\n  src: url(${p});\n  font-weight: 500;\n}\n@font-face {\n  font-family: "Russo One";\n  src: url(${f});\n  font-weight: 400;\n}\n.is-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  -webkit-clip-path: inset(100%);\n          clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\na {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  color: currentColor;\n  display: block;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.link {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n.list {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nsvg {\n  fill: currentColor;\n}\n\nhtml,\nbody {\n  font-family: "M PLUS 1p", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.33333;\n  margin: 0 auto;\n  width: 100%;\n  scroll-behavior: smooth;\n  overflow-x: hidden;\n}\n\n.flex {\n  display: flex;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.jc-sb {\n  justify-content: space-between;\n}\n\n.ai-c {\n  align-items: center;\n}\n\n.m-a {\n  margin: auto;\n}\n\n.mt-69 {\n  margin-top: 69px;\n}\n\n.mb-12 {\n  margin-bottom: 12px;\n}\n\n@media screen and (min-width: 480px){\n  .container {\n    max-width: 376px;\n  }\n}\n\n@media screen and (min-width: 768px){\n  .container {\n    max-width: 768px;\n  }\n}\n\n@media screen and (min-width: 1024px){\n  .container {\n    padding: 0 32px;\n    max-width: 1440px;\n  }\n}`,"",{version:3,sources:["webpack://./src/style/_common.scss","webpack://./src/pages/start/start.scss","webpack://./src/style/utils/_container.scss","webpack://./src/style/utils/_fonts.scss","webpack://./src/style/utils/_is-hidden.scss","webpack://./src/style/utils/_reset.scss","webpack://./<no source>"],names:[],mappings:"AAAA;;EAEE,oCAAA;EAGA,eAAA;EACA,gBAAA;EACA,oBAAA;EAGA,cAAA;EACA,WAAA;EAEA,uBAAA;EAEA,kBAAA;ACJF;;ADSA;EACE,aAAA;ACNF;;ADQA;EACE,eAAA;ACLF;;ADOA;EACE,8BAAA;ACJF;;ADMA;EACE,mBAAA;ACHF;;ADSA;EACE,YAAA;ACNF;;ADSA;EACE,gBAAA;ACNF;;ADSA;EACE,mBAAA;ACNF;;ACtCA;EACE,WAAA;EACA,cAAA;EACA,eAAA;ADyCF;;AE7CA;EACE,wBAAA;EACA,4CAAA;EACE,gBAAA;AFgEJ;AE9DA;EACE,wBAAA;EACA,4CAAA;EACE,gBAAA;AFgEJ;AE7DA;EACE,wBAAA;EACA,4CAAA;EACE,gBAAA;AF+DJ;AG7EA;EACI,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EAEA,mBAAA;EACA,8BAAA;UAAA,sBAAA;EACA,mBAAA;EACA,gBAAA;AH8EJ;;AIzFA;EACI,sBAAA;AJ4FJ;;AI1FA;;;;;;;EAOI,aAAA;EACA,gBAAA;AJ6FJ;;AI1FA;EACI,cAAA;EACA,eAAA;EACA,YAAA;AJ6FJ;;AI1FA;EACI,6BAAA;EAAA,qBAAA;EACA,mBAAA;EACA,cAAA;AJ6FJ;;AI1FA;EACI,gBAAA;EACA,SAAA;EACA,UAAA;AJ6FJ;;AI1FA;EACI,6BAAA;EAAA,qBAAA;AJ6FJ;;AI1FA;EACI,6BAAA;EAAA,qBAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;AJ6FJ;;AI1FA;EACI,kBAAA;AJ6FJ;;ADzIA;;EAEE,oCAAA;EAGA,eAAA;EACA,gBAAA;EACA,oBAAA;EAGA,cAAA;EACA,WAAA;EAEA,uBAAA;EAEA,kBAAA;ACsIF;;ADjIA;EACE,aAAA;ACoIF;;ADlIA;EACE,eAAA;ACqIF;;ADnIA;EACE,8BAAA;ACsIF;;ADpIA;EACE,mBAAA;ACuIF;;ADjIA;EACE,YAAA;ACoIF;;ADjIA;EACE,gBAAA;ACoIF;;ADjIA;EACE,mBAAA;ACoIF;;AKjLA;EJCA;IAMI,gBAAA;ED0CF;AAsHF;;AKvKA;EJCA;IAUI,gBAAA;ED2CF;AAuHF;;AK7KA;EJCA;IAcI,eAAA;IACA,iBAAA;ED4CF;AAwHF",sourcesContent:['html,\nbody {\n  font-family: "M PLUS 1p", sans-serif;;\n  // background-color: $main_bg;\n\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.33333;\n  // color: $main-text;\n  \n  margin: 0 auto;\n  width: 100%;\n\n  scroll-behavior: smooth;\n\n  overflow-x: hidden;\n\n}\n\n\n.flex {\n  display: flex;\n}\n.wrap{\n  flex-wrap: wrap;\n}\n.jc-sb{\n  justify-content: space-between;\n}\n.ai-c{\n  align-items: center;\n}\n\n\n\n\n.m-a{\n  margin: auto;\n}\n\n.mt-69{\n  margin-top: 69px;\n}\n\n.mb-12{\n  margin-bottom: 12px;\n}\n\n\n\n\n',"@import '~normalize.css';\n\n@import '../../style/common';\n\n// utils\n@import '../../style/utils/mixin';\n@import '../../style/utils/container';\n@import '../../style/utils/fonts';\n@import '../../style/utils/is-hidden';\n@import '../../style/utils/reset';\n@import '../../style/utils/vars';\n@import '../../style/common';\n\n// partials\n@import '../../style/start/header'\n\n","\n.container {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 12px;\n\n  @include mobile {\n    max-width: 376px;\n  }\n\n  @include tablet {\n    max-width: 768px;\n  }\n\n  @include desktop {\n    padding: 0 32px;\n    max-width: 1440px;\n  }\n}","@font-face {\n  font-family: \"M PLUS 1p\";\n  src: url('../../fonts/MPLUS1p-Regular.ttf') ;\n    font-weight: 400;\n}\n@font-face {\n  font-family: \"M PLUS 1p\";\n  src: url('../../fonts/MPLUS1p-Medium.ttf') ;\n    font-weight: 500;\n}\n\n@font-face {\n  font-family: \"Russo One\";\n  src: url('../../fonts/Russo_One.ttf') ;\n    font-weight: 400;\n}\n\n\n  // @font-face {\n  //   font-family: 'Roboto';\n  //   src: url('../../fonts/Roboto-Regular.woff') format('woff'),\n  //     url('../../fonts/Roboto-Regular.woff2') format('woff2');\n  //   font-weight: 400;\n  // }",".is-hidden {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    border: 0;\n    padding: 0;\n\n    white-space: nowrap;\n    clip-path: inset(100%);\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n}","*{\n    box-sizing: border-box;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\nimg {\n    display: block;\n    max-width: 100%;\n    height: auto;\n}\n\na {\n    text-decoration: none;\n    color: currentColor;\n    display: block;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.link {\n    text-decoration: none;\n}\n\n.list {\n    text-decoration: none;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nsvg{\n    fill: currentColor;\n}\n",null],sourceRoot:""}]);const h=m},"./node_modules/css-loader/dist/runtime/api.js":n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,A,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(r[a]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&r[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),A&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=A):d[4]="".concat(A)),e.push(d))}},e}},"./node_modules/css-loader/dist/runtime/getUrl.js":n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(A," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},"./src/pages/start/start.scss":(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var o=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=t.n(o),i=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=t.n(i),s=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),a=t.n(s),l=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=t.n(l),c=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=t.n(c),m=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=t.n(m),p=t("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/pages/start/start.scss"),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=E();A()(p.default,f);const h=p.default&&p.default.locals?p.default.locals:void 0},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],s=0;s<n.length;s++){var a=n[s],l=o.base?a[0]+o.base:a[0],d=i[l]||0,c="".concat(l," ").concat(d);i[l]=d+1;var E=t(c),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==E)e[E].references++,e[E].updater(m);else{var u=A(m,o);o.byIndex=s,e.splice(s,0,{identifier:c,updater:u,references:1})}r.push(c)}return r}function A(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,A){var i=o(n=n||[],A=A||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var s=t(i[r]);e[s].references--}for(var a=o(n,A),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=a}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var A=void 0!==t.layer;A&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,A&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},"./src/fonts/MPLUS1p-Medium.ttf":(n,e,t)=>{n.exports=t.p+"assets/fonts/MPLUS1p-Medium.ttf"},"./src/fonts/MPLUS1p-Regular.ttf":(n,e,t)=>{n.exports=t.p+"assets/fonts/MPLUS1p-Regular.ttf"},"./src/fonts/Russo_One.ttf":(n,e,t)=>{n.exports=t.p+"assets/fonts/Russo_One.ttf"}},e={};function t(o){var A=e[o];if(void 0!==A)return A.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var A=o.length-1;A>-1&&!n;)n=o[A--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n+"../"})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.r(o);t("./src/pages/start/start.scss")})()})();
//# sourceMappingURL=index.747d7dede30564552f44.js.map