# Dog Daycare Finder 🐕

A web application to find dog daycare centers in the UK with distance-based filtering. Enter any UK postcode to find the nearest dog daycare facilities with accurate distance calculations.

## Features

- 🗺️ **Distance-based search**: Find dog daycares within a specified radius of any UK postcode
- 📍 **Comprehensive coverage**: Database of 600+ dog daycare centers primarily in Greater London and surrounding areas
- 📏 **Accurate distance calculation**: Uses Haversine formula for precise distance measurements
- 🎯 **Smart filtering**: Shows nearby options or closest available with appropriate warnings
- 📱 **Responsive design**: Works on desktop, tablet, and mobile devices

## Live Demo

Visit: [Your Vercel URL will be here after deployment]

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/mitchell1972/dogdaycare.git
cd dogdaycare
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Deployment Setup

### Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. A GitHub account with this repository

### Setting up Vercel Deployment

1. **Connect to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository `mitchell1972/dogdaycare`
   - Click "Deploy"

2. **Get Vercel Tokens:**
   - Go to [Vercel Account Settings](https://vercel.com/account/tokens)
   - Create a new token and save it

3. **Get Project and Org IDs:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Link your project
   vercel link
   
   # Get the IDs from .vercel/project.json
   cat .vercel/project.json
   ```

4. **Configure GitHub Secrets:**
   
   Go to your GitHub repository → Settings → Secrets and variables → Actions
   
   Add the following secrets:
   - `VERCEL_TOKEN`: Your Vercel token from step 2
   - `VERCEL_ORG_ID`: Your org ID from step 3
   - `VERCEL_PROJECT_ID`: Your project ID from step 3

### CI/CD Pipeline

The GitHub Actions workflow automatically:
- Deploys preview builds for pull requests
- Deploys to production when pushing to `main` branch

## Project Structure

```
dogdaycare/
├── index.html          # Main HTML file
├── script.js           # JavaScript logic for search and filtering
├── styles.css          # Styling
├── data.js            # Database of dog daycare centers
├── vercel.json        # Vercel configuration
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Actions CI/CD workflow
└── README.md          # This file
```

## How It Works

1. **Postcode Input**: Users enter a UK postcode
2. **Coordinate Lookup**: The app maps the postcode to latitude/longitude coordinates
3. **Distance Calculation**: Calculates distance to all daycare centers using Haversine formula
4. **Smart Display**: Shows results sorted by distance with visual indicators:
   - Blue highlight: Within 50km
   - Yellow highlight: Over 50km
   - Warning icon: Over 100km

## Supported Postcodes

The application includes coordinate mappings for:
- All London postcodes (SW, SE, N, E, W, NW, EC, WC)
- Greater London areas (BR, CR, DA, EN, HA, IG, KT, RM, TW, UB)
- Surrounding regions (AL, CB, CM, CO, HP, IP, NR, OX, RG, SL, SS, WD)

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Vercel for hosting
- GitHub Actions for CI/CD

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

Mitchell Agoma - [@mitchell1972](https://github.com/mitchell1972)

Project Link: [https://github.com/mitchell1972/dogdaycare](https://github.com/mitchell1972/dogdaycare)
