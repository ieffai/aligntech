import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "./api/imagesService";
import { Header, Loader } from "./components";
import { Main } from "./pages";
import { isLoadingSelector } from "./redux/app/selectors";
import './styles/styles.scss';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const getData = async () => {
    await dispatch(getImages());
  }

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 30000);
  }, [])
  
  if (isLoading) {
    return <Loader />
  }

    return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
