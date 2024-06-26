const {FusesPlugin} = require('@electron-forge/plugin-fuses');
const {FuseV1Options, FuseVersion} = require('@electron/fuses');

module.exports = {
    packagerConfig: {
        asar: true,
        icon: 'icon' // no file extension required
    },
    rebuildConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
                // The ICO file to use as the icon for the generated Setup.exe
                setupIcon: 'icon/flower2.ico'
            }
        },
        {
            // Path to a single image that will act as icon for the application
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    icon: 'icon/flower2.png'
                }
            }
        },

        {
            name: '@electron-forge/maker-wix',
            config: {
                icon: 'icon/flower2.ico'
            }
        },
        {
            // Path to the icon to use for the app in the DMG window
            name: '@electron-forge/maker-dmg',
            config: {
                icon: 'icon/flower.icns'
            }
        },
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
        // Fuses are used to enable/disable various Electron functionality
        // at package time, before code signing the application
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,
        }),
    ],
};
