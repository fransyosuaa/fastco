import ItemList from './components/ItemList';
// import ContactForm from './components/widgets/ContactForm';
// import Script from 'next/script';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <ItemList input={7} />
        {/* for call ContactForm directly (not widget) */}
        {/* <ContactForm /> */}

        {/* for using widget */}
        <div className='widget-contact-form'></div>
      </div>
      {/* <Script src='/widget/index.js' /> */}
    </main>
  );
}
