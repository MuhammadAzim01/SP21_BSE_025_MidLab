import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Admin from "./Stack/Admin";

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Feed" component={Admin} />
      <Drawer.Screen name="Payments" component={Admin} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})