
import GridPage from '../../components/GridPage'

const content = {
  title: 'Walmart Pharmacy',
  description: '',
  items: [
    {
      title: 'Is there a Find Me A Vaccine Slack channel for Walmart?',
      copy: <p>Yes! Check out <a target="_blank" href="https://find-me-a-vax.slack.com/archives/C01T17D2F5L">the slack channel, #updates-walmart</a></p>
    },
    {
      title: 'What times do appointments become available for Walmart?',
      copy: 'Though this is not verified by the provider, we have observed that appointments are generally released at 12:00am CDT. Tip: Walmart appointments can be visible an hour earlier by setting your clock ahead to Eastern time.'
    },
    {
      title: 'What do I need to book my appointment with Walmart?',
      copy: <ul>
        <li>Full Name</li>
        <li>Age</li>
        <li>Eligibility details</li>
        <li>Contact info (email, phone)</li>
        <li>Address</li>
        <li>Insurance or prescription insurance information (may be requested but not required if not insured) </li>
        <li>Social Security Number (may be requested but not required not required as citizenship is not required)</li>
      </ul>
    },
    {
      title: 'What do I need to bring to my appointment at Walmart?',
      copy: <ul>
        <li>Appointment information (email, QR code if applicable, text information, etc)</li>
        <li>ID</li>
        <li>Be prepared to potentially show proof of eligibility as each provider has different requirements</li>
        <li>If your appointment is for your second dose, bring your proof of vaccination card</li>
        <li>TIP: Wearing short sleeves makes getting a shot easier and faster. </li>
      </ul>
    },
    {
      title: 'When is my second shot scheduled with Walmart?',
      copy: 'For Moderna and Pfizer, Walmart will schedule your second dose when you come in for your first dose appointment.'
    },
    {
      title: 'How early can I arrive at Walmart for my appointment?',
      copy: 'Please arrive only 5-10 minutes before your scheduled appointment time.'
    },
    {
      title: 'Are face masks still required when I get vaccinated at Walmart?',
      copy: 'Face masks are required for your vaccination appointment at any provider.'
    },
    {
      title: 'Any other tips for Walmart appointments?',
      copy: 'Wearing short sleeves makes getting a shot easier and faster. When you enter the Walmart location, follow the signs for the COVID-19 vaccine.'
    },
    {
      title: 'How do I cancel my Walmart appointment?',
      copy: 'To cancel a Walmart appointment, please call the store directly. The phone number is on your email confirmation.'
    },
    {
      title: 'What are the detailed instructions to book?',
      copy: <>
        <h1>How to schedule a vaccine at Walmart</h1>
        <h3>Be Prepared</h3>
        <p>Set up a Vaxxie search or follow the #updates-walmart channel to see when appointments drop.</p>
        <h3>Get Ready</h3>
        <p>When you get an alert for appointments in your area, click the direct link or head to <a href="https://www.walmart.com/pharmacy/clinical-services/immunization/scheduled?imzType=covid">the Walmart Pharmacy booking page</a>.</p>
        <h3>Sign In</h3>
        <p>Walmart makes you sign in to book, so make sure you have an account and are signed in!</p>
        <h3>Search the Map</h3>
        <p>Search for the location that you saw in your alert. Select it and click continue.</p>
        <h3>Eligible Vaxxers</h3>
        <p>Confirm your eligibility criteria for your vaccine and click confirm and then schedule on the next screen.</p>
        <h3>The Finish Line</h3>
        <p>You made it! Select your time quickly and then click continue to enter your patient info and book your appointment.</p>

        <h3>Congrats! You got your vaccine appointment!</h3>

        <h1>Don’t Give Up</h1>
        <p>No vaccine available? No times left? Don’t worry, there will be more chances. Try changing stores and keep watching alerts so you can grab the next one!</p>

        <ul>
          <li>New Walmart appointments are available at midnight each night; to access them earlier, set your computer or phone’s time to AST (San Juan, Puerto Rico time) at 10pm.</li>
          <li>The pharmacy will schedule your second dose, if needed, after your first appointment.</li>
          <li>Walmart appointments can only be cancelled by calling the pharmacy directly.</li>
          <li>Walmart doesn’t provide standalone second doses.</li>
        </ul>
      </>
    }
  ]
}


const WalmartPharmacy = () => GridPage(content)

export default WalmartPharmacy
