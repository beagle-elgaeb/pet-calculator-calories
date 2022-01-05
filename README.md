# Минималистичный калькулятор калорий

_[Ссылка на приложение](https://beagle-elgaeb.github.io/pet-clculator-calories/ "Приложение")_

<p>
  <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript"><img src="readme/icon-js.svg" alt="JS"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://www.typescriptlang.org/"><img src="readme/icon-ts.svg" alt="TS"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://ru.reactjs.org/"><img src="readme/icon-react.svg" alt="React"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://redux.js.org/"><img src="readme/icon-redux.svg" alt="Redux"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://yarnpkg.com/"><img src="readme/icon-yarn.svg" alt="Yarn"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://webpack.js.org/"><img src="readme/icon-webpack.svg" alt="WebPack"></a>
    <!-- <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://ru.wikipedia.org/wiki/REST"><img src="readme/icon-api.svg" alt="REST API"></a> -->
    <!-- <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://nodejs.org/ru/docs/"><img src="readme/icon-node.svg" alt="NodeJS"></a> -->
    <!-- <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://expressjs.com/ru/"><img src="readme/icon-express.svg" alt="ExpressJS"></a> -->
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://formik.org/"><img src="readme/icon-formik.svg" alt="Formik"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://emotion.sh/docs/introduction"><img src="readme/icon-emotion.svg" alt="Emotion"></a>
    <!-- <img src="readme/icon-whitespace-5px.svg"/> -->
  <!-- <a href="https://www.chartjs.org/"><img src="readme/icon-chart.svg" alt="ChartJs"></a> -->
</p>

### Задачи проекта

Сделать не перегруженный простой в использовании калькулятор потребления и расхода калорий.

## Функциональность получившегося приложения

### Калькулятор пищевой ценности потреблённых продуктов:

- изначально принимает традиционные данные о БЖУ - на 100г;
- можно менять вес, для которого вносятся БЖУ;
- внесённые данные сохраняются в localStorage;
- сохранённые в localStorage данные группируются и отображаются в карточках по дням;
- в каждом дне рассчитывается суммарная пищевая ценность, обображается график, визуализитующий отношение потребления к норме, в текущем дне есть отметка, графически отображающее текущее место дня;
- при необходимости можно отредактировать и удалить запись.

### Форма редактирования профиля:

- принимает биологические параметры пользователя, данные о его уровне активности и целях контроля потребления;
- исходя из принятых данных рассчитывает рекомендуемые нормы потребления.

### Общее:

<!-- - проработан UX (); -->

- [страница размещена на GitHub Pages](https://beagle-elgaeb.github.io/pet-clculator-calories/ "Приложение");
- одностраничное приложение адаптируется в пределах от `320px` до `500px`.

## Возможные улучшения+     

- задокументировать код;
- добавить возможность задавать калораж вручную?;
- добавить рассчёт нормы потребления по другим формулам.

## Директории

- `/src` — рабочая папка проекта;
- `/src/app` — компоненты интерфейса приложения;
- `/src/components` — переиспользуемые компоненты приложения;
- `/src/redux` — менеджер состояний;
- `/src/styles` — переиспользуемые стили;
- `/src/utils` — типизация, схемы валидации, математические расчёты, вспомогательные функции;
- `/readme` — папка с иконками стека;
- остальные директории вспомогательные, создаются при необходимости разработчиком.

## Как использовать

Установка сопутствующих библиотек:  
`yarn`

Сборка приложения:  
`yarn build`

Деплой приложения на GH Pages:  
`yarn deploy`

---

## Связаться со мной

<p>
  <a href="https://t.me/evgevgevge"><img src="readme/icon-tg.svg" alt="Telegram"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="mailto:beagle-elgaeb@ya.ru"><img src="readme/icon-mail.svg" alt="Mail"></a>
    <img src="readme/icon-whitespace-5px.svg"/>
  <a href="https://www.instagram.com/evg._.su/"><img src="readme/icon-inst.svg" alt="Instagram"></a>
</p>
