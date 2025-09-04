// Haversine formula to calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// UK postcode to approximate coordinates mapping (for common postcodes)
// In a production environment, you'd use a proper geocoding API
const postcodeCoordinates = {
    'BR3 5UF': { lat: 51.3334, lon: 0.0189 },
    'BR3': { lat: 51.3334, lon: 0.0189 },
    // Ipswich postcodes
    'IP1': { lat: 52.0567, lon: 1.1482 },
    'IP2': { lat: 52.0450, lon: 1.1850 },
    'IP3': { lat: 52.0350, lon: 1.2000 },
    'IP4': { lat: 52.0650, lon: 1.1650 },
    'IP5': { lat: 52.0750, lon: 1.2350 },
    'IP6': { lat: 52.1850, lon: 1.0350 },
    'IP7': { lat: 52.0550, lon: 0.9550 },
    'IP8': { lat: 52.0250, lon: 1.1150 },
    'IP9': { lat: 52.0150, lon: 1.0750 },
    'IP10': { lat: 52.0050, lon: 1.2550 },
    'IP11': { lat: 51.9850, lon: 1.2850 },
    'IP12': { lat: 52.0750, lon: 1.3150 },
    'IP13': { lat: 52.1550, lon: 1.3550 },
    'IP14': { lat: 52.1850, lon: 0.9950 },
    // Reading postcodes (RG)
    'RG1': { lat: 51.4543, lon: -0.9781 },
    'RG2': { lat: 51.4350, lon: -0.9550 },
    'RG3': { lat: 51.4450, lon: -0.9350 },
    'RG4': { lat: 51.4650, lon: -0.9850 },
    'RG5': { lat: 51.4250, lon: -1.0050 },
    'RG6': { lat: 51.4450, lon: -1.0250 },
    'RG7': { lat: 51.3950, lon: -1.0650 },
    'RG8': { lat: 51.4850, lon: -1.0450 },
    'RG9': { lat: 51.5350, lon: -0.9050 },
    'RG10': { lat: 51.4050, lon: -0.8250 },
    'RG11': { lat: 51.4150, lon: -0.9450 },
    'RG12': { lat: 51.3650, lon: -0.9250 },
    'RG14': { lat: 51.4050, lon: -1.3250 },
    'RG17': { lat: 51.4350, lon: -1.5550 },
    'RG18': { lat: 51.4550, lon: -1.4850 },
    'RG19': { lat: 51.4150, lon: -1.3850 },
    'RG20': { lat: 51.3850, lon: -1.4450 },
    'RG21': { lat: 51.2650, lon: -1.0850 },
    'RG22': { lat: 51.2450, lon: -1.1050 },
    'RG23': { lat: 51.2850, lon: -1.1250 },
    'RG24': { lat: 51.2750, lon: -1.0650 },
    'RG25': { lat: 51.3050, lon: -1.0450 },
    'RG26': { lat: 51.3250, lon: -1.0250 },
    'RG27': { lat: 51.2950, lon: -0.9850 },
    'RG28': { lat: 51.3350, lon: -1.0050 },
    'RG29': { lat: 51.2750, lon: -0.8450 },
    'RG30': { lat: 51.4550, lon: -1.0050 },
    'RG31': { lat: 51.4650, lon: -0.9950 },
    'RG40': { lat: 51.4105, lon: -0.8339 },
    'RG41': { lat: 51.4150, lon: -0.8650 },
    'RG42': { lat: 51.4250, lon: -0.8450 },
    'RG45': { lat: 51.3650, lon: -0.7850 },
    // Oxford postcodes (OX)
    'OX1': { lat: 51.7520, lon: -1.2577 },
    'OX2': { lat: 51.7650, lon: -1.2750 },
    'OX3': { lat: 51.7350, lon: -1.2150 },
    'OX4': { lat: 51.7250, lon: -1.2350 },
    'OX5': { lat: 51.8050, lon: -1.2950 },
    'OX6': { lat: 51.8550, lon: -1.3150 },
    'OX7': { lat: 51.8650, lon: -1.4850 },
    'OX8': { lat: 51.7850, lon: -1.4650 },
    'OX9': { lat: 51.6350, lon: -1.1150 },
    'OX10': { lat: 51.6050, lon: -1.0050 },
    'OX11': { lat: 51.6250, lon: -1.2450 },
    'OX12': { lat: 51.6450, lon: -1.3650 },
    'OX13': { lat: 51.6850, lon: -1.4050 },
    'OX14': { lat: 51.6050, lon: -1.3250 },
    'OX15': { lat: 52.0650, lon: -1.3450 },
    'OX16': { lat: 52.0625, lon: -1.3400 },
    'OX17': { lat: 52.0350, lon: -1.2850 },
    'OX18': { lat: 51.8150, lon: -1.6350 },
    'OX20': { lat: 51.8450, lon: -1.3850 },
    'OX25': { lat: 51.8950, lon: -1.1550 },
    'OX26': { lat: 51.9050, lon: -1.2150 },
    'OX27': { lat: 51.9550, lon: -1.1750 },
    'OX28': { lat: 51.7850, lon: -1.4950 },
    'OX29': { lat: 51.7950, lon: -1.5850 },
    'OX33': { lat: 51.7450, lon: -1.1250 },
    'OX39': { lat: 51.6650, lon: -0.9450 },
    'OX44': { lat: 51.7050, lon: -1.1050 },
    'OX49': { lat: 51.5850, lon: -0.9250 },
    // Cambridge postcodes
    'CB1': { lat: 52.1951, lon: 0.1313 },
    'CB2': { lat: 52.2053, lon: 0.1218 },
    'CB3': { lat: 52.2100, lon: 0.0900 },
    'CB4': { lat: 52.2250, lon: 0.1350 },
    'CB5': { lat: 52.2150, lon: 0.1550 },
    // Norwich postcodes
    'NR1': { lat: 52.6297, lon: 1.2923 },
    'NR2': { lat: 52.6350, lon: 1.2650 },
    'NR3': { lat: 52.6450, lon: 1.2850 },
    // Colchester postcodes
    'CO1': { lat: 51.8860, lon: 0.9030 },
    'CO2': { lat: 51.8750, lon: 0.8850 },
    'CO3': { lat: 51.8950, lon: 0.8650 },
    'CO4': { lat: 51.9050, lon: 0.9250 },
    // Chelmsford postcodes
    'CM1': { lat: 51.7356, lon: 0.4685 },
    'CM2': { lat: 51.7150, lon: 0.4950 },
    'CM3': { lat: 51.6850, lon: 0.5250 },
    // Southend postcodes
    'SS0': { lat: 51.5450, lon: 0.7050 },
    'SS1': { lat: 51.5350, lon: 0.7150 },
    'SS2': { lat: 51.5250, lon: 0.7350 },
    'SS3': { lat: 51.5150, lon: 0.7550 },
    // Romford postcodes
    'RM1': { lat: 51.5750, lon: 0.1850 },
    'RM2': { lat: 51.5850, lon: 0.1950 },
    'RM3': { lat: 51.6030, lon: 0.2499 },
    'RM4': { lat: 51.6150, lon: 0.2350 },
    'RM5': { lat: 51.5976, lon: 0.1592 },
    'RM6': { lat: 51.5850, lon: 0.1450 },
    'RM7': { lat: 51.5650, lon: 0.1650 },
    'RM8': { lat: 51.5449, lon: 0.1154 },
    'RM9': { lat: 51.5350, lon: 0.1050 },
    'RM10': { lat: 51.5450, lon: 0.0950 },
    'RM11': { lat: 51.5750, lon: 0.2150 },
    'RM12': { lat: 51.5550, lon: 0.2350 },
    'RM13': { lat: 51.5353, lon: 0.1913 },
    'RM14': { lat: 51.5849, lon: 0.2614 },
    // Additional outer London and surrounding areas
    'IG1': { lat: 51.5550, lon: 0.0750 },
    'IG2': { lat: 51.5650, lon: 0.0850 },
    'IG3': { lat: 51.5630, lon: 0.1101 },
    'IG4': { lat: 51.5750, lon: 0.0950 },
    'IG5': { lat: 51.5872, lon: 0.0701 },
    'IG6': { lat: 51.6016, lon: 0.0824 },
    'IG7': { lat: 51.6086, lon: 0.1421 },
    'IG8': { lat: 51.6059, lon: 0.0548 },
    'IG9': { lat: 51.6150, lon: 0.0350 },
    'IG10': { lat: 51.6250, lon: 0.0450 },
    'IG11': { lat: 51.5350, lon: 0.0850 },
    // Kent postcodes
    'DA1': { lat: 51.4411, lon: 0.1884 },
    'DA2': { lat: 51.4423, lon: 0.2505 },
    'DA3': { lat: 51.4150, lon: 0.3050 },
    'DA4': { lat: 51.4067, lon: 0.2379 },
    'DA5': { lat: 51.4399, lon: 0.1543 },
    'DA6': { lat: 51.4508, lon: 0.1279 },
    'DA7': { lat: 51.4650, lon: 0.1450 },
    'DA8': { lat: 51.4850, lon: 0.1650 },
    'DA9': { lat: 51.4450, lon: 0.2750 },
    'DA10': { lat: 51.4350, lon: 0.2950 },
    'DA11': { lat: 51.4450, lon: 0.3550 },
    'DA12': { lat: 51.4250, lon: 0.3750 },
    'DA13': { lat: 51.4050, lon: 0.3950 },
    'DA14': { lat: 51.4150, lon: 0.1050 },
    'DA15': { lat: 51.4387, lon: 0.0819 },
    'DA16': { lat: 51.4650, lon: 0.1250 },
    'DA17': { lat: 51.4850, lon: 0.1450 },
    'DA18': { lat: 51.4950, lon: 0.1250 },
    // Surrey postcodes
    'KT1': { lat: 51.4050, lon: -0.3050 },
    'KT2': { lat: 51.4193, lon: -0.2962 },
    'KT3': { lat: 51.4050, lon: -0.2850 },
    'KT4': { lat: 51.3843, lon: -0.2580 },
    'KT5': { lat: 51.3913, lon: -0.2823 },
    'KT6': { lat: 51.3821, lon: -0.2848 },
    'KT7': { lat: 51.3950, lon: -0.3350 },
    'KT8': { lat: 51.3966, lon: -0.3645 },
    'KT9': { lat: 51.3553, lon: -0.3015 },
    'KT10': { lat: 51.3804, lon: -0.3438 },
    'KT11': { lat: 51.3330, lon: -0.4046 },
    'KT12': { lat: 51.3790, lon: -0.3875 },
    'KT13': { lat: 51.3650, lon: -0.4250 },
    'KT14': { lat: 51.3850, lon: -0.4450 },
    'KT15': { lat: 51.3516, lon: -0.5121 },
    'KT16': { lat: 51.3750, lon: -0.4850 },
    'KT17': { lat: 51.3550, lon: -0.2450 },
    'KT18': { lat: 51.3350, lon: -0.2650 },
    'KT19': { lat: 51.3614, lon: -0.2786 },
    'KT20': { lat: 51.2865, lon: -0.2458 },
    'KT21': { lat: 51.3106, lon: -0.3179 },
    'KT22': { lat: 51.3086, lon: -0.3460 },
    'KT23': { lat: 51.2800, lon: -0.3841 },
    'KT24': { lat: 51.2650, lon: -0.4050 },
    // Hertfordshire postcodes
    'AL1': { lat: 51.7520, lon: -0.3360 },
    'AL2': { lat: 51.7350, lon: -0.3550 },
    'AL3': { lat: 51.7650, lon: -0.3750 },
    'AL4': { lat: 51.7450, lon: -0.3150 },
    'AL5': { lat: 51.8050, lon: -0.3350 },
    'AL6': { lat: 51.7850, lon: -0.2250 },
    'AL7': { lat: 51.8050, lon: -0.1950 },
    'AL8': { lat: 51.7650, lon: -0.1650 },
    'AL9': { lat: 51.7450, lon: -0.1450 },
    'AL10': { lat: 51.7650, lon: -0.2450 },
    'EN1': { lat: 51.6644, lon: -0.0672 },
    'EN2': { lat: 51.6513, lon: -0.0835 },
    'EN3': { lat: 51.6550, lon: -0.0350 },
    'EN4': { lat: 51.6450, lon: -0.1550 },
    'EN5': { lat: 51.6539, lon: -0.2456 },
    'EN6': { lat: 51.7150, lon: -0.1750 },
    'EN7': { lat: 51.7026, lon: -0.0624 },
    'EN8': { lat: 51.7071, lon: -0.0434 },
    'EN9': { lat: 51.6817, lon: 0.0364 },
    'EN10': { lat: 51.7335, lon: -0.0143 },
    'EN11': { lat: 51.7650, lon: -0.0350 },
    'WD1': { lat: 51.6550, lon: -0.3950 },
    'WD2': { lat: 51.6350, lon: -0.4150 },
    'WD3': { lat: 51.6712, lon: -0.4692 },
    'WD4': { lat: 51.7191, lon: -0.4629 },
    'WD5': { lat: 51.6750, lon: -0.4250 },
    'WD6': { lat: 51.6614, lon: -0.2889 },
    'WD7': { lat: 51.6741, lon: -0.3319 },
    'WD17': { lat: 51.6550, lon: -0.3850 },
    'WD18': { lat: 51.6650, lon: -0.4050 },
    'WD19': { lat: 51.6450, lon: -0.3850 },
    'WD23': { lat: 51.6350, lon: -0.4350 },
    'WD24': { lat: 51.6750, lon: -0.4050 },
    'WD25': { lat: 51.6850, lon: -0.3850 },
    // Berkshire postcodes
    'SL1': { lat: 51.5074, lon: -0.5950 },
    'SL2': { lat: 51.5250, lon: -0.5750 },
    'SL3': { lat: 51.5050, lon: -0.5350 },
    'SL4': { lat: 51.4850, lon: -0.6050 },
    'SL5': { lat: 51.4650, lon: -0.6250 },
    'SL6': { lat: 51.5250, lon: -0.7050 },
    'SL7': { lat: 51.5650, lon: -0.7450 },
    'SL8': { lat: 51.5450, lon: -0.7650 },
    'SL9': { lat: 51.5850, lon: -0.6050 },
    // Buckinghamshire postcodes
    'HP1': { lat: 51.7550, lon: -0.4750 },
    'HP2': { lat: 51.7350, lon: -0.4950 },
    'HP3': { lat: 51.7150, lon: -0.4750 },
    'HP4': { lat: 51.7350, lon: -0.5150 },
    'HP5': { lat: 51.6950, lon: -0.6050 },
    'HP6': { lat: 51.6750, lon: -0.5850 },
    'HP7': { lat: 51.6550, lon: -0.5650 },
    'HP8': { lat: 51.6350, lon: -0.5450 },
    'HP9': { lat: 51.6150, lon: -0.5250 },
    'HP10': { lat: 51.6350, lon: -0.6450 },
    'HP11': { lat: 51.6550, lon: -0.7250 },
    'HP12': { lat: 51.6350, lon: -0.7050 },
    'HP13': { lat: 51.6150, lon: -0.6850 },
    'HP14': { lat: 51.5950, lon: -0.6650 },
    'HP15': { lat: 51.5750, lon: -0.6450 },
    'HP16': { lat: 51.6750, lon: -0.5450 },
    // Middlesex postcodes
    'HA0': { lat: 51.5576, lon: -0.3220 },
    'HA1': { lat: 51.5825, lon: -0.3407 },
    'HA2': { lat: 51.5650, lon: -0.3550 },
    'HA3': { lat: 51.5830, lon: -0.3085 },
    'HA4': { lat: 51.5825, lon: -0.4241 },
    'HA5': { lat: 51.6050, lon: -0.3850 },
    'HA6': { lat: 51.6150, lon: -0.4250 },
    'HA7': { lat: 51.6050, lon: -0.3150 },
    'HA8': { lat: 51.6048, lon: -0.2627 },
    'HA9': { lat: 51.5578, lon: -0.2767 },
    'TW1': { lat: 51.4594, lon: -0.3209 },
    'TW2': { lat: 51.4407, lon: -0.3575 },
    'TW3': { lat: 51.4750, lon: -0.3550 },
    'TW4': { lat: 51.4650, lon: -0.3750 },
    'TW5': { lat: 51.4850, lon: -0.3850 },
    'TW6': { lat: 51.4750, lon: -0.4250 },
    'TW7': { lat: 51.4723, lon: -0.3336 },
    'TW8': { lat: 51.4808, lon: -0.3048 },
    'TW9': { lat: 51.4650, lon: -0.2950 },
    'TW10': { lat: 51.4450, lon: -0.3050 },
    'TW11': { lat: 51.4259, lon: -0.3371 },
    'TW12': { lat: 51.4148, lon: -0.3668 },
    'TW13': { lat: 51.4298, lon: -0.4007 },
    'TW14': { lat: 51.4520, lon: -0.3939 },
    'TW15': { lat: 51.4350, lon: -0.4650 },
    'TW16': { lat: 51.4150, lon: -0.4850 },
    'TW17': { lat: 51.4050, lon: -0.4650 },
    'TW18': { lat: 51.4176, lon: -0.5185 },
    'TW19': { lat: 51.4350, lon: -0.5050 },
    'TW20': { lat: 51.4250, lon: -0.5350 },
    'UB1': { lat: 51.5150, lon: -0.3750 },
    'UB2': { lat: 51.5050, lon: -0.3850 },
    'UB3': { lat: 51.5150, lon: -0.3950 },
    'UB4': { lat: 51.5257, lon: -0.3950 },
    'UB5': { lat: 51.5350, lon: -0.3650 },
    'UB6': { lat: 51.5363, lon: -0.3384 },
    'UB7': { lat: 51.5150, lon: -0.4350 },
    'UB8': { lat: 51.5485, lon: -0.4796 },
    'UB9': { lat: 51.6174, lon: -0.4848 },
    'UB10': { lat: 51.5550, lon: -0.4450 },
    'UB11': { lat: 51.5050, lon: -0.4250 },
    'SW1': { lat: 51.4975, lon: -0.1357 },
    'SW2': { lat: 51.4537, lon: -0.1175 },
    'SW3': { lat: 51.4893, lon: -0.1673 },
    'SW4': { lat: 51.4598, lon: -0.1374 },
    'SW5': { lat: 51.4893, lon: -0.1893 },
    'SW6': { lat: 51.4739, lon: -0.2078 },
    'SW7': { lat: 51.4959, lon: -0.1749 },
    'SW8': { lat: 51.4690, lon: -0.1459 },
    'SW9': { lat: 51.4648, lon: -0.1049 },
    'SW10': { lat: 51.4877, lon: -0.1911 },
    'SW11': { lat: 51.4615, lon: -0.1717 },
    'SW12': { lat: 51.4493, lon: -0.1433 },
    'SW13': { lat: 51.4743, lon: -0.2437 },
    'SW14': { lat: 51.4654, lon: -0.2667 },
    'SW15': { lat: 51.4588, lon: -0.2350 },
    'SW16': { lat: 51.4280, lon: -0.1290 },
    'SW17': { lat: 51.4291, lon: -0.1636 },
    'SW18': { lat: 51.4506, lon: -0.1894 },
    'SW19': { lat: 51.4192, lon: -0.1954 },
    'SW20': { lat: 51.4084, lon: -0.2299 },
    'SE1': { lat: 51.4987, lon: -0.0756 },
    'SE2': { lat: 51.4999, lon: 0.1297 },
    'SE3': { lat: 51.4635, lon: 0.0329 },
    'SE4': { lat: 51.4613, lon: -0.0300 },
    'SE5': { lat: 51.4702, lon: -0.1020 },
    'SE6': { lat: 51.4280, lon: -0.0429 },
    'SE7': { lat: 51.4762, lon: 0.0390 },
    'SE8': { lat: 51.4793, lon: -0.0270 },
    'SE9': { lat: 51.4567, lon: 0.0366 },
    'SE10': { lat: 51.4809, lon: 0.0164 },
    'SE11': { lat: 51.4891, lon: -0.1209 },
    'SE12': { lat: 51.4439, lon: 0.0133 },
    'SE13': { lat: 51.4500, lon: -0.0750 },
    'SE14': { lat: 51.4757, lon: -0.0601 },
    'SE15': { lat: 51.4736, lon: -0.0710 },
    'SE16': { lat: 51.4931, lon: 0.0741 },
    'SE17': { lat: 51.4923, lon: -0.0959 },
    'SE18': { lat: 51.4930, lon: 0.0741 },
    'SE19': { lat: 51.4170, lon: -0.0462 },
    'SE20': { lat: 51.4166, lon: -0.0550 },
    'SE21': { lat: 51.4497, lon: -0.0865 },
    'SE22': { lat: 51.4489, lon: -0.0745 },
    'SE23': { lat: 51.4374, lon: -0.0479 },
    'SE24': { lat: 51.4548, lon: -0.0916 },
    'SE25': { lat: 51.3984, lon: -0.0686 },
    'SE26': { lat: 51.4249, lon: -0.0559 },
    'SE27': { lat: 51.4320, lon: -0.1070 },
    'SE28': { lat: 51.5090, lon: 0.1020 },
    'N1': { lat: 51.5393, lon: -0.1165 },
    'N2': { lat: 51.5873, lon: -0.1768 },
    'N3': { lat: 51.6008, lon: -0.1925 },
    'N4': { lat: 51.5680, lon: -0.1114 },
    'N5': { lat: 51.5560, lon: -0.0970 },
    'N6': { lat: 51.5717, lon: -0.1413 },
    'N7': { lat: 51.5559, lon: -0.1190 },
    'N8': { lat: 51.5900, lon: -0.1071 },
    'N9': { lat: 51.6250, lon: -0.0550 },
    'N10': { lat: 51.5882, lon: -0.1421 },
    'N11': { lat: 51.6086, lon: -0.1473 },
    'N12': { lat: 51.6081, lon: -0.1754 },
    'N13': { lat: 51.6120, lon: -0.1600 },
    'N14': { lat: 51.6250, lon: -0.1394 },
    'N15': { lat: 51.5850, lon: -0.0750 },
    'N16': { lat: 51.5630, lon: -0.0750 },
    'N17': { lat: 51.5992, lon: -0.0711 },
    'N18': { lat: 51.6120, lon: -0.0700 },
    'N19': { lat: 51.5710, lon: -0.1300 },
    'N20': { lat: 51.6273, lon: -0.1855 },
    'N21': { lat: 51.6436, lon: -0.0834 },
    'N22': { lat: 51.5984, lon: -0.1218 },
    'NW1': { lat: 51.5243, lon: -0.1619 },
    'NW2': { lat: 51.5609, lon: -0.1968 },
    'NW3': { lat: 51.5588, lon: -0.1761 },
    'NW4': { lat: 51.5894, lon: -0.2330 },
    'NW5': { lat: 51.5520, lon: -0.1420 },
    'NW6': { lat: 51.5455, lon: -0.2000 },
    'NW7': { lat: 51.6118, lon: -0.2264 },
    'NW8': { lat: 51.5286, lon: -0.1753 },
    'NW9': { lat: 51.5967, lon: -0.2506 },
    'NW10': { lat: 51.5415, lon: -0.2325 },
    'NW11': { lat: 51.5710, lon: -0.1946 },
    'W1': { lat: 51.5158, lon: -0.1122 },
    'W2': { lat: 51.5118, lon: -0.1785 },
    'W3': { lat: 51.5093, lon: -0.2618 },
    'W4': { lat: 51.4927, lon: -0.2524 },
    'W5': { lat: 51.5148, lon: -0.3022 },
    'W6': { lat: 51.4989, lon: -0.2256 },
    'W7': { lat: 51.5100, lon: -0.3370 },
    'W8': { lat: 51.4988, lon: -0.2006 },
    'W9': { lat: 51.5261, lon: -0.1854 },
    'W10': { lat: 51.5213, lon: -0.2268 },
    'W11': { lat: 51.5120, lon: -0.1995 },
    'W12': { lat: 51.5087, lon: -0.2424 },
    'W13': { lat: 51.5100, lon: -0.3200 },
    'W14': { lat: 51.4960, lon: -0.2100 },
    'WC1': { lat: 51.5237, lon: -0.1192 },
    'WC2': { lat: 51.5121, lon: -0.1257 },
    'E1': { lat: 51.5260, lon: -0.0474 },
    'E2': { lat: 51.5323, lon: -0.0608 },
    'E3': { lat: 51.5214, lon: -0.0314 },
    'E4': { lat: 51.6280, lon: -0.0100 },
    'E5': { lat: 51.5544, lon: -0.0497 },
    'E6': { lat: 51.5250, lon: 0.0450 },
    'E7': { lat: 51.5520, lon: 0.0250 },
    'E8': { lat: 51.5393, lon: -0.0673 },
    'E9': { lat: 51.5472, lon: -0.0425 },
    'E10': { lat: 51.5706, lon: -0.0384 },
    'E11': { lat: 51.5600, lon: 0.0151 },
    'E12': { lat: 51.5630, lon: 0.0330 },
    'E13': { lat: 51.5250, lon: 0.0300 },
    'E14': { lat: 51.5130, lon: -0.0345 },
    'E15': { lat: 51.5420, lon: 0.0020 },
    'E16': { lat: 51.5160, lon: 0.0186 },
    'E17': { lat: 51.5850, lon: -0.0200 },
    'E18': { lat: 51.5900, lon: 0.0250 },
    'EC1': { lat: 51.5272, lon: -0.0887 },
    'EC2': { lat: 51.5172, lon: -0.0847 },
    'EC3': { lat: 51.5138, lon: -0.0800 },
    'EC4': { lat: 51.5138, lon: -0.1022 },
    'BR1': { lat: 51.3982, lon: 0.0420 },
    'BR2': { lat: 51.3452, lon: 0.0473 },
    'BR3': { lat: 51.3334, lon: 0.0189 },
    'BR4': { lat: 51.3780, lon: -0.0200 },
    'BR5': { lat: 51.3960, lon: 0.1117 },
    'BR6': { lat: 51.3622, lon: 0.0818 },
    'BR7': { lat: 51.4220, lon: 0.0736 },
    'BR8': { lat: 51.3804, lon: 0.1809 },
    'CR0': { lat: 51.3709, lon: -0.1010 },
    'CR2': { lat: 51.3447, lon: -0.0548 },
    'CR3': { lat: 51.2845, lon: -0.1005 },
    'CR4': { lat: 51.4059, lon: -0.1789 },
    'CR5': { lat: 51.3030, lon: -0.1610 },
    'CR6': { lat: 51.2800, lon: -0.0800 },
    'CR7': { lat: 51.3960, lon: -0.1000 },
    'CR8': { lat: 51.3327, lon: -0.1228 },
    'CR9': { lat: 51.3750, lon: -0.1000 }
};

