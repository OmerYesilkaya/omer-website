import React from "react";
import ReactDOM from "react-dom/client";
import { Normalize } from "styled-normalize";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { messages as enMessages } from "locales/en/messages";
import { messages as trMessages } from "locales/tr/messages";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import { createGlobalStyle } from "styled-components";

i18n.load({
    en: enMessages,
    tr: trMessages,
});
i18n.activate("en");

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Lexend Deca", sans-serif;
    color: white;
  }
  body {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAACtpJREFUeF7tXYtuGzkMjPNo/v97mzQHrkODGI00s8J64/ZU4ICzvVpRpERyRpRyeX19/Xr6/vfnz5+ny+WSH5++vr62zy8vL9t38fnz8/Pp9fX19szHx8f2TLaLZ+I//Pf8/Hz7KvqJz9kmPmdf+RD7HG3yPdkGZYvP+d6Qtcofbar8OR6ULWRAPWQ/8Vu8A/uJ7/M98d4cI+q26om1uSyDfN4UGQoKRS6DrBWyeYjNQz0/P7f+pXE464uzNHB5eXm5GSSsVH1lLt/qY9Mvj3w9W/IsNo3iTPTD4k7tt/rg9O2qHxwjG0+Nb714wPRUx9OLgVV+GjeZQWpQjBdg4ERFoRIwWPUCNga4TBbi+UgWMJBiIuDKhglH7adn+Jo8xMREWeId+d6QtU7CTGxQL1YiswzCV+KPGQRjSLUq85tstrPn2Kqpz7F+6ne9FHzky1XqHG3VM/h7r031EizNZ9/hmOkzyiCsESrF6ojgG6Vc1Q/+rpTdU67qR723p6O9k3LrR7ksZen4HQEbm90sHiDIQ2DFgn4Fk04MiXdm3wkMGRDE1bsH5GXyg/K+vb3dvvr9+3cz/xjoXgb5BoIPbZAULumJ0ZLOFVIzGbZCRtQJy0rYrGN+W6XkNbPppcZsfHviWc9loVdg/TTyL2A4imTn/3Z5f3+/AcPwc2HVtFrk6Gy2K9+eqyaDqBMUmT9leAcxhQqcTnxjqxfTXhwz4hA2RkZI5nuTlMX4tgzynZRUN82MuAxCqBNG8/9zK2TFkPPjxKjHJu11EPSI9IvOFMpmaDjaqcyGZVnYxkHQDhfH4iS6tfycWdZIFtRJxtcm82IbVGpXC3cMZwInup8QTIExh1xkO3l7yUU2g9mYEaSi/BjUmctdBvn6um1Bx8xmbO+PGgSpE4dcdFyWApNOPxiw97rTHul3hMs6Qn5KSymDOOSiExYd5db3uKyy07d65ghydEZPrN/L29vbDRhmNUUFhlUxSXHMADYk2tx4kMoM2WrgdxXgpMoOyFPyO/KwSYlxZxnkO6aksgJBs9V5mkEwy6pZCiMXFQ2S6RzOBpalYNqIRBujyTEDnHFHI9liJbIxKvlnV0iT6i9gqEx67u+Ny3J8LsugZki/msezWemsECdjqrLF/2MxhVOwgP04bZQpqa4xqC+D8AqSZRDCwrIs659bISuGKMdy7u8Nuci6x6xkNCt7WRa2qTwPwzeqQjLlVIRkdcFJfO5ZVTke1YaCPKi0QeKTInVMex2DOMcRVNqLO5MhHAZbBUBDVqeq0iH9RsxtyDYiCpPJVYkNEp/LIN8V5ky5D2MQ5LIcj+m4LHyPIiQx7VV7Kntc1hEc2YiLY/s7bPZbLmvGII7R1DP3IvQUiekwDSi7Q3Q641E62bJIrDphA0LfqAJcvLj67R7oy2diNfSqHSvH5G6EZZvc68B+VFV9tMc2LG5WN1fbxHjZkTYLUC+DXKvfK2vwowb59evXjX7PWiG0/L1WSH2vWw+s2rBYhW1G8SxXM7ZRiYCTXlsrZAFDx7Of90xzCtfBIQofxCzDGII+mNH8SL+z2tg6cyuV0gOkjG5hM1XFA1aFmG3w5G4CXYzHeAwO484GhmeA4YxBcIOHAUN25jwH3dsxVOnoPQ1SkwfshyUyzhn6ZRBySQDLmJyLA/Yi9Xi+qe09K4Y4+OA8T/0YPVH+C4EhokkGkhRRqM52uFV8I1+fMcOJB4jURyyCW4U4ypjiN6WDXj+Ny9pT+Rcd5/HlNFLvCINTxafiQU0te4HTiW/YD+IQBLah3BlgyII6xh2Mm8sg3xlhBYY/apAjXFadlb3lekQMcfiimX7wvY6bnnGnLBzUvqfvOsFBz4TIvcplMcN5x4xsR7WZ0ZO8nokJp/ypMyAkChFMpt/OQeG9XBk01QYVwyEqVjH5R7EpkxTcCFN6ojFR3Ze1DHLVwEMbRBFt7goZASnMbNgeOyqqd7Rghm4Zpca4ZYufM44qPdEVchYwdIy0nnlquSy2zTgiyXJW1lmotl97u3ZILjIAWtNTtgnk0O8Mh+Rk6AK2wV0trE2NiblicEWwFd6UkiJIcguP1e6fCqSV14k+mfthZ+hrUE8DVfC1d5cxkwUM0Er+mjxkRqjAcDzXAEMsJV0GuV6C+WMGmYkhM+BLxQcHUzjPzAA2Jdu9fmfjaS7BZKgV0SRLAUeK6F1fVNtQ4cQdW86ZDIdFmCFUjzA8HTOjTmrgjI4T4OR9U7jZxIJV4xtBuWxA6CaUD3bKc+KdzZ4DyMIIVZSFjbkmAjSFFYlAtGlc4zLItUy0JgIshpxmEIwhbPmqvW7HzSk/XGdYponKNbouq8qXW8FVHof0Y/v7yuXOjHnqIuUZ0kwJ97f9PpNgOGOUV/w5y9fJ9Vm1IGIXBgRzEL0qRGzDYhNSNM5sV23wSFuNB1mJqfbhafW7ugRzGeT61x5QuacaJGdZD7WOLmLJutYZusVZIUjR/OQKqasXs6zQnarloitkBhg6vnA9M6eBJoY45KIi/ZBYcy/WrzOK1RljtaOqB2YbRyzLworCUKUCw6M2WYChcFQNB/H/2xaDwiG9Cry6XJ0qxBELm64Rj7Qxt5fvGVW3VExRScsEtjh3HRwymoSsqjL0po7+hRwNgF4GuSpFAcPTDDJz97siF3EG0uBVaAXmbZ02zjOPIosj6+aNFFJ30XAdOCMTHSOi33YIPAVSHXJRydbbUKtcFptUimlAcLnFPIVDHGEYMGR+epQmUn9KznlX4rPig1667cjGFLeH6MTjCDGWkEeRsCy+LYN0KkoexiBO2otL3HELavmyVHPUT6aWo/di+h19uO5Upb3MVSowjC4KCdUt7V3AcA7A3avVhR36rPSEw2UhbcDajAJnximFQ2I1YAwZraIsekASU5F+dbWOVmKVhRmIjRlJy+aZZRD+Z1RRccw1LoP8H1bIiiH3igZz7x1exp++XW3hOpnZiD8KX494hxGHNYYk7lBZFgOXisTEjI9VISK5yAC0U9tb5dt0MLrZOpWEBJi6mN6pBmGEJOb+jJDsBegeMGQGUfdyMYOoRIAZZOo4wjLIxyF/vvswg6gYgmBGUSlJGygPiu+dIQGdlejwYUpWtmKYXkZ9OZzg1o8yiCMsQ+oKdzjoXhGHitBDgzlIHZXfa+MYWjENbBJOXYLJOkLfXuNBJQFDCHbpvzrXjQReb8bh3kbIirKhIhBwsjZqgiE4VmPu/oVp50Y5JQxjVJdB2kqVmsjc3SB11vVS1nwGKzIyQ3J8MNI6bLbnd67LwrQd48PeA0gZR9kuY9UBdVlHxBAnzqxnPA00Qd3BB2omxwxD7KIwRcxmRS4yElNV2Ue/WP1e+1EHRXuzna1MRWJaZCOukGWQ6wkqxSIvgwStcLncFJVZ1j+/QjxPt566lwboH3QZZS7qkvycuSpVngV9Nctysp/qflzZGIk5QxQq4pOyIM4GlXILTLn3MkgPgCaiHsmyxyDYz8wJKseIzQ7iMsg1NlXswoDuaQZRf1iSgZd7+U/1XofoVO9wfp/p57A2Chg6HTnM7SiNTHej8I2jzNE78rcqi3Nkm6XBTC9KfktPR+2HVJ9bd9iSFmEbPNkmK9lxQJUoTO5nr1EqUZgVJAqAOjjEqYBRm1qYcBy6Y7gM0saiuxnE2VNvsoUSKNmtPVXYHrmIA9q7OnIGjtxl7x4ulSU6dQSLXJyx2IO1+Q9jE3DBaEaSZwAAAABJRU5ErkJggg==);
    background-color: #0094d0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <I18nProvider i18n={i18n}>
            <GlobalStyle />
            <Normalize />
            <App />
        </I18nProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
