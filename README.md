![Landing page](https://i.imgur.com/8LdxuK5.png)

# cardforme

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Inspiration
As a college student, I started thinking about building my credit score and getting a credit card, but websites like Credit Karma have sponsored affiliate links that make it hard to get unbiased reviews of the best credit cards.

## What it does
Introducing cardforme, a website that uses your previous bank transaction history to suggest the best credit cards for you.

My features include:
- Securely accessing your bank transactions through the Plaid API
- Top 5 credit card suggestions with the best discounts based on transaction categories and calculated with backtesting
- Data visualization for spending categories

## How I built it
![](https://i.imgur.com/Aolfqmg.jpg)  
The grind never stops >_< (waiting in the food line)

### Back End:

I handled communications with banks through the **Plaid API**. To get the authentication to work, I used Plaid's version called Link, which takes a token from the user and exchanges it with an access token to secure a connection with the bank in question.

After auth, I took the transactions data from the generated JSON in the post request and sent it to my Flask backend.

From this, I individually created functions for each credit card in my list and calculated the amount of benefits you would get. For example, if you had a credit card that gave you 3x points per purchase on hotels, the calculation for the card would be something like this. Each point and mile is treated as 0.01 cents.

```python
def hotel_card(card):
    tot = 0
    tot += (card.hotels * 3) / 100
    tot += (card.total - card.hotels) / 100
    return tot
```

![](https://i.imgur.com/cJaz7f1.jpg)

### Front End:
I did the frontend with **Next.js** and **Typescript**, creating a beautiful landing page and a main page with the suggested credit cards and data visualization.

I spent lots of time on Figma with color options, typography, and several views for the design of the website.

For my research on the cards, I gathered information from a wide range of sources to understand the various benefits they offer. I ended up examining close to **50 cards**, spanning a vast range of potential financial advantages.

After collecting the information, I realized that I needed a PNG image of each card and a link to its application. Given the number of companies I was dealing with, this was a daunting task. I wished there was an API for credit card bonuses so I didn't have to search manually! >:(

Nonetheless, this endeavor provided a valuable data layer, enhancing the functionality of my project. 😎 The benefits also resulted in a calculation for added rewards you would receive should you choose any of my cards, and in order to find the best, I calculated every card to show you the one for you!

## Challenges I ran into

The **Plaid API** was definitely one of the more time-consuming things I did during the hackathon because authentication just refused to work. I was able to get it to work eventually, and pulling the transactions thankfully didn't take as much time.

I also spent ~8 hours trying to fix an API request that just wouldn't work. Turns out it was working the entire time and my backend code was scuffed ^.^

## Accomplishments I'm proud of

Website design is popping off, definitely a different theme than I usually pivot to. I was able to get everything onto the website that I wanted, although it took much longer than I would have liked.

## What I learned

- Plaid API can go spontaneously combust! >:(((
- My first time trying backend (that was an... experience)
- Burrito bowls are amazing but do not make the stomach happy :(

## What's next for cardforme
- Moving to mobile
- Wider range of data, showing more details about spending history
- Adding more cards, hopefully I can automate that because it was some time and effort D:

## Installation

To get started with this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cardforme.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cardforme-main
   ```
3. Install dependencies for backend and frontend:
   ```bash
   # Backend
   cd packages/backend
   pip install -r requirements.txt

   # Frontend
   cd ../frontend
   yarn install
   ```
4. Set up environment variables as needed (e.g., Plaid API keys).

## Usage

- Run the backend server:
  ```bash
  cd packages/backend
  python app.py
  ```
- Run the frontend development server:
  ```bash
  cd ../frontend
  yarn dev
  ```
- Open your browser and go to `http://localhost:3000` to see the app.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
