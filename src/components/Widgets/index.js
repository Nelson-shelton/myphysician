/**
 * App Widgets
 */
import React from 'react';
import Loadable from 'react-loadable';
import PreloadWidget from 'Components/PreloadLayout/PreloadWidget';

const MyLoadingComponent = () => (
   <PreloadWidget />
)

const PatientDetailsWidget = Loadable({
   loader: () => import("./PatientDetails"),
   loading: MyLoadingComponent
});

const PatientInfo = Loadable({
   loader: () => import("./PatientInfo"),
   loading: MyLoadingComponent
});

export {
   PatientDetailsWidget,
   PatientInfo
}
