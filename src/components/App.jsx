import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
}

