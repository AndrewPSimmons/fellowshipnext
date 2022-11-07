import { getApp } from "firebase/app";
import { fetchAndActivate, getRemoteConfig, getAll, isSupported } from "firebase/remote-config";
import React, { useEffect } from "react";


const FlagsContext = React.createContext({});
const clientCredentials = {
    apiKey: "AIzaSyDMLla_dRSqoXOIkR-GpZdcbhsemuVAuxM",
    authDomain: "fellowship-backend.firebaseapp.com",
    projectId: "fellowship-backend",
    storageBucket: "fellowship-backend.appspot.com",
    messagingSenderId: "883998580758",
    appId: "1:883998580758:web:e5fa1ff121076fda1a5537",
    measurementId: "G-9X2QQRW468"
};
let remoteConfig: any = null;
isSupported().then((supported) => {
    if (supported) {
        remoteConfig = getRemoteConfig(getApp());
    }

})

export default function ConfigProvider({ children }: { children: React.ReactNode }) {

    const [config, setConfig] = React.useState({});
    // Next part...


    useEffect(() => {
        //remoteConfig.defaultConfig = defaults;
        if (!remoteConfig) return
        fetchAndActivate(remoteConfig)
            .then((activated) => {
                if (!activated) console.log("not activated");
                return getAll(remoteConfig);

            })
            .then((configFromFS) => {
                console.log("first config", configFromFS);
                setConfig(configFromFS);
            })
            .catch(error => console.error(error));

    }, [])

    return (
        <FlagsContext.Provider value={config}>
            {children}
        </FlagsContext.Provider>
    );
};