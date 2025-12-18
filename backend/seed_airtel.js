const airtelPlans = [
    { "operator": "AIRTEL", "price": 19, "category": "TOP_UP", "validity": "NA", "data": "NA", "calls": "₹14 Talktime", "description": "Basic top-up." },
    { "operator": "AIRTEL", "price": 99, "category": "DATA_ONLY", "validity": "1 Day", "data": "20 GB", "calls": "NA", "description": "High-speed data pack." },
    { "operator": "AIRTEL", "price": 155, "category": "POPULAR", "validity": "24 Days", "data": "1 GB/Day", "calls": "Unlimited", "description": "Affordable daily data plan." },
    { "operator": "AIRTEL", "price": 239, "category": "POPULAR", "validity": "28 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Most popular plan." },
    { "operator": "AIRTEL", "price": 299, "category": "POPULAR", "validity": "28 Days", "data": "2 GB/Day", "calls": "Unlimited", "description": "Extra data pack." },
    { "operator": "AIRTEL", "price": 479, "category": "POPULAR", "validity": "56 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Mid-range plan." },
    { "operator": "AIRTEL", "price": 549, "category": "POPULAR", "validity": "56 Days", "data": "2 GB/Day", "calls": "Unlimited", "description": "Heavy usage plan." },
    { "operator": "AIRTEL", "price": 719, "category": "POPULAR", "validity": "84 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Long-term saver plan." },
    { "operator": "AIRTEL", "price": 999, "category": "POPULAR", "validity": "84 Days", "data": "2.5 GB/Day", "calls": "Unlimited", "description": "Premium data plan." },
    { "operator": "AIRTEL", "price": 1799, "category": "ANNUAL", "validity": "365 Days", "data": "24 GB Total", "calls": "Unlimited", "description": "Yearly validity plan." }
];

const seedPlans = async () => {
    console.log('Seeding Airtel plans...');
    for (const plan of airtelPlans) {
        try {
            const response = await fetch('http://localhost:3000/plans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(plan)
            });

            if (response.ok) {
                console.log(`Added plan: ₹${plan.price}`);
            } else {
                const text = await response.text();
                console.error(`Error adding plan ₹${plan.price}:`, text);
            }
        } catch (error) {
            console.error(`Error adding plan ₹${plan.price}:`, error.message);
        }
    }
    console.log('Seeding complete!');
};

seedPlans();
