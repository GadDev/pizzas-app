import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { pricePerItem } from '../constants';
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

function calculateSubtotal(orderType, optionCounts) {
	let optionCount = 0;
	for (const count of optionCounts[orderType].values()) {
		optionCount += count;
	}

	return optionCount * pricePerItem;
}

export function OrderDetailsProvider(props) {
	// !!! we use MAp as it is easier to iterate through the values
	const [optionCounts, setOptionCounts] = useState({
		pizzas: new Map(),
		toppings: new Map(),
	});
	const [totals, setTotals] = useState({
		pizzas: 0,
		toppings: 0,
		total: 0,
	});
	// totals state will be update each time the optionsCount change
	useEffect(() => {
		const pizzasSubtotal = calculateSubtotal('pizzas', optionCounts);
		const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
		const total = pizzasSubtotal + toppingsSubtotal;
		setTotals({
			pizzas: pizzasSubtotal,
			toppings: toppingsSubtotal,
			total,
		});
	}, [optionCounts]);

	const value = useMemo(() => {
		function updateItemCount(itemName, newItemCount, optionType) {
			const newOptionsCount = { ...optionCounts };
			// update option count for this item with the new value
			const optionCountsMap = newOptionsCount[optionType];
			optionCountsMap.set(itemName, parseInt(newItemCount));
			setOptionCounts(newOptionsCount);
		}
		//getter: object containing options counts for pizzas and toppings, subtotals, totals
		//setter: update options counts
		return [{ ...optionCounts, totals }, updateItemCount];
	}, [optionCounts, totals]);
	return <OrderDetails.Provider value={value} {...props} />;
}
