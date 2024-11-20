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

## Encryption Types
- 2 encryption types:
- asymmetric-key encryption

## Browser-Server Comunication
- can use encrypted communication in a web app
    = https

## Secure Socket Layer (SSL)
- a protocol that allows data to be privately exchanged over public networks
- developed by Netscape
- Encrypts data sent between a client (usually a Web browser) and a Web server.
- Utilizes both symmetric and asymmetric keys.

## Difgital Certificate
- a form of an asymmetric key
- also contains information about the certificate, the holder of the certificate, and the issuer of the certificate
- used by ssl to authenticate
- the contents of a server's digital certificate include:
    - the public key
    - effective data of the certificate
    - expiration date of the certificate
    - details about the certificate authority

## Data Collection: Form/User Entru
- Social networks
    - share information with others
    - connect with friends
    - attract potential employers
- Online shopping
    - credit card for payment
    - home address for shipping
- online finances
    - banking
    - investments
    - tax

## Mobile OS-provided
- Contacts
    - "find your friends on __"
    - instant, massive social graph
- Photos
    - may include metadata
- location
    - "find_near your"

## Cookies
- a cookie is a name/value pair created by a website to store information on your computer

## Data Collection: Behavior Logging
- Any action a user takes on a webpage can be logged
- HTML event listener!
    - clicks
    - hovers
- time between actions
    - how long you spend looking at a post
    - did you skip an ad? at what point in the ad?

## Data Applications: Ad Tracking
- How are all these products free?
    - facebook / twitter / linkedin
    - google
    - youtube / soundcloud
- Goal: convert an ad seen on-screen to some action

## Data Applications: Search
- Improve resultd
    - Did the user click a link?
        - was it the top result?
    - Did the user need to write another query?
- Predictive suggesdtions

## Data Applications: Recommendation
- "Based on __ you liked"

## Data Applications: Drive a metric
- optimize a webpage's behavior for something that can be quatitatively measured
- iterative UI improvements
- Examples
    - email client: decrease time

## Lots of Sensitive Information
- personally identifiable information - PII
    - name, address, phone, email
    - demographics: age, gender, race
    - past contributions, purchases, rentals, friends...
- financial information
    - credit cards
    - bank accounts
- legally sensitive
    - heath information (HIPPA)
    - student information (FERPA)
    - Information from children (COPPA)

## Privacy Policy
- Statement saying what the web site does with any information it collects
    - or otherwise obtains from the user
    - and why the web site needs this information

## The Role of a Privacy Polucy
- delineate what types of information are collected
    - whether that information is used immediately or saved
- specify why the information is needed
    - not always alone

## Developer - Legal Responsibility
- Privacy has legal implications
    - already covered by laws in many places
    - already covered by laws in many domains
    - European law is generally much stricter than US

## GDPR
- General Data Protection Regulation
- Protects citizens of the European Union

## CCPA
- California Consumer Privacy Act
    - any service with CA users must comply
- Similar to, less strict than GDPR
    - Opt-out vs. Consent (Opt-in)
    