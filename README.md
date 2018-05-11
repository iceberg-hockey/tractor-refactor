# tractor-refactor

![tractor-refactor](https://preview.ibb.co/bYhs17/tractor_refactor.png)

### Задание
Этот репозиторий содержит маленький проект веб-приложения. Оно представляет из себя мини-игру, где трактор катается по ограниченному 
прямоугольному полю. Трактор умеет двигаться вперед (W), и поворачиваться по часовой стрелке (Q). Трактор может быть направлен в одну из 
четырех сторон (NORTH, EAST, SOUTH, WEST).
Произведите рефакторинг кода проекта(index.js/tractor.js/index.html). Если обнаружите баги приводящие к unexpected behavior исправьте их.

### Рекомендации

#### Принцип единственной ответственности

При написании кода следуйте **принципу единственной ответственности**. Не создавайте больших/универсальных  файлов/функций/классов.

#### Избегайте "нагромождений"

Избегайте вложенности условных инструкций/циклов/замыканий. Старайтесь использовать декларативный функциональный стиль.

#### DRY

Если какая-то логика повторяется, выносите ее в отдельный метод.

#### Пишите читаемый код

Используйте camelCase нотацию, избегайте антипаттернов, старайтесь писать код наиболее очевидным способом. Если же используете какой-либо неочевидный прием, поясните в комментарии зачем это было сделано, и что он делает.

#### Документация

В комментарии рядом с методом/функцией описывайте смысл аргументов и назначение метода/функции (например в jsdoc стиле). Классы также следует документировать.

#### Тестирование

Напишите тесты для своих классов/функций (можно использовать любой набор библиотек для этого).

### Отправка решения
**Не следует создавать открый репозиторий для публикации решения.** Отправьте свое решение на motin@iceberg.hockey в виде архива. Следующие директории запаковывать **не нужно**:
- node_modules
- sounds
- img


### Установка и запуск

Для установки проекта необходим yarn. Команда:

```
yarn
```


Для запуска проекта необходим Node.JS stable версии. Команда:

```
npm start
```
