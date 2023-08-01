# Cкріншоти виконаного дз.

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

https://i.ibb.co/0CB44zS/2023-08-01-144951.png

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://i.ibb.co/qnPgVW6/2023-08-01-145056.png

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

https://i.ibb.co/crGSv7w/2023-08-01-145515.png

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://i.ibb.co/YZcMJMc/2023-08-01-145346.png