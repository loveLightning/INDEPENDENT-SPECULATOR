import { ContactForm } from '../components/pages/contact/form/Form';
import { ContactWrapper } from '../components/pages/contact/wrapper/ContactWrapper';
import { withHeaderOnlyLayout } from '../layouts/GuestLayout';

function Contact(): JSX.Element {
  return (
    <div className="page-ligh-gray wrapper-grid">
      <ContactWrapper>
        <ContactForm />
      </ContactWrapper>
    </div>
  );
}

export default withHeaderOnlyLayout(Contact);
