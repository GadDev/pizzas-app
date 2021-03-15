import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { pricePerItem } from '../constants';

//format number as currency

function formatCurrency(currency) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	}).format(currency);
}

function calculateSubtotal(optionType, optionCounts) {
	let optionCount = 0;
	for (const count of optionCounts[optionType].values()) {
		optionCount += count;
	}
	return optionCount * pricePerItem[optionType];
}

const OrderDetails = createContext();
//custom hook to check whether we're inside the provider
export function useOrderDetails() {
	const context = useContext(OrderDetails);
	// throw a error if we use this hook outside of the provider
	if (!context) {
		throw new Error(
			'useOrderDetails must be used within an OrderDetailsProvider'
		);
	}

	return context;
}

export function OrderDetailsProvider(props) {
	// !!! we use Map as it is easier to iterate through the values
	const [optionCounts, setOptionCounts] = useState({
		pizzas: new Map(),
		toppings: new Map(),
	});

	const zeroCurrently = formatCurrency(0);
	const [totals, setTotals] = useState({
		pizzas: zeroCurrently,
		toppings: zeroCurrently,
		totals: zeroCurrently,
	});

	// totals state will be update each time the optionsCount change
	useEffect(() => {
		const pizzasSubtotal = calculateSubtotal('pizzas', optionCounts);
		const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
		const total = pizzasSubtotal + toppingsSubtotal;

		setTotals({
			pizzas: formatCurrency(pizzasSubtotal),
			toppings: formatCurrency(toppingsSubtotal),
			totals: formatCurrency(total),
		});
	}, [optionCounts]);

	const value = useMemo(() => {
		function updateItemCount(itemName, newItemCount, optionType) {
			const newOptionCount = { ...optionCounts };
			// update option count for this item with the new value
			const optionCountsMap = optionCounts[optionType];
			optionCountsMap.set(itemName, parseInt(newItemCount));
			setOptionCounts(newOptionCount);
		}

		//getter:  {...optionCounts, totals } // object containing options counts for pizzas and toppings, subtotals, totals
		//setter: ===> updateItemCount update options counts
		return [{ ...optionCounts, totals }, updateItemCount];
	}, [optionCounts, totals]);
	return <OrderDetails.Provider value={value} {...props} />;
}
