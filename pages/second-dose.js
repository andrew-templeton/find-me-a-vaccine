
import GridPage from '../components/GridPage'

const content = {
  title: 'Second Dose FAQs',
  description: '',
  items: [
    {
      title: 'Is there a Find Me A Vaccine Slack channel for second dose information?',
      copy: 'Yes, check out #2nd-dose. Please note: If at all possible, you should return to the provider where you got your first dose for your second dose.'
    },
    {
      title: 'I need my second dose in a new city / I wasn’t guaranteed my second dose. What are my options?',
      copy: 'CVS and Walgreens are your best bet. Very few providers offer standalone second doses if they\'re not the ones who gave you the first dose.'
    },
    {
      title: 'CVS and Walgreens don’t show any availability. What now?',
      copy: 'Try again. Message @Vaxxie to set up an alert for new appointments near you. Right when you get notified, check to see if the new appointments available include appointments for only second doses. CVS and Walgreens automatically show you appointments for 21 days (Pfizer) or 28 days (Moderna) after your first dose, but the CDC says it’s okay for your second dose to be even 42 days after the first. When you’re searching, adjust the date of your first dose date slightly (plus or minus a few days) to show more availability.'
    },
    {
      title: 'I’ve tried all of the above, and I’m REALLY close to the 42-day mark.',
      copy: 'Call every vaccination site in your area and explain the situation. You might find one who will understand and move things around for you. '
    },
    {
      title: 'I got my first dose at a pharmacy chain like Walmart, CVS, or Walgreens, but it was a far drive and I want something closer.',
      copy: 'You’ll have to call the pharmacy to see if they can reschedule your appointment or transfer you to a different pharmacy location.. However, most of the pharmacies will not do this, and will tell you to cancel your second dose and reschedule with another provider. If they can’t reschedule the second dose for you, you’ll have to go through the steps above. '
    },
    {
      title: 'Use same provider',
      copy: 'If at all possible, you should return to the provider where you got your first dose for your second dose. CDC and DSHS guidelines encourage all second doses to be given by the original provider. However, some providers have not been diligent enough to schedule second doses for all users. This can lead to some confusion, but everyone is still encouraged to return to the original provider for a booster shot. Also, under no circumstances should the first and second shot be of different varieties. You can’t mix and match manufacturers!'
    }
  ]
}


const SecondDose = () => GridPage(content)

export default SecondDose
