import { component$,useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import headshot from "/James.jpg";

export default component$(() => {
  const effect = useStore({
    value: false
  });
  // window.addEventListener('click', function(e){   
  //   if (document.getElementById('clickbox').contains(e.target)){
  //     // Clicked in box
  //   } else{
  //     // Clicked outside the box
  //   }
  // });
  // const effectSig = useSignal(true)

  // https://qwik.builder.io/docs/components/events/
  return (
    <div class="h-screen bg-[#121212] flex justify-center z-0">
    <div class="holder">
      <div class="bar">
        <div class="text">
          <div class="holdtext">
            <div class="flex sm:flex-row flex-col h-fit gap-4">
              <div class=" rounded-xl">
                <img src={headshot} alt="" class="object-scale rounded-xl h-[15rem] sm:h-[30rem]"/>
                </div>
              
              <div class="grid grid-flow-row gap-2 sm:justify-evenly ">
                <div class="max-w-sm sm:max-w-full">
                  <h1 class="text-6xl font-bold font-sans pb-4">James Launder</h1>
                  <h2 class="text-3xl font-bold font-sans text-white/90">Masters of Software Engineering</h2>
                  <div class="text-2xl font-bold font-sans text-white/90">Melbourne</div>
                </div>
                  <div class="flex flex-col gap-6 pb-2 text-center max-w-sm sm:max-w-full">
                    <button class="text-6xl font-bold font-sans text-[#EBFF54]" >Resume</button>
                    <button class="text-6xl font-bold font-sans text-[#17dff9]"  onClick$={() => {
        effect.value = !effect.value;
      }}>Projects</button>
                  </div>
                  <div class="flex justify-around max-w-sm sm:max-w-full">
                    <a class="text-4xl font-bold font-sans text-white/70" href="https://github.com/JamesLaunder" target="_blank">Github</a>
                    <a class="text-4xl font-bold font-sans text-white/70" href="https://www.linkedin.com/in/james-launder-24667226a/" target="_blank">LinkedIn</a>
                  </div>
              </div>
           
            </div>
            </div>
  
          </div>
        </div>
      </div>
      <div 
     id="clickbox"
      class={`${effect.value ? "inset-y-20 opacity-100 h-[75vh]" : "inset-y-3/4 opacity-0 h-0"} w-[75vw] absolute bg-red-500 z-10 transform duration-700 `} 
      onClick$={() => {
        effect.value = !effect.value;
      }}
      >Testing</div>
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
