import React, { useContext } from 'react';
import CustomSelect from '../../components/mySelect/Select';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import CustomInput from '../../components/myInput/Input';
import { CustomContext } from '../../components/Context/Context';
import {
  engines,
  carYears,
  driveUnit,
  transmission,
  cities,
  brands,
  type,
  doors,
  places,
} from '../../components/Constants';

const Sell = () => {
  const { handleSubmit, register, reset, control, setValue } = useForm();

  const { user } = useContext(CustomContext);

  const addCarHandler = (data) => {
    axios
      .post('http://localhost:8080/items', {
        ...data,
        creator: user,
        comment: [],
      })
      .then((res) => {
        alert('Авто добавлено');
        reset();
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="background">
      <div className="sell">
        <div className="sell__container">
          <h1>Добавить объявление</h1>
          <form onSubmit={handleSubmit(addCarHandler)} className="sell__content">
            <div className="sell__column">
              <CustomInput
                title={'Загрузить фото'}
                formKey={'imageUrl'}
                placeholder="Введите ссылку"
                register={register}
              />
              <CustomInput
                title={'Название'}
                formKey={'title'}
                placeholder="Введите заголовок"
                register={register}
              />
              <CustomSelect
                setValue={setValue}
                register={register}
                control={control}
                formKey={'brand'}
                title="Марка"
                options={brands}
              />
              <CustomSelect
                setValue={setValue}
                register={register}
                control={control}
                formKey={'city'}
                title="Город"
                options={cities}
              />
              <CustomSelect
                setValue={setValue}
                register={register}
                control={control}
                formKey={'year'}
                title="Год выпуска"
                options={carYears}
              />
              <CustomSelect
                setValue={setValue}
                register={register}
                control={control}
                formKey={'type'}
                title="Тип"
                options={type}
              />
              <CustomSelect
                setValue={setValue}
                register={register}
                control={control}
                formKey={'engine'}
                title="Двигатель"
                options={engines}
              />
            </div>
            <div className="sell__column">
              <CustomSelect
                setValue={setValue}
                register={register}
                control={control}
                formKey={'driveUnit'}
                title="Привод"
                options={driveUnit}
              />
              <CustomInput
                title={'Цвет'}
                formKey={'color'}
                placeholder="Введите цвет"
                register={register}
              />
              <CustomSelect
                setValue={setValue}
                register={register}
                control={control}
                formKey={'doors'}
                title="Кол-во дверей"
                options={doors}
              />
              <CustomSelect
                setValue={setValue}
                register={register}
                control={control}
                formKey={'places'}
                title="Кол-во мест"
                options={places}
              />
              <CustomSelect
                setValue={setValue}
                register={register}
                control={control}
                formKey={'transmission'}
                title="Коробка передач"
                options={transmission}
              />
              <CustomInput
                title={'Пробег'}
                formKey={'mileage'}
                placeholder="Введите пробег"
                register={register}
              />
              <CustomInput
                title={'Цена'}
                formKey={'price'}
                placeholder="Введите цену"
                register={register}
              />
            </div>
            <div className="sell__item">
              <h3>Описание</h3>
              <div className="sell__inp-content">
                <textarea
                  {...register('description')}
                  placeholder="Введите описание..."
                  className="sell__txt-item"
                />
              </div>
              <button type="submit" className="sell__btn">
                Добавить авто
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sell;
