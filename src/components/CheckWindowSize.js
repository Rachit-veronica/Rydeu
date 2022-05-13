import React, { useState } from 'react';
import {useMediaQuery} from '@material-ui/core';

var isActive=false;
function MediaQuery(){
    isActive = useMediaQuery("{max-width}:600px");
    console.log("MediaQuery",isActive)
}

export default isActive;