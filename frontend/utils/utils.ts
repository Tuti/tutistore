const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatToUSD(amount: string) {
  return currencyFormatter.format(parseInt(amount, 10));
}

export function titleToHandle(title: string) {
  return title.replace(/\s+/g, '-').toLowerCase();
}

export function nameToUrlSlug(name: string) {
  let name2 = name.replace(/['"]+/g, '').replace(/\s+/g, '-').toLowerCase();
  console.log({ name2 });
  return name2;
}
