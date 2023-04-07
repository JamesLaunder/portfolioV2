import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import headshot from "/James.jpg";

export default component$(() => {
  return (
    <div class="h-screen w-full bg-[#121212] flex justify-center">
    <div class="holder">
      <div class="bar">
        <div class="text">
          <div class="holdtext">
            <div class="flex h-fit gap-4">
              <div class=" rounded-xl">
                <img src={headshot} alt="" class="object-scale rounded-xl h-[30rem]"/>
                </div>
              
              <div class="grid grid-flow-row gap-2 justify-evenly">
                <div class="">
                  <h1 class="text-6xl font-bold font-sans pb-4">James Launder</h1>
                  <h2 class="text-3xl font-bold font-sans text-white/90">Masters of Software Engineering</h2>
                  <div class="text-2xl font-bold font-sans text-white/90">Melbourne</div>
                </div>
                  <div class="flex flex-col gap-6 pb-2 text-center">
                    <button class="text-6xl font-bold font-sans text-[#EBFF54]">Resume</button>
                    <button class="text-6xl font-bold font-sans text-[#17dff9]">Projects</button>
                  </div>
                  <div class="flex justify-around ">
                    <a class="text-4xl font-bold font-sans text-white/70" href="https://github.com/JamesLaunder" target="_blank">Github</a>
                    <a class="text-4xl font-bold font-sans text-white/70" href="https://www.linkedin.com/in/james-launder-24667226a/" target="_blank">LinkedIn</a>
                  </div>
              </div>
           
            </div>
            </div>
  
          </div>
        </div>
      </div>
   </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
