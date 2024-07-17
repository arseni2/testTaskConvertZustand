// store.ts
import create from 'zustand';

interface CurrencyState {
	usd: number;
	eur: number;
	setUSD: (value: number) => void;
	setEUR: (value: number) => void;
}

const exchangeRate = 1.07;

const useCurrencyStore = create<CurrencyState>((set) => ({
	usd: 0,
	eur: 0,
	setUSD: (value: number) => set((state) => ({
		usd: value,
		eur: parseFloat((value * exchangeRate).toFixed(2))
	})),
	setEUR: (value: number) => set((state) => ({
		eur: value,
		usd: parseFloat((value / exchangeRate).toFixed(2))
	}))
}));

export default useCurrencyStore;
