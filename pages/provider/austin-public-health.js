

import GridPage from '../../components/GridPage'

const content = {
  title: 'Austin Public Health',
  description: '',
  items: [
    {
      title: 'Is there a Find Me A Vaccine Slack channel for Austin Public Health (APH)?',
      copy: 'Yes! Check out #updates-aph'
    },
    {
      title: 'What times do appointments become available for Austin Public Health (APH)?',
      copy: 'We have observed that appointments are generally released on Monday at 5:00pm according to the twitter feed. More recently we have seen appointments also on Thursday but that may not be consistent. We suggest getting ready for the online queue around 5:00PM to be ready when the queue opens.'
    },
    {
      title: 'Where can I get more information about Austin Public Health (APH) appointments?',
      copy: <p>Checking out their Twitter, website, and as always the{' '}<a target="_blank" href="https://find-me-a-vax.slack.com/archives/C01T7T34N02">Texas Vaccine Updates Slack channel</a></p>
    },
    {
      title: 'What info do I need to book my appointment with Austin Public Health (APH)?',
      copy: <ul>
        <li>Full Name</li>
        <li>Age</li>
        <li>Eligibility details</li>
        <li>Contact info (email, phone)</li>
        <li>Address</li>
        <li>Insurance or prescription insurance information (may be requested but not required if not insured)</li>
        <li>Social Security Number (may be requested but not required not required as citizenship is not required)</li>
      </ul>
    },
    {
      title: 'When is my 2nd shot scheduled with Austin Public Health (APH)?',
      copy: 'For Moderna and Pfizer, 1st & 2nd scheduled at different times. Your 2nd shot will be auto scheduled.'
    },
    {
      title: 'What  do I need to bring to my appointment with Austin Public Health (APH)?',
      copy: <ul>
        <li>ID</li>
        <li>Insurance or pharmacy card, voucher or other coverage (not required)</li>
        <li>Appointment QR code email</li>
        <li>1st vaccine card if getting 2nd dose.</li>
        <li>TIP: APH suggests bringing water, a chair, and weather appropriate clothes for lines.</li>
        <li>TIP:  Wearing short sleeves makes getting a shot easier and faster.</li>
        <li>TIP: Separate ADA line available.</li>
      </ul>
    },
    {
      title: 'How early can I arrive to my Austin Public Health (APH) appointment?',
      copy: 'Do not arrive earlier than 1 hour before your appointment.'
    },
    {
      title: 'Are facemasks still required when I get vaccinated?',
      copy: 'Face masks are required.'
    },
    {
      title: 'Any other tips for Austin Public Health (APH) appointments?',
      copy: 'Look for line & COVID signs.'
    },
    {
      title: 'How do I edit my Austin Public Health (SPH) appointment?',
      copy: 'At this time, due to scarcity of available appointments, the APH pre-registration system cannot support changing your appointment time.'
    },
    {
      title: 'How do I cancel my Austin Public Health (APH) appointment?',
      copy: 'To cancel, log into your account.'
    }
  ]
}


const AustinPublicHealth = () => GridPage(content)

export default AustinPublicHealth
