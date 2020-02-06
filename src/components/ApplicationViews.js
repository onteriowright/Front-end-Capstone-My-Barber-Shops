import React from "react";
import { Route } from "react-router-dom";
import MainProvider from "./providers/MainProvider";
import BarberList from "./barbers/BarberList";
import FavoriteBarberList from "./favoriteBarbers/FavoriteBarberList";
import BarberForm from "./barbers/BarberForm";
import "./barbers/Barber.css";

export default props => {
  return (
    <MainProvider>
      <Route
        exact
        path="/"
        render={props => {
          return (
            <>
              <section className="dashboardContainer">
                <div className="barbershopListContainer">
                  <BarberForm {...props} />
                </div>
                <div className="barberShopContainer">
                  <BarberList {...props} />
                </div>
              </section>
            </>
          );
        }}
      />
      <Route
        exact
        path="/favoriteBarberShops"
        render={props => {
          return (
            <>
              <div className="favoriteBarbershopContainer">
                <FavoriteBarberList {...props} />
              </div>
            </>
          );
        }}
      />
      {/* <Route exact path="/editEvent/:eventId(\d+)" render={props => <EventForm {...props} />} />
      <Route exact path="/createEvent" render={props => <EventForm {...props} />} />
      <Route exact path="/createNews" render={props => <NewsForm {...props} />} />
      <Route exact path="/tasks/create" render={props => <TaskForm {...props} />} />
      <Route exact path="/editNews/:newsId(\d+)" render={props => <NewsForm {...props} />} />
      <Route exact path="/tasks/edit/:tasksId(\d+)" render={props => <TaskForm {...props} />} />
      <Route exact path="/editMessage/:messageId(\d+)" render={props => <EditMessageForm {...props} />} /> */}
    </MainProvider>
  );
};
