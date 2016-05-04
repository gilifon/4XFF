define(['plugins/router', 'durandal/app'], function (router, app) {

    
    var selectedSubMenu = ko.observable('');
    var selectedMainMenu = ko.observable('main');
    var version = app.version;
    var lang = ko.observable('he');

    this.toggleLanguage = function()
    {
        if (lang() == 'en') {
            lang('he');
        }
        else if (lang() == 'he') {
            lang('en');
        }
    }
    
    return {
        selectedSubMenu: selectedSubMenu,
        selectedMainMenu: selectedMainMenu,
        version: version,
        router: router,
        lang:lang,
        activate: function () {
            router.map([
                { route: '', title: 'Main', moduleId: 'viewmodels/main', nav: true },
                { route: 'en', title: 'Main', moduleId: 'viewmodels/main', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        },
        compositionComplete: function () {
            
        }
    };
});