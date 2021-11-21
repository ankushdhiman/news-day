import MainTemplate from '../../templates/main';
import TextArea from '../../atoms/text-area';
import TextInput from '../../atoms/text-input';

export default function Home() {
  return (
    <MainTemplate>
      <h1 className='text-5xl font-bold text-center'>
        Welcome to Newsday.
      </h1>
      <div className='p-2'>
        <TextArea value='Text Area' placeholder='Text Area'/>
        <TextInput label='Textbox' value='Some Value'/>
      </div>
    </MainTemplate>
  );
}
