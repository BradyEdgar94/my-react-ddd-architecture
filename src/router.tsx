import React, { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";

const Home = lazy(() => import("./Components/page/Home"));
const About = lazy(() => import("./Components/page/About"));

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  );
};
