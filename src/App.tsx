// Import the necessary styles globally
import { Title, Image } from '@telegram-apps/telegram-ui';
import '@telegram-apps/telegram-ui/dist/styles.css';
import logo from './assets/cy-logo.svg';

const titleStyle: React.CSSProperties = {
  fontFamily: 'lalezar',
  fontWeight: 400,
  padding: '10px 0'
}

const appStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '10px 0',
}

const App = () => {

  return (
    <>
      <div style={appStyle}>
        <Image
          size={96}
          src={logo}
        />
        <Title
          level="1"
          weight="1"
          style={titleStyle}
        >
          به فروشگاه سای سافت ور خوش آمدید.
        </Title>

      </div>
    </>
  )
};

export default App;