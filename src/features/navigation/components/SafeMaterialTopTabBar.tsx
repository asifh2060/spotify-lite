import React from "react";
import { MaterialTopTabBar } from "react-navigation-tabs";
import { SafeAreaView } from "react-navigation";


const SafeMaterialTopTabBar = (props: any) => {
  return (
    <SafeAreaView>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
};
export default SafeMaterialTopTabBar;
