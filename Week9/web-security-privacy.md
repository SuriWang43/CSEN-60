# Web Security and Privacy

## Potential Security Oversights

- no user authetication
- allowing weak authetication
- not sanitizing form entries & requests
- not encrypting sensitive communications
- sessions that don't time out
- out-of-date (un-patched) software
    - new vulnerabilities discovered all the time
- bugs that expose user data

## Cross Site Scripting

- the attacker inserts arbitrary HTML on your webpage
- what if the HTML includes <script> tags?
    - replace the page with a new one
        - fake instance of a page to get password, accounts, etc.
    - pass information from the page to foreign page
        - cookies, passwords, credit card numbers, session ids
    - download user's cookies (passwords) for other sites

## Cross Site Scripting: Mitigation

- Don't allow any HTML to be inserted
    - backend libraries to strip out HTML tags
- Don't allow malicious HTML to be inserted
    - Backend libraries to sanitize HTML
        - Limited set of allowed tags for formatting
- Similar techniques may be used to protect
against SQL injection


## Distributed Denail of Service

- DDos
- Overwhelm a server with malicious requests to block regular users

## Distributed Denial of Service

- Requests don’t come from one machine
    - These are easily blocked
- Attacker uses a number of controlled machines, often compromised
    - Hard to spot

## DDoS Mitigtion

- Rate limiting
    - limit volume of requests from a user
- Throw out excess traffic at random
    - Some will be malicious, some will be legitimate
- distribute traffic accross network
    - by distributing load, can accommodate huge volume

## Network Security

- Need to spend requests: GET/POST
- Need to send responses: HTML documents
- Network channels aren't neccessarily secure
- Confidentially: What if someone intercepts and reads this message?
- Integrity: What if someone intercepts and alters this message?

## Secure Communication
- For anyone other than the intended recipient, we want our message to be
    - Unreadable
    - Impossible to change without detection
- Encryption function
    - F(X) = Y easy to compute
    - F-1(Y) = X difficult to compute (without additional
knowledge)


## Encryption and Decryption

- Encryption
    - Ensures privacy within an organization and on the Internet
    - The conversion of data into an unreadable form, called ciphertext
- Decryption
    - The process of converting the ciphertext back into its original form, called plaintext or cleartext, so it can be understood.
- The encryption/decryption process requires an
algorithm and a key.

## Encryption Types

- 2 encryption types:
    - Symmetric-key Encryption
    - Asymmetric-key Encryption

- SSL (Secure Sockets Layer)
    - Uses both encryption types
    - Provides for secure transmission of data on the Internet

## Symmetric-Key

- Also called single-key encryption
- Both encryption and decryption use the same key
- Both the sender and receiver must know the key before communicating using encryption.
- Advantage: speed

## Data Collection: Cookies
- Why would a user want cookies?
    - User authentication (remember me)
    - Site preferences
    - Contents of shopping carts
- Why would a developer use cookies?
    - Better user experience
    - Ad tracking
    - Site metrics

## Privacy Policy 
- Statement saying what the website does with any information it collects
    - or otherwise obtains from the user
    - and why the website needs this information
- generally considered legally binding
    - must obey the laws of the land
    - different lands have different laws
- written in dense legal language
- userd may or may not pay attention