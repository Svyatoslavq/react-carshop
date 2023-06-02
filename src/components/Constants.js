export const engines = [
    { value: '2', label: '2' },
    { value: '2.2', label: '2.2' },
    { value: '2.8', label: '2.8' },
    { value: '3', label: '3' },
    { value: '3.2', label: '3.2' },
    { value: '3.4', label: '3.4' },
    { value: '3.6', label: '3.6' },
    { value: '3.8', label: '3.8' },
    { value: '4', label: '4' },
    { value: '4.2', label: '4.2' },
    { value: '4.4', label: '4.4' },
    { value: '4.6', label: '4.6' },
    { value: '4.8', label: '4.8' },
    { value: '5', label: '5' },
    { value: '5.2', label: '5.2' },
    { value: '5.4', label: '5.4' },
    { value: '5.6', label: '5.6' },
    { value: '5.8', label: '5.8' },
    { value: '6', label: '6' },
  ];
  export const carYears = [
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
    { value: '2016', label: '2016' },
    { value: '2015', label: '2015' },
    { value: '2014', label: '2014' },
    { value: '2013', label: '2013' },
    { value: '2012', label: '2012' },
    { value: '2011', label: '2011' },
    { value: '2010', label: '2010' },
    { value: '2009', label: '2009' },
    { value: '2008', label: '2008' },
    { value: '2007', label: '2007' },
    { value: '2006', label: '2006' },
    { value: '2005', label: '2005' },
    { value: '2004', label: '2004' },
    { value: '2003', label: '2003' },
    { value: '2002', label: '2002' },
    { value: '2001', label: '2001' },
    { value: '2000', label: '2000' },
  ];
  export const driveUnit = [
    { value: 'Передний', label: 'Передний' },
    { value: 'Задний', label: 'Задний' },
    { value: 'Полный', label: 'Полный' },
  ];
  export const transmission = [
    { value: 'Типтроник', label: 'Типтроник' },
    { value: 'Автомат', label: 'Автомат' },
  ];
  export const cities = [
    { value: 'Киев', label: 'Киев' },
    { value: 'Харьков', label: 'Харьков' },
    { value: 'Одесса', label: 'Одесса' },
    { value: 'Днепр', label: 'Днепр' },
    { value: 'Донецк', label: 'Донецк' },
    { value: 'Запорожье', label: 'Запорожье' },
    { value: 'Львов', label: 'Львов' },
    { value: 'Николаев', label: 'Николаев' },
    { value: 'Херсон', label: 'Херсон' },
  ];
  export const brands = [
    { value: 'Audi', label: 'Audi' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Mercedes', label: 'Mercedes' },
    { value: 'Kia', label: 'Kia' },
    { value: 'Ford', label: 'Ford' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'Nissan', label: 'Nissan ' },
    { value: 'Renault', label: 'Renault' },
    { value: 'Skoda', label: 'Skoda' },
    { value: 'Toyota', label: 'Toyota' },
    { value: 'Volkswagen', label: 'Volkswagen' },
  ];
  export const type = [
    { value: 'Седан', label: 'Седан' },
    { value: 'Кроссовер', label: 'Кроссовер' },
    { value: 'Лифтбек', label: 'Лифтбек' },
    { value: 'Хэтчбек', label: 'Хэтчбек' },
    { value: 'Универсал', label: 'Универсал' },
    { value: 'Внедорожник', label: 'Внедорожник' }, 
  ];
  export const doors = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }
  ];
  export const places = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' }
  ];

  export let date = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
  }).format(Date.now());