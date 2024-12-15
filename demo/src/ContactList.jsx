export default function ContactList({ selectedContact, 
    contacts, 
    onSelect }) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => {
          <li key={contact.email}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
              name
            </button>
          </li>;
        })}
      </ul>
    </section>
  );
}
