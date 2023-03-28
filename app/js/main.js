var app = angular.module('app', ['pascalprecht.translate'])
    .config(["$translateProvider",
        function ($translateProvider) {
            $translateProvider.registerAvailableLanguageKeys(['en', 'ro', 'bg']);
            $translateProvider.useStaticFilesLoader({
                prefix: "app/resources/locale-",
                suffix: ".json"
            });
            $translateProvider.preferredLanguage("en");
            $translateProvider.fallbackLanguage("en");
            $translateProvider.useLocalStorage()
            $translateProvider.useSanitizeValueStrategy('escape')
            $translateProvider.useMissingTranslationHandlerLog();
        }])