import { createElement } from 'react';

export function UserFavouriteFoods() {
  // return createElement('htmlElement', ('props', null, undefined etc), (children htmlElement or jsx as many as we want from here onwards) etc);
  return createElement(
    'section',
    null,
    <span className="text-[64px] text-green-300">Favourite Foods:</span>,
    <br />,
    <ul className="list-disc list-inside pl-5">
      {/* (list-disc) for bullets, (list-inside) for deafault starting padding inside position of list, (list-outside) for padding outside position of list */}
      {/* There is no bullets showing in the list item because in Tailwind, by default <ul> have padding = 0 and list-style = none.*/}
      <li>Sushi</li>
      <li>Pizza</li>
      <li>Mediteranean foods</li>
      <li>
        Indian foods{' '}
        <select className="bg-slate-500 text-slate-950 text-center font-medium border-2 border-sky-950 rounded-md">
          <option>Curry</option>
          <option>Biryani</option>
        </select>
      </li>
    </ul>
  );
}
