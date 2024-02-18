import MainScreen from '../../pages/main-screen.tsx';

type AppScreenProps = {
  placeCount: number;
}

function App({placeCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen placeCount={placeCount} />
  );
}

export default App;
