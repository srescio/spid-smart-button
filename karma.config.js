// Configurazione per Karma, coverage report su unit test jasmine
module.exports = function (config) {
    var gruntServeHost = 'http://localhost:9000';

    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            'node_modules/promise-polyfill/promise.min.js', // Fix per phantomJs che non supporta Promise ES6
            'node_modules/axe-core/axe.js', // A11y accessibility testing library
            'js/agid-spid-enter.min.js', // Modulo minifizzato da testare
            'src/test/*.js' // File specs
        ],
        proxies: {
            '/src/': gruntServeHost + '/src/',
            '/img/': gruntServeHost + '/img/'
        },
        browsers: ['PhantomJS'],
        singleRun: true,
        reporters: ['progress', 'coverage'],
        port: 9876,
        preprocessors: {
            "./js/agid-spid-enter.min.js": ["coverage"] // modulo su cui effettuare la coverage
        },
        coverageReporter: {
            instrumenterOptions: {
                istanbul: { noCompact: true }
            },
            type: 'html',
            dir: 'coverage/',
            subdir: '.'
        }
    });
};