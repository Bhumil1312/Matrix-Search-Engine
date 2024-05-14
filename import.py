import json
from bs4 import BeautifulSoup
import requests
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from collections import Counter
import nltk
nltk.download('stopwords')

def get_keywords_from_website(url):
    # Fetch the HTML content of the website
    response = requests.get(url)
    html_content = response.text

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Extract text from HTML
    text = soup.get_text()

    # Tokenize the text into words
    words = word_tokenize(text)

    # Filter out stopwords
    stop_words = set(stopwords.words('english'))
    filtered_words = [word.lower() for word in words if word.isalnum() and word.lower() not in stop_words]

    # Count the frequency of each word
    word_freq = Counter(filtered_words)

    # Get the most common keywords (let's say top 10)
    most_common_keywords = word_freq.most_common(10)

    # Return the keywords
    return [keyword for keyword, freq in most_common_keywords]

def main():
    nltk.download('punkt')
    nltk.download('averaged_perceptron_tagger')

    # Array of website names and URLs
    websites = [
        {"name": "CV-Library", "url": "https://www.cv-library.co.uk"},
        {"name": "Totaljobs", "url": "https://www.totaljobs.com"},
        {"name": "Reed", "url": "https://www.reed.co.uk"},
        {"name": "Jobsite", "url": "https://www.jobsite.co.uk"},
        {"name": "SEEK", "url": "https://www.seek.com.au"},
        {"name": "Hays", "url": "https://www.hays.com"},
        {"name": "Adzuna", "url": "https://www.adzuna.com"},
        {"name": "Jobrapido", "url": "https://www.jobrapido.com"},
        {"name": "StepStone", "url": "https://www.stepstone.com"},
        {"name": "Neuvoo", "url": "https://neuvoo.com"}
        # Add more websites as needed
    ]
    
    results = []

    # Load existing data if available
    try:
        with open("websites_keywords.json", "r") as json_file:
            results = json.load(json_file)
    except FileNotFoundError:
        pass

    # Assigning IDs starting from the next available number
    id_counter = len(results) + 1

    for website in websites:
        name = website["name"]
        url = website["url"]

        # Get keywords from the website
        keywords = get_keywords_from_website(url)

        # Create a JSON object for the current website
        result = {
            "id": id_counter,
            "name": name,
            "url": url,
            "keywords": keywords
        }

        # Increment ID counter
        id_counter += 1

        # Append result to results list
        results.append(result)

    # Write results to the JSON file
    with open("websites_keywords.json", "w") as json_file:
        json.dump(results, json_file, indent=4)

if __name__ == "__main__":
    main()