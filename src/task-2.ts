// Завдання:
// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.
// ______________________________________________________________________________

type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrencyProps {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrencyProps): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 200, currency: "USD" });
