import Input from "./sharedComponents/Input.tsx";
import React from "react";
import useCurrencyStore from "./store.ts";

function App() {
	const {usd, eur, setUSD, setEUR} = useCurrencyStore();

	const handleUSDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseFloat(e.target.value);
		if (!isNaN(value)) {
			setUSD(value);
		}
	};

	const handleEURChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseFloat(e.target.value);
		if (!isNaN(value)) {
			setEUR(value);
		}
	};
	return (
		<div className={"flex sm:flex-row flex-col gap-4 p-2"}>
			<div className={"flex flex-col gap-1 w-full"}>
				<label className={"text-sm"}>USD</label>
				<Input type="number" value={usd} onChange={handleUSDChange} placeholder={'usd'}/>
			</div>

			<div className={"flex flex-col gap-1 w-full"}>
				<label className={"text-sm"}>EUR</label>
				<Input type="number" value={eur} onChange={handleEURChange} placeholder={'eur'}/>
			</div>
		</div>
	)
}

export default App
