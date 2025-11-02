import React from 'react';
import Hero from '../components/home/Hero';
import ProblemStatement from '../components/home/ProblemStatement';
import SolutionOverview from '../components/home/SolutionOverview';
import UseCasesGrid from '../components/home/UseCasesGrid';
import WhyClowd from '../components/home/WhyClowd';
import CTA from '../components/home/CTA';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <UseCasesGrid />
      <WhyClowd />
      <CTA />
      <Newsletter />
    </>
  );
};

export default Home;
