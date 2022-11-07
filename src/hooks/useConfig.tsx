import { getApp, getApps, initializeApp } from 'firebase/app';
import { getRemoteConfig, RemoteConfig, getAll } from 'firebase/remote-config';
import React from 'react'

const clientCredentials = {
    apiKey: "AIzaSyDMLla_dRSqoXOIkR-GpZdcbhsemuVAuxM",
    authDomain: "fellowship-backend.firebaseapp.com",
    projectId: "fellowship-backend",
    storageBucket: "fellowship-backend.appspot.com",
    messagingSenderId: "883998580758",
    appId: "1:883998580758:web:e5fa1ff121076fda1a5537",
    measurementId: "G-9X2QQRW468"
};
export default function useConfig() {
    const [config, setConfig] = React.useState();

    React.useEffect(() => {
        if (!getApps().length) {
            
            console.log("App initialized!")
            initializeApp(clientCredentials);
            if(typeof window !== 'undefined'){
            }
          }
          console.log(getAll(getRemoteConfig()));
          
    }, [])

    return config
}
