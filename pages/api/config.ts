import type { NextApiRequest, NextApiResponse } from 'next'
import { applicationDefault, initializeApp, getApps, getApp } from 'firebase-admin/app';
import { remoteConfig } from 'firebase-admin';

//Api Key = AIzaSyDMLla_dRSqoXOIkR-GpZdcbhsemuVAuxM

const clientCredentials = {
    apiKey: "AIzaSyDMLla_dRSqoXOIkR-GpZdcbhsemuVAuxM",
    authDomain: "fellowship-backend.firebaseapp.com",
    projectId: "fellowship-backend",
    storageBucket: "fellowship-backend.appspot.com",
    messagingSenderId: "883998580758",
    appId: "1:883998580758:web:e5fa1ff121076fda1a5537",
    measurementId: "G-9X2QQRW468"
  };
export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    const app = getApps().length > 0 ?  getApp() : initializeApp(clientCredentials);
    console.log(app)
    const config = remoteConfig(app);
    res.status(200).json({ name: 'John Doe', config })
}