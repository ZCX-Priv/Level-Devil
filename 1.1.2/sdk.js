// POKI sdk.js (V6.2.1)
(() => {
    "use strict";

    const noop = () => {};
    const promiseTrue = () => Promise.resolve(true);
    const promiseEmpty = () => Promise.resolve([]);
    const promiseEmptyObj = () => Promise.resolve({});

    window.PokiSDK = {
        init: promiseTrue,
        initWithVideoHB: promiseTrue,
        commercialBreak: promiseTrue,
        rewardedBreak: promiseTrue,
        displayAd: noop,
        destroyAd: noop,
        isAdBlocked: () => false,
        muteAd: noop,
        setDebug: noop,
        setLogging: noop,
        setPlayerAge: noop,
        enableEventTracking: noop,
        playtestSetCanvas: noop,
        playtestCaptureHtmlOnce: noop,
        playtestCaptureHtmlOn: noop,
        playtestCaptureHtmlOff: noop,
        measure: noop,
        captureError: noop,
        logError: noop,
        customEvent: () => ({ doNothing: noop }),
        gameLoadingStart: noop,
        gameLoadingProgress: noop,
        gameLoadingFinished: noop,
        gameInteractive: noop,
        gameplayStart: noop,
        gameplayStop: noop,
        happyTime: noop,
        roundStart: noop,
        roundEnd: noop,
        sendHighscore: noop,
        setDebugTouchOverlayController: noop,
        setPlaytestCanvas: noop,

        getLeaderboard: promiseEmpty,
        showLeaderboard: (id) => {
            console.info('[PokiSDK] showLeaderboard:', id);
            if (window.parent !== window) {
                window.parent.postMessage({
                    type: 'pokiMessageShowLeaderboard',
                    content: { data: { id: id || -1 } }
                }, '*');
            }
        },

        getLanguage: () => navigator.language.split('-')[0] || 'en',
        getIsoLanguage: () => new URLSearchParams(window.location.search).get('iso_lang') || undefined,
        getURLParam: (p) => {
            const params = new URLSearchParams(window.location.search);
            return params.get(`gd${p}`) || params.get(p) || "";
        },

        getUser: promiseEmptyObj,
        getToken: () => Promise.resolve(null),
        login: () => Promise.reject(new Error('Login not supported')),

        openExternalLink: (url) => {
            console.info('[PokiSDK] openExternalLink:', url);
            if (window.parent !== window) {
                window.parent.postMessage({
                    type: 'pokiMessageOpenExternalLink',
                    content: { params: { url } }
                }, '*');
            } else {
                window.open(url, '_blank');
            }
        },

        shareableURL: () => Promise.resolve({ url: window.location.href }),
        generateScreenshot: () => Promise.resolve(null)
    };

    console.log("%c PokiSDK V6.2.1 Ready ", "background: #222; color: #fbff00; padding: 5px; border-radius: 3px;");
})();
