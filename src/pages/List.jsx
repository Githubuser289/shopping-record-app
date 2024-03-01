import { useEffect, useState } from 'react';
import dataService from '../service/dataService';

export const List = () => {
  const [alldata, setAlldata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAllData() {
      const response = await dataService.getData();
      setAlldata(response);
      console.log(response);

      // const response = await dataService.updateData(alldata)
      return response;
    }

    setIsLoading(true);
    getAllData()
      .catch(error => {
        console.error(error);
      })
      .finally(setIsLoading(false));
  }, []);

  console.log(alldata);
  return (
    <main>
      <p></p>
      <h1>Introducere lista</h1>
      <p>la stilizare sa folosesc culorile pregatite</p>
      <p>*****</p>
      <p>
        AR TREBUI SA LUCREZ CU DATELE DINTR-UN FISIER LOCAL ---VEZI CODUL SCRIS
        DE SERGIU sau INET-ul
      </p>
      {isLoading && <p>data processing...</p>}
    </main>
  );
};
