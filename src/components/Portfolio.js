import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import photo from './assets/ignacioPhoto.jpg'

function Portfolio() {

  return (
    <div>
      <Header/>
      <hr/>
      <h2 className='about-title'>About</h2>
      <section className='about'>
          <p>
            Ignacio Diaz is a Chilean Guy, 22 years old, who currently lives in Melbourne, Australia.
            I have been insterested in technology since I was on primary school, when I used to ask myself
            how computers teachers used would work. Since then, I have always been looking for information to answer my questions.
            <br/>
            <br/>
            The first tech thing I did was on 2014, when at the age of 15 I built my first desktop PC.
            I remember It took me the whole day but at the end It was worth the effort.
            These are some of the reasons why on 2018 I decided to study Computer and Software Engineering at University.
            On Python I coded some little softwares, I learnt basics of coding such as Arrys, Counters, Variables,
            Sub-Programs among other basics.
          </p>
          <br/>
          <img className='selfie' src={photo}/>
          <p>
            The following year was even more exciting for me, I learnt Java, very popular programming language.
            I must admit Java's syntax is harder compared to Python's, I had to read and watch a lot of tutorial to 
            understand what I had to do.
            After having understood basic syntax, I went through OOP (Object-Oriented Programming), which really blowed my mind.
            However, It was one of the most useful tools I have learnt in coding.
            <br/>
            <br/>
            Fortunately or unfortunately, on 2019 I had to quit University to move to Australia, therefore I was not able
            to continue studying. I have been working throughout my time in Australia, but not studying.
            In August I joined Monash Boot Camp Spot to study Full Stack web development, where I have been gaining
            knowledge to build this web site.
          </p>
      </section>
      <hr/>
      <section className='projects'>
        <h2 className='projects-title'>Projects</h2>
        <Projects/>
      </section>
      <Footer/>
    </div>
  );
}

export default Portfolio;
