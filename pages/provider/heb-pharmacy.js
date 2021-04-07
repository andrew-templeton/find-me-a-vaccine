
import GridPage from '../../components/GridPage'

const content = {
  title: 'H-E-B Pharmacy',
  description: '',
  items: [
    {
      title: 'Is there a Find Me a Vaccine Slack channel for H-E-B?',
      copy: <p>Yes! Check out <a target="_blank" href="https://find-me-a-vax.slack.com/archives/C01T144UM54">#updates-heb</a></p>
    },
    {
      title: 'What times do appointments become available for H-E-B?',
      copy: 'Though this is not verified by the providers, we have observed that there is no specific pattern for when appointments are generally released.'
    },
    {
      title: 'What do I need to book my appointment with H-E-B?',
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
      title: 'What do I need to bring to my appointment at H-E-B?',
      copy: <ul>
        <li>Appointment information (email, QR code if applicable, text information, etc)</li>
        <li>ID</li>
        <li>Be prepared to potentially show proof of eligibility as each provider has different requirements</li>
        <li>If your appointment is for your second dose, bring your proof of vaccination card</li>
        <li>TIP:  Wearing short sleeves makes getting a shot easier and faster.</li>
      </ul>
    },
    {
      title: 'I was able to book my first appointment but they didn’t give me an option for my second dose!',
      copy: 'Your second dose appointment (for Pfizer and Moderna only) will be automatically scheduled after you receive your first dose. Be sure to provide an accurate email address and phone number. '
    },
    {
      title: 'How early can I arrive at H-E-B for my appointment?',
      copy: 'Please arrive only 5-10 minutes before your scheduled appointment time.'
    },
    {
      title: 'Are face masks still required when I get vaccinated at H-E-B?',
      copy: 'Face masks are required for your vaccination appointment at any provider.'
    },
    {
      title: 'Any other tips for H-E-B appointments?',
      copy: 'Wearing short sleeves makes getting a shot easier and faster. When you enter the H-E-B location, head to the pharmacy and follow the signs for the COVID-19 vaccine.'
    },
    {
      title: 'H-E-B appointments go too fast! I can never get one.',
      copy: 'Hang in there! Keep refreshing the page and keep watching alerts so you can grab the next one! H-E-B updates frequently and different locations update at different times. If the appointments are gone, try refreshing manually. Sometimes you’ll catch a new batch.'
    },
    {
      title: 'How do I cancel my H-E-B appointment?',
      copy: 'You can cancel your appointment with the cancellation link provided in your confirmation email.'
    },
    {
      title: 'What are the detailed steps to book at H-E-B?',
      copy: <>
        <h1>Detailed Steps For Booking With H-E-B</h1>
        <h3>Be Prepared</h3>
        <p>Set up a Vaxxie search or follow the <a target="_blank" href="https://find-me-a-vax.slack.com/archives/C01T144UM54">#updates-heb channel</a> to see when appointments drop.</p>
        <h3>Get Ready</h3>
        <p>When you get an alert for appointments in your area, click the direct link or head to <a target="_blank" href="https://vaccine.H-E-B.com/scheduler">the H-E-B appointment search page</a>, search for your location, and select a store with appointments you would be willing to go to for your appointment.</p>
        <h3>Click Fast</h3>
        <p>If you see the appointments and times available, click on the location fast!</p>
        <h3>Don't Leave Yet!</h3>
        <p>Getting the “no times are available” message on the location scheduler screen? Keep refreshing because someone might time out or drop out of the process.</p>
        <h3>Swift Selection</h3>
        <p>Bring those lightning reflexes! Select the date and time for your appointment and click next. If the red error bar appears, try a different time slot!</p>
        <h3>The Finish Line</h3>
        <p>You made it! Enter your patient info and book your appointment.</p>
        <h3>Congrats! You got your vaccine appointment!</h3>
        <h3>Don’t Give Up</h3>
        <p>Not fast enough? Don’t worry, there will be more chances. Keep refreshing the page and keep watching alerts so you can grab the next one!</p>
        <h3>Additional Tips</h3>
        <ul>
          <li>H-E-B updates frequently and different locations update at different times. Watch for patterns in your area!</li>
          <li>If the appointments are gone, try refreshing manually. Sometimes you’ll catch a new batch.</li>
          <li>The pharmacy will schedule your second dose, if needed, after your first appointment. </li>
          <li>H-E-B doesn’t provide standalone second doses. </li>
          <li>You can cancel an H-E-B appointment through the link in your confirmation email.</li>
        </ul>
      </>
    }
  ]
}


const HebPharmacy = () => GridPage(content)

export default HebPharmacy
