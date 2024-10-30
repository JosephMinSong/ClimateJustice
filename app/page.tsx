"use client";


import { useState, useEffect } from 'react';
import Jumbotron from './components/Jumbotron';
import Divider from './components/Divider';
import Team from './components/Team';
import Objective from './components/Objective';
import BodyContent from './components/BodyContent';
import Conclusion from './components/Conclusion';
import Challenge from './components/ChallengeStatement';


export default function Home() {
  return (
      <div>
          <Jumbotron></Jumbotron>
          <Team></Team>
          <Objective></Objective>
          <Divider></Divider>
          <BodyContent></BodyContent>
          <Divider></Divider>
          <Challenge></Challenge>
      </div>

  );
}
