import MainScreen from '../../pages/main-screen/main-screen';


type AppScreenProps = {
  placeCount: number;
}

function App({placeCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen placeCount={placeCount} />
  );
}

export default App;
