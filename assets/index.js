window.requirejs.config({
    enforceDefine: true,
    paths: {
        'SDK': './lib/SDK.min'
    }
});
window.requirejs(['SDK'], function (SDK) {
    if (typeof SDK !== 'undefined') {
        console.log("SDK is defined. Trying to initialize...");
        SDK.init();
        SDK.ready().then(() => {
            console.log("SDK is ready");
            document.getElementById("name").innerText = SDK.getUser().displayName;
        });
    } else {
        console.log('SDK is not defined');
    }
});