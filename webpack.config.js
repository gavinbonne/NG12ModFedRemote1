const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, 'tsconfig.json'),
    [/* mapped paths to share */]);

module.exports = {
    output: {
        uniqueName: "remote1",
        publicPath: "auto"
    },
    optimization: {
        runtimeChunk: false
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "remote1",
            filename: "remoteEntry.js",
            exposes: {
                './ArticleTileComponent': './/src/app/article-tile/article-tile.component.ts',
                './HealthTrackerComponent': './/src/app/health-tracker/health-tracker.component.ts',
                './SurveyTileComponent': './/src/app/survey-tile/survey-tile.component.ts',
                './BillingModule': './/src/app/billing/billing.module.ts',
            },
            shared: {
                "@angular/core": { singleton: true, strictVersion: true },
                "@angular/common": { singleton: true, strictVersion: true },
                "@angular/common/http": { singleton: true, strictVersion: true },
                "@angular/router": { singleton: true, strictVersion: true },
                "bootstrap": { singleton: true, strictVersion: true },
                "jquery": { singleton: true, strictVersion: true },
                ...sharedMappings.getDescriptors()
            }
        }),
        sharedMappings.getPlugin()
    ],
};
