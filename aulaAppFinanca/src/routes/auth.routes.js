import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SingnIn from "../pages/SignIn";
import SingnUp  from "../pages/SingnUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component = {SingnIn}
            />
            <AuthStack.Screen 
                name="SignIn"
                component = {SingnIn}
            />

        </AuthStack.Navigator>
    )
}

export default AuthRoutes;