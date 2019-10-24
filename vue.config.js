module.exports = {
    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
            renderRoutes: [
                '/',
                '/contact'
            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    }
};
