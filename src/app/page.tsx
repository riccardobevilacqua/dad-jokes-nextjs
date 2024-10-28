import styles from './page.module.css'

// Function to fetch a random dad joke from the API
async function getDadJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      // Request JSON format instead of HTML
      'Accept': 'application/json',
      // Identify our app to the API provider
      'User-Agent': 'https://github.com/riccardobevilacqua/dad-jokes-nextjs'
    }
  });
  
  const data = await response.json();
  return data.joke;
}

// Main page component - marked as async to allow for data fetching
export default async function Home() {
  // Fetch a joke when the page loads
  const joke = await getDadJoke();
  
  return (
    // Main container with centered layout
    <main className={styles.main}>
      {/* Container for the joke with styling */}
      <div className={styles.jokeContainer}>
        {joke}
      </div>
    </main>
  );
} 