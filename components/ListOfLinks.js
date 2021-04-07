
const ListOfLinks = array => (
  <ul>
    {array.map(([text, href], index) => (
      <li key={index}><a href={href} target="_blank" key={index}><p>{text}</p></a></li>
    ))}
  </ul>
)

export default ListOfLinks
