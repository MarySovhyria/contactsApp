import { selectError, selectIsLoading, selectFilteredContacts } from '../redux/selectors'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';


const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts)
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  
  return (
    <ul>
      {isLoading && !error ? (
        <p>Loading ...</p>
      ) : filteredContacts.length === 0 && !error ? (
        <p>Your phonebook is empty</p>
        ) : (
            filteredContacts.map(({ name, phone, id }) => (
          <li key={id}>
          <span>{name}:</span>
          <span>{phone}</span>
                
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      )))
          
      }
      
    </ul>
  );
};
export default ContactList;