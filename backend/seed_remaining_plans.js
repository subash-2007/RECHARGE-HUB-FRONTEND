const allPlans = {
    "JIO": [
        { "operator": "JIO", "price": 10, "category": "TOP_UP", "validity": "NA", "data": "NA", "calls": "₹7.47 Talktime", "description": "Basic top-up." },
        { "operator": "JIO", "price": 61, "category": "DATA_ONLY", "validity": "1 Day", "data": "6 GB", "calls": "NA", "description": "Data booster pack." },
        { "operator": "JIO", "price": 155, "category": "POPULAR", "validity": "28 Days", "data": "2 GB Total", "calls": "Unlimited", "description": "Light usage plan." },
        { "operator": "JIO", "price": 239, "category": "POPULAR", "validity": "28 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Most used plan." },
        { "operator": "JIO", "price": 299, "category": "POPULAR", "validity": "28 Days", "data": "2 GB/Day", "calls": "Unlimited", "description": "Extra daily data." },
        { "operator": "JIO", "price": 479, "category": "POPULAR", "validity": "56 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Mid validity plan." },
        { "operator": "JIO", "price": 555, "category": "POPULAR", "validity": "60 Days", "data": "2 GB/Day", "calls": "Unlimited", "description": "Best offer pack." },
        { "operator": "JIO", "price": 666, "category": "POPULAR", "validity": "84 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Long-term value." },
        { "operator": "JIO", "price": 999, "category": "POPULAR", "validity": "90 Days", "data": "2.5 GB/Day", "calls": "Unlimited", "description": "Premium data pack." },
        { "operator": "JIO", "price": 2999, "category": "ANNUAL", "validity": "365 Days", "data": "2.5 GB/Day", "calls": "Unlimited", "description": "Annual unlimited plan." }
    ],
    "VI": [
        { "operator": "VI", "price": 10, "category": "TOP_UP", "validity": "NA", "data": "NA", "calls": "₹7.47 Talktime", "description": "Basic top-up." },
        { "operator": "VI", "price": 98, "category": "DATA_ONLY", "validity": "14 Days", "data": "6 GB", "calls": "NA", "description": "Addon data pack." },
        { "operator": "VI", "price": 199, "category": "POPULAR", "validity": "18 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Short validity plan." },
        { "operator": "VI", "price": 249, "category": "POPULAR", "validity": "28 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Standard plan." },
        { "operator": "VI", "price": 299, "category": "POPULAR", "validity": "28 Days", "data": "2 GB/Day", "calls": "Unlimited", "description": "Extra data pack." },
        { "operator": "VI", "price": 459, "category": "POPULAR", "validity": "56 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Mid-range pack." },
        { "operator": "VI", "price": 539, "category": "POPULAR", "validity": "56 Days", "data": "2 GB/Day", "calls": "Unlimited", "description": "High data plan." },
        { "operator": "VI", "price": 719, "category": "POPULAR", "validity": "84 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Long validity plan." },
        { "operator": "VI", "price": 901, "category": "POPULAR", "validity": "84 Days", "data": "3 GB/Day", "calls": "Unlimited", "description": "Premium data plan." },
        { "operator": "VI", "price": 1799, "category": "ANNUAL", "validity": "365 Days", "data": "24 GB Total", "calls": "Unlimited", "description": "Annual plan." }
    ],
    "BSNL": [
        { "operator": "BSNL", "price": 10, "category": "TOP_UP", "validity": "NA", "data": "NA", "calls": "₹7.47 Talktime", "description": "Basic top-up." },
        { "operator": "BSNL", "price": 97, "category": "DATA_ONLY", "validity": "18 Days", "data": "2 GB/Day", "calls": "NA", "description": "Data special pack." },
        { "operator": "BSNL", "price": 147, "category": "POPULAR", "validity": "24 Days", "data": "1 GB Total", "calls": "Unlimited", "description": "Entry plan." },
        { "operator": "BSNL", "price": 187, "category": "POPULAR", "validity": "28 Days", "data": "2 GB/Day", "calls": "Unlimited", "description": "Unlimited pack." },
        { "operator": "BSNL", "price": 397, "category": "POPULAR", "validity": "54 Days", "data": "1 GB/Day", "calls": "Unlimited", "description": "Mid validity plan." },
        { "operator": "BSNL", "price": 447, "category": "POPULAR", "validity": "56 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Mid-range pack." },
        { "operator": "BSNL", "price": 485, "category": "POPULAR", "validity": "82 Days", "data": "1.5 GB/Day", "calls": "Unlimited", "description": "Extended validity." },
        { "operator": "BSNL", "price": 797, "category": "POPULAR", "validity": "150 Days", "data": "2 GB/Day", "calls": "Unlimited", "description": "Long-term plan." },
        { "operator": "BSNL", "price": 999, "category": "POPULAR", "validity": "240 Days", "data": "3 GB/Day", "calls": "Unlimited", "description": "High data plan." },
        { "operator": "BSNL", "price": 9899, "category": "ANNUAL", "validity": "365 Days", "data": "5 GB/Day", "calls": "Unlimited", "description": "Special annual offer." }
    ]
};

const seedPlans = async () => {
    console.log('Seeding JIO, VI, BSNL plans...');

    for (const [operator, plans] of Object.entries(allPlans)) {
        console.log(`\nProcessing ${operator}...`);
        for (const plan of plans) {
            try {
                const response = await fetch('http://localhost:3000/plans', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(plan)
                });

                if (response.ok) {
                    console.log(`Added ${operator} plan: ₹${plan.price}`);
                } else {
                    const text = await response.text();
                    console.error(`Error adding ${operator} plan ₹${plan.price}:`, text);
                }
            } catch (error) {
                console.error(`Error adding ${operator} plan ₹${plan.price}:`, error.message);
            }
        }
    }
    console.log('\nSeeding complete!');
};

seedPlans();
