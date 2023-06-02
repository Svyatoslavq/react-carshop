import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { CustomContext } from '../../components/Context/Context';
import { v4 as uuidv4 } from 'uuid';
import { date } from '../../components/Constants';
import { useNavigate } from 'react-router-dom';
const CatalogItem = () => {
  const { user, setUser } = useContext(CustomContext);

  const params = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState('');

  const navigate = useNavigate();

  const getRequest = () => {
    setIsLoading(true);
    axios.get(`http://localhost:8080/items/${params.id}`).then(({ data }) => {
      setProduct(data);
      setIsLoading(false);
      if (JSON.parse(localStorage.getItem('user')) !== null) {
        setUser(JSON.parse(localStorage.getItem('user')));
      }
    });
  };

  useEffect(() => {
    getRequest();
  }, []);

  const addComment = () => {
    axios
      .patch(`http://localhost:8080/items/${params.id}`, {
        comment: [
          {
            id: uuidv4(),
            text: comment,
            date,
            feedback: feedback.status
              ? product.comment.find((item) => item.id === feedback.id)
              : {},
            creator: user,
          },
          ...product.comment,
        ],
      })
      .then(() => {
        setComment('');
        setIsLoading(true);
        getRequest();
        setFeedback({
          status: false,
          text: '',
          id: '',
        });
      });
  };

  const deleteComment = (id) => {
    axios
      .patch(`http://localhost:8080/items/${params.id}`, {
        comment: product.comment.filter((item) => item.id !== id),
      })
      .then(() => {
        getRequest();
      });
  };
  const [active, setActive] = useState(false);
  const [feedback, setFeedback] = useState({
    text: '',
    status: false,
    id: '',
  });
  return (
    <div className="catalog">
      <div className="catalog__container">
        {isLoading ? (
          <div className="loader__container">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <div className="catalog__header">
              <div
                className="catalog-image"
                style={{
                  backgroundImage: 'url(' + product.imageUrl + ')',
                  width: 854,
                  height: 480,
                }}
              ></div>
              <div className="catalog__content">
                <h1 className="catalog__title">{product.title} </h1>
                <p>
                  <span>Цена:</span> {product.price}$
                </p>
                <p>
                  <span>Пробег:</span> {product.mileage} км
                </p>
                <p>
                  <span>Город:</span> {product.city}
                </p>
                <div className="catalog__creator">
                  <Link
                    style={{ color: '#d4d4d4' }}
                    to={
                      user?.id === product?.creator.id
                        ? '/account/post'
                        : `/anotheraccount/${product?.creator?.id}`
                    }
                  >
                    <div className="creator__col1">
                      <div
                        className="creator__avatar"
                        style={
                          product?.creator?.avatar
                            ? {
                                backgroundImage: 'url(' + product?.creator?.avatar + ')',
                                width: 40,
                                height: 40,
                              }
                            : {
                                backgroundImage:
                                  'url(' +
                                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' +
                                  ')',
                                width: 40,
                                height: 40,
                              }
                        }
                      />
                      {product?.creator?.login ? product?.creator?.login : 'Продавец отсутствует'}
                    </div>
                  </Link>
                  <div className="creator__col2">{product?.creator?.phone}</div>
                </div>
                <div className="catalog__contacts">
                  <button className="btn1">Написать сообщение</button>
                </div>
              </div>
            </div>
            <div className="catalog__main">
              <p>{product.description}</p>
            </div>
            <div className="catalog__footer">
              <div className="catalog__charact">
                <h1>Все характеристики</h1>
                <p>
                  <span>Объем двигателя </span>
                  {product.engine}л
                </p>
                <p>
                  <span>Год выпуска </span> {product.year} год
                </p>
                <p>
                  <span>Рейтинг </span> {product.rating} ★
                </p>
                <p>
                  <span>Привод </span>
                  {product.driveUnit}
                </p>
                <p>
                  <span>Коробка передач </span>
                  {product.transmission}
                </p>
              </div>

              {user.login.length ? (
                <div className="catalog__comments">
                  {!active ? (
                    <div className="comm__add">
                      <p className="comm__title">Комментарии</p>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="comm__text"
                      ></textarea>
                      <button onClick={addComment} className="comm__btn">
                        Добавить
                      </button>
                    </div>
                  ) : (
                    <div className="comm__add">
                      <p className="comm__title">Ответить на комментарий</p>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="comm__text"
                      ></textarea>
                      <button onClick={addComment} className="comm__btn">
                        Ответить
                      </button>
                    </div>
                  )}
                  {feedback.status && (
                    <>
                      <div className="comm__container2">
                        <div
                          className="comm__avatar"
                          style={
                            comment?.feedback?.creator.avatar
                              ? {
                                  backgroundImage: 'url(' + feedback.creator.avatar + ')',
                                  width: 40,
                                  height: 40,
                                }
                              : {
                                  backgroundImage:
                                    'url(' +
                                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' +
                                    ')',
                                  width: 40,
                                  height: 40,
                                }
                          }
                        />
                        <div className="comm__main">
                          <span style={{ margin: '0' }}>Ответ...</span>
                          <p style={{ margin: '5px' }}>{feedback.text}</p>
                        </div>
                        <button
                          onClick={() => {
                            setFeedback({
                              text: '',
                              id: '',
                              status: false,
                            });
                            setActive(false);
                          }}
                          className="comm__deleteanw"
                        >
                          ✖
                        </button>
                      </div>
                    </>
                  )}
                  {product.comment &&
                    product.comment.map((comment) => (
                      <li style={{ listStyleType: 'none' }}>
                        {comment.feedback?.id && (
                          <>
                            <div className="comm__container-answer">
                              <div
                                className="comm__avatar"
                                style={
                                  comment?.feedback?.creator.avatar
                                    ? {
                                        backgroundImage: 'url(' + comment?.feedback.creator.avatar + ')',
                                        width: 40,
                                        height: 40,
                                      }
                                    : {
                                        backgroundImage:
                                          'url(' +
                                          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' +
                                          ')',
                                        width: 40,
                                        height: 40,
                                      }
                                }
                              />
                              <div className="comm__main">
                                <span style={{ margin: '0' }}>Ответ...</span>
                                <p style={{ margin: '5px' }}>{comment.feedback.text}</p>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="comm__container">
                          <div
                            onClick={() => {
                              navigate(
                                user?.id === comment?.creator.id
                                  ? '/account/post'
                                  : `/anotheraccount/${comment.creator.id}`,
                              );
                            }}
                            className="comm__avatar"
                            style={
                              comment?.creator?.avatar
                                ? {
                                    backgroundImage: 'url(' + comment?.creator?.avatar + ')',
                                    width: 80,
                                    height: 80,
                                  }
                                : {
                                    backgroundImage:
                                      'url(' +
                                      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' +
                                      ')',
                                    width: 80,
                                    height: 80,
                                  }
                            }
                          />
                          <div className="comm__main">
                            <span>{comment?.creator?.login}</span>
                            <p>{comment.text}</p>
                            {user?.id === comment?.creator?.id && (
                              <button
                                onClick={() => deleteComment(comment.id)}
                                className="btn-delete"
                              >
                                Удалить
                              </button>
                            )}
                            <button
                              onClick={() => {
                                setActive(!active);
                                setFeedback({
                                  text: comment.text,
                                  status: true,
                                  id: comment.id,
                                });
                              }}
                              className="btn-answer"
                            >
                              Ответить
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              ) : (
                <div style={{ marginTop: '60px', fontSize: '24px' }}>
                  Чтобы смотреть и писать комментарии необходимо{' '}
                  <NavLink to={'/login'} style={{ color: 'red' }}>
                    Ввойти
                  </NavLink>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CatalogItem;
