View the live version of the project -> https://vladsmirnou.github.io/payments-calculator-modal/
\
\
or
\
\
Run via Docker -> \
1 &nbsp;&nbsp; clone the repo \
2 &nbsp;&nbsp; cd to the root of the project \
3 &nbsp;&nbsp; run ```docker image build --tag  payments-calculator-modal .``` \
4 &nbsp;&nbsp; run ```docker container run --rm -d --log-driver none --name payments-calculator-modal --publish 127.0.0.1:3000:3000 payments-calculator-modal``` \
5 &nbsp;&nbsp; navigate to http://127.0.0.1:3000 \
6 &nbsp;&nbsp; stop the container and remove the image if you want \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \- ```docker container stop payments-calculator-modal``` \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \- ```docker image rm payments-calculator-modal```

# Description
Ссылка на тестовое задание: \
https://docs.google.com/document/d/1KL-YOhZHve07XEAJ6BOw2ECGAhQbQPdoui5f4fKgkg4/edit?pli=1&tab=t.0#heading=h.o7n7xngmj1r7

Описание тестового задания: \
Реализация попапа для расчета платежей по кредиту
Описание:
Необходимо сверстать и реализовать всплывающий адаптивный попап, используя React + CSS или препроцессор.
Ссылка на макет:
https://www.figma.com/design/YIHRBDsjmMotlqn7utKikI/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-U2C?node-id=0-1&t=milGcyabZDdttRdl-1

Описание макета: \
Одна кнопка посередине экрана с надписью «Расчет платежей». \ 
Попап с двумя экранами: \
Экран 1: Поле ввода суммы кредита и кнопка "Рассчитать". \
Экран 2: Отображение результатов расчета с выбранными опциями \
Требования к разработке: \
Сверстать адаптивный попап \
Попап должен корректно отображаться на различных устройствах (десктоп, планшет, мобильные устройства). \
Реализовать логику открытия/закрытия попапа \
Попап открывается по нажатию на кнопку «Расчет платежей» и закрывается по нажатию на крестик или вне области попапа. \
Добавить логику расчета платежей \
При нажатии на кнопку "Рассчитать" на первом экране попапа, нужно запросить у пользователя сумму кредита и рассчитать ежемесячный/ежегодный платеж по следующей формуле: \
Ежемесячный платеж=Сумма кредита Количество месяцев \ ​
Количество месяцев — 12(по умолчанию), 24, 36, 48 (в зависимости от тегов на втором экране). \
Отображение результатов \
На втором экране пользователь видит результат расчета, который зависит от выбранного срока кредита (12, 24, 36, 48 месяцев). \
Выводить ежемесячный/ежегодный результат расчета в зависимости от выбора пользователя. По умолчанию выводится ежемесячный. \
Пример расчета: \
Введенная сумма кредита: 240 000 рублей. \
Тег выбран для 24 месяцев. \
Ежемесячный платеж=240000/24=10000 рублей в месяц. \
\
Требования к результату: \
Сверстанный попап должен быть адаптивным. \
Реализована логика открытия/закрытия попапа. \
Присутствует функционал расчета на основе введенной суммы кредита и выбранного срока. \
Для скорости и удобства можно использовать CRA, свою сборку настраивать не нужно. \
Компоненты должны быть созданы с нуля, нельзя использовать готовые компоненты написанные кем то другим :) \
Результаты задания необходимо загрузить на GitHub и предоставить ссылку на проект. \
