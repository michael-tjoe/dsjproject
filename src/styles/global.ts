import { injectGlobal } from "@emotion/css";
import { blackPrimary } from "./variables/colors";

injectGlobal`
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}
  html {
    box-sizing: border-box;
    font-family: "Manrope",sans-serif;
    color: ${blackPrimary};
    font-size: 14px;
  }
  button{
    font-family: "Manrope",sans-serif;
  }
  *,
    *:before,
    *:after {
    box-sizing: inherit;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/quicksand/v29/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58m-xDwxUD2GF9Zc.woff) format('woff');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/quicksand/v29/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58i-xDwxUD2GF9Zc.woff) format('woff');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/quicksand/v29/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58a-xDwxUD2GFw.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 200;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggqxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 200;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 200;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 200;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggixSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 200;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 200;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggqxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggixSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggqxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggixSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggqxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggixSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggqxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggixSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggqxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggOxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggSxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggixSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggmxSvfedN62Zw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/manrope/v12/xn7gYHE41ni1AdIRggexSvfedN4.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;