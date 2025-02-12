import React from "react";
import { NavigationProvider } from "../../context/NavigationContext.jsx";
import Route from "./Route.jsx";
import DropdownPage from "../ReusableComponents/Dropdown/DropdownPage.jsx";
import AccordionPage from "../ReusableComponents/Accordion/AccordionPage.jsx";
import ButtonPage from "../ReusableComponents/Button/ButtonPage.jsx";
import SidebarComponent from "./SidebarComponent.jsx";
import ModalPage from "../ReusableComponents/Modal/ModelPage.jsx";
import TablePage from "../ReusableComponents/Table/TablePage.jsx";
import CounterPage from "../CustomHookComponent/CounterPage.jsx";
import CounterReducerComponent from "../ReducerComponent/CounterReducerComponent.jsx";

const NavigationComponent = () => {
  return (
    <NavigationProvider>
      <SidebarComponent></SidebarComponent>
      <div className="col-span-5">
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
        <Route path="/counter-reduce">
          <CounterReducerComponent />
        </Route>
      </div>
    </NavigationProvider>
  );
};
export default NavigationComponent;
