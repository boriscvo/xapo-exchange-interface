## Technical Improvements

So, I mentioned in the readme file that the more obvious points are focus control, especially on dialog, no tests, no security setup or i18n. So if I have to imagine how app would scale up and be used in production, I would say it would go like this:

- This operation is obviously intended for a logged in user, meaning, we need to fetch it's status, balance etc. So, tere would be a need for authentication and authorization, and this mostly depends on your backend setup. The industry standard would be a http only cookie, maybe along some short lived token. So that would require some extra work.
- From UX perspective, such environment would require more extensive inputs handling and validation. Maybe some external libraries for that.
- The confirmation dialog (or modal now) would need to be more complex and contain more information on both user's state and transaction. More communication with the backend, more extensive states handling.
- Dynamic price fetching? I know these things are usually covered in the "purchase" call, but would be nice to present it to the user in real time.
- Probably something else but that seems to be the obvious part for me now.
- I've tried to create the structure that could easily grow and I could see it scaling up gracefully. Add more pages, atomic-like components, block-like components, usage of shared components and libraries, design system consistency, UX consistency, but also modularity... I believe these are covered in the current setup well.

## Nontechnical Improvements

More data, I suppose. To follow the decision making, I'm thinking of:

- basic info section on the BTC
- historical data, trend of BTC price, with a nice chart.
- stats, things like average price, high-low, moving averages, volatility metrics, risk analysis etc.
- I know some apis give things like quantified "experts opinions" on buy/sell/hold.
- ML models for price analysis (advanced and super hard but super nice, I've actually tried this in MSc recently).
- news section.
