// The ratio uses ingots of this material, not the ingot + plate row total.
export function needsPlates(row) {
  const ingots=row?.forms?.ingot, plates=row?.forms?.plate;
  if(!Number.isSafeInteger(ingots)||!Number.isSafeInteger(plates)||ingots<=0||plates<0)return false;
  return BigInt(plates)*5n<BigInt(ingots);
}
