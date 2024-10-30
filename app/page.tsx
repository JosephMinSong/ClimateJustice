"use client";


import { useState, useEffect } from 'react';
import Jumbotron from './components/Jumbotron';
import Divider from './components/Divider';
import Team from './components/Team';
import Objective from './components/Objective';
import BodyContent from './components/BodyContent';
import Conclusion from './components/Conclusion';


export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Hello");
    fetch("/api/seattle_weather")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
      <div>
          <Jumbotron></Jumbotron>
          <Team></Team>
          <Objective></Objective>
          <Divider></Divider>
          <BodyContent></BodyContent>
          <Divider></Divider>
          <Conclusion></Conclusion>
      </div>

  );
}
