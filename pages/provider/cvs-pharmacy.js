
import GridPage from '../../components/GridPage'

const content = {
  title: 'CVS Pharmacy',
  description: '',
  items: [
    {
      title: 'Is there a Find Me a Vaccine Slack channel for CVS?',
      copy: <p>Yes! Check out <a target="_blank" href="https://find-me-a-vax.slack.com/archives/C01T8J5F093">#updates-cvs</a></p>
    },
    {
      title: 'What times do appointments become available for CVS?',
      copy: 'Though this is not verified by the providers, we have observed that CVS appointments are generally released daily between 12:00am - 3:00am CDT.'
    },
    {
      title: 'What do I need to book my appointment with CVS?',
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
      title: 'What do I need to bring to my appointment at CVS?',
      copy: <ul>
        <li>Appointment information (email, QR code if applicable, text information, etc)</li>
        <li>ID</li>
        <li>Be prepared to potentially show proof of eligibility as each provider has different requirements</li>
        <li>If your appointment is for your second dose, bring your proof of vaccination card</li>
        <li>TIP:  Wearing short sleeves makes getting a shot easier and faster.</li>
      </ul>
    },
    {
      title: 'When is my second shot scheduled with CVS?',
      copy: 'For Moderna and Pfizer, the CVS booking tool will have you book both your first dose and second dose at the same time.'
    },
    {
      title: 'How early can I arrive at CVS for my appointment?',
      copy: 'Please arrive only 5-10 minutes before your scheduled appointment time.'
    },
    {
      title: 'Are face masks still required when I get vaccinated at CVS?',
      copy: 'Face masks are required for your vaccination appointment at any provider.'
    },
    {
      title: 'Any other tips for CVS appointments?',
      copy: 'Wearing short sleeves makes getting a shot easier and faster. When you enter the CVS location, head to the pharmacy and follow the signs for the COVID-19 vaccine.'
    },
    {
      title: 'There are a lot of screens to fill out for CVS and I keep missing the appointments.',
      copy: 'If you are part of Find Me A Vaccine Slack, the community has had this same issue. Solution? Fill out all of the eligibility information up to the city/zip search tool ahead of time while waiting for an appointment to open. Leave this tab open in your browser. When your city (or nearby) pops up into the channel, type that city into the CVS page and start the booking process.'
    },
    {
      title: 'How do I cancel my CVS appointment?',
      copy: 'You can cancel your appointment with the cancellation link provided in your confirmation email.'
    },
    {
      title: 'What are the detailed steps to book at CVS?',
      copy: <>
        <h1>Detailed Steps For Booking With CVS</h1>
        <h3>Be Prepared</h3>
        <p>Set up a Vaxxie search or follow the <a target="_blank" href="https://find-me-a-vax.slack.com/archives/C01T8J5F093">#updates-cvs channel</a> to see when appointments drop.</p>
        <h3>Get Ready</h3>
        <p>When you get an alert for appointments in your area, click the direct link or head to <a target="_blank" href="https://www.cvs.com/immunizations/covid-19-vaccine">the CVS appointment search page</a>, select “Texas”, and click the “Schedule an appointment” link.</p>
        <h3>Eligible Vaxxers</h3>
        <p>Confirm your eligibility criteria for your vaccine and answer the qualifying questions.</p>
        <h3>Search Fast</h3>
        <p>Search for your city or zip code. When locations show up, click on the “see available times” link. Select a time quickly.</p>
        <h3>Second Dose</h3>
        <p>If your vaccine has a second dose, select the second dose date, location and time as well.</p>
        <h3>The Finish Line</h3>
        <p>You made it! Enter your patient info and book your appointment.</p>
        <h3>Congrats! You got your vaccine appointment!</h3>
        <h3>Don’t Give Up</h3>
        <p>No results or no times left? Don’t worry, there will be more chances. Try searching for other nearby locations too, you’ll often find other options!</p>
        <h3>Additional Tips</h3>
          <ul>
            <li>Stuck in the waiting room? Avoid this by loading up the search screen and leaving that tab open to return to later.</li>
            <li>Most CVS appointments drop early in the morning between 12am and 4am. Wake up early for the most selection. </li>
            <li>If it’s a two-dose vaccine, CVS will have you book both the first and second doses.</li>
            <li>CVS will schedule standalone second doses; just select the “I need a second dose only” option. </li>
            <li>You can cancel a CVS appointment through the link in your confirmation email.</li>
          </ul>
      </>
    }
  ]
}


const CvsPharmacy = () => GridPage(content)

export default CvsPharmacy
