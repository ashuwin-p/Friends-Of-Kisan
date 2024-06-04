const dataset = {
  'Loan Schemes for Farmers in India': {
    response: 'Here are some loan schemes available in India for farmers:',
    options: [
      'Pradhan Mantri Fasal Bima Yojana',
      'Kisan Credit Card Scheme',
      'Pradhan Mantri Kisan Samman Nidhi Yojana',
      'National Bank for Agriculture and Rural Development (NABARD) Loans',
      'Agricultural Gold Loan',
      'Interest Subvention Scheme for Short Term Crop Loans',
      'Rashtriya Krishi Vikas Yojana (RKVY)',
      'Pradhan Mantri Kisan Credit Card (PM-KCC) Scheme',
      'Pashu Kisan Credit Card (PKCC) Scheme',
      'Land Purchase/Improvement',
      'Equipment Purchase (Tractors, Irrigation)',
      'Seed & Fertilizer Purchase',
      'Livestock Purchase',
      'Post-Harvest Infrastructure',
    ],
  },
  "கிசான் கிரெடிட் கார்டு திட்டம்": {
    response: "கிசான் கிரெடிட் கார்டு (கேச்சே) திட்டம் விவசாயிகளுக்கு அவசியமான நிதி வசதிகளை சமயமாக வழங்குகின்றது.",
    keywords: ["கேச்சே", "நிதி வசதிகள்", "விவசாய தேவைகள்"]
  },

  'Pradhan Mantri Fasal Bima Yojana': {
    response:
      'Pradhan Mantri Fasal Bima Yojana (PMFBY) provides crop insurance coverage and financial support to farmers in case of crop loss/damage.',
    keywords: ['pmfby', 'crop insurance', 'crop loss'],
  },
  'Kisan Credit Card Scheme': {
    response:
      'Kisan Credit Card (KCC) Scheme provides farmers with timely access to credit facilities for their agricultural needs.',
    keywords: ['kcc', 'credit facilities', 'agricultural needs'],
  },
  'Pradhan Mantri Kisan Samman Nidhi Yojana': {
    response:
      'Pradhan Mantri Kisan Samman Nidhi Yojana (PM-Kisan) provides financial assistance to small and marginal farmers.',
    keywords: [
      'pm-kisan',
      'financial assistance',
      'small farmers',
      'marginal farmers',
    ],
  },
  'National Bank for Agriculture and Rural Development (NABARD) Loans': {
    response:
      'NABARD provides various loan schemes for agriculture and rural development projects to support farmers and rural entrepreneurs.',
    keywords: ['nabard', 'agriculture loans', 'rural development'],
  },
  'Agricultural Gold Loan': {
    response:
      'Agricultural Gold Loan allows farmers to avail loans by pledging their gold ornaments to meet their agricultural and allied expenses.',
    keywords: [
      'agricultural gold loan',
      'gold ornaments',
      'agricultural expenses',
    ],
  },
  'Interest Subvention Scheme for Short Term Crop Loans': {
    response:
      'Interest Subvention Scheme provides interest subsidy to farmers on short-term crop loans, reducing the effective rate of interest for farmers.',
    keywords: [
      'interest subvention',
      'short-term crop loans',
      'interest subsidy',
    ],
  },
  'Rashtriya Krishi Vikas Yojana (RKVY)': {
    response:
      'Rashtriya Krishi Vikas Yojana (RKVY) is a centrally sponsored scheme that aims to achieve faster agricultural development.',
    keywords: ['rkv', 'agricultural development'],
  },
  'Pradhan Mantri Kisan Credit Card (PM-KCC) Scheme': {
    response:
      'Pradhan Mantri Kisan Credit Card (PM-KCC) Scheme provides farmers with hassle-free credit facilities for their agricultural and allied needs.',
    keywords: ['pm-kcc', 'credit facilities', 'agricultural needs'],
  },
  'Pashu Kisan Credit Card (PKCC) Scheme': {
    response:
      'Pashu Kisan Credit Card (PKCC) Scheme provides easy and hassle-free credit facilities to livestock farmers for meeting their animal husbandry expenses.',
    keywords: ['pkcc', 'livestock farmers', 'animal husbandry expenses'],
  },

  'Land Purchase/Improvement': {
    response:
      'Various loan options are available for land purchase and improvement. They are:\n\n1. Subsidy for Land Purchase Scheme (State Bank of India):\nThis scheme by the State Bank of India (SBI) can help landless farmers acquire land for cultivation.\n\n2. Land Development Loan Scheme (National Bank for Agriculture and Rural Development - NABARD):\nNABARD offers loans to finance land development activities like leveling, bunding, and soil correction.\n\nEligibility Criteria: Eligible farmers must provide proof of land ownership or lease agreement.',
  },
  'Equipment Purchase (Tractors, Irrigation)': {
    response:
      'Different loan schemes cater to the purchase of equipment such as tractors and irrigation systems. They are:\n\n1. Micro-Irrigation Loan Scheme (NABARD and Land Development Banks):\nNABARD and Land Development Banks provide loans for installing micro-irrigation systems like drip irrigation or sprinklers to conserve water.\n\n2. Farm Equipment Loan Scheme (State Bank of India, Axis Bank):\nLoans for purchasing agricultural equipment like tractors are available from State Bank of India, Axis Bank, etc.\n\nEligibility Criteria: Farmers must provide quotations for the equipment to be purchased.',
  },
  'Seed & Fertilizer Purchase': {
    response:
      'Loans are available for purchasing seeds and fertilizers to support agricultural activities. They are:\n\n1. Kisan Credit Card Scheme (State Bank of India, HDFC Bank):\nOffered by multiple banks (SBI, HDFC Bank, etc.), this scheme provides credit for various agricultural needs, including purchasing seeds and fertilizers.\n\n2. Krishak Samridhi Yojna (National Bank for Agriculture and Rural Development - NABARD):\nA scheme by NABARD that provides short-term loans to farmers for seasonal agricultural expenses like seeds and fertilizers.\n\nEligibility Criteria: Farmers must have a valid identity proof and land ownership documents.',
  },
  'Livestock Purchase': {
    response:
      'Farmers can avail loans for purchasing livestock for various agricultural purposes. They are:\n\n1. Animal Husbandry Loan Scheme (State Bank of India, Bank of Baroda):\nBanks like SBI and Bank of Baroda offer loans for starting or expanding livestock businesses like dairy or poultry farming.\n\n2. Dairy Entrepreneurship Development Scheme (Government scheme):\nThis government scheme provides financial assistance to individuals or groups for setting up dairy units.\n\nEligibility Criteria: Farmers must provide a business plan for livestock management and proof of adequate space for animal husbandry.',
  },
  'Post-Harvest Infrastructure': {
    response:
      'Loans are available to support post-harvest infrastructure development. They are:\n\n1. Warehouse Receipt Financing Scheme (State Bank of India, ICICI Bank):\nMultiple banks (SBI, ICICI Bank, etc.) offer loans against warehouse receipts for storing agricultural produce after harvest. This helps farmers get better prices by selling their produce later when prices are higher.\n\n2. Cold Chain Loan Scheme (National Bank for Agriculture and Rural Development - NABARD):\nNABARD offers loans for setting up cold storage facilities to minimize post-harvest losses of fruits, vegetables, and other perishable produce.\n\nEligibility Criteria: Farmers must provide documents related to the agricultural produce stored and the expected value.',
  },
  default: {
    response:
      'I am sorry, I do not have information about that specific loan scheme. Please select from the options provided.',
  },
  'உதவி': {
    response:
      "வணக்கம்! நான் விவசாயிகளின் நண்பன். உங்களின் குறைகளை கூறுக. என்னால் முடிந்த உதவிகளை செய்கிறேன்."
  },
  'Subsistence Farming': {
    response:
      "While there aren't specific loan schemes solely for subsistence farming, several government initiatives can benefit small and marginal farmers practicing subsistence farming:\n\n1. Pradhan Mantri Kisan Samman Nidhi (PM-KISAN):\nThis scheme provides income support of ₹6,000 per year in three installments to small and marginal farmers (landholding up to 2 hectares).\n\n2. Pradhan Mantri Fasal Bima Yojana (PMFBY):\nThis scheme offers subsidized crop insurance to farmers against losses due to natural calamities, pests, and diseases.\n\n3. Soil Health Card Scheme:\nThis scheme provides a soil health card to farmers, analyzing their soil's fertility and recommending suitable amendments for improvement.\n\n4. Paramparagat Krishi Vikas Yojana (PKVY):\nThis scheme promotes organic farming by providing financial assistance for organic certification, production units, and marketing infrastructure.\n\nEligibility Criteria: Farmers must provide documents proving their status as small or marginal farmers.",
  },
  'Commercial Farming': {
    response:
      'Several loan schemes are available for commercial farming operations. They are:\n\n1. Kisan Credit Card Scheme:\nOffered by multiple banks, this scheme provides credit for various agricultural needs, including seeds, fertilizers, pesticides, and equipment purchase.\n\n2. Subsidy for Land Purchase Scheme (SBI):\nThis scheme by SBI can help commercial farmers acquire additional land.\n\n3. Micro-Irrigation Loan Scheme (NABARD):\nThis scheme supports water conservation by providing loans for installing micro-irrigation systems.\n\n4. Farm Equipment Loan Scheme (Various Banks):\nLoans for purchasing tractors, harvesters, and other agricultural equipment are available from various banks.\n\n5. Agricultural Infrastructure Fund (AIF):\nThis government initiative provides financing for setting up post-harvest infrastructure like storage facilities and processing units.\n\nEligibility Criteria: Farmers must provide documents proving their commercial farming status and business plans.',
  },
  'Plantation Farming': {
    response:
      'Specific loan schemes are available for plantation farming. They are:\n\n1. Tea Development Loan Scheme:\nThis scheme provides financial assistance for tea plantation activities like rejuvenation, expansion, and infrastructure development.\n\n2. Coffee Plantation Development Scheme:\nSimilar to the tea scheme, this supports coffee plantation development and modernization.\n\n3. Rubber Plantation Development Scheme:\nThis scheme offers financial assistance for establishing and maintaining rubber plantations.\n\n4. Interest Subvention Scheme for Plantation Crops:\nThis scheme provides subsidized interest rates on loans availed by plantation farmers.\n\nEligibility Criteria: Farmers must provide documents related to the specific plantation crops and proposed activities.',
  },
  Horticulture: {
    response:
      'Various government schemes provide financial assistance for horticulture. They are:\n\n1. Mission for Integrated Development of Horticulture (MIDH):\nThis scheme offers financial assistance for establishing nurseries, protected cultivation units, and marketing infrastructure for horticulture crops.\n\n2. National Horticulture Mission (NHM):\nThis scheme provides financial support for setting up production units, processing facilities, and marketing channels for horticultural produce.\n\n3. Subsidy on Micro Irrigation for Protected Cultivation:\nThis scheme offers subsidies for installing micro-irrigation systems in greenhouses and shade nets used in horticulture.\n\n4. Credit Linked Horticulture Package:\nThis NABARD scheme provides refinance to cooperative banks for horticulture production and marketing activities.\n\nEligibility Criteria: Farmers must provide documents related to horticulture crops and proposed activities.',
  },
  'Animal Husbandry': {
    response:
      'Various loan schemes are available for animal husbandry. They are:\n\n1. Animal Husbandry Loan Scheme (Various Banks):\nBanks like SBI and Bank of Baroda offer loans for starting or expanding livestock businesses like dairy or poultry farming.\n\n2. Dairy Entrepreneurship Development Scheme:\nThis scheme provides financial assistance for individuals or groups to set up dairy units.\n\n3. Deen Dayal Antyodaya Yojana - National Livestock Mission (DAY-NLM):\nThis scheme supports various livestock development activities like cattle sheds, fodder production, and veterinary care.\n\n4. Scheme for Sheep Infrastructure and Development:\nThis scheme provides financial assistance for establishing sheep breeding farms and infrastructure development.\n\n5. Integrated Piggery Development Scheme:\nThis scheme promotes piggery development by providing financial assistance for breeding stock, infrastructure, and marketing.\n\nEligibility Criteria: Farmers must provide business plans and relevant documents related to the specific livestock sector.',
  },
  'Mixed Farming': {
    response:
      'Mixed farming operations can benefit from various government schemes and loans. They are:\n\n1. Kisan Credit Card Scheme:\nThis versatile scheme caters to the diverse needs of mixed farming operations.\n\n2. Sustainable Agriculture and Income Enhancement (SAINI) Scheme:\nThis scheme promotes integrated farming systems by providing financial assistance for organic farming, vermi-composting, and solar power installations, which can benefit mixed farms.\n\n3. NABARD Refinance Schemes:\nNABARD offers refinance schemes to cooperative banks that provide loans for mixed farming activities, including crop production, horticulture, and animal husbandry.\n\nEligibility Criteria: Farmers must provide documents related to the diverse farming activities carried out.',
  },
  'Landless Farmer': {
    response:
      'Landless farmers can benefit from the following schemes:\n\n1. Subsidy for Land Purchase Scheme (SBI):\nThis scheme by the State Bank of India (SBI) can help landless farmers acquire land for cultivation.\nEligibility: Primarily for landless farmers or marginal farmers with very small landholdings.\nYear of Release: Information not readily available, but likely existed in some form for many years.\n\n2. Land Lease Scheme (NABARD):\nNational Bank for Agriculture and Rural Development (NABARD) offers loans to facilitate land leasing for agricultural purposes.\nEligibility: Farmers looking to lease land for agricultural purposes. Landowners must be willing to lease their land.\nYear of Release: Information not readily available, but NABARD has been supporting agriculture for decades.',
  },
  'Small Landholder (Upto 2 hectares)': {
    response:
      "Small landholders (up to 2 hectares) can benefit from the following schemes:\n\n1. Kisan Credit Card Scheme (Multiple Banks):\nOffered by multiple banks (SBI, HDFC Bank, etc.), this scheme provides credit for various agricultural needs.\nEligibility: Primarily for small and medium farmers for various agricultural needs like seeds, fertilizers, pesticides, and equipment.\nYear of Release: Launched in 1998.\n\n2. Micro-Irrigation Loan Scheme (NABARD & Land Development Banks):\nNABARD and Land Development Banks provide loans for installing micro-irrigation systems to conserve water.\nEligibility: Farmers looking to install water-saving micro-irrigation systems like drip or sprinkler irrigation.\nYear of Release: Micro-irrigation has been promoted for decades, but specific loan scheme details require further research.\n\n3. Small Farmer's Agribusiness Relief and Rehabilitation Scheme (SFAR&RS) (SBI):\nSBI offers financial assistance for income generation and agricultural improvements.\nEligibility: Primarily for small and marginal farmers facing financial stress. Aims to support income generation and agricultural improvements.\nYear of Release: Launched in 2014.",
  },
  'Medium Landholder (2-5 hectares)': {
    response:
      'Medium landholders (2-5 hectares) can benefit from the following schemes:\n\n1. Kisan Credit Card Scheme (Multiple Banks):\nSimilar to small landholders, medium landholders can avail benefits of this scheme from various banks.\nEligibility: Primarily for small and medium farmers for various agricultural needs like seeds, fertilizers, pesticides, and equipment.\nYear of Release: Launched in 1998.\n\n2. Farm Equipment Loan Scheme (SBI, Axis Bank, etc.):\nLoans for purchasing agricultural equipment like tractors are available from SBI, Axis Bank, etc.\nEligibility: Farmers looking to purchase agricultural equipment like tractors, harvesters, etc.\nYear of Release: Farm equipment loans have been available from various banks for many years. Specific scheme details may vary.\n\n3. Animal Husbandry Loan Scheme (SBI, Bank of Baroda, etc.):\nBanks like SBI and Bank of Baroda offer loans for livestock and fisheries businesses.\nEligibility: Farmers interested in starting or expanding livestock businesses like dairy, poultry, or fisheries.\nYear of Release: Animal husbandry loans have been offered by banks for a long time. Specific scheme details may vary.',
  },
  'Large Landholder (Above 5 hectares)': {
    response:
      'Large landholders (above 5 hectares) can benefit from the following schemes:\n\n1. Kisan Credit Card Scheme (Multiple Banks):\nLarge landholders can also benefit from this widely offered credit scheme.\nEligibility: Primarily for small and medium farmers for various agricultural needs like seeds, fertilizers, pesticides, and equipment.\nYear of Release: Launched in 1998.\n\n2. Tractor Loan Scheme (SBI, Mahindra & Mahindra Bank, etc.):\nFinancing for purchasing tractors is available from SBI, Mahindra & Mahindra Bank, etc.\nEligibility: Farmers looking to finance the purchase of tractors for agricultural operations.\nYear of Release: Tractor loan schemes have been available from various banks for many years. Specific scheme details may vary.\n\n3. Warehouse Receipt Financing Scheme (SBI, ICICI Bank, etc.):\nMultiple banks offer loans against warehouse receipts for storing agricultural produce.\nEligibility: Farmers with agricultural produce who need to store it after harvest. They can use warehouse receipts as collateral to secure loans.\nYear of Release: Warehouse receipt financing schemes have been around for several years, but the specific details may vary depending on the bank.',
  },
  Greetings: {
    response: 'Hello! How can I assist you today?',
    options: [],
  },
  'How are you': {
    response: "I'm doing well, thank you for asking. How can I help you?",
    options: [],
  },
  'Good morning': {
    response: 'Good morning! I hope you have a wonderful day ahead.',
    options: [],
  },
  'Good afternoon': {
    response: 'Good afternoon! How may I be of service?',
    options: [],
  },
  'Good evening': {
    response: 'Good evening! Is there anything I can help you with?',
    options: [],
  },
  Goodbye: {
    response: 'Goodbye! Have a great day!',
    options: [],
  },
  'See you later': {
    response: 'See you later! Take care!',
    options: [],
  },
  'Take care': {
    response: 'You too! Let me know if you need anything else.',
    options: [],
  },
  Hi: {
    response: 'Hi there! How can I help you?',
    options: [],
  },
  'Loan Waiver Details': {
    response:
      "Negotiate with the Bank:\n\n\tRestructure the Loan: This could involve extending the loan term, reducing monthly payments, or converting short-term debt into long-term debt. This can give the farmer more breathing room to manage repayments.\n\n\tInterest Waiver: While not common, some banks may be willing to waive some of the accrued interest on the loan. This can make the total amount more manageable.\n\nGovernment Programs:\n\n\tFarmer Loan Schemes: Several government schemes offer loan assistance or loan waivers to farmers in distress. Check with the local agricultural department or banks for ongoing programs. Some examples include:\n\n\t\tDebt Relief Schemes (subject to government announcements)\n\t\tCrop Loan Scheme (subsidized interest rates)\n\nAdditional Support:\n\n\tNABARD Rehabilitation Programs: The National Bank for Agriculture and Rural Development (NABARD) offers rehabilitation programs for farmers facing financial difficulties. These may include loan restructuring or one-time grants.\n\tFarmer Producer Organizations (FPOs): FPOs can help farmers by providing better access to credit, markets, and technical expertise. Joining an FPO can improve the farmer's bargaining power and potentially increase income.\n\nImportant Resources:\n\n\tMinistry of Agriculture & Farmers Welfare: https://agriwelfare.gov.in/ This website provides information on various government schemes for farmers.\n\tNational Bank for Agriculture and Rural Development (NABARD): https://www.nabard.org/ NABARD offers various loan schemes and support programs for farmers.\n\tAgricultural Department of your State: Your state's agricultural department can provide information on local programs and resources to help farmers in distress.",
  },
  Agriculture: {
    response:
      'The science, art, and practice of cultivating land, producing crops, and raising livestock.',
    options: [],
  },
  Seed: {
    response:
      'A small embryonic plant enclosed in a protective outer covering. Seeds are used for planting crops.',
    options: [],
  },
  Crop: {
    response:
      'A cultivated plant that is grown and harvested for agricultural use. Crops can include grains, vegetables, fruits, and more.',
    options: [],
  },
  Farmers: {
    response:
      'Individuals or groups engaged in agricultural production, typically cultivating land and raising livestock.',
    options: [],
  },
  Loan: {
    response:
      'A sum of money that is borrowed from a financial institution or lender with the agreement that it will be repaid, typically with interest, over a set period of time.',
    options: [],
  },
  Repayment: {
    response:
      'The act of paying back borrowed money, typically in installments, including both the principal amount and any accrued interest.',
    options: [],
  },
  Interest: {
    response:
      'A fee paid on borrowed money, typically calculated as a percentage of the principal amount and accrued over time.',
    options: [],
  },
  Debt: {
    response: 'An obligation to repay borrowed money or goods.',
    options: [],
  },
  Term: {
    response:
      'The period of time over which a loan agreement is in effect, during which the borrower makes payments to repay the borrowed funds.',
    options: [],
  },
  Restructure: {
    response:
      "To change the terms of a loan agreement, such as extending the repayment period or modifying the interest rate, to better suit the borrower's financial circumstances.",
    options: [],
  },
  Waiver: {
    response:
      'The voluntary relinquishment or abandonment of a legal right or claim, such as forgiving the payment of interest on a loan.',
    options: [],
  },
  Government: {
    response:
      'The governing body of a nation, state, or community responsible for making and enforcing laws and policies.',
    options: [],
  },
  Programs: {
    response:
      'Organized initiatives or activities designed to achieve specific objectives or address particular needs, often implemented by government agencies or organizations.',
    options: [],
  },
  Assistance: {
    response:
      'Help or support provided to individuals or groups in need, often in the form of financial aid, resources, or services.',
    options: [],
  },
  Distress: {
    response:
      'A state of extreme difficulty, hardship, or suffering, often due to financial or other challenges.',
    options: [],
  },
  Relief: {
    response:
      'Aid or assistance provided to alleviate suffering or address needs in times of difficulty or crisis.',
    options: [],
  },
  Scheme: {
    response:
      'A systematic plan or arrangement designed to achieve a particular purpose, often involving financial or organizational measures.',
    options: [],
  },
  Subsidized: {
    response:
      'Provided with financial assistance or support, often by a government or organization, to reduce costs or make goods or services more affordable.',
    options: [],
  },
  'Interest Rates': {
    response:
      'The percentage at which interest is charged on borrowed money, typically expressed as an annual percentage rate (APR).',
    options: [],
  },
  Rehabilitation: {
    response:
      'The process of restoring someone to health or normal life through training and therapy after illness, injury, or addiction.',
    options: [],
  },
  Grants: {
    response:
      'Funds provided by a government or organization for a specific purpose, often awarded based on merit or need and not expected to be repaid.',
    options: [],
  },
  Producer: {
    response:
      'A person, company, or organization that creates or manufactures goods or commodities, often for sale or distribution.',
    options: [],
  },
  Organizations: {
    response:
      'Groups or associations formed for a specific purpose or to achieve common goals, often structured with defined roles and responsibilities.',
    options: [],
  },
  Access: {
    response:
      'The ability or right to obtain entry, use, or participate in something.',
    options: [],
  },
  Credit: {
    response:
      'The provision of money, goods, or services with the expectation of future payment, often with interest.',
    options: [],
  },
  Markets: {
    response:
      'The exchange of goods and services between buyers and sellers, typically involving transactions, pricing, and competition.',
    options: [],
  },
  'Technical Expertise': {
    response:
      'Specialized knowledge or skills in a particular field or subject, often related to technology, science, or engineering.',
    options: [],
  },
  'Bargaining Power': {
    response:
      'The ability of an individual or group to negotiate favorable terms or outcomes in a transaction or agreement.',
    options: [],
  },
  Income: {
    response:
      'Money received, especially on a regular basis, for work or through investments.',
    options: [],
  },
  'வாழ்வாதார விவசாயம்': {
    response:
      'வாழ்வாதார விவசாயத்திற்காக மட்டுமே குறிப்பிட்ட கடன் திட்டங்கள் இல்லை என்றாலும், இயற்கை விவசாயத்தில் ஈடுபடும் சிறு மற்றும் குறு விவசாயிகளுக்கு அரசின் பல முயற்சிகள் பயனளிக்கும்:\n\n1. பிரதான் மந்திரி கிசான் சம்மன் நிதி (PM-KISAN):\nஇந்த திட்டம் வருமான ஆதரவை வழங்குகிறது. சிறு மற்றும் குறு விவசாயிகளுக்கு (2 ஹெக்டேர் வரை நிலம் வைத்திருக்கும்) மூன்று தவணைகளில் ஆண்டுக்கு ₹6,000.\n\n2. பிரதான் மந்திரி ஃபசல் பீமா யோஜனா (PMFBY):\nஇந்தத் திட்டம் விவசாயிகளுக்கு இயற்கை பேரிடர்களால் ஏற்படும் இழப்புகளுக்கு மானிய விலையில் பயிர் காப்பீடு வழங்குகிறது. பூச்சிகள் மற்றும் நோய்கள்.\n\n3. மண் ஆரோக்கிய அட்டை திட்டம்:\nஇந்த திட்டம் விவசாயிகளுக்கு மண் சுகாதார அட்டையை வழங்குகிறது, அவர்களின் மண்ணின் வளத்தை ஆய்வு செய்து, மேம்படுத்துவதற்கு பொருத்தமான திருத்தங்களை பரிந்துரைக்கிறது.\n\n4. பரம்பரகட் கிரிஷி விகாஸ் யோஜனா (PKVY): \nஇத்திட்டம் கரிம சான்றளிப்பு, உற்பத்தி அலகுகள் மற்றும் சந்தைப்படுத்தல் உள்கட்டமைப்புக்கான நிதி உதவியை வழங்குவதன் மூலம் இயற்கை விவசாயத்தை ஊக்குவிக்கிறது.\n\nதகுதி அளவுகோல்: விவசாயிகள் சிறு அல்லது குறு விவசாயிகளாக தங்கள் நிலையை நிரூபிக்கும் ஆவணங்களை வழங்க வேண்டும்.',
    options: [],
  },
  'வணக்கம்': {
    response:
      'வணக்கம்! நான் விவசாயிகளின் நண்பன். உங்களின் குறைகளை கூறுக. என்னால் முடிந்த உதவிகளை செய்கிறேன்.',
    options: [],
  },
  'வணிக விவசாயம்': {
    response:
      'வணிக விவசாய நடவடிக்கைகளுக்கு பல கடன் திட்டங்கள் உள்ளன. அவை:\n\n1. கிசான் கிரெடிட் கார்டு திட்டம்:\nபல வங்கிகளால் வழங்கப்படும் இந்தத் திட்டம், விதைகள், உரங்கள், பூச்சிக்கொல்லிகள் மற்றும் உபகரணங்கள் வாங்குதல் உள்ளிட்ட பல்வேறு விவசாயத் தேவைகளுக்கு கடன் வழங்குகிறது.\n\n2. நிலம் வாங்கும் திட்டத்திற்கான மானியம் (SBI):\nஎஸ்பிஐயின் இந்த திட்டம் வணிக விவசாயிகளுக்கு கூடுதல் நிலம் பெற உதவும்.\n\n3. நுண்ணீர் பாசன கடன் திட்டம் (நபார்டு):\nஇந்த திட்டம் நுண்ணீர் பாசன அமைப்புகளை நிறுவுவதற்கு கடன்களை வழங்குவதன் மூலம் நீர் பாதுகாப்பை ஆதரிக்கிறது.\n\n4. பண்ணை உபகரணங்கள் கடன் திட்டம் (பல்வேறு வங்கிகள்):\nடிராக்டர்கள், அறுவடை இயந்திரங்கள் மற்றும் பிற விவசாய உபகரணங்களை வாங்குவதற்கான கடன்கள் பல்வேறு வங்கிகளில் இருந்து கிடைக்கின்றன.\n\n5. விவசாய உள்கட்டமைப்பு நிதி (AIF):\nஇந்த அரசு முன்முயற்சியானது அறுவடைக்கு பிந்தைய உள்கட்டமைப்புகளான சேமிப்பு வசதிகள் மற்றும் செயலாக்க அலகுகள் போன்றவற்றை அமைப்பதற்கான நிதியுதவியை வழங்குகிறது.\n\nதகுதி அளவுகோல்கள்: விவசாயிகள் தங்கள் வணிக விவசாய நிலை மற்றும் வணிகத் திட்டங்களை நிரூபிக்கும் ஆவணங்களை வழங்க வேண்டும்.',
    options: [],
  },
  'தோட்ட விவசாயம்': {
    response:
      'தோட்ட விவசாயத்திற்கு குறிப்பிட்ட கடன் திட்டங்கள் உள்ளன. அவை:\n\n1. தேயிலை மேம்பாட்டு கடன் திட்டம்:\nஇந்த திட்டம் தேயிலை தோட்ட நடவடிக்கைகளான புத்துயிர், விரிவாக்கம் மற்றும் உள்கட்டமைப்பு மேம்பாடு போன்றவற்றுக்கு நிதி உதவி வழங்குகிறது.\n\n2. காபி தோட்ட மேம்பாட்டுத் திட்டம்:\nதேயிலை திட்டத்தைப் போலவே, இது காபி தோட்ட மேம்பாடு மற்றும் நவீனமயமாக்கலை ஆதரிக்கிறது.\n\n3. ரப்பர் தோட்ட மேம்பாட்டுத் திட்டம்:\nஇந்தத் திட்டம் ரப்பர் தோட்டங்களை நிறுவுவதற்கும் பராமரிப்பதற்கும் நிதி உதவி வழங்குகிறது.\n\n4. தோட்டப் பயிர்களுக்கான வட்டி மானியத் திட்டம்:\nஇந்தத் திட்டம் தோட்ட விவசாயிகள் பெறும் கடனுக்கான மானிய வட்டி விகிதங்களை வழங்குகிறது.\n\nதகுதி அளவுகோல்: விவசாயிகள் குறிப்பிட்ட தோட்டப் பயிர்கள் மற்றும் முன்மொழியப்பட்ட நடவடிக்கைகள் தொடர்பான ஆவணங்களை வழங்க வேண்டும்.',
    options: [],
  },
  'தோட்டக்கலை': {     
    response:
      'பல்வேறு அரசின் திட்டங்கள் தோட்டக்கலைக்கு நிதி உதவி அளிக்கின்றன. அவை:\n\n1. தோட்டக்கலையின் ஒருங்கிணைந்த வளர்ச்சிக்கான பணி (MIDH):\nஇந்தத் திட்டம் நாற்றங்கால்களை நிறுவுதல், பாதுகாக்கப்பட்ட சாகுபடி அலகுகள் மற்றும் தோட்டக்கலைப் பயிர்களுக்கான சந்தைப்படுத்தல் உள்கட்டமைப்பு ஆகியவற்றிற்கு நிதி உதவி வழங்குகிறது.\n\n2. தேசிய தோட்டக்கலை மிஷன் (NHM):\nஇந்தத் திட்டமானது தோட்டக்கலை விளைபொருட்களுக்கு உற்பத்தி அலகுகள், செயலாக்க வசதிகள் மற்றும் சந்தைப்படுத்தல் சேனல்களை அமைப்பதற்கான நிதி உதவியை வழங்குகிறது.\n\n3. பாதுகாக்கப்பட்ட பயிர்ச்செய்கைக்கான நுண்ணீர் பாசனத்திற்கான மானியம்:\nஇந்தத் திட்டமானது பசுமை இல்லங்கள் மற்றும் தோட்டக்கலையில் பயன்படுத்தப்படும் நிழல் வலைகளில் நுண்ணீர் பாசன அமைப்புகளை நிறுவுவதற்கு மானியங்களை வழங்குகிறது.\n\n4. கடன் இணைக்கப்பட்ட தோட்டக்கலை தொகுப்பு:\nஇந்த நபார்டு திட்டம் தோட்டக்கலை உற்பத்தி மற்றும் சந்தைப்படுத்தல் நடவடிக்கைகளுக்கு கூட்டுறவு வங்கிகளுக்கு மறுநிதியளிப்பு வழங்குகிறது.\n\nதகுதி: விவசாயிகள் தோட்டக்கலை பயிர்கள் மற்றும் முன்மொழியப்பட்ட நடவடிக்கைகள் தொடர்பான ஆவணங்களை வழங்க வேண்டும்.',
    options: [],
  },
  'கால்நடை வளர்ப்பு': {
    response:
      'கால்நடை வளர்ப்புக்கு பல்வேறு கடன் திட்டங்கள் உள்ளன. அவை:\n\n1. கால்நடை வளர்ப்பு கடன் திட்டம் (பல்வேறு வங்கிகள்):\nSBI மற்றும் பாங்க் ஆஃப் பரோடா போன்ற வங்கிகள் பால் அல்லது கோழி வளர்ப்பு போன்ற கால்நடை வணிகங்களைத் தொடங்க அல்லது விரிவாக்க கடன்களை வழங்குகின்றன.\n\n2. பால் தொழில் முனைவோர் மேம்பாட்டுத் திட்டம்:\nஇந்தத் திட்டம் தனிநபர்கள் அல்லது குழுக்களுக்கு பால் உற்பத்தி அலகுகளை அமைக்க நிதி உதவி வழங்குகிறது.\n\n3. தீன் தயாள் அந்த்யோதயா யோஜனா - தேசிய கால்நடை மிஷன் (DAY-NLM):\nஇந்தத் திட்டம் கால்நடை வளர்ப்பு, கால்நடைத் தீவன உற்பத்தி மற்றும் கால்நடை பராமரிப்பு போன்ற பல்வேறு கால்நடை மேம்பாட்டு நடவடிக்கைகளை ஆதரிக்கிறது.\n\n4. செம்மறியாடு உள்கட்டமைப்பு மற்றும் மேம்பாட்டிற்கான திட்டம்:\nஇந்த திட்டம் செம்மறி வளர்ப்பு பண்ணைகளை நிறுவுவதற்கும் உள்கட்டமைப்பு மேம்பாட்டிற்கும் நிதி உதவி வழங்குகிறது.\n\n5. ஒருங்கிணைக்கப்பட்ட பன்றி வளர்ப்புத் திட்டம்:\nஇந்தத் திட்டம் பன்றி வளர்ப்பு வளர்ச்சியை ஊக்குவிக்கிறது.',
    options: [],
  },
};

export default dataset;
