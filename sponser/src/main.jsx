import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import {
    IonApp, IonFab,
    IonFabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet, IonTabBar,
    IonTabButton, IonTabs,
    isPlatform,
    setupIonicReact
} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import {Redirect, Route} from "react-router";

import './index.css'

/* Core Ionic framework styles */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Ionic Theme variables */
import "./variables.css";
import {bookmark, home, person} from "ionicons/icons";
import Forum from "./Forum.jsx";

const getConfig = () => {
    let config = {
        animated: true,
    };

    if (isPlatform('iphone')) {
        config = {
            ...config,
            backButtonText: 'Previous',
        };
    }

    return config;
};

setupIonicReact(getConfig());

setupIonicReact();

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route path="/home" component={App}/>
                        <Route path="/forum" component={Forum}/>
                        <Redirect exact from="/" to="/home"/>
                    </IonRouterOutlet>

                    <IonTabBar mode='ios' color={'light'} slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon aria-hidden="true" icon={home} />
                            <IonLabel>חדשות</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="forum" href="/forum">
                            <IonIcon aria-hidden="true" icon={person} />
                            <IonLabel>פורומים</IonLabel>
                        </IonTabButton>
                    </IonTabBar>

                </IonTabs>
            </IonReactRouter>
        </IonApp>
    </React.StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
