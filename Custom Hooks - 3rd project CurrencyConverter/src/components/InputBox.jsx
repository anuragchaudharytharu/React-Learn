import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false, //for user whether they want to put amount or not
  currencyDisable = false, //for user whether they want to put currency or not

  className = '',
}) {
  /*
useId() Hook

What Is the React useId Hook?
The useId hook generates a unique ID for each instance of a component.
It’s particularly useful when you need to create identifiers for form inputs, labels, or any other dynamic elements in your app.
By ensuring that all elements receive unique IDs, it helps prevent conflicts and improves accessibility for users.

When to Use React useId?
Do not call useId to generate keys in a list. Keys should be generated from your data.

Form Elements and Labels: When working with form inputs and their associated labels, using unique IDs is crucial. Screen readers rely on these IDs to understand the form structure.
Dynamic Lists and Components: If you’re dealing with dynamic lists (like items in a shopping cart) or components that render dynamically, useId simplifies the process of generating unique keys.
Accessibility: For interactive web apps, unique IDs are essential. Buttons, inputs, and other elements benefit from having distinct IDs, especially for users relying on assistive technologies.
*/

  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            //1st onAmountChange is checker and 2nd is the function
            onAmountChange && onAmountChange(Number(e.target.value)); //by default javascript in events function takes value in string format
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
