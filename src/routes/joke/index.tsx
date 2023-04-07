import { component$ } from '@builder.io/qwik';

import { routeLoader$ } from '@builder.io/qwik-city';
 
export const useDadJoke = routeLoader$(async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  return response.json();
});

 
export default component$(() => {
    const dadJokeSignal = useDadJoke();
    return (
      <div class="section bright">
        <div>{dadJokeSignal.value.joke}</div>
      </div>
    )
});