// Function to get coordinates from postcode
function getPostcodeCoordinates(postcode) {
    // Clean the postcode (remove spaces and convert to uppercase)
    const cleanPostcode = postcode.toUpperCase().replace(/\s+/g, '');
    
    // Try exact match first
    if (postcodeCoordinates[cleanPostcode]) {
        return postcodeCoordinates[cleanPostcode];
    }
    
    // Try with space (e.g., "BR3 5UF")
    const withSpace = postcode.toUpperCase().trim();
    if (postcodeCoordinates[withSpace]) {
        return postcodeCoordinates[withSpace];
    }
    
    // Try just the outward code (first part)
    const outwardCode = cleanPostcode.match(/^[A-Z]{1,2}\d{1,2}[A-Z]?/);
    if (outwardCode && postcodeCoordinates[outwardCode[0]]) {
        return postcodeCoordinates[outwardCode[0]];
    }
    
    // Try even shorter version (e.g., "BR3" from "BR3 5UF")
    const shortCode = cleanPostcode.match(/^[A-Z]{1,2}\d{1,2}/);
    if (shortCode && postcodeCoordinates[shortCode[0]]) {
        return postcodeCoordinates[shortCode[0]];
    }
    
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const postcodeInput = document.getElementById('postcodeInput');
    const resultsContainer = document.getElementById('results');

    // Check if dogDaycares is loaded
    if (typeof dogDaycares === 'undefined') {
        console.error('dogDaycares data not loaded!');
        resultsContainer.innerHTML = '<p style="color: red;">Error: Data not loaded. Please refresh the page.</p>';
        return;
    }

    console.log('Loaded ' + dogDaycares.length + ' dog daycares');

    // Display all daycares on page load
    displayResults(dogDaycares, null, 'all');

    searchButton.addEventListener('click', () => {
        const searchTerm = postcodeInput.value.trim();
        if (!searchTerm) {
            resultsContainer.innerHTML = '<p>Please enter a postcode.</p>';
            return;
        }

        // Get coordinates for the entered postcode
        const searchCoords = getPostcodeCoordinates(searchTerm);
        
        if (!searchCoords) {
            // If we don't have coordinates for this postcode, fall back to text search
            const filteredDaycares = dogDaycares.filter(daycare => {
                const postcodeMatch = daycare.postal_code.toLowerCase().includes(searchTerm.toLowerCase());
                const addressMatch = daycare.full_address.toLowerCase().includes(searchTerm.toLowerCase());
                return postcodeMatch || addressMatch;
            });
            
            if (filteredDaycares.length > 0) {
                displayResults(filteredDaycares, null, searchTerm);
            } else {
                resultsContainer.innerHTML = `<p>No exact matches found for "${searchTerm}". Showing all locations within 20km of nearby areas...</p>`;
                // Try to find a nearby postcode
                const nearbyPostcode = findNearbyPostcode(searchTerm);
                if (nearbyPostcode) {
                    const nearbyCoords = postcodeCoordinates[nearbyPostcode];
                    filterAndDisplayByDistance(nearbyCoords, 20, searchTerm);
                } else {
                    displayResults(dogDaycares, null, 'all');
                }
            }
            return;
        }

        // Filter by distance - show all with distances, but highlight those within reasonable range
        filterAndDisplayByDistance(searchCoords, 1000, searchTerm); // 1000km to show all
    });

    function filterAndDisplayByDistance(searchCoords, maxDistance, searchTerm) {
        // Calculate distance for all daycares
        const daycaresWithDistance = dogDaycares.map(daycare => {
            if (!daycare.latitude || !daycare.longitude) {
                return { ...daycare, distance: 999999 }; // Very large distance for those without coords
            }
            const distance = calculateDistance(
                searchCoords.lat, 
                searchCoords.lon,
                daycare.latitude, 
                daycare.longitude
            );
            return { ...daycare, distance };
        });

        // Sort by distance
        daycaresWithDistance.sort((a, b) => a.distance - b.distance);

        // Filter to show only those within reasonable distance (e.g., 50km for practical purposes)
        // But if none are within 50km, show the closest 10
        let filteredDaycares = daycaresWithDistance.filter(d => d.distance <= 50);
        
        if (filteredDaycares.length === 0) {
            // No daycares within 50km, show closest 10 with a warning
            filteredDaycares = daycaresWithDistance.slice(0, 10);
        }

        displayResults(filteredDaycares, searchCoords, searchTerm);
    }

    function findNearbyPostcode(searchTerm) {
        // Try to find a similar postcode in our database
        const searchUpper = searchTerm.toUpperCase();
        const searchPrefix = searchUpper.match(/^[A-Z]{1,2}\d{0,2}/);
        
        if (searchPrefix) {
            // Find postcodes that start with the same letters
            for (const code in postcodeCoordinates) {
                if (code.startsWith(searchPrefix[0])) {
                    return code;
                }
            }
        }
        
        // Default to central London if nothing found
        return 'SW1';
    }

    function displayResults(daycares, searchCoords, searchTerm) {
        if (daycares.length === 0) {
            resultsContainer.innerHTML = `<p>No dog daycares found in our database.</p>`;
            return;
        }

        let headerHtml = '';
        let warningHtml = '';
        
        if (searchTerm && searchTerm !== 'all') {
            // Check if all results are far away (> 50km)
            const allFar = daycares.every(d => d.distance && d.distance > 50);
            
            // Add location context for known areas
            let locationContext = '';
            const upperSearch = searchTerm.toUpperCase();
            
            if (upperSearch.startsWith('IP')) {
                locationContext = ' (Ipswich/Suffolk area)';
            } else if (upperSearch.startsWith('RG')) {
                locationContext = ' (Reading/Berkshire area)';
            } else if (upperSearch.startsWith('OX')) {
                locationContext = ' (Oxford area)';
            } else if (upperSearch.startsWith('BR')) {
                locationContext = ' (Bromley area)';
            } else if (upperSearch.startsWith('SW')) {
                locationContext = ' (South West London)';
            } else if (upperSearch.startsWith('SE')) {
                locationContext = ' (South East London)';
            } else if (upperSearch.startsWith('N') && !upperSearch.startsWith('NW') && !upperSearch.startsWith('NR')) {
                locationContext = ' (North London)';
            } else if (upperSearch.startsWith('E') && !upperSearch.startsWith('EN')) {
                locationContext = ' (East London)';
            } else if (upperSearch.startsWith('W') && !upperSearch.startsWith('WD')) {
                locationContext = ' (West London)';
            } else if (upperSearch.startsWith('NW')) {
                locationContext = ' (North West London)';
            } else if (upperSearch.startsWith('CB')) {
                locationContext = ' (Cambridge area)';
            } else if (upperSearch.startsWith('NR')) {
                locationContext = ' (Norwich area)';
            } else if (upperSearch.startsWith('CO')) {
                locationContext = ' (Colchester area)';
            }
            
            if (allFar) {
                warningHtml = `
                    <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #ffc107;">
                        <strong>⚠️ Note:</strong> All dog daycares in our database are more than 50km from ${searchTerm}${locationContext}. 
                        Showing the ${daycares.length} closest locations. Our database primarily covers the Greater London area.
                    </div>
                `;
                headerHtml = `<h2>Closest ${daycares.length} dog daycares to ${searchTerm}${locationContext}</h2>`;
            } else {
                const within50 = daycares.filter(d => d.distance <= 50).length;
                if (within50 > 0) {
                    headerHtml = `<h2>Found ${within50} dog daycare${within50 !== 1 ? 's' : ''} within 50km of ${searchTerm}${locationContext}</h2>`;
                } else {
                    headerHtml = `<h2>Showing closest dog daycares to ${searchTerm}${locationContext}</h2>`;
                }
            }
        } else {
            headerHtml = `<h2>Showing all ${daycares.length} dog daycares</h2>`;
        }

        resultsContainer.innerHTML = warningHtml + headerHtml + daycares
            .map(daycare => {
                let distanceText = '';
                if (daycare.distance !== undefined) {
                    const distanceClass = daycare.distance > 50 ? 'distance distance-far' : 'distance';
                    const distanceWarning = daycare.distance > 100 ? ' ⚠️' : '';
                    distanceText = `<p class="${distanceClass}"><strong>Distance:</strong> ${daycare.distance.toFixed(1)} km${distanceWarning}</p>`;
                }
                
                return `
                    <div class="daycare-card">
                        <h3>${daycare.name}</h3>
                        ${distanceText}
                        <p><strong>Address:</strong> ${daycare.full_address || 'Address not available'}</p>
                        <p><strong>Postcode:</strong> ${daycare.postal_code || 'Not available'}</p>
                        <p><strong>Phone:</strong> ${daycare.phone || 'N/A'}</p>
                        <p><strong>Website:</strong> ${daycare.site ? `<a href="${daycare.site}" target="_blank">${daycare.site}</a>` : 'N/A'}</p>
                    </div>
                `;
            })
            .join('');
    }

    // Add enter key support
    postcodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});